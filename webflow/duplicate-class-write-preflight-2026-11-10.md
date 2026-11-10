# Duplicate-class style-write preflight — 10 November 2026

**Purpose:** Read-only preparation for a later authorised R-268 check. This procedure does not establish that any Webflow write route is safe. It does not authorise a write, site change, publication or sharing.

## Incident basis

The 23 October 2026 incident record lists three local and imported style records with identical display names. Name-based writes affected the imported IDs, while the intended local panel retained `background-color: inherit` and a two-column declaration. A successful response and a name-based readback did not prove the intended local record changed. The original record says the available evidence does not prove every write route lacks stable-ID targeting. See [the incident record](madewithpixels-menu-2026-10-23.md#duplicate-class-targeting-incident-and-required-test) and [R-268](../ROADMAP.md#r-268--test-safe-agent-styling-of-an-unlinked-menu-with-duplicate-class-names).

## Before any proposed write

1. **Confirm the authorised fixture and baseline.** Record the exact disposable site, page, component/instance, pinned release or candidate, and the confirmed recovery point required by the authorisation. Do not substitute a different site or infer that an older backup covers the current state. If any identifier or authorisation is missing, stop.
2. **Inventory every matching style record by stable ID.** Search the full available style inventory for the display name, including local and imported records. Record each stable style ID; do not use the display name as the target key. If the inventory is incomplete, IDs are unavailable, or the same ID cannot be resolved consistently in subsequent readbacks, stop.
3. **Verify the selector for each ID.** Record the exact selector associated with each stable ID and compare it with the intended target. A matching name alone is not a selector match. If selector and ID do not agree or the selector is unavailable, stop.
4. **Verify origin.** Record whether each record is local or from the Library, using the returned origin field and its evidence. Do not infer origin from the name or appearance. If origin is missing or conflicting, stop.
5. **Capture declarations at the relevant style dimensions.** For each matching ID, record all available declarations before the write, including normal styles, hover/focus states and each relevant breakpoint. Preserve property values as returned; distinguish absent declarations from explicit values. If the readback does not cover the dimensions the planned write could affect, stop or narrow the proposed operation until it does.
6. **Map element assignments.** Read the page/component tree and record the actual element IDs and selectors/classes assigned to each matching style ID. Identify the specific intended local element and any elements using the imported record. If assignment cannot be established from readback, stop; a successful write response is not assignment evidence.
7. **Check the linked sibling.** Identify the still-linked sibling instance/component on the fixture and record its relevant element assignment and rendered baseline. Confirm which shared/imported record it consumes. If the sibling or its linkage cannot be identified, stop before any write.
8. **Preserve the before evidence.** Export or capture the page/component tree, complete matching style records, assignments, linked sibling, relevant rendered output, and recovery-point identity before changing anything. Keep raw readbacks/screenshots and a short index together, with site/page, fixture version, viewport, breakpoint/state, capture time and source of each observation. Do not overwrite the baseline. If evidence cannot be saved and reopened for comparison, stop.
9. **Name the exact proposed target and scope.** The proposed write must identify one stable style ID and list the exact declaration/state/breakpoint expected to change. If the available operation only accepts a non-unique display name, or it is unclear whether it targets the ID established above, stop. This preflight does not bless stable-ID writes; any later authorised test must independently prove the route's actual targeting.

## Stop conditions

Stop without writing if any of the following applies:

- Site, page, pinned candidate, authority or recovery point is uncertain.
- A same-name record exists and the proposed operation cannot unambiguously target a verified stable ID.
- ID, selector, local/Library origin, declarations or actual element assignment is missing, inconsistent or stale.
- The linked sibling or its relationship to the shared/imported record cannot be established.
- Relevant breakpoint or pseudo-state declarations are not captured.
- Before evidence cannot be preserved independently, or the recovery point cannot be identified.
- The operation's affected scope or expected change is broader or less clear than the recorded target.

Do not resolve an ambiguity by trying a write and checking which record moved. Do not treat success messages, a display-name lookup, a partial readback, or a rendered appearance alone as proof of the targeted style ID.

## After a separately authorised write

For a controlled test that has passed the preflight, capture the same evidence set again without replacing the before set. Compare by stable ID, selector, origin and element assignment. Record the exact requested change and every observed change, including unchanged imported records and the linked sibling. Recheck the relevant normal/state/breakpoint declarations and rendered geometry/keyboard behaviour required by R-268. Keep raw before/after exports and screenshots, plus a concise diff; label each item with site/page, candidate, viewport, state and capture source.

If the wrong record changed, an unexpected declaration changed, the linked sibling changed, the intended element did not change, or post-write evidence is incomplete, stop further writes. Preserve the post-write state and record the discrepancy before recovery. Restore only through the confirmed authorised recovery point or an explicitly verified inverse procedure; then capture a separate recovery readback and rendered check. Never claim recovery from issuing a restore action alone. If recovery is unavailable or uncertain, leave the site untouched and report the exact state for the authorised owner to resolve.

## Evidence record minimum

- Authorisation and exact site/page/component; pinned candidate; recovery-point identity.
- Planned property/state/breakpoint and intended element.
- Every same-name style record: stable ID, selector, origin and declarations before/after.
- Actual element assignments before/after, including the intended local element.
- Linked sibling identity, linkage, assigned record and before/after result.
- Raw readback/export and rendered evidence locations, viewport, state and capture source.
- Any discrepancy, stop decision, recovery action and independent recovery verification.

**Limit:** This is a local procedure derived from the incident and R-268 criteria. No controlled Webflow regression test was run while writing it. It makes no claim that any API or Designer route can safely target a style record.
