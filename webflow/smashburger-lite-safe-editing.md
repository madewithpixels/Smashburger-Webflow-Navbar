# SmashBurger Lite: safe editing

Read Me copy for the future clonable. Lite is not built or published yet. This
draft describes the current released v0.2.6 hooks and native structure as a
working reference; refresh the selectors, class names, structure and loader
instructions after the planned class migration and runtime selection. Confirm
them against the exact released files chosen for Lite before placing this guide
in Webflow. Michael accepted the `sb-nav` / `sb-nav-{role}` mapping (D-012) on 15 October 2026. It is implemented in the unreleased source candidate; Webflow still uses the released classes.

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

In the current v0.2.6 structure, `[data-mwp-navbar]` marks the root;
`[data-mwp-menu]` marks the native `<details>` menu; `[data-mwp-trigger]` marks
its `<summary>` trigger; and `[data-mwp-panel]` marks the panel. The menu and
panel are adjacent direct children of the navigation inner wrapper. Keep these
hooks, the native elements and their relationship intact. The CSS-only open
state depends on the `<details>` menu and adjacent panel.

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

These selectors use the current `mwp-*` runtime hooks. The planned class
migration changes structural Webflow classes to `sb-*`; it does not by itself
rename the runtime hooks. Runtime choice and release version are not yet
settled. Before this guide is placed in the future project, update it for the
chosen structure and exact released runtime, then verify the CDN URLs,
version markers, integrity hashes and `crossorigin` attributes together. Do
not treat maintained but unreleased source as a supported clonable runtime.
