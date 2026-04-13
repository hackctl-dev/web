<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Web Agent Guide

This repo powers `hackctl.dev`.

## Scope

The current implementation is intentionally small:

- a single landing page in `app/page.tsx`
- a root layout in `app/layout.tsx`
- installer scripts in `public/install.sh` and `public/install.ps1`

Do not describe the site as having a docs portal, product dashboard, or multiple marketing sections unless you add them.

## Working Rules

- Preserve the existing install flow and release asset naming contract with `../cli/`.
- Keep the landing page lightweight unless a task clearly requires more client-side behavior.
- Maintain mobile and desktop usability.
- Prefer changes that keep copy, layout, and installer messaging aligned.
- If you touch framework-level behavior, read the local Next.js docs shipped in `node_modules/next/dist/docs/` first.

## Verification

Use repo-local checks:

- `npm run lint`
- `npm run build`

If you change installer scripts, verify asset naming assumptions against the CLI release workflow.
