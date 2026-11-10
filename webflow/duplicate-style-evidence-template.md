# Duplicate-style evidence record — R-268

Use one copy of the **Style record** section for every style record with the target display name, including the intended local record and each same-name Library/imported record. Use one **Element assignment** per affected or comparison element. Keep separate before and after evidence; do not overwrite the baseline. This is a recording aid, not authority to change a site or proof that a write route targets a stable ID. Follow [the duplicate-class write preflight](duplicate-class-write-preflight-2026-11-10.md) and stop if its conditions are not met.

## Session and fixture

- Date/time and time zone:
- Recorder:
- Authority / brief and allowed operation:
- Webflow site name and stable site ID:
- Page name, URL and stable page ID:
- Component name and stable component ID:
- Instance/element path in page tree:
- Exact release/candidate and pin (version/commit or asset URL):
- Fixture state (installed / configured / unlinked / other):
- Recovery point name, ID and confirmed location:
- Recovery point confirmed by and when:
- Raw evidence folder or capture references:
- Readback source and method:

## Planned write (complete before any write)

- Intended local target: display name / selector / stable style ID:
- Element expected to receive the change (stable element ID and tree path):
- Property or declaration intended to change:
- Breakpoint and pseudo-state in scope:
- Exact before value (or explicitly absent):
- Exact expected after value:
- Proposed write route and target key as supplied to it:
- Why the target is unambiguous by stable ID:
- Stop/preflight result and evidence reference:

## Style record — duplicate for every matching record

### Record [number]: [intended local / same-name imported / other]

- Display class/style name:
- Stable style record ID:
- Selector(s) / selector evidence:
- Origin: [local / Library or imported / unknown]
- Origin field and evidence reference:
- Library/component source and stable ID, if applicable:
- Intended target? [yes / no] — reason:
- Records sharing this display name (IDs):

#### Before

- Capture reference and source:
- Captured at:
- Breakpoint:
- Pseudo-state: [normal / hover / focus / focus-visible / active / other]
- Declarations, preserving exact values and distinguishing absent from explicit values:
  ```text
  [paste stable-ID readback here]
  ```
- Relevant element assignments (stable element IDs):
- Readback completeness / limitations:

#### After

- Capture reference and source:
- Captured at:
- Breakpoint:
- Pseudo-state: [normal / hover / focus / focus-visible / active / other]
- Declarations, preserving exact values and distinguishing absent from explicit values:
  ```text
  [paste stable-ID readback here]
  ```
- Relevant element assignments (stable element IDs):
- Difference from before:
- Unexpected changes or missing readback:

## Element assignment — duplicate for each relevant element

### Element [number]: [intended local / imported / sibling / comparison]

- Page and component instance:
- Stable element ID:
- Tree path / parent element ID:
- Element tag/type:
- Assigned class/style display name:
- Assigned stable style record ID:
- Assignment source and capture reference:
- Assignment before:
- Assignment after:
- Expected assignment result:
- Observed assignment result:
- Difference or uncertainty:

## Linked sibling check

- Linked sibling page/component/instance:
- Stable page, component and instance IDs:
- Linkage evidence and source:
- Shared/Library style record ID(s) consumed:
- Relevant sibling element ID(s) and assignments:
- Sibling rendered baseline capture:
- Sibling before declarations/appearance reference:
- Sibling after declarations/appearance reference:
- Expected result: [unchanged / specified change]:
- Observed result and difference:
- Viewport dimensions in CSS pixels:
- Breakpoint and pseudo-state exercised:
- Rendered result evidence (screenshot/video/observation reference):
- Interaction/keyboard checks, if in scope:

## Rendered result — intended local element

- Before capture reference and source (Designer Canvas / Preview / published):
- After capture reference and source (Designer Canvas / Preview / published):
- Viewport dimensions in CSS pixels:
- Browser/device, if applicable:
- Menu/component state and interaction used to render it:
- Visible layout, geometry, colour and spacing observations:
- Keyboard/focus observations, if in scope:
- Comparison against expected result:
- What this rendering evidence cannot establish:

## Outcome and recovery

- Write attempted? [no / yes]
- Exact action and timestamp:
- Response text/reference (not treated as targeting proof):
- Target proven by stable-ID readback and element assignment? [yes / no / incomplete]
- Local record result:
- Same-name imported record result:
- Linked sibling result:
- Discrepancy / stop decision:
- Recovery needed? [no / yes]
- Recovery point used (exact name and ID):
- Recovery action and timestamp:
- Independent post-recovery style readback reference:
- Independent post-recovery assignment reference:
- Post-recovery rendered check reference and viewport:
- Recovery verified? [yes / no / incomplete] — evidence and limits:
- Final fixture state and next authorised action:

## Evidence index

List each raw export, readback, screenshot or video with a short description, capture source, timestamp, site/page/component, viewport, breakpoint/state and the matching section above. Keep before, after and recovery captures distinct.

- [reference] — [description and capture context]

## Limits

- Missing fields/readbacks and why:
- Unchecked breakpoints, pseudo-states, interactions or rendering surfaces:
- Any conclusions this record does not support:
