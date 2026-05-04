## Context

The personal site is a **static** `index.html` + `assets/css/main.css` + `assets/js/main.js` deployment on GitHub Pages. The current theme uses a cool dark navy, mint, and magenta glow. The owner wants a **rebrand**: visual language **inspired by** *Persona 5* (ATLUS)—bold rouge / black / off-white, high graphic contrast, “menu UI” energy—implemented with **original CSS** and **no proprietary art**.

## Goals / Non-Goals

**Goals:**

- Re-theme CSS variables and component styles to a **P5-adjacent palette** and **angular frame** language (cut corners, diagonal separators, star-like accents as pure CSS/SVG-background patterns where useful).
- Keep **semantics and copy workflow** unchanged: owner still edits prose in HTML; JS continues to provide scroll reveals and reduced-motion handling.
- Preserve **accessibility**: focus states visible, skip link usable, sufficient contrast for body text (use off-white on black; reserve saturated red for accents, headings, and large UI—not long-form body at tiny sizes unless contrast-checked).
- Remain **CDN-font practical** (Google Fonts or system) with a pairing that reads “poster / UI” for headings and clean for body.

**Non-Goals:**

- Importing or tracing **ATLUS** logos, Persona marks, character silhouettes, or game UI bitmaps.
- Rebuilding content structure unless a minimal hook is **required** for a frame wrapper.
- Adding React, bundlers, or a design-token build pipeline.

## Decisions

1. **Palette (initial targets; tune during implementation)**  
   - **Field black**: `#060606`–`#0b0b0b`  
   - **Paper text**: `#f4f1ea` (primary), muted `#b8b5ad`  
   - **P5 red accent**: `#e12d34`–`#ff2d2d` range for strokes, labels, key CTAs  
   - **Highlight** (optional sparks / secondary accent): `#f7e034` or soft gold for small details only  
   **Rationale:** Matches the game’s poster-like contrast without mint/magenta from the old theme. **Alternative:** purple accent (P5 Royal)—skipped unless owner asks; red reads more iconic P5 core.

2. **Shape language**  
   Use **`clip-path` polygons** and **thick border-left** or pseudo-element ribbons for cards/timeline—evoking dialogue boxes and menu tiles. **Alternative:** skew transforms—can cause blur on some GPUs; use sparingly.

3. **Typography**  
   Pair a **condensed / strong** display face for hero and section titles (e.g. **Oswald** or **Bebas Neue** via Google Fonts) with a **neutral grotesk** for body (existing **DM Sans** or **Source Sans 3**). **Rationale:** P5 leans on heavy all-caps labels; we mimic *style*, not a font copy. **Alternative:** single-family only—faster but weaker “menu” feel.

4. **Background treatment**  
   Replace soft mint/pink glows with **subtle repeating diagonals** + **sparse starburst** CSS (radial gradients or tiny inline SVG data-URI). Keeps motion-free readability.

5. **Buttons and nav**  
   **CTA**: solid red fill + black or white label (contrast-checked); **ghost**: red outline on black. Hover: quick **translate / clip nudge** (already motion system); respect reduced-motion.

6. **Implementation surface**  
   Prefer **one primary file** `main.css` with tokens at `:root`. Add BEM-like or existing class names only—not rewrite all HTML unless necessary.

## Risks / Trade-offs

- **[Risk] WCAG on pure red body text** → **Mitigation:** use red for headings, borders, and buttons; body stays cream/off-white.
- **[Risk] “Persona” reads as tacky or dated** → **Mitigation:** restraint—one motif (angles + red) > clutter of every gag effect.
- **[Risk] `clip-path` on large areas hurts low-end devices** → **Mitigation:** clip cards, not entire viewport; test scroll jank.
- **[Legal]** → **Mitigation:** no franchise assets; document “inspired-by” only in internal changelogs if needed, not as public trademark claim.

## Migration Plan

1. Implement CSS rebrand behind the existing file paths (`assets/css/main.css`).
2. Adjust font `<link>` in `index.html` if the font stack changes.
3. Visual regression: compare all sections (hero, timeline, cards, philosophy, footer) at mobile + desktop.
4. Rollback: revert the single commit touching CSS/HTML, or restore previous `main.css` from history.

## Open Questions

- Whether to add a **favicon** in the same palette (separate small change).
- Whether **all-caps** section titles are desired sitewide (strong P5 vibe vs. readability for long titles).
