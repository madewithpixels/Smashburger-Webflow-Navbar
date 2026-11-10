# Runtime class styling-hook audit — 10 November 2026

Scope: maintained runtime source (`src/`) and its checked-in candidate delivery copies. This is a local selector audit; it does not inspect Webflow style records or establish rendered behaviour.

## Findings

- **Structure — `.sb-nav-inner`** (`src/navbar-light.css:26`; same rule in `candidate/dist/navbar-light.css:20` and the generated candidate Embed). It supplies relative positioning and stacking to the inner wrapper. The selector is scoped beneath `[data-mwp-navbar]`; the source also has the equivalent `data-mwp-inner` hook at `src/navbar-light.css:33`. It is not a menu state hook. **R-268 overlap:** no direct overlap with the incident's three names, but it remains a class-based style target and the same-name Webflow-record ambiguity principle applies if an agent writes to that class by display name.

- **Structure / open-state visibility — `.sb-nav-submenu-list`** (`src/navbar-light.css:100–105`; same selectors in generated CSS and candidate Embed). The class selects the submenu list for grid layout and hides it while its parent `[data-mwp-submenu]` is closed; the state itself is the native `[open]` attribute. **R-268 overlap:** it is not one of the incident names and is not itself a class-based state hook. A future agent style write to a same-named Webflow record could still be ambiguous; the runtime rule does not demonstrate that failure.

- **Structure fallback — `.sb-nav-panel`** (`src/navbar-light.js:133`; mirrored in the candidate runtime JS and Embed). JavaScript uses this as a fallback when locating the panel, after the `[data-mwp-panel]` hook. It does not determine open/closed state. **R-268 overlap:** not one of the incident names; the fallback could keep a legacy class dependency alive, but the duplicate-record incident concerned style writes, not runtime element lookup.

- **Designer structure — `.w-embed`** (`src/navbar-light-canvas.css:65`; copied into `candidate/webflow/navbar-light-canvas-embed.html`). This hides direct-child Webflow Code Embed placeholders only in Designer mode, scoped under the navbar root. It is a presentation/authoring aid, not runtime menu behavior. **R-268 overlap:** no overlap with the three incident classes; it uses Webflow's standard embed class and is not a menu style-record target recorded in the incident.

The inspected runtime class selectors do not include `mwp-css-nav_panel`, `mwp-css-nav_link` or `mwp-css-nav_contacts`. Runtime state rules use data attributes and the native `open` attribute. The R-268 incident remains a distinct agent-write targeting risk: the local and imported style records had identical display names, name-based writes hit imported IDs, and name-based readback did not prove the intended local declarations changed (`webflow/madewithpixels-menu-2026-10-23.md`, “Duplicate-class targeting incident and required test”; `ROADMAP.md`, R-268).

## Follow-up

Keep the controlled R-268 test focused on duplicate-name detection and stable style IDs for the three incident records, including actual element assignment and the linked sibling. This audit supplies no evidence that a runtime selector change would fix ambiguous Webflow writes. For any later cleanup of `.sb-nav-*` compatibility selectors, first verify that every supported legacy markup version has the corresponding data hook; the current JavaScript explicitly retains `.sb-nav-panel` as a fallback.

**Evidence limit:** No Webflow read/write, browser, Preview, published-page or rendered-style check was performed.
