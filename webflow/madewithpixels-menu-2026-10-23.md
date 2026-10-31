# madewithpixels menu correction — 23 October 2026

Recorded by Codex. **Superseded site state:** Michael reported on 23 October 2026 that he restored his backup and will style the menu by hand. The edits and screenshots below are historical evidence from the agent session, not the current site configuration or accepted work. No further Webflow changes were made after that instruction.

## Saved change

- Site `683cced100c63d0f60a847a3`, shared `SB Header` component `fba2359d-885d-faea-28bf-05d000db7572`.
- The old implementation had duplicate local/Library class names. New unambiguous `mwp-site-menu-*` classes are assigned to the actual header elements.
- Coral overlay (`--coral`, `#ef8965`), DarkGrey primary text (`--darkgrey`, `#323232`), equal-width centred primary links, vertical phone and email below the CTA.
- Reused the existing `Instant Advice Button` component as the menu CTA, labelled `Instant Estimate` and linked to `/estimate`. Its Menu variant keeps it in normal flow at every breakpoint. The existing hero instance retains its Base variant.
- Original text CTA is hidden. CTA wrapper participates in the existing 80 ms item stagger.
- Hover/focus mix 90% of each button's original background with 10% black. The CTA uses Slate; primary links use Coral. Functional `color-mix()` rules are scoped in the existing loader Embed; ordinary presentation uses Designer styles.
- The burger subtree is byte-for-byte unchanged in saved-tree comparison. The runtime loader remains pinned to v0.2.6.

## Preview evidence

- Checked at 1279 px desktop and 393 px mobile. Coral panel covers the viewport; primary links are respectively 512 px and 345 px wide. Phone and email sit on separate centred rows below the CTA.
- Primary text computes to `rgb(50, 50, 50)`. Focus keeps that colour and computes the Coral background mix as `color(srgb 0.843529 0.483529 0.356471)`.
- CTA renders the existing arrow/stripe treatment, links to `/estimate`, and keeps its label on one line. Focus darkens Slate to `color(srgb 0.151765 0.247059 0.275294)` while keeping OffWhite text and no transform.
- Escape closes the menu, sets `aria-expanded=false`, and returns focus to the burger. Nine rendered stagger items are present: six primary links, CTA wrapper, and two contacts.
- Telephone: `tel:+447515392390`; email: `mailto:michael@madewithpixels.co.uk`.
- Existing ScrollTrigger debug markers remain visible in Preview; no unrelated site scripts were changed.
- Screenshots: `evidence/madewithpixels-menu-desktop-2026-10-23.jpg` and `evidence/madewithpixels-menu-mobile-2026-10-23.jpg`.

## Handoff

Michael is styling the restored menu manually. Do not resume the reverted menu edits or publish from this historical record. No publication or Library sharing occurred. Existing uncommitted STATUS work was preserved; this record and Boss carry the handoff.

## Duplicate-class targeting incident and required test

**23 October 2026 — Codex; roadmap R-268.** Michael explicitly requested a roadmap note and testing flag after restoring his backup. This is a release-readiness test for agent-assisted customisation, not a claim that SB's runtime is defective.

The site style inventory exposed these distinct records with identical display names:

| Name | Intended local record | Imported Library record hit by earlier writes |
| --- | --- | --- |
| `mwp-css-nav_panel` | `6d83599a-6d71-4f94-500e-809dfd85451e` | `9cba9d41-8391-defb-7faf-d9a02f89d4e7` |
| `mwp-css-nav_link` | `6d83599a-6d71-4f94-500e-809dfd85451f` | `9cba9d41-8391-defb-7faf-d9a02f89d4e8` |
| `mwp-css-nav_contacts` | `6d83599a-6d71-4f94-500e-809dfd85453a` | `9cba9d41-8391-defb-7faf-d9a02f89d503` |

The inventory returned `isFromLibrary` and separate selectors/IDs. The style-write actions used in this session selected by name, which was ambiguous. The local panel retained `background-color: inherit` and two columns after an earlier name-based readback appeared to show the requested Coral single-column styling on the imported record. The agent should have checked the full inventory and actual element assignments before writing. This record does not prove every available API route lacks deterministic ID selection.

The subsequent uniquely named `mwp-site-menu-*` workaround was assigned to the menu elements and rendered correctly in Preview. Michael then restored the backup; that workaround is not the current site state or an approved SB release solution.

**Required testing:** Run R-268 in an authorised disposable consumer with an exact pinned release/candidate and a backup. Compare both local and imported records, a linked sibling, and rendered output before/after ordinary, state and breakpoint writes. Test duplicate-name detection, deterministic targeting where supported, the unique-local-class fallback where needed, and rollback. Record candidate results separately from this v0.2.6 incident. No controlled regression test or post-restore site inspection has been performed in this documentation update.
