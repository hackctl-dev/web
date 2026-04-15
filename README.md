# hackctl Web

This repo contains the public `hackctl.dev` website.

## Install Scripts

The site hosts the official installers used to fetch the latest CLI release from `hackctl-dev/cli`.

Supported release platforms:

- Windows x64
- macOS Intel
- macOS Apple Silicon
- Linux x64
- Linux ARM64

Windows x64:

```powershell
irm https://hackctl.dev/install.ps1 | iex
```

macOS Intel and Apple Silicon:

```bash
curl -fsSL https://hackctl.dev/install.sh | sh
```

Linux x64 and ARM64:

```bash
curl -fsSL https://hackctl.dev/install.sh | sh
```

## Current Scope

Today the site is a focused landing page for the CLI with:

- install commands for all currently shipped CLI platforms
- the three-command workflow: `create`, `start`, `share`
- hosted installer scripts in `public/install.sh` and `public/install.ps1`

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Important Files

- `app/page.tsx` - landing page
- `app/layout.tsx` - metadata, fonts, and Umami analytics
- `public/install.sh` - Unix installer for GitHub release assets
- `public/install.ps1` - Windows installer for GitHub release assets
- `public/schemas/hackctl.config.v1.json` - JSON schema served at `/schemas/hackctl.config.v1.json`
- `AGENTS.md` - repo-specific agent guidance

## Development

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run start
npm run lint
```

## Notes

- This repo currently contains a single landing page, not a full docs or product site.
- Installer scripts expect release assets from `hackctl-dev/cli`.
- Broader docs, SEO, legal pages, and additional routes are still future work.
