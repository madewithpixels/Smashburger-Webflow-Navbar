# SmashBurger Lite: safe editing guide draft

This is source copy for the future clonable's Read Me page. It describes the
currently maintained `v0.2.6` runtime contract; update it against the exact
released version selected for the clonable before placing it in Webflow.

## Safe changes

- Edit the text and destinations of the existing native links.
- Change visual styling through the component's Webflow classes and variables.
- Keep one header/navigation landmark on each page. Remove a duplicate header
  only after confirming which component instance the page uses.
- Keep the component's single Base structure. Use its documented settings for
  behavior; do not create extra breakpoint or collapse variants as a styling
  shortcut.

## Keep the functional structure

The outer navigation root uses `[data-mwp-navbar]`. Inside it, the native menu
trigger is `[data-mwp-menu]`, the trigger summary is `[data-mwp-trigger]`, and
the adjacent navigation panel is `[data-mwp-panel]`. Keep the trigger and panel
as adjacent siblings in the intended order. The trigger must remain inside the
native `<details>` element and the panel must remain its adjacent sibling so
the stylesheet's no-JavaScript open-state fallback can work.

Do not remove, rename, duplicate or move functional `data-mwp-*` hooks unless
you are deliberately rebuilding and retesting the component. Do not replace the
native `<details>`/`<summary>` trigger with a Webflow Menu Button, button or
clickable Div. Do not nest a separate `<button>` inside `<summary>`; summary is
already the native disclosure control.

## Accessibility and behavior

- Give the trigger a clear accessible name. The visible `MENU` text is the
  default; if you visually hide it, preserve an accessible name.
- Give every icon-only link a specific `aria-label`; do not use a generic name
  such as “link” or “icon”. Hide decorative icons from assistive technology.
- Keep visible keyboard focus styles on the trigger and every link.
- Do not hard-code `aria-expanded`, `aria-hidden` or `inert` states in the
  Designer. The runtime updates these while open/closed; test both states after
  structural edits.
- Keep the backdrop inside the navigation root and behind the panel. Check the
  stacking context if page content paints above an open menu; avoid fixing that
  by hiding overflow or adding broad containment without checking the result.
- Keep link order aligned with the visual order. The primary links should come
  before secondary links in DOM order.

## Runtime and no-JavaScript fallback

Use the exact-version CDN Embed supplied with this clone. Keep its CSS and
JavaScript URLs, version markers, integrity hashes and `crossorigin` attributes
together. Do not switch to a floating version URL or mix files from different
releases. If the script fails or is disabled, the native details disclosure
should still open and close; enhanced Escape, focus return and scripted ARIA /
inert behavior require JavaScript.

When adapting the component, test it at Desktop, Tablet, Mobile landscape and
Mobile portrait. Check closed and open states, keyboard use, backdrop dismissal,
Escape and focus return, no-JavaScript disclosure behavior, and horizontal
overflow. Recheck stacking against sticky or fixed page content.

## Before removing a duplicate header

Compare the two instances' link destinations, accessible names, responsive
states and page role. Keep the one intended to be the page's only navigation
landmark, then remove the duplicate and verify the page at all four breakpoints.

## Version note

The class namespace migration from `mwp-*` to `sb-*` is planned and versioned;
the current released runtime still uses the `mwp-*` data hooks. Do not rename
those runtime hooks just because the Webflow class names change. Follow the
clonable's included version-specific guide when it is built.
