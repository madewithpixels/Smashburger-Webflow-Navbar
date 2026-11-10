# SmashBurger Lite blank-project trial sheet

Use this checklist only after a released `sb-nav` runtime and its exact pinned
loader have been selected, and a genuinely blank test project is available.
The 0.3.0-rc.1 loader is unreleased and must not be installed. This sheet is a plan; it is not
evidence that a Webflow component, Canvas edit or clone flow has been checked.

## Local evidence already prepared

- The plain and styled HTML references each use one native navigation tree,
  one Details/Summary trigger and one panel with the same three destinations.
- Their local test parses the actual HTML and local assets, then checks runtime
  discovery, relationships, state, simulated open/close, repeat initialisation
  and simulated Escape/focus return. This is DOM evidence, not browser behavior.
- The separate workbench has one native closed sample, one forced-open sample
  and a labelled, non-interactive backdrop reference. Local checks cover its
  native states, adjacent panel, fragment targets, script-free markup, labels
  and page-scoped CSS.
- The editing guide and build sheet distinguish released instructions from the
  unreleased candidate. The local integrity gate checks their install boundary.
- These checks do not establish Webflow editability, rendered layout, native
  keyboard behavior, real asset requests, console cleanliness or clone flow.

## Blank-project checks still required

Record the project name and URL, clone source and method, date, tester, and how
you confirmed the destination was blank. Record observed results and evidence;
use `Not checked` or `Unknown` where appropriate.

1. **Clone and structure:** Clone into the blank project. In Navigator, record
   the element types, nesting, class labels and attributes. Confirm one native
   link tree, one Details/Summary trigger, an adjacent panel, the intended
   backdrop and no duplicate links or generated `.always*` class trail.
2. **Canvas editing:** Select the component and its children. Edit link text,
   destinations and a visual style; save, reopen and confirm each edit remains
   editable and appears in the page.
3. **Four breakpoints:** Check Desktop, Tablet, Mobile landscape and Mobile
   portrait. At each, record the actual viewport, closed and open states,
   visible links, panel placement and any horizontal overflow.
4. **Keyboard and focus:** Tab to the trigger, activate with Enter and Space,
   move through links, close with Escape where supported, and record focus
   visibility, order and return destination.
5. **Fallback:** With JavaScript demonstrably unavailable, open and close the
   native disclosure and follow its links. Record what no longer works.
6. **Assets and console:** Check each expected image, icon, font and loader
   request. Clear the browser console, reload, and record exact warnings,
   errors and failed requests.
7. **Close-out:** Record failures, unknowns and unchecked items. Do not call the
   trial complete while any required check is unrecorded; keep Preview or
   published-page observations distinct from Canvas observations.

Use the [clone-flow capture sheet](lite-clone-flow-capture-sheet.md) to record
the actual attempt. The [native build sheet](lite-native-build-sheet-2026-10-16.md)
and [safe-editing guide](smashburger-lite-safe-editing.md) remain preparation
references until the released runtime and Webflow structure are selected.
