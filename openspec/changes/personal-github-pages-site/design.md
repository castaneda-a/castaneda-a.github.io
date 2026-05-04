## Context

The repository `castaneda-a.github.io` is intended to publish a **GitHub Pages user site** from the default branch root. Prior to this change, the repo contained tooling scaffolding but no visitor-facing pages. The owner authors **all narrative copy directly in HTML**; the implementation focuses on layout, visual design, motion, and static delivery.

Constraints:

- **No application server** and no build-time bundler required for the baseline (plain static files).
- **English** as the primary language (`lang="en"`).
- Target audience: casual visitors (friends, recruiters, curious readers); tone is informal.

## Goals / Non-Goals

**Goals:**

- Ship a **single-page** experience with clear sections and in-page navigation.
- Provide a **dark theme** with readable contrast and a distinct but restrained accent palette.
- Add **motion** that reinforces hierarchy (scroll reveals, hover states) without blocking reading.
- Honor **`prefers-reduced-motion`** and remain readable if **JavaScript fails** (noscript / graceful behavior).
- Keep assets organized (`assets/css`, `assets/js`) and copy centralized in `index.html`.

**Non-Goals:**

- CMS, Markdown-to-HTML pipeline, or templating engine (Jekyll/Eleventy) for this change.
- Blog, comments, analytics, or authentication.
- Full design system documentation beyond what the CSS documents implicitly.
- Hosting outside GitHub Pages or custom domain setup (optional follow-up).

## Decisions

1. **Static HTML + CSS + minimal JS**  
   **Rationale:** Smallest deploy surface for GitHub Pages; owner edits copy in one file. **Alternatives considered:** Jekyll (extra conventions, Ruby); Astro/Vite (build step and CI).

2. **Scroll reveal via `IntersectionObserver`**  
   **Rationale:** Animates only visible content; easy to gate behind `prefers-reduced-motion`. **Alternatives considered:** CSS-only `@scroll-timeline` (support still uneven); heavy animation libraries (unnecessary weight).

3. **Google Fonts (DM Sans + JetBrains Mono)**  
   **Rationale:** Clear typographic personality without self-hosting font files in-repo. **Alternatives considered:** System font stack only (less distinctive); self-hosted WOFF2 (fewer third-party requests but more repo binary maintenance).

4. **CSS custom properties for theming**  
   **Rationale:** Single place to tune accents and backgrounds when the owner refines “vibe.” **Alternative:** SCSS (adds build).

5. **Narrative CV as vertical timeline**  
   **Rationale:** Supports non-linear, conversational entries without rigid résumé tables. **Alternative:** Card grid only (less “story over time”).

## Risks / Trade-offs

- **[Risk] Third-party font CDN blocked or slow** → **Mitigation:** System fallbacks in `font-family`; optional future task to self-host fonts.
- **[Risk] `opacity: 0` on `.reveal` before JS runs** → **Mitigation:** `<noscript>` CSS forces visible state; reduced-motion path shows content immediately in JS.
- **[Risk] Over-animation** → **Mitigation:** Keep motion subtle; respect `prefers-reduced-motion`; unobserve elements after reveal to limit work.

## Migration Plan

1. Push `index.html` and `assets/**` to the default branch of the GitHub repo backing `castaneda-a.github.io`.
2. In repository **Settings → Pages**, confirm source is the same branch and **/ (root)**.
3. Verify the live URL after propagation (can take a minute).
4. Rollback: revert the commit or restore previous tree; no database or shared state.

## Open Questions

- Whether to add `favicon.ico` / `apple-touch-icon` and social preview meta tags in a follow-up change.
- Whether to introduce a `404.html` for GitHub Pages custom not-found behavior.
