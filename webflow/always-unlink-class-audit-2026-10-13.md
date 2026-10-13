# Fresh Webflow Always unlink class audit — 2026-10-13

## Scope and result

- Site: **SB Unlink Clean Trial** (`6ac8c9f18e63674e4f34f88a`)
- Unpublished draft page: **Always Unlink Class Audit** (`6ace999512bf18685568ef04`)
- Original linked v0.2.6 component ID: `17e02bbc-b376-ad09-a681-fb61b87b7d29`
- Unlinked root element ID: `e33197db-139b-949a-4e8f-33bc08297dd8`
- The root had its **Always** variant selected before it was unlinked in Designer.
- Data MCP now reads the whole native tree successfully: 145 nodes including Body (144 inside the unlinked component subtree), two HtmlEmbeds, native `details`/`summary`/`nav`, and 103 attachments of 36 distinct `Always` combo selectors.

This is a fresh legacy **v0.2.6** unlink for class-clutter auditing, not the one-Base candidate and not a repeat of the completed candidate source matrix. It does not change the released library definition, released files, clean-site Home comparison, or any published page.

## Selector identity and declarations

Data MCP returns 72 combo style records for the 36 attached display names: one unprefixed local selector and one `.mwp-component-library--`-prefixed selector per name. The records have distinct IDs, share display names, and both report `isFromLibrary=false`. The DOM's class attributes use the unprefixed selectors. CSSOM inspection found the following three unprefixed local selectors with declarations:

- `Always 2` — `.mwp-css-nav_inner-5.always-2`: `flex-wrap: wrap`.
- `Always 4` — `.mwp-css-nav_menu-5.always-4`: `display: block`.
- `Always 11` — `.mwp-css-nav_panel-5.always-11`: `display: grid; flex-shrink: 0; flex-basis: 100%`.

The other 33 unprefixed local selectors have empty declarations in the inspected CSSOM. They account for the remaining 100 attachments, including repeated link, icon, and settings/config elements. Empty local CSS rules are evidence of no declarations on those records; they are **not** by themselves proof that removing the tokens is safe. No class was removed or style record deleted.

