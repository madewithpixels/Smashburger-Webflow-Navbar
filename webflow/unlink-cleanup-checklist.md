# Webflow unlink class cleanup checklist

Use this checklist only on a fresh, isolated duplicate of a linked Library instance. Do not clean up the shared definition or the original/released consumer. Keep the page unpublished and create a recoverable duplicate before unlinking. Never use SB Test Four or SB Test Five.

## Capture the linked baseline

- [ ] Record site, page, linked component, component ID, instance ID, selected variant, Webflow breakpoint, and current runtime version.
- [ ] Read all instance properties, custom attributes, bindings, asset references, and link destinations. Confirm the requested collapse value and preserve the values that unlink should make static.
- [ ] Record the instance subtree's native element count, semantic tags, Embeds, base classes, and current numbered combo-class attachments.
- [ ] Record behavior before unlink: Desktop expansion/collapse choice, trigger and panel visibility at each relevant breakpoint, keyboard/focus behavior, ARIA/inert state, backdrop, refresh reset, and no-JavaScript native `<details>` fallback.
- [ ] Do not change shared Library styles, tag styles, variants, or release assets during fixture preparation.

## Inventory the fresh unlink

- [ ] Unlink only the isolated duplicate after confirming its selected variant in Designer.
- [ ] Read back the entire resulting subtree and compare native element count, tag names, text, properties-as-static-values, custom attributes, bindings, assets, links, Embeds, and ordinary base classes with the saved baseline.
- [ ] List every new variant-derived class token, each distinct style record/ID, and every element attachment. Count selector records separately from attachments.
- [ ] Read declarations for every selector at Main, Tablet, Mobile landscape, and Mobile portrait, including pseudo states where present. Record declarations and responsive overrides by selector ID and breakpoint.
- [ ] Classify each selector and attachment as **functional layout/visibility**, **authoring-only**, **visual presentation**, **declaration-free**, or **unresolved**. A zero declaration count is not enough to remove a token if the selector inherits declarations or if cascade behavior has not been checked.
- [ ] Treat imported Library style names and local style names as distinct identities. Use stable style IDs and selector strings in the audit. Never use an ambiguous name-only MCP style write.
- [ ] Keep all unresolved selectors attached. Stop cleanup if identity, declarations, inherited behavior, or the selector's effect cannot be established.

## Remove only confirmed redundant classes

- [ ] Make a recoverable copy of the unlinked result before cleanup.
- [ ] Remove only the specific declaration-free combo tokens confirmed on that element. Do not bulk-delete by name or remove ordinary base/project classes.
- [ ] For a functional variant rule, first remove that variant combo token from its target in Designer. Then transfer only the required declarations to an unambiguous, deliberately named local selector or base class.
- [ ] Keep accessible names, native Details/Summary/Nav semantics, trigger/panel relationships, focus handling, runtime attributes, native content, link destinations, assets, and both Embeds intact.
- [ ] Read back the exact affected element class lists and style declarations after each cleanup batch.

## Compare after cleanup

- [ ] Compare before/after element and attachment inventories. Report how many generated selectors and attachments were removed, retained, or unresolved; do not report only selector totals.
- [ ] At Desktop, Tablet, Mobile landscape, and Mobile portrait, verify the configured collapse behavior, panel visibility/layout, selected visual styles, and zero horizontal overflow.
- [ ] In Preview, verify pointer open/close, backdrop behavior, Escape, focus return, `aria-expanded`, panel `aria-hidden`/`inert`, and refresh/breakpoint-change reset.
- [ ] With JavaScript unavailable and CSS retained, verify native Details open/close and that the panel remains usable without hidden content or overflow.
- [ ] Confirm Canvas authoring remains possible and that any Designer-only open-panel control does not affect Preview or runtime state.
- [ ] Re-read properties-as-static-values, attributes, links, assets, both Embeds, local styles, Library styles, and global `All Links` / `Body (All Pages)` tag styles.
- [ ] Save confirmed evidence, Webflow IDs, date, and exact limitations before deciding whether any source-level variant changes are warranted.

## Current fixture status

The isolated `Always Unlink Class Audit` draft in `SB Unlink Clean Trial` is prepared with one fresh v0.2.6 instance, but it remains on the `base` variant and has not been unlinked. Data MCP could not select the variant or reliably read that new page's element tree in the 2026-10-13 session. The checklist and class counts therefore remain untested on this fixture until the Always selection and full tree are verified in Designer/Data MCP. See [the fixture record](unlink-hardening-candidate.md) and [the migration guide](migration-guide.md).
