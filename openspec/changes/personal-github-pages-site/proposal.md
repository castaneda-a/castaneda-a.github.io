## Why

The repository powers a GitHub Pages user site but had no shipped site content. A single-page personal presence is needed: casual tone, English copy authored manually in HTML, and a cohesive dark visual identity with light motion—without a complex build pipeline.

## What Changes

- Add a **static single-page site** served from the repository root (GitHub Pages default) with semantic sections: introduction, narrative CV timeline, interests, philosophy, and footer links.
- Add **styling** for a dark theme (background hierarchy, accent colors, typography via web fonts), responsive layout, and subtle **ambient background** (grid/glow) that stays performant.
- Add **motion**: scroll-triggered section reveals, hover feedback on interactive elements, and **reduced-motion** and **noscript** fallbacks so content remains usable.
- Establish **conventions** for where the owner edits copy (`index.html`) versus presentation (`assets/css`, `assets/js`).
- No server-side features, no user accounts, and no build step required for publishing.

## Capabilities

### New Capabilities

- `personal-site`: End-user experience and quality bar for the public GitHub Pages site—information architecture, visual design system, motion behavior, accessibility expectations, and deployment assumptions (static root).

### Modified Capabilities

- None (no existing capability specs in `openspec/specs/`).

## Impact

- Repository root: `index.html` (content and structure).
- Static assets: `assets/css/main.css`, `assets/js/main.js`.
- GitHub Pages: publish from default branch root; optional future additions (404 page, `CNAME`, Actions) are out of scope unless separately proposed.
- External dependency: Google Fonts CDN for typography (network at runtime).