| Display name | Attachments | Local selector record | Namespaced selector record | Classification |
| --- | ---: | --- | --- | --- |
| Always | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72974`<br>`.mwp-css-nav-5.always` | `d2c318d1-781d-bead-37a6-4f9b34e65f43`<br>`.mwp-component-library--mwp-css-nav.always` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 2 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72973`<br>`.mwp-css-nav_inner-5.always-2` | `d2c318d1-781d-bead-37a6-4f9b34e65f44`<br>`.mwp-component-library--mwp-css-nav_inner.always-2` | flex-wrap: wrap; — functional layout |
| Always 3 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72972`<br>`.mwp-css-nav_brand-5.always-3` | `d2c318d1-781d-bead-37a6-4f9b34e65f45`<br>`.mwp-component-library--mwp-css-nav_brand.always-3` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 4 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72971`<br>`.mwp-css-nav_menu-5.always-4` | `d2c318d1-781d-bead-37a6-4f9b34e65f46`<br>`.mwp-component-library--mwp-css-nav_menu.always-4` | display: block; — functional menu display |
| Always 5 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72970`<br>`.mwp-css-nav_summary-5.always-5` | `d2c318d1-781d-bead-37a6-4f9b34e65f47`<br>`.mwp-component-library--mwp-css-nav_summary.always-5` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 6 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7296f`<br>`.mwp-css-nav_label-5.always-6` | `d2c318d1-781d-bead-37a6-4f9b34e65f48`<br>`.mwp-component-library--mwp-css-nav_label.always-6` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 7 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7296e`<br>`.mwp-css-nav_icon-5.always-7` | `d2c318d1-781d-bead-37a6-4f9b34e65f49`<br>`.mwp-component-library--mwp-css-nav_icon.always-7` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 10 | 3 | `89e0a983-a1e7-7957-8b0d-44aae1c7296d`<br>`.mwp-css-nav_line-5.always-10` | `d2c318d1-781d-bead-37a6-4f9b34e65f4c`<br>`.mwp-component-library--mwp-css-nav_line.always-10` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 11 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7296c`<br>`.mwp-css-nav_panel-5.always-11` | `d2c318d1-781d-bead-37a6-4f9b34e65f4d`<br>`.mwp-component-library--mwp-css-nav_panel.always-11` | display: grid; flex-shrink: 0; flex-basis: 100%; — functional panel layout |
| Always 12 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7296b`<br>`.mwp-css-nav_primary-5.always-12` | `d2c318d1-781d-bead-37a6-4f9b34e65f4e`<br>`.mwp-component-library--mwp-css-nav_primary.always-12` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 13 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7296a`<br>`.mwp-css-nav_links-5.always-13` | `d2c318d1-781d-bead-37a6-4f9b34e65f4f`<br>`.mwp-component-library--mwp-css-nav_links.always-13` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 17 | 4 | `89e0a983-a1e7-7957-8b0d-44aae1c72969`<br>`.mwp-css-nav_link-5.always-17` | `d2c318d1-781d-bead-37a6-4f9b34e65f53`<br>`.mwp-component-library--mwp-css-nav_link.always-17` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 18 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72968`<br>`.mwp-css-nav_submenu-5.always-18` | `d2c318d1-781d-bead-37a6-4f9b34e65f54`<br>`.mwp-component-library--mwp-css-nav_submenu.always-18` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 19 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72967`<br>`.mwp-css-nav_submenu-trigger-5.always-19` | `d2c318d1-781d-bead-37a6-4f9b34e65f55`<br>`.mwp-component-library--mwp-css-nav_submenu-trigger.always-19` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 20 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72966`<br>`.mwp-css-nav_submenu-icon-5.always-20` | `d2c318d1-781d-bead-37a6-4f9b34e65f56`<br>`.mwp-component-library--mwp-css-nav_submenu-icon.always-20` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 21 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72965`<br>`.mwp-css-nav_submenu-icon-line-left-5.always-21` | `d2c318d1-781d-bead-37a6-4f9b34e65f57`<br>`.mwp-component-library--mwp-css-nav_submenu-icon-line-left.always-21` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 22 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72964`<br>`.mwp-css-nav_submenu-icon-line-right-5.always-22` | `d2c318d1-781d-bead-37a6-4f9b34e65f58`<br>`.mwp-component-library--mwp-css-nav_submenu-icon-line-right.always-22` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 23 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72963`<br>`.mwp-css-nav_submenu-list-5.always-23` | `d2c318d1-781d-bead-37a6-4f9b34e65f59`<br>`.mwp-component-library--mwp-css-nav_submenu-list.always-23` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 25 | 2 | `89e0a983-a1e7-7957-8b0d-44aae1c72962`<br>`.mwp-css-nav_submenu-link-5.always-25` | `d2c318d1-781d-bead-37a6-4f9b34e65f5b`<br>`.mwp-component-library--mwp-css-nav_submenu-link.always-25` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 26 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72961`<br>`.mwp-css-nav_cta-5.always-26` | `d2c318d1-781d-bead-37a6-4f9b34e65f5c`<br>`.mwp-component-library--mwp-css-nav_cta.always-26` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 27 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72960`<br>`.mwp-css-nav_secondary-5.always-27` | `d2c318d1-781d-bead-37a6-4f9b34e65f5d`<br>`.mwp-component-library--mwp-css-nav_secondary.always-27` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 28 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7295f`<br>`.mwp-css-nav_socials-5.always-28` | `d2c318d1-781d-bead-37a6-4f9b34e65f5e`<br>`.mwp-component-library--mwp-css-nav_socials.always-28` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 49 | 7 | `89e0a983-a1e7-7957-8b0d-44aae1c7295e`<br>`.mwp-css-nav_secondary-label-5.always-49` | `d2c318d1-781d-bead-37a6-4f9b34e65f73`<br>`.mwp-component-library--mwp-css-nav_secondary-label.always-49` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 50 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7295d`<br>`.mwp-css-nav_contacts-5.always-50` | `d2c318d1-781d-bead-37a6-4f9b34e65f74`<br>`.mwp-component-library--mwp-css-nav_contacts.always-50` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 53 | 9 | `89e0a983-a1e7-7957-8b0d-44aae1c7295c`<br>`.mwp-css-nav_secondary-link-5.always-53` | `d2c318d1-781d-bead-37a6-4f9b34e65f77`<br>`.mwp-component-library--mwp-css-nav_secondary-link.always-53` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 54 | 9 | `89e0a983-a1e7-7957-8b0d-44aae1c7295b`<br>`.mwp-css-nav_secondary-icon-5.always-54` | `d2c318d1-781d-bead-37a6-4f9b34e65f78`<br>`.mwp-component-library--mwp-css-nav_secondary-icon.always-54` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 55 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c7295a`<br>`.mwp-css-nav_settings-2.always-55` | `d2c318d1-781d-bead-37a6-4f9b34e65f79`<br>`.mwp-component-library--mwp-css-nav_settings.always-55` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 56 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72959`<br>`.mwp-css-nav_settings-summary-2.always-56` | `d2c318d1-781d-bead-37a6-4f9b34e65f7a`<br>`.mwp-component-library--mwp-css-nav_settings-summary.always-56` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 57 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72958`<br>`.mwp-css-nav_settings-title-2.always-57` | `d2c318d1-781d-bead-37a6-4f9b34e65f7b`<br>`.mwp-component-library--mwp-css-nav_settings-title.always-57` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 58 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72957`<br>`.mwp-css-nav_settings-help-2.always-58` | `d2c318d1-781d-bead-37a6-4f9b34e65f7c`<br>`.mwp-component-library--mwp-css-nav_settings-help.always-58` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 59 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72956`<br>`.mwp-css-nav_settings-note-2.always-59` | `d2c318d1-781d-bead-37a6-4f9b34e65f7d`<br>`.mwp-component-library--mwp-css-nav_settings-note.always-59` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 60 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72955`<br>`.mwp-css-nav_config-title-2.always-60` | `d2c318d1-781d-bead-37a6-4f9b34e65f7e`<br>`.mwp-component-library--mwp-css-nav_config-title.always-60` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 100 | 14 | `89e0a983-a1e7-7957-8b0d-44aae1c72954`<br>`.mwp-css-nav_config-row-2.always-100` | `d2c318d1-781d-bead-37a6-4f9b34e65fa6`<br>`.mwp-component-library--mwp-css-nav_config-row.always-100` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 101 | 14 | `89e0a983-a1e7-7957-8b0d-44aae1c72953`<br>`.mwp-css-nav_config-label-2.always-101` | `d2c318d1-781d-bead-37a6-4f9b34e65fa7`<br>`.mwp-component-library--mwp-css-nav_config-label.always-101` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 102 | 14 | `89e0a983-a1e7-7957-8b0d-44aae1c72952`<br>`.mwp-css-nav_config-value-2.always-102` | `d2c318d1-781d-bead-37a6-4f9b34e65fa8`<br>`.mwp-component-library--mwp-css-nav_config-value.always-102` | No declaration in the local CSSOM rule; not yet proven removable |
| Always 103 | 1 | `89e0a983-a1e7-7957-8b0d-44aae1c72951`<br>`.mwp-css-nav_backdrop-5.always-103` | `d2c318d1-781d-bead-37a6-4f9b34e65fa9`<br>`.mwp-component-library--mwp-css-nav_backdrop.always-103` | No declaration in the local CSSOM rule; not yet proven removable |

