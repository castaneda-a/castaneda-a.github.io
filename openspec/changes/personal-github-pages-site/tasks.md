## 1. Document shell and semantics

- [x] 1.1 Add `index.html` at repo root with `lang="en"`, document title and meta description placeholders, linked CSS/JS, `<main>` landmark, sticky header with in-page nav targets, and a skip link to `#main`.
- [x] 1.2 Add section scaffolding: hero, story, narrative CV timeline (`<ol>`), interests grid (`<article>` cards), philosophy blockquote, footer links.

## 2. Visual system (dark theme)

- [x] 2.1 Add `assets/css/main.css` with `:root` tokens (dark backgrounds, text, accents), base typography (including web font links in HTML if used), prose styles, and responsive spacing.
- [x] 2.2 Implement timeline and card components with hover/focus styles consistent with the dark theme and without relying on motion alone for affordance.

## 3. Motion, performance, and resilience

- [x] 3.1 Add `assets/js/main.js` using `IntersectionObserver` to toggle `is-visible` on `[data-reveal]` nodes; unobserve after reveal; match selectors used in HTML/CSS.
- [x] 3.2 Gate transforms/animations under `@media (prefers-reduced-motion: reduce)` so content is never stuck invisible for reduced-motion users.
- [x] 3.3 Add `<noscript>` rules (or equivalent) so `.reveal` content is visible when JavaScript does not run.

## 4. Ship and verify

- [ ] 4.1 Confirm GitHub Pages settings use the same branch and `/ (root)`; load the live site and verify CSS/JS resolve with 200 responses.
- [ ] 4.2 Smoke-test keyboard navigation (skip link, tab order), scroll-to-section links, and hover states on a narrow and wide viewport.

## 5. Owner content (manual)

- [ ] 5.1 Replace placeholder copy in `index.html` (hero, story, timeline entries, interests, philosophy, footer) with real English text and correct links.
