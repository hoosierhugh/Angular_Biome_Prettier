# Angular (22+) + Biome + Prettier Set Up

If you want to avoid ESLint hell, this is a working setup for Angular 22+ projects that uses Biome for linting/formatting TS/JS/JSON/CSS and Prettier for formatting HTML templates.

## Why Biome + Prettier?

Split by file type — each tool owns different files, no overlap:

Biome (biome.json) — handles .ts/.js/.json/.css:

Formatting: single quotes, 100-char line width, 2-space indent, trailing commas, always-semicolons (matches the project's old Prettier style)
Linting: recommended rule set
Import organizing on save/check
Explicitly disabled for **/*.html via an override
Prettier (.prettierrc + .prettierignore) — handles .html only:

Uses the angular parser so it understands Angular template syntax (*ngIf, @if/@for, bindings, interpolation) that Biome's HTML formatter doesn't parse correctly
.prettierignore blocks it from touching anything else (* then !**/*.html)
Scripts in package.json:

lint / lint:fix — Biome lint
format — Biome format + Prettier (in sequence) → covers the whole codebase
format:check — same, non-destructive check mode
check — Biome's combined lint+format+import-organize in one pass
Editor integration (.vscode/settings.json): Biome is the default formatter; .html files are routed to Prettier specifically. Format-on-save is on for both.

Why split instead of one tool: Biome is fast and covers TS/JS/JSON/CSS well, but has no Angular-template awareness — Prettier remains the only option there.