## Canvas cascade evidence

One batched DOM/CSSOM read was taken at each breakpoint after selecting it in Designer. The page remained in Designer; this was not Preview/runtime or no-JavaScript evidence.

| Designer breakpoint | Canvas width | Inner | Menu | Panel | Horizontal overflow |
| --- | ---: | --- | --- | --- | ---: |
| Desktop | 1607px | `flex-wrap: wrap` selector declaration present | `display: block`; native Details closed | `display: grid; flex-shrink: 0; flex-basis: 100%` | 0px |
| Tablet | 820px | flex; 820px wide | block; 102px wide; closed | grid; 100% basis; 772px wide | 0px |
| Mobile landscape | 667px | flex; 667px wide | block; 102px wide; closed | grid; 100% basis; 619px wide | 0px |
| Mobile portrait | 393px | flex; 393px wide | block; 102px wide; closed | grid; 100% basis; 345px wide | 0px |

The effective functional rules and zero-overflow geometry were consistent at all four breakpoints. A Canvas-open view is expected for this legacy Always variant. This pass did not repeat open/close, Escape, focus, ARIA/inert, refresh, runtime fallback, or Preview tests; those acceptance checks remain separate.

## Cleanup decision

The class audit task is complete. The cleanup task is **not**. Keep every token until a recoverable copy of this unlinked result exists and the class identity is safely addressed in Designer. In particular:

- Retain the three functional tokens unless their declarations are first transferred to deliberate, unambiguous classes and behavior is rechecked.
- Do not bulk-remove styles by display name. Namespaced and local records collide by display name, and Data MCP style writes are name-addressed.
- The 33 declaration-free local tokens are the sample cleanup targets, on the 100 affected element attachments. Preserve all local base classes. Do not delete namespaced records or imported global/tag styles.
- A controlled cleanup needs a duplicate/rollback, class-by-class removal in Designer, exact class-list readback, then the full breakpoint/runtime/fallback acceptance checklist. Since this exceeds a safe small sample of repetitive Designer edits and the paired identities are ambiguous to name-based APIs, it is handed back for the manual class operation.

The clean-destination candidate install/unlink acceptance is recorded in [the candidate record](unlink-hardening-candidate.md). The reusable procedure is in [the cleanup checklist](unlink-cleanup-checklist.md).
