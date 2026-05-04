## ADDED Requirements

### Requirement: Persona 5–inspired color system

The site theme SHALL use a high-contrast **dark field** background with **off-white** primary text and a **dominant crimson accent** for structural emphasis (rules, labels, primary actions), expressed as CSS custom properties so global tuning does not require hunting literals.

#### Scenario: Reader scans long prose

- **WHEN** the visitor reads multi-line paragraphs in story, timeline, or philosophy sections
- **THEN** body text uses the light neutral text color on the dark field, not saturated crimson as the primary fill for small long-form text

#### Scenario: Designer adjusts brand red

- **WHEN** the owner updates the accent token(s) in `:root`
- **THEN** buttons, key borders, and heading accents reflect the new value without changing HTML

### Requirement: Angular / menu-like surfaces

Primary content surfaces (header, timeline cards, interest cards, philosophy quote, and primary buttons) SHALL use **angular framing** (e.g. clipped corners, diagonal edges, or stepped profiles) implemented with CSS such that layout remains stable across viewports.

#### Scenario: User views timeline on a narrow screen

- **WHEN** the viewport is below desktop breakpoints used by the CSS
- **THEN** timeline cards retain readable padding and the angular frame styling without horizontal overflow

### Requirement: Poster-style typographic hierarchy

Headings and navigation labels SHALL present a **strong, graphic hierarchy** (weight, tracking, or case treatment) consistent with the P5-inspired direction, without reducing the semantic outline of the page.

#### Scenario: Screen reader and DOM semantics unchanged

- **WHEN** assistive technology traverses the page
- **THEN** heading levels (`h1`–`h3`) and landmarks remain meaningful; styling changes do not remove or repurpose semantic elements solely for looks

### Requirement: Homage-only assets

The implementation MUST NOT embed ATLUS or *Persona* **logos**, **character artwork**, or **ripped game UI textures**. Decorative motifs SHALL be **original** CSS or SVG patterns created for this site.

#### Scenario: Repository audit

- **WHEN** a reviewer inspects `index.html`, `assets/css/main.css`, and `assets/js/main.js`
- **THEN** no image or font file is a direct copy of franchise-owned marketing art bundled as an asset for this rebrand

### Requirement: Motion compatibility preserved

Scroll-reveal and hover interactions SHALL remain compatible with the **`prefers-reduced-motion`** media query and the existing noscript visibility strategy for `.reveal` content.

#### Scenario: Reduced motion is on

- **WHEN** the user agent reports `prefers-reduced-motion: reduce`
- **THEN** decorative motion that translates or scales interactive surfaces is suppressed per stylesheet rules while content stays readable and navigable
