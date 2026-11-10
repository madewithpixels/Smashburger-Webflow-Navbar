# Candidate public runtime contract

Checked 10 November 2026 against maintained `src/`, generated `candidate/`,
stable v0.2.9, and the retained v0.2.6 Git baseline. This describes the
browser-facing contract represented by local code and records; it does not
claim current behaviour on a consumer site.

## Contract consumers can rely on

- **Markup hooks:** the runtime root is `[data-mwp-navbar]`. It locates the
  native menu via `[data-mwp-menu]` (legacy `[data-mwp-css-nav]` is also
  accepted), trigger via `[data-mwp-trigger]` or native `summary`, panel via
  `[data-mwp-panel]` or the migrated `.sb-nav-panel`, plus optional backdrop,
  item, submenu, icon and line hooks. See `src/navbar-light.js` selectors and
  `compatibility/runtime-contracts.json` `sourceTokens`.
- **Configuration:** documented root/menu attributes configure collapse,
  layout, motion, alignment, presets, backdrop and close/focus/scroll behavior.
  Optional `[data-mwp-config]` values supply durations, distances, easing,
  widths and stagger. The accepted `data-wf--*--variant` strings remain
  compatibility markers. The `--mwp-nav-*` custom properties remain CSS and
  runtime hooks. See `src/navbar-light.js`, `src/navbar-light.css`,
  `webflow/class-namespace-migration-audit.md` and the compatibility manifest.
- **Events:** bubbling `mwp-nav:open`, `mwp-nav:opened`, `mwp-nav:close`, and
  `mwp-nav:closed` events are dispatched on the root. `detail` carries
  `navbar`, `root`, `menu`, `trigger`, `panel` and `state`. See
  `src/navbar-light.js` `emit()` and `tests/runtime-delivery.test.js`.
- **JavaScript API:** `NavbarLight(root)` and `initNavbarLight(root=document)`
  are global names in delivered scripts. Instances expose `open()`,
  `close()`, `toggle()` and `destroy()`, plus state; the root gets
  `mwpNavbarLight` and the native menu gets `mwpNav`. Repeated initialisation
  skips already enhanced roots. See `src/navbar-light.js` and runtime/destroy
  delivery tests.
- **Accessible/enhanced state:** the native `details` menu remains the
  interaction base. Enhancement sets `data-mwp-ready`; trigger state uses
  `aria-controls`, `aria-haspopup` and `aria-expanded`; panel state uses
  `aria-hidden` and `inert`. Runtime `data-state` reports closed/opening/open/
  closing across the root, menu, panel and optional backdrop. Destroy restores
  the recorded authored attributes/properties. See `src/navbar-light.js` and
  `tests/runtime-delivery.test.js`, `tests/destroy-delivery.test.js`.
- **Loader:** the release loader expects the versioned CSS and JavaScript
  assets, uses integrity metadata and `crossorigin="anonymous"`, reports
  status through `data-mwp-navbar-light-cdn` and
  `data-mwp-navbar-light-version`, and emits
  `mwp-navbar-light:cdn-error` on failure. The candidate loader is explicitly
  marked unreleased and points to the candidate path; it is not evidence of a
  published URL. See `candidate/webflow/navbar-light-cdn-loader.html`,
  `webflow/v0.2.9-release-verification.md` and
  `scripts/check-class-namespace.mjs`.

## Comparison and evidence

| Surface | Contract comparison | Evidence and limits |
| --- | --- | --- |
| Maintained source | Retains the `mwp-*` runtime/data/CSS/API/event names while using `sb-*` structural classes. The panel resolver also accepts `.sb-nav-panel` if its data hook is absent. | `src/navbar-light.js`, `src/navbar-light.css`, `compatibility/runtime-contracts.json`; local source tests. |
| Generated candidate | Compatibility tokens are asserted against the manifest for minified/unminified CSS/JS and Webflow embeds. Candidate JS is byte-compared between self-contained and Library embeds; loader path/version/error metadata are checked. | `scripts/check-class-namespace.mjs`, `tests/runtime-delivery.test.js` and related delivery tests. These establish generated local bytes and jsdom behavior only. |
| Stable v0.2.9 | The current stable `dist/` is byte-equal to the retained v0.2.9 tag artifacts. Runtime behavior uses the same legacy `mwp-css-nav*` class family; v0.2.9 also contains its recorded resize and loader-integrity fixes. | `webflow/v0.2.9-release-verification.md`; namespace/release gate compares local stable artifacts to the tag. Historical release record includes staged and published checks at that time, not current consumer state. |
| v0.2.6 | All 17 protected stable files match the recorded v0.2.6 hashes from Git baseline `0864f82`. This is immutability evidence, not a full behavioral comparison against the candidate. | `compatibility/v0.2.6-baseline.json`, `scripts/check-class-namespace.mjs`, `webflow/v0.2.6-release-verification.md`. |

The candidate’s structural class rename is intentional. Runtime selectors and
attributes remain compatible; new candidate markup uses `sb-*`. Existing tests
cover API behavior, lifecycle ordering/payload, accessibility state, loader
metadata, class namespace and source/candidate generated deliveries. The panel
class-only fallback had source coverage but lacked an explicit generated
candidate check; `tests/class-namespace.test.js` now exercises both source and
candidate `dist` when candidate checks are enabled.

The retained v0.2.9 runtime is not behavior-identical to the current source and
candidate. `tests/runtime-delivery.test.js` marks four retained-delivery cases
as known defects: missing component CSS enhancement fallback, breakpoint
expansion during opening/closing, and focus handling when a breakpoint hides
the open panel or queued first link. Those assertions deliberately preserve
the old release and distinguish it from the corrected source/candidate. They
are retained-release differences, not effects introduced by the class rename.
The current candidate loader also points to the unreleased `0.3.0-rc.1`
candidate URL, while stable v0.2.9 has a released-version URL and recorded
integrity values; no candidate URL or CDN behavior is claimed live.

## Open questions

No Michael product decision is required by this local audit. Whether a future
stable release should retain the `.sb-nav-panel` fallback or support additional
class-only discovery is an implementation-compatibility question, not a
consumer behavior established by these records. Keep current compatibility
hooks until a separately authorised versioned decision changes them.

## Checks and limits

The relevant automated checks exercise source/candidate output in jsdom and
compare retained release bytes. They do not establish current Webflow Designer,
Preview, published-site, CDN or consumer behavior. No Webflow, CDN or browser
surface was inspected for this audit.
