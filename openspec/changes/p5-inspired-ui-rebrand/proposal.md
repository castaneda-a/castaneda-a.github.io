## Why

The site already works, but its visual language reads as a generic “neon on navy” dark theme. Rebranding around a **Persona 5–inspired** look (ATLUS) gives a sharper, more memorable identity that matches your interest in games—without changing the static architecture or how you edit copy.

## What Changes

- Replace the current **color system and decorative chrome** with a high-contrast palette and shapes evoking P5-style UI: **deep black fields**, **paper-white/cream text**, **bold crimson accents**, and **angular / cut-corner** panels reminiscent of that menu aesthetic.
- Update **typography treatment** (weights, tracking, heading styles, possibly font pairing) so headings and section labels feel closer to that **graphic, poster-like** UI language.
- Refine **components** (header/nav, buttons, timeline cards, interest cards, philosophy block, footer) to use the new frames, borders, and hover motion—keeping existing section structure and HTML semantics.
- Introduce **optional lightweight patterns** (e.g. subtle star/shape motifs, diagonal edges) using **CSS-only** graphics (no copyrighted ATLUS artwork or logo reproduction).
- **Motion** remains, adjusted to fit the new style (sharp cuts / quick ease where appropriate); **`prefers-reduced-motion`** and **noscript** behavior stay intact.

## Capabilities

### New Capabilities

- `p5-inspired-theme`: Requirements for the Persona 5–inspired **visual identity** (palette, shapes, component styling, motion conventions) on the existing single-page personal site.

### Modified Capabilities

- None at `openspec/specs/` today (no archived baseline specs in-repo). Behavioral expectations that overlap the earlier personal-site work are superseded in practice by the new theme spec for this change.

## Impact

- Primary: `assets/css/main.css` (tokens, components, backgrounds).
- Secondary: `index.html` only if extra wrapper elements or class hooks are needed for frames (prefer CSS-only changes).
- Optional: `assets/js/main.js` if animation classes or selectors change in lockstep with HTML.
- Legal/safety: **Homage styling only**—no ATLUS or Persona logos, character art, or ripped UI assets in the repository.
