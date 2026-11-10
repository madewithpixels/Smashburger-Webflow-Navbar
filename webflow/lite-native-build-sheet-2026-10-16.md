# SmashBurger Lite native build sheet

16 October 2026 — Codex (night shift), brief #90. Preparation only: no Webflow
component or page was created or changed. Acceptance remains pending.

## Ready locally

- The settled Lite scope calls for one editable, site-local native component,
  ordinary links, plain and styled examples, a separate workbench, a short Read
  Me page and one exact-version CDN loader. There is no Library install, app,
  CMS, duplicate mobile tree or mega-menu.
- Candidate files provide local plain/styled examples and a static authoring
  workbench. Each example has one root, one details/summary trigger and one panel
  containing three links. The workbench labels its closed sample as a static
  authoring reference, its open sample as a static forced-open authoring
  reference, and its backdrop as a non-interactive static sample. These samples
  do not test menu interaction or runtime behavior, or backdrop activation,
  dismissal or scroll locking.
- `npm run test:candidate` passed 685/685 checks. The Lite checks passed for
  shared link-tree structure, local runtime behavior, independent menu state,
  simulated Escape/focus return, static workbench behavior and working fragments.
  The run also confirmed 17 protected historical files remain byte-identical.
- These are local source and DOM simulation results. They do not prove rendered
  layout, native keyboard activation, Webflow Canvas behavior, Preview, or clone
  flow.
- Chrome's approved browser route was tried with a new tab for the local
  examples. Its URL policy rejected the `file:` address and explicitly blocked
  alternate routes or workarounds. No page was rendered or screenshot taken.
- Read-only Webflow `list_sites` returned 16 sites. It did not list New
  Smashburger Test. SB Unlink Clean Trial is listed but is a populated fixture,
  not a blank Lite project. No Lite component is built there.

## Proposed native element tree

This follows the accepted one-tree boundary and the local candidate markup. It is
a build proposal, not Webflow source readback or a final design:

```text
Navbar component root: Header, class sb-nav, data-mwp-navbar
└─ Inner wrapper: Div, class sb-nav-inner, data-mwp-inner
   ├─ Brand/home link: Link
   ├─ Native disclosure: Details, data-mwp-menu
   │  └─ Trigger: Summary, data-mwp-trigger, clear accessible name
   └─ Navigation panel: Nav, class sb-nav-panel, data-mwp-panel
      ├─ Ordinary link, data-mwp-item
      ├─ Ordinary link, data-mwp-item
      └─ Ordinary link, data-mwp-item
└─ Backdrop: Div, data-mwp-backdrop, aria-hidden="true"
```

Keep the `Details` and panel as adjacent children of the inner wrapper. The
`Summary` is the only trigger; do not substitute a Webflow Menu Button or add a
second desktop/mobile link tree. JavaScript creates a unique panel ID and sets
the trigger's `aria-controls`, `aria-haspopup` and `aria-expanded`; it manages
the panel's `aria-hidden` and `inert` state. Do not author those runtime-managed
states in Designer. Native Details open/close and the adjacent-panel CSS rule
provide the no-script fallback.

## Classes and static attributes

- Settled structural names: `sb-nav` on the root, `sb-nav-inner` on the inner
  wrapper and `sb-nav-panel` on the panel. These are present in the candidate
  source and agree with the accepted `sb-nav` mapping.
- Keep the functional `data-mwp-*` hooks shown in the tree. They are the
  candidate runtime contract; the class migration does not rename them.
- The candidate examples use `data-collapse="always"` and
  `data-layout="dropdown"`. These are reference values, not settled Lite
  defaults: the scope leaves the default collapse choice for the build. The
  plain example also uses `data-presets="false"`; whether Lite exposes this
  control needs to be settled against the selected released runtime and the
  safe-editing guide.
- Candidate-only example styling includes `lite-example--styled`, `brand`,
  `workbench-example` and `backdrop-swatch`. These are not agreed component
  classes. Choose the final example styling during the Webflow build.
- Keep structural Navigator labels automatic and class-based. Do not add custom
  display names or collapse variants that create `.always*` combo-class trails.

## Trigger and panel relationship

The native `Summary` sits inside `Details`; the panel is its adjacent sibling
after `Details`, under `sb-nav-inner`. The runtime links them with a generated
panel ID and `aria-controls`. This relationship also lets CSS reveal the panel
from the native Details open state without JavaScript. Preserve the sibling
placement, hook attributes and native element types together.

## Example and reference pages

- **Plain example:** one instance with generic home and three demo links; keep
  the baseline simple and visibly label demo destinations.
- **Styled example:** the same component structure and one set of links, with
  ordinary editable Webflow classes supplying its distinct presentation.
- **Workbench:** separate closed and forced-open static authoring references
  plus a non-interactive backdrop sample. They do not verify menu interaction,
  runtime behavior or backdrop activation, dismissal or scroll locking. Keep the
  workbench out of real page content.
- **Read Me:** adapt the safe-editing guide after class names and the released
  loader are confirmed. Explain native Details/summary, functional hooks,
  trigger/panel placement, stacking, accessible names, and duplicate-header
  removal.

## Unresolved before implementation

- No released runtime matching the `sb-nav` class migration is verified. The
  existing v0.2.6 release is real but uses the earlier `mwp-*` class family;
  the 0.3.0-rc.1 loader is explicitly unreleased and must not be installed.
- Therefore the final CDN version, URLs, integrity values and `crossorigin`
  settings must come from the selected released files at build time. This sheet
  intentionally supplies no URL or hash.
- The default collapse setting and any visible configuration controls remain
  choices for the build. Keep them minimal and explainable; confirm behavior
  against the chosen runtime.
- The appropriate blank test project is not accessible in the current Webflow
  site list. Canvas editability and clone-flow checks cannot start there yet.
- Final visual styles, link copy and any example-specific classes remain open
  within the accepted generic-content boundary.

## Next gate

The first enabling action is for Michael to select and authorise a versioned
release of the `sb-nav` candidate runtime. Once those released bytes are
verified, build the native component and exact loader, then make a blank test
project accessible for the clone-flow checks. Browser rendering of the local
examples also needs a Chrome route that permits local pages.

Sources: [accepted Lite scope](smashburger-lite-clonable-scope.md),
[candidate examples](../candidate/lite/review-examples.html),
[candidate workbench](../candidate/lite/workbench-references.html),
[safe-editing guide](smashburger-lite-safe-editing.md),
[runtime evidence and limits](lite-examples-runtime-2026-10-16.md),
[combined release preflight](release-preflight-2026-10-16.md).
