# Workbench CSS containment

10 November 2026 — Codex (night shift), brief #406; serves R-182.

The workbench stylesheet had page-wide `body`, `main` and `article` rules, plus generic `.workbench-example` and `.backdrop-swatch` rules. These could affect matching elements if the stylesheet were reused or loaded alongside the Lite review examples. The workbench page now has a `workbench-page` body class, and each rule is scoped beneath it. The main layout rule also targets only its direct child `main`.

## Selectors inspected

- Workbench references: `body`, `main`, `article`, `.workbench-example`, `.backdrop-swatch`.
- Lite review examples: `body`, `main`, `section > .sb-nav`, `.lite-example--styled` and descendants, `.workbench-grid`, `.workbench-grid article`, `.workbench-example`, `.backdrop-swatch`.
- Candidate runtime CSS: navbar roots `[data-mwp-navbar]`, their inner/panel/item/backdrop hooks, state selectors including `[data-state]` and native `[open]`, and the scroll-lock rule `html[data-mwp-scroll-locked=true] body`.

The workbench's `sb-nav` and runtime hooks are intentional sample markup. Its authoring CSS is now limited to elements under `.workbench-page`; no runtime, generated delivery, or released CSS was changed. This is a selector/source review only, not a browser rendering check.
