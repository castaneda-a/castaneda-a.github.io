## 1. Tokens and global canvas

- [x] 1.1 Replace `:root` palette in `assets/css/main.css` with P5-inspired field black, off-white text, crimson accent, and optional gold highlight per `design.md`; remove obsolete mint/magenta-led glow variables.
- [x] 1.2 Redefine `.bg-grid`, `.bg-glow`, and related layers as diagonal/starlite-style **CSS-only** backgrounds (no franchise images).

## 2. Typography and header chrome

- [x] 2.1 Update `index.html` font imports for heading/body pairing decided in design (e.g. Oswald or Bebas + DM Sans); adjust `link`/`preconnect` as needed.
- [x] 2.2 Restyle `.site-header`, `.logo`, and `.nav` with angular framing, red accent rules, and poster-like labels while preserving skip link and focus visibility.

## 3. Hero, actions, and prose

- [x] 3.1 Rebuild `.hero`, `.eyebrow`, `.hero__name`, and `.btn` variants for the new palette and clip-path / border treatments; verify contrast on CTA text.
- [x] 3.2 Tune `.prose`, `.inline-code`, and link colors for the cream-on-black reading experience.

## 4. Sections: timeline and cards

- [x] 4.1 Restyle `.timeline` spine, `.timeline__card`, and markers with angular panels and crimson geometry (clip-path or borders).
- [x] 4.2 Restyle `.card` grid with P5-like tiles, hover motion that still respects `prefers-reduced-motion`.

## 5. Philosophy and footer

- [x] 5.1 Replace `.philosophy` blockquote styling with angular frame and accent ribbon consistent with other surfaces.
- [x] 5.2 Update `.site-footer` link colors and dividers for the new scheme.

## 6. Motion, QA, and constraints

- [x] 6.1 Reconcile `.reveal` transitions with the new aesthetic; confirm `assets/js/main.js` selectors still match `[data-reveal]` / `.is-visible` and `<noscript>` fallback remains valid.
- [x] 6.2 Manual pass: mobile/desktop, keyboard focus rings, reduced-motion mode, and **no third-party franchise assets** in repo.
