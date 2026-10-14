# SmashBurger Lite clonable scope

Status: scope draft, prepared 2026-10-14. No Webflow project has been created
or published for this clonable.

## Purpose

Give Webflow designers a small, editable local Navbar component that can be
cloned and styled without first installing a shared Library component or
unlinking it. Demonstrate the runtime and authoring workflow without prescribing
the content, visual identity or information architecture of a real site.

## Included in the first clonable

- One project-local native Webflow component, editable after cloning and
  independent of a Designer Extension or shared Library connection.
- One simple example site with a plain baseline and a separately styled example.
  Both use the same component structure and ordinary native links; do not create
  duplicate desktop and mobile navigation trees.
- A dedicated workbench page with closed and forced-open authoring examples and
  a non-interactive backdrop swatch. Keep the workbench away from real page
  content.
- A short Read Me page explaining installation-free cloning, safe structural
  edits, functional data hooks, trigger/panel relationships, supported native
  `details`/`summary` behavior, stacking, accessible names for icon-only links,
  and how to remove a duplicate header after adapting the project.
- One delivery method only: an exact-version pinned CDN loader with matching
  integrity metadata. Pin the newest verified, released version at build time;
  never point a public clonable at an unreleased candidate or floating version.
- Descriptive `sb-*` structural classes shown directly in the Navigator. Keep
  Webflow's class-based labels; do not assign custom display names to structural
  elements.

## Component boundary

The component is a generic responsive Navbar demonstration. It is not a complete
site header system, mega-menu builder, CMS navigation system, marketing template,
or replacement for a site's existing navigation. Keep example copy generic and
make all links visibly identifiable as demo destinations until a cloner replaces
them.

Use one native trigger and one native panel relationship with the existing
progressive-enhancement contract. Preserve an accessible trigger name, visible
focus, Escape close with focus return, accurate `aria-expanded`, and closed-panel
`aria-hidden`/`inert` when JavaScript enhancement is active. The native
`details`/`summary` CSS fallback must remain usable when JavaScript is absent.

Start from one Base structure and static root/menu attributes. Do not create
collapse variants whose unlinking can materialize `.always*` or numbered combo
class trails. Keep only intentional base classes and explain each class's role.
Use the simplest useful default collapse setting; expose configuration only
where a clone author can understand the control from its label and safe-editing
guide.

## Explicit exclusions

- No shared Library installation or unlink workflow.
- No unpublished runtime or Library candidate, floating CDN URL, self-hosted
  distribution, custom app dependency, or automated update service.
- No site-specific header content, CMS-backed navigation, duplicated mobile
  markup, complicated mega-menu, or assumed brand palette.
- No publication or announcement until the class-namespace migration, pinned
  runtime and clone-flow acceptance are complete.

## Build and acceptance gates

1. Complete the planned versioned `mwp-*` to `sb-*` class migration and verify
   generated distribution output before using `sb-*` in the Webflow project.
2. Build the local component from native structure with no unlink-generated
   combo-class trail; inspect its classes and static attributes through Data MCP
   and the Designer Navigator.
3. Verify the exact pinned loader and integrity metadata against the chosen
   released files.
4. Clone into a blank test project and check Canvas editability, Desktop,
   Tablet, Mobile landscape and Mobile portrait, keyboard/focus, ARIA/inert,
   fallback behavior, assets, console output and horizontal overflow.
5. Confirm a single navigation landmark on each demo page and verify that the
   styled example changes presentation through shared editable classes rather
   than duplicated structure.
6. Record remaining limitations and obtain the required release approval before
   publishing the clonable.

## Follow-on decisions

The class migration and release planning must settle the canonical project name,
class names and exact CDN release before Webflow construction. Visual direction,
demo page copy and the default collapse breakpoint can be chosen during the
build, provided they remain within the boundaries above.
