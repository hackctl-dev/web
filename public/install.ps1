param(
  [string]$Version = $env:HACKCTL_VERSION,
  [string]$InstallDir = $env:HACKCTL_INSTALL_DIR,
  [string]$Repo = "hackctl-dev/cli"
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

function Fail {
  param([string]$Message)
  throw "hackctl installer: $Message"
}

function Write-Info {
  param([string]$Message)
  Write-Host "[hackctl] $Message"
}

function Get-PlatformArch {
  $arch = $env:PROCESSOR_ARCHITEW6432
  if (-not $arch) {
    $arch = $env:PROCESSOR_ARCHITECTURE
  }

  switch ($arch.ToUpperInvariant()) {
    "AMD64" { return "amd64" }
    "ARM64" { return "arm64" }
    default { Fail "unsupported architecture: $arch" }
  }
}

function Resolve-Version {
  param(
    [string]$Repository,
    [string]$Requested
  )

  if ($Requested) {
    return $Requested
  }

  $latestUrl = "https://api.github.com/repos/$Repository/releases/latest"
  $release = Invoke-RestMethod -Uri $latestUrl
  if (-not $release.tag_name) {
    Fail "failed to resolve latest release version"
  }

  return [string]$release.tag_name
}

function Get-ExpectedChecksum {
  param(
    [string]$ChecksumFile,
    [string]$AssetName
  )

  $line = Get-Content -Path $ChecksumFile | Where-Object {
    $_ -match "\s\*?$([regex]::Escape($AssetName))$"
  } | Select-Object -First 1

  if (-not $line) {
    Fail "could not find checksum entry for $AssetName"
  }

  $parts = $line -split "\s+"
  if ($parts.Count -lt 1) {
    Fail "invalid checksum format"
  }

  return $parts[0].ToLowerInvariant()
}

if ($env:OS -ne "Windows_NT") {
  Fail "this installer is for Windows. Use install.sh for Linux/macOS"
}

if (-not $InstallDir) {
  $InstallDir = Join-Path $env:LOCALAPPDATA "Programs\hackctl\bin"
}

$arch = Get-PlatformArch
$resolvedVersion = Resolve-Version -Repository $Repo -Requested $Version
$assetName = "hackctl_windows_${arch}.zip"
$releaseBase = "https://github.com/$Repo/releases/download/$resolvedVersion"

$tempDir = Join-Path $env:TEMP ("hackctl-install-" + [Guid]::NewGuid().ToString("N"))
New-Item -Path $tempDir -ItemType Directory | Out-Null

try {
  $archivePath = Join-Path $tempDir $assetName
  $checksumsPath = Join-Path $tempDir "checksums.txt"
  $extractDir = Join-Path $tempDir "extract"

  Write-Info "Installing hackctl $resolvedVersion for windows/$arch"

  Invoke-WebRequest -Uri "$releaseBase/$assetName" -OutFile $archivePath
  Invoke-WebRequest -Uri "$releaseBase/checksums.txt" -OutFile $checksumsPath

  $expectedChecksum = Get-ExpectedChecksum -ChecksumFile $checksumsPath -AssetName $assetName
  $actualChecksum = (Get-FileHash -Algorithm SHA256 -Path $archivePath).Hash.ToLowerInvariant()
  if ($actualChecksum -ne $expectedChecksum) {
    Fail "checksum verification failed"
  }

  Expand-Archive -Path $archivePath -DestinationPath $extractDir -Force
  $binaryPath = Join-Path $extractDir "hackctl.exe"
  if (-not (Test-Path -Path $binaryPath)) {
    Fail "archive is missing hackctl.exe"
  }

  New-Item -Path $InstallDir -ItemType Directory -Force | Out-Null
  $targetPath = Join-Path $InstallDir "hackctl.exe"
  Copy-Item -Path $binaryPath -Destination $targetPath -Force

  $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
  if (-not $userPath) {
    $userPath = ""
  }

  $pathUpdated = $false
  $userPathEntries = $userPath.Split(";", [System.StringSplitOptions]::RemoveEmptyEntries)
  if ($userPathEntries -notcontains $InstallDir) {
    $newPath = if ($userPath) {
      $userPath.TrimEnd(";") + ";" + $InstallDir
    } else {
      $InstallDir
    }

    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    $pathUpdated = $true
  }

  $sessionPathEntries = $env:Path.Split(";", [System.StringSplitOptions]::RemoveEmptyEntries)
  if ($sessionPathEntries -notcontains $InstallDir) {
    $env:Path = "$InstallDir;$env:Path"
  }

  Write-Info "Installed binary: $targetPath"
  try {
    $versionOutput = & $targetPath --version
    if ($versionOutput) {
      Write-Info "Installed version: $versionOutput"
    }
  } catch {
    Write-Info "Binary installed, but version check failed: $($_.Exception.Message)"
  }

  if ($pathUpdated) {
    Write-Info "Added to user PATH: $InstallDir"
    Write-Info "Open a new terminal to use 'hackctl' directly."
  }

  Write-Info "Done. Run: hackctl --version"
} finally {
  Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
}
