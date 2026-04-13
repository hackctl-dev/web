# hackctl Web

This repo contains the public `hackctl.dev` website.

## Current Scope

Today the site is a focused landing page for the CLI with:

- install commands for Windows and macOS or Linux
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
