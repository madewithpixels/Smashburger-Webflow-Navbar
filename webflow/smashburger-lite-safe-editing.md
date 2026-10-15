# SmashBurger Lite: safe editing

Read Me copy for the future clonable. Lite is not built or published yet. Keep
released-install instructions and unreleased candidate review separate: current
Webflow Libraries and released v0.2.6 installations still use `mwp-css-nav_*`
classes and `mwp-*` runtime hooks. The isolated 0.3.0-rc.1 candidate uses
`sb-nav-*` classes and retains those runtime hooks. Its generated loader points
at an unpublished tag, so it is evidence only and must not be installed.
Michael accepted the `sb-nav` / `sb-nav-{role}` class mapping (D-012) on
15 October 2026.

## Safe changes

- Edit link text and destinations, and style the existing native elements with
  their Webflow classes.
- Keep the one native navigation tree; it serves desktop and collapsed layouts.
- Keep the single Base structure. Do not add collapse variants as a styling
  shortcut or duplicate the links for desktop and mobile.
- Retain the supplied pinned runtime Embed. Do not mix versions or replace it
  with a floating URL. Its final version and integrity values must match the
  released files selected for Lite.

## Keep the functional structure

In the released v0.2.6 structure, `[data-mwp-navbar]` marks the root;
`[data-mwp-menu]` marks the native `<details>` menu; `[data-mwp-trigger]` marks
its `<summary>` trigger; and `[data-mwp-panel]` marks the panel. The menu and
panel are adjacent direct children of the navigation inner wrapper. Keep these
hooks, the native elements and their relationship intact. The CSS-only open
state depends on the `<details>` menu and adjacent panel.

The 0.3.0-rc.1 candidate keeps the same `data-mwp-*` runtime hooks and native
element relationships. Its maintained structural classes include
`.sb-nav-inner`, `.sb-nav-panel` and `.sb-nav-submenu-list`; a Webflow Library
may add its own prefix to authored class names. Check candidate files under
`candidate/` when reviewing this migration. Do not copy their classes or loader
into a released project.

Do not rename, remove, duplicate or move these functional hooks. Do not replace
the native `<details>`/`<summary>` menu with Webflow's Menu Button, a separate
button or a clickable Div; the runtime and CSS fallback expect the native
disclosure. Do not put a button inside `<summary>`: the summary is already the
disclosure control. If making a structural change, treat it as a rebuild and
verify the result against the selected released runtime.

## Accessibility and stacking

- Give the menu trigger a clear accessible name. If its visible label is hidden,
  preserve an accessible name.
- Give each icon-only link a specific accessible name, such as “Email us”. Hide
  decorative icons from assistive technology.
- Keep visible keyboard focus styles on the trigger and links.
- Do not set runtime-managed `aria-expanded`, `aria-hidden` or `inert` states in
  Designer. The script updates these for the enhanced menu. Without JavaScript,
  native disclosure open/close remains available; scripted Escape, focus return,
  ARIA updates and inertness do not.
- Keep the backdrop within the navigation root and behind the panel. If fixed or
  sticky page content paints over an open menu, check stacking contexts and set
  a deliberate root stacking level. Do not hide overflow or add broad
  containment without checking their effect on the panel.
- Keep link DOM order aligned with the visual order. Primary links precede
  secondary links.

## Removing a duplicate header

Before removing either header, compare its links and destinations, accessible
names, responsive behavior and role on the page. Keep the intended single
navigation landmark, remove the other instance, then check the remaining header
at Desktop, Tablet, Mobile landscape and Mobile portrait, including open and
closed menu states and keyboard focus.

## Version-specific instructions to refresh

For an existing released project, follow its current classes and exact pinned
runtime together; do not mix its classes with the candidate. For future Lite
work, refresh this guide only after a released runtime and native Webflow
structure have been selected. Verify exact CDN URLs, version markers, integrity
hashes and `crossorigin` attributes against those released files.
`candidate/webflow/navbar-light-cdn-loader.html` is unreleased review material,
not an installation instruction.
