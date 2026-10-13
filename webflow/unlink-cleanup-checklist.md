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
- [ ] Treat imported Library style names and local style names as distinct identities. Use stable style IDs and selector strings in the audit. Never use an ambiguous name-only MCP style write. For element assignment changes, target exact element IDs and replace the full style list only after a read confirms every retained class; read back the affected elements immediately.
- [ ] Keep all unresolved selectors attached. Stop cleanup if identity, declarations, inherited behavior, or the selector's effect cannot be established.

## Remove only confirmed redundant classes

- [ ] Make a recoverable copy of the unlinked result before cleanup.
- [ ] Remove only the specific declaration-free combo tokens confirmed on that element. An exact-element-ID batch is acceptable when every target is preflighted and the replacement list preserves ordinary base/project classes. Do not bulk-delete style records by display name.
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

The fresh legacy v0.2.6 instance on `Always Unlink Class Audit` (`6ace999512bf18685568ef04`) was confirmed on Always, unlinked in Designer and read back through Data MCP. Its subtree has 144 native elements plus Body, two Embeds, 36 distinct Always combo selectors and 103 total selector attachments. The [dated audit](always-unlink-class-audit-2026-10-13.md) records all 72 distinct style IDs, local CSS declarations, paired namespace identities, and the Desktop/Tablet/Mobile landscape/Mobile portrait Canvas measurements.

On 2026-10-13, Michael duplicated this page as `Always Unlink Class Audit Backup` (`6acea08bccc26519c197ff8d`). An element-ID-targeted test and batch removed 99 declaration-free numbered attachments from that duplicate while retaining local base classes and the three functional numbered selectors. The original page remains unchanged. Four Canvas breakpoints have zero overflow; Mobile portrait Preview open/Escape close, ARIA/inert, and trigger focus return passed. The backdrop pointer test was blocked by the Designer Preview iframe, and the no-JavaScript fallback was not repeated. The remaining unresolved selector is the unnumbered root `Always` token; site-wide style records remain untouched. See the [dated audit](always-unlink-class-audit-2026-10-13.md) for exact before/after counts and limitations.
