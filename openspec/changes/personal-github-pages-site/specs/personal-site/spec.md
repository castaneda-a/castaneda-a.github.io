## ADDED Requirements

### Requirement: Single-page structure and navigation

The site SHALL be published as a single primary HTML document at the repository root suitable for GitHub Pages, with a main landmark and distinct sections reachable via in-page links.

#### Scenario: Visitor uses primary navigation

- **WHEN** the visitor activates a navigation link targeting a section id (e.g. `#work`)
- **THEN** the browser focuses or scrolls to that section without a full page reload

#### Scenario: Keyboard user skips repeated chrome

- **WHEN** the visitor activates the skip link
- **THEN** focus moves to the main content landmark

### Requirement: Dark visual theme

The default presentation SHALL use a dark color scheme with sufficient contrast for body text and interactive elements, expressed primarily through CSS variables.

#### Scenario: Visitor reads long prose

- **WHEN** the visitor reads paragraph text in any section
- **THEN** body copy uses a muted-on-dark treatment with readable line length constraints via layout/CSS

### Requirement: Motion and reduced motion

When motion is enabled, sections marked for reveal SHALL animate into view once they intersect the viewport. When the user prefers reduced motion, those animations SHALL not hide content or rely on motion for understanding.

#### Scenario: User prefers reduced motion

- **WHEN** the user agent reports `prefers-reduced-motion: reduce`
- **THEN** scroll-reveal elements are shown without translate-based reveal animation and hover transforms that materially move content are suppressed per stylesheet rules

#### Scenario: JavaScript unavailable

- **WHEN** scripts do not execute (disabled or blocked)
- **THEN** all `.reveal` content remains visible without requiring JavaScript to set visibility

### Requirement: Narrative CV and interest sections

The page SHALL include a non-tabular “work over time” presentation (timeline) and a grid of interest topics, both editable by replacing HTML text and repeating/removing blocks—without requiring a build step.

#### Scenario: Owner extends timeline

- **WHEN** the owner duplicates a timeline list item block and edits its text
- **THEN** the new entry participates in the same visual timeline styling without CSS changes

### Requirement: Static deployment to GitHub Pages

The shipped artifacts SHALL consist of static files only (HTML, CSS, JS) resolvable by relative paths from `index.html`, requiring no server-side rendering at request time.

#### Scenario: GitHub Pages serves the site

- **WHEN** GitHub Pages serves the default branch root
- **THEN** requesting `/` returns the primary HTML document and linked `assets/css/main.css` and `assets/js/main.js` load with HTTP success under normal configuration
