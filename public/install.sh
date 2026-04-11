#!/usr/bin/env sh
set -eu

REPO="hackctl-dev/cli"
VERSION="${HACKCTL_VERSION:-}"
INSTALL_DIR="${HACKCTL_INSTALL_DIR:-$HOME/.local/bin}"

die() {
  printf "hackctl installer: %s\n" "$1" >&2
  exit 1
}

has_cmd() {
  command -v "$1" >/dev/null 2>&1
}

usage() {
  cat <<'EOF'
Usage: install.sh [options]

Options:
  --version <tag>      Install a specific release tag (for example: v0.1.0)
  --install-dir <dir>  Install directory (default: $HOME/.local/bin)
  --repo <owner/repo>  GitHub repository (default: hackctl-dev/cli)
  -h, --help           Show this help message

Environment variables:
  HACKCTL_VERSION      Same as --version
  HACKCTL_INSTALL_DIR  Same as --install-dir

Examples:
  curl -fsSL https://hackctl.dev/install.sh | sh
  curl -fsSL https://hackctl.dev/install.sh | sh -s -- --version v0.1.0
EOF
}

download() {
  url="$1"
  destination="$2"

  if has_cmd curl; then
    curl -fsSL "$url" -o "$destination"
    return
  fi

  if has_cmd wget; then
    wget -qO "$destination" "$url"
    return
  fi

  die "curl or wget is required"
}

sha256_file() {
  file_path="$1"

  if has_cmd sha256sum; then
    sha256sum "$file_path" | awk '{print $1}'
    return
  fi

  if has_cmd shasum; then
    shasum -a 256 "$file_path" | awk '{print $1}'
    return
  fi

  if has_cmd openssl; then
    openssl dgst -sha256 "$file_path" | awk '{print $NF}'
    return
  fi

  die "no SHA-256 utility found (need sha256sum, shasum, or openssl)"
}

resolve_latest_version() {
  output_file="$1"
  api_url="https://api.github.com/repos/${REPO}/releases/latest"

  download "$api_url" "$output_file"

  latest_tag=$(awk -F'"' '/"tag_name"[[:space:]]*:/ {print $4; exit}' "$output_file")
  if [ -z "$latest_tag" ]; then
    die "failed to resolve latest release version from GitHub"
  fi

  printf "%s" "$latest_tag"
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --version)
      [ "$#" -ge 2 ] || die "--version requires a value"
      VERSION="$2"
      shift 2
      ;;
    --install-dir)
      [ "$#" -ge 2 ] || die "--install-dir requires a value"
      INSTALL_DIR="$2"
      shift 2
      ;;
    --repo)
      [ "$#" -ge 2 ] || die "--repo requires a value"
      REPO="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      die "unknown option: $1"
      ;;
  esac
done

os_name_raw=$(uname -s 2>/dev/null || printf "")
os_name=$(printf "%s" "$os_name_raw" | tr '[:upper:]' '[:lower:]')

case "$os_name" in
  linux*)
    platform_os="linux"
    ;;
  darwin*)
    platform_os="darwin"
    ;;
  msys*|mingw*|cygwin*)
    die "Windows detected. Use PowerShell: irm https://hackctl.dev/install.ps1 | iex"
    ;;
  *)
    die "unsupported operating system: ${os_name_raw}"
    ;;
esac

arch_name=$(uname -m 2>/dev/null || printf "")
case "$arch_name" in
  x86_64|amd64)
    platform_arch="amd64"
    ;;
  arm64|aarch64)
    platform_arch="arm64"
    ;;
  *)
    die "unsupported architecture: ${arch_name}"
    ;;
esac

if [ -z "$VERSION" ]; then
  temp_version_file=$(mktemp 2>/dev/null || mktemp -t hackctl-version)
  trap 'rm -f "$temp_version_file"' EXIT INT TERM
  VERSION=$(resolve_latest_version "$temp_version_file")
  rm -f "$temp_version_file"
  trap - EXIT INT TERM
fi

tmp_dir=$(mktemp -d 2>/dev/null || mktemp -d -t hackctl-install)
trap 'rm -rf "$tmp_dir"' EXIT INT TERM

asset_name="hackctl_${platform_os}_${platform_arch}.tar.gz"
release_base="https://github.com/${REPO}/releases/download/${VERSION}"
archive_path="${tmp_dir}/${asset_name}"
checksum_path="${tmp_dir}/checksums.txt"

printf "Installing hackctl %s for %s/%s\n" "$VERSION" "$platform_os" "$platform_arch"

download "${release_base}/${asset_name}" "$archive_path"
download "${release_base}/checksums.txt" "$checksum_path"

expected_sum=$(awk -v file="$asset_name" '$2 == file || $2 == "*" file {print $1; exit}' "$checksum_path")
if [ -z "$expected_sum" ]; then
  die "failed to find checksum for ${asset_name}"
fi

actual_sum=$(sha256_file "$archive_path")
if [ "$actual_sum" != "$expected_sum" ]; then
  die "checksum verification failed"
fi

extract_dir="${tmp_dir}/extract"
mkdir -p "$extract_dir"
tar -xzf "$archive_path" -C "$extract_dir"

binary_path="${extract_dir}/hackctl"
[ -f "$binary_path" ] || die "archive is missing hackctl binary"

mkdir -p "$INSTALL_DIR"
target_path="${INSTALL_DIR}/hackctl"
cp "$binary_path" "$target_path"
chmod +x "$target_path"

printf "Installed binary: %s\n" "$target_path"
if "$target_path" --version >/dev/null 2>&1; then
  printf "%s\n" "Installed version: $($target_path --version)"
fi

case ":$PATH:" in
  *":$INSTALL_DIR:"*)
    ;;
  *)
    printf "\nAdd this directory to PATH if needed:\n"
    printf "  export PATH=\"%s:\$PATH\"\n" "$INSTALL_DIR"
    ;;
esac

printf "\nDone. Run: hackctl --version\n"
