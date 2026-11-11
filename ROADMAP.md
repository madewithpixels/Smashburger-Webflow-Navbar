# SmashBurger — Roadmap

Extracted on 14 October 2026 for Michael's brief #6 from `todo.md` at
`c808ca4`. All 266 checklist items retain their original order and wording,
including historical and superseded instructions. Continuation notes and section
context below are copied from that source. `todo.md` remains the historical record;
maintain current roadmap fields here.

A historical tick maps to **built**, not by itself to sign-off. Under Michael’s
standing decision of 14 October 2026, work built and released or in his use before
that date counts as **accepted (historical)**. The acceptance basis on each such
item links its release/use record alongside the original checklist source.
Built-but-unreleased candidates, prototypes and newer work remain pending; unclear
cases remain pending. Evidence fields are unchanged: **none** means no separate
proof has been assigned here. **Verified (live)** denotes recorded Preview or
published checks, not a fresh check today. Historical acceptance does not certify
future products or superseded designs; see DECISIONS for supersession.
Exit criteria are left blank where the source has no separate criteria; the verbatim
item and its continuation notes retain any explicit required outcomes.

## Immediate attention — 31 October 2026

**Michael now:** Nothing for the authorised local styling brief #164. Agent work comes first; do not re-raise historical access requests without a fresh failure. Local Chrome test permission is recorded, with no publishing.

**Next:** Local R-269 styling changes and checks are built; prepare the bounded Designer/Preview/published comparison on a backed-up disposable site before any consumer or release decision. Keep R-268 separate, and retain the visual review, human/device checks, exact Library-sharing approval and release gates. Future tasks and closed attention requests are preserved with reactivation conditions in the [Boss attention cleanup](webflow/boss-attention-cleanup-2026-10-31.md). Closing a request does not complete its underlying check or grant approval.

## Current route to launch — 16 October 2026

The name and canonical destination are settled. The original item wording and dated evidence below remain as history; this summary gives the current order of work.

1. **Local reconciliation complete.** Boss now explicitly routes to the canonical checkout. Settings evidence is committed as `e599c09`; the seven migration-guide, native-removal, closing-focus and Escape commits are reconciled with canonical repairs. The combined candidate passes 685/685 checks. Original histories and the old working tree are preserved (R-128, R-121, R-155). See [integration evidence](webflow/canonical-reconciliation-2026-10-16.md).
2. **Check the combined candidate in browsers and Webflow.** Complete responsive, scrolling, keyboard/touch, animation, screen-reader and physical-display checks. After approval of the exact Library review, verify a clean linked consumer, its properties/assets, update and rollback (R-037, R-115, R-126, R-155, R-244). **Added 23 October: test agent styling after unlinking when local and imported Library classes have identical names (R-268).** Do not treat the earlier unlink cleanup acceptance as proof of safe agent style targeting.

**Release blocker added 24 October 2026:** Fix runtime CSS overriding Designer layout and appearance, and prove Canvas/Preview/published parity before promoting the combined candidate (R-269). This is separate from ambiguous class targeting (R-268).

3. **Release the renamed version.** Select/promote the verified bytes, generate exact loader/integrity values and verify the real CDN and fallback before release approval. v0.2.6 and old pins remain protected (R-120–R-127).
4. **Finish Lite.** Turn the local examples/workbench into the editable Webflow component, install the released loader, check a blank-project clone and prepare the public clonable (R-164, R-178–R-186).

Designer Extension / Make local remains deferred until Lite works. Mega-menu and commercial/backend choices remain separate (D-014/D-015). Built work and passing simulated tests do not constitute Michael's acceptance or a released product.

Sources: [STATUS current position and checkout handoff](STATUS.md#current-position--16-october-2026); [saved settings evidence](webflow/native-settings-deliveries-2026-10-16.md); [Lite runtime checks](webflow/lite-examples-runtime-2026-10-16.md); D-012–D-018.

## Source context (verbatim)

This checklist is the implementation plan and status record. Completed work is checked only after source or Webflow verification.

Release status, 2026-10-08: v0.2.6 is tagged and deployed to the active Library,
Smashburger, Voice Focus, madewithpixels and Lattice staging sites. Michael
accepted the Preview results and excluded the old test sites from this rollout.
See [the release record](webflow/v0.2.6-release-verification.md) for evidence,
the Library global-style packaging finding, and remaining scope.

## Project constraints


#### R-001 · Build visible structure from native Webflow elements.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 13 (now 14); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-002 · Keep editable content, settings and the embed visible on the Webflow Canvas.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 14 (now 15); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-003 · Prefer Webflow classes, variants and properties over custom code.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 15 (now 16); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-004 · Use no pseudo-elements.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 16 (now 17); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-005 · Keep CSS/native details as the functional baseline.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 17 (now 18); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**

**Brief #76 candidate check — 16 October 2026:** native opening after destroy now passes local regressions from open and closed states across source, candidate distribution, minified output and self-contained Embed. Authored values, repeated destruction and reinitialisation are covered. Browser and real keyboard checks remain open; historical Acceptance does not sign off this unreleased repair. See [local evidence and handoff](webflow/destroy-native-fallback-2026-10-16.md).


#### R-006 · Use JavaScript only for progressive behavior and accessibility enhancement.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 18 (now 19); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**

**Brief #76 candidate check — 16 October 2026:** native opening after destroy now passes local regressions from open and closed states across source, candidate distribution, minified output and self-contained Embed. Authored values, repeated destruction and reinitialisation are covered. Browser and real keyboard checks remain open; historical Acceptance does not sign off this unreleased repair. See [local evidence and handoff](webflow/destroy-native-fallback-2026-10-16.md).


#### R-007 · Allow Webflow Interactions and GSAP to replace built-in panel animation.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 19 (now 20); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-008 · Do not refresh the Webflow `Navbar Light` test page without explicit approval and a confirmed backup.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 20 (now 21); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-009 · Keep this roadmap and `README.md` aligned with implementation.
**State:** built · **Evidence:** verified (local) · **Acceptance:** n/a (housekeeping — no outcome for Michael to try)
**Source:** [todo.md](todo.md), original line 21 (now 22); baseline `c808ca4`.
**Exit criteria:** README and this roadmap describe the checked source, generated files and release baseline accurately.
**Evidence links:** [README.md](README.md); [Brief #13 local generated-runtime comparison](webflow/lite-preparation-local-tests-2026-10-14.md#brief-13-latest-verification--15-october-2026); [v0.2.6 release record](webflow/v0.2.6-release-verification.md).


## Current handoff — 21 August 2026


#### R-010 · Complete a real replacement trial on the in-progress madewithpixels Home page using an installed `SmashBurger CDN` instance, configured to Always collapse and then unlinked for local editing.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 25 (now 26); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-011 · Confirm the unlinked trigger opens and closes, Escape restores focus, utility Link Blocks can be recreated with native Div wrappers, and existing project button classes can style the native SmashBurger summary.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 26 (now 27); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-012 · Identify two migration hazards: page content can paint over a panel when the root has no deliberate z-index, and moving `Menu details` away from its adjacent `Navigation panel` breaks the current CSS presentation even though enhanced ARIA, inertness and runtime state still update.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 27 (now 28); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-013 · Restore the required direct-sibling structure and leave the replacement functionally working. The Brand has been removed locally; project CSS, local component creation and rollout to further pages remain for a later session.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 28 (now 29); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-014 · Park the old Header component in a `display:none` reference wrapper temporarily. Remove it before publication and ensure temporary shared-class changes are reverted.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 29 (now 30); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-015 · Leave the source Library components, repository runtime and released CDN files unchanged during this trial.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 30 (now 31); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-016 · Audit the unlinked Always variant output on the madewithpixels instance: 35 generated selectors across 102 element attachments, comprising 97 declaration-free attachments and five functional root/inner/menu/trigger/panel attachments.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 31 (now 32); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-017 · Remove all 97 declaration-free attachments through the Designer, move the five required declarations onto the local base classes, and verify that the complete 111-node navigation subtree contains no `Always` classes.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 32 (now 33); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-018 · Remove the local inner's fixed `80rem` maximum, retain the Always layout with `max-width: none`, and consolidate root stacking, wrapping, menu visibility, trigger border reset and panel grid/flex sizing onto stable local selectors.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 33 (now 34); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-019 · Verify the cleaned local instance in Webflow Preview at Desktop and 393px: pointer and keyboard open, Escape focus return, ARIA/inert and backdrop state, panel containment and zero horizontal overflow.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 34 (now 35); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-020 · Inspect the published madewithpixels staging cascade and confirm that the pinned `v0.2.0` collapsed-panel selector forces the 24rem right-aligned fallback because `[data-mwp-panel]` sits outside `:where(...)`, ties a normal Webflow class and loads later.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 35 (now 36); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-021 · Refactor the maintained next-release CSS source so panel display, position, insets, alignment, width and transform-origin are zero-specificity fallbacks, while open/closed opacity, visibility, pointer handling and transitions remain protected functional state.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 36 (now 37); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-022 · Add a source regression test that rejects higher-specificity panel geometry and actual `!important` declarations; verify the candidate in a real browser with a full-width destination rule, pointer opening, Escape focus return and synchronized ARIA/inert state.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 37 (now 38); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-023 · Leave the madewithpixels project, MWP Component Library, generated `dist` files, CDN loader and immutable `v0.2.0` assets unchanged. Ship the source correction only through a new semantic release, then deliberately backport it to the local madewithpixels component.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 38 (now 39); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


## 1. Foundation and shared content


#### R-024 · Use one shared set of navigation links for desktop and collapsed layouts.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 42 (now 43); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-025 · Keep the shared panel statically visible on expanded breakpoints.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 43 (now 44); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-026 · Convert the same panel to collapsed behavior at the selected breakpoint.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 44 (now 45); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-027 · Preserve Webflow's automatic current-page class behavior.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 45 (now 46); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-028 · Initially give structural elements custom Navigator display names. The later real-site integration showed that these labels obscure the selectors authors actually need; future Webflow releases will remove them.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 46 (now 47); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-029 · Keep panel content and configuration visible in Designer while Preview starts closed.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 47 (now 48); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-030 · Keep the CSS/enhancement Embed visible in Designer.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 48 (now 49); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


## 2. Trigger and accessibility


#### R-031 · Use native details/summary with a full-size interactive hit area.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 52 (now 53); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-032 · Build the burger from editable native Divs.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 53 (now 54); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-033 · Support two-bar and three-bar icon configurations.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 54 (now 55); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-034 · Add an optional visible Menu label.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 55 (now 56); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-035 · Transform the burger into a close icon without pseudo-elements.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 56 (now 57); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-036 · Refactor open icon geometry so the first and final native line Divs converge on the same centre without relying on one fixed `--mwp-nav-icon-shift`. The maintained source measures bar thickness and gap; local browser and Webflow Preview Embed fixtures verified both icon modes at 3px bars/7px gap, with matching line centres. The CSS-only fallback and released Webflow assets still use the fixed shift; editable native source/consumer and distribution checks remain. See `webflow/icon-geometry-regression.md`. Released in `v0.2.4`: both native source components and the linked SB Test Five consumer measured `7px` on publish and converged all bar centres in both icon modes. See `webflow/v0.2.4-release-verification.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 57 (now 58); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/v0.2.4-release-verification.md](webflow/v0.2.4-release-verification.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-037 · Add visual regression checks for the open two-line and three-line icons at common device-pixel ratios, including odd/even line thicknesses and project-overridden spacing. The local 1x candidate and Webflow Preview full-source Embed fixture passed both modes at 3px bars/7px gap; SB Test Five's linked released default passed both modes at emulated 2x and 3x with 2px bars/5px gap. Candidate editable Webflow source/consumer and versioned distribution remain. See `webflow/icon-geometry-regression.md`. `v0.2.4` passed the published 1x 2px/5px check in both modes; the DPR and odd/even thickness matrix for `v0.2.4` remains. See `webflow/v0.2.4-release-verification.md`. The odd/even thickness matrix also passed on `v0.2.4` (1–4px bars). Deferred: DPR 2×/3× on a Retina display. *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built (by Michael, 5 November 2026) · **Evidence:** verified (live) · **Acceptance:** accepted (5 November 2026)
**Accepted by Michael in boss, 5 November 2026** — checked: Looked at brief #178's result.
**Source:** [todo.md](todo.md), original line 58 (now 59); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/icon-geometry-regression.md](webflow/icon-geometry-regression.md); [generated 120-case local visual fixture](webflow/icon-geometry-matrix-2026-10-31.html)
**Evidence boundary:** Historical live native-fixture checks plus local v0.2.6/source token calculations; rendered linked-candidate and exact-version DPR matrix remain open.
**Brief #25 local regression — 15 October 2026:** maintained source now has a reproducible 120-case geometry model: two and three lines, 1–4px bars, 5/7/9px overridden gaps and simulated 1/1.25/1.5/2/3× pixel grids. The focused command passes. It checks JavaScript-measured shift and rounded line-centre alignment from the maintained CSS rules; it does not render pixels. Physical displays, the Webflow candidate and exact-version distribution remain open. See [local icon geometry regression record](webflow/icon-geometry-regression.md).
**Brief #178 local visual matrix — 31 October 2026:** added a generated local page with 120 open-icon cases from the maintained source CSS and JavaScript: both line modes, 1–4px bars, 5/7/9px spacing overrides and 1/1.25/1.5/2/3× simulated pixel grids. `npm run test:icon-visual` regenerates the page; opening it in a browser computes a rendered-centre and simulated pixel-grid result for each case. The generator ran, but the page could not be opened in Chrome: the browser tool rejected the local `file:` URL. No rendered matrix result or screenshot is claimed. The existing geometry test passed. See the [dated evidence note](webflow/icon-geometry-regression-2026-10-31.md) and [generated fixture](webflow/icon-geometry-matrix-2026-10-31.html). Physical Retina display and Webflow candidate/consumer checks remain separate and unverified.
**Brief #13 latest verification — 15 October 2026:** no source-derived candidate or physical display was available, so this run adds no icon-rendering or physical DPR evidence. The 2×/3× physical-display check remains open; see the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 route check — 15 October 2026:** Chrome DevTools controls were confirmed on the published comparison page, but it is not the source-derived candidate. The Clean Trial probe remains empty/draft and the non-Enterprise workspace has no supported isolated page branch or page-only publish route. No new icon or candidate visual evidence. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 Preview retry — 15 October 2026:** the callable Chrome extension runtime provides DOM, console and viewport inspection, but no request list. A fresh Designer Preview logged `CompilationError: Invalid source code` after wait, reload and fresh-tab recovery. The candidate did not render, so no icon or display-density evidence was added. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 candidate access follow-up — 15 October 2026:** fresh Chrome tab inspection reached the published comparison page only; Chrome's native app window was unavailable and the browser bridge has no Network request list. The source-derived candidate still cannot render. No new icon or display-density evidence. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 Chrome bridge and Preview retry — 15 October 2026:** the bridge now provides read-only DOM evaluation, viewport control and console logs, but no Network request capture. Preview again logged `CompilationError: Invalid source code` after wait, reload and fresh-tab recovery; no icon or display-density evidence was added. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current route readback — 15 October 2026:** the Clean Trial probe remains a draft, four other pages remain drafts, and the last publication is unchanged. The current browser bridge exposes no Network event/list API, and the candidate route remains unavailable; no new icon or display-density check was possible. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current access readback — 15 October 2026:** Webflow `list_sites`/`get_site` succeeded and confirmed unchanged Clean Trial publication with no custom domains. The available Chrome extension surface still provides no request-event capture, and its Chrome app window lookup returned `cgWindowNotFound`. No candidate icon or physical-display density evidence was added. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current staging and Chrome controls — 15 October 2026:** Clean Trial still has no custom domains and the same last publication; its probe is an empty draft with no page branches. Chrome's extension tab reached only the published v0.2.6 comparison; native Chrome remained unavailable after a 30-second wait, and no supported Network request capture was exposed. No icon or physical-display density evidence was added. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 route check — 15 October 2026:** no new icon-rendering or physical-display evidence. The route loaded v0.2.6 CSS and JavaScript, not the source candidate. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

  - Partial Webflow follow-up (2026-10-13): on editable native unlinked elements, maintained source JS measured the 3px/7px geometry at 1×, 2× and 3× in both icon modes; visible line centres matched at 36px and overflow was zero. CSS-only high-DPI rendering also passed at 4px/7px with the expected 11px shift at 2× and 3× in both icon modes. A new 4px/7px pass with maintained JS active produced an 11px auto shift and a visible 3-line X at Tablet; the 2-line JavaScript case and DPR for this pass were not recorded. Webflow Preview rejected a bare-block wrapper on re-evaluation but compiled the IIFE-wrapped source. The original v0.2.6 loader was restored and read back exactly. Linked candidate consumer and versioned-distribution checks remain. See `webflow/icon-geometry-regression.md`.

  - Brief #11 local follow-up (2026-10-14): source, exact v0.2.6 dist/minified/Embed each pass 24 two/three-line, odd/even/custom-gap token calculations. No browser rendering or DPR proof was obtained; this does not close R-037. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

  - Continuation check (2026-10-14): fresh candidate build rerun passed 36/36, but no rendered icon or DPR check was possible because Chrome control was not exposed in this session. DPR 1×/2×/3× visual convergence remains open. See [continuation test record](webflow/lite-preparation-local-tests-2026-10-14.md).

  - Rendered continuation (2026-10-14): Chrome's iPhone 16 preset reported 393×852 at DPR 3 once, but no icon screenshot or line geometry was captured in that preset; the browser subsequently returned to DPR 1. This is not a visual icon pass and does not close the 1×/2×/3× matrix. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

  - Brief #13 (2026-10-15): `npm run test:built` passed 48/48 and restored all 12 generated files. Chrome DevTools exposes viewport, Network and reduced-motion controls, but no candidate was available on an isolated staging route. Physical-display DPR evidence remains open. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
  - Brief #13 route attempt (2026-10-15): page branching returned `not_enterprise_plan_site`; Designer Preview remained at “Compiling custom code…” through wait, reload and fresh-tab attempts. Temporary probe content and eight styles were removed. No candidate rendered, so this adds no icon or runtime evidence. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
  - Brief #13 fresh build and inspection check (2026-10-15): `npm run test:built` passed 48/48 and restored all 12 generated files. The Clean Trial candidate route remains unavailable, so there is no new rendered icon or physical-display evidence. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

  - Rendered icon follow-up (2026-10-14): the fresh local candidate now has open/closed two-line and three-line screenshots and matching geometry at DPR 1, 2 and 3. DPR 2 (iPad Mini) and DPR 3 (iPhone 16) are browser emulation, not physical Retina evidence. Temporary rendered DPR 2 samples also covered 1px/5px, 3px/7px and 4px/9px bars/gaps in both line modes; 3px/7px was also measured at DPR 1 in both modes. Reported auto shifts were 6px, 10px and 13px, with diagonal centres aligned to the middle-bar axis. Browser-only styles were removed after testing. The complete custom geometry×DPR visual matrix and physical-display check remain open. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

#### R-038 · Synchronize native open state, lifecycle state, ARIA and panel inertness.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Brief #77 candidate follow-up — 16 October 2026:** closing now moves focus out of the panel before the runtime hides or disables it. Public close moves focus before changing native open state; native closure checks before runtime state/ARIA/inert writes. The repair is built with local evidence only and awaits Michael's review; historical Acceptance is unchanged. See [focused evidence and limits](webflow/close-panel-focus-2026-10-16.md).
**Source:** [todo.md](todo.md), original line 60 (now 61); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-039 · Close on Escape and return focus to the trigger.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Brief #78 candidate Escape check — 16 October 2026:** Escape stays with the navbar containing focus, regardless of initialisation order. It closes the focused submenu first, then that outer menu on a later Escape, restoring focus to its own summary/trigger. An already-consumed Escape leaves both menus alone. The other navbar retains its open submenu, state and focus. All 144 focused regressions pass across the four local deliveries; the complete candidate gate passes 353/353 and existing source tests pass 37/37; existing single-navbar page-level Escape is retained. No multi-menu scroll-lock or menu-exclusivity change was made. This is local evidence only; browser/assistive-technology checks and historical Acceptance remain separate. See [local evidence and browser limits](webflow/escape-menu-ownership-2026-10-16.md).
**Source:** [todo.md](todo.md), original line 61 (now 62); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-040 · Add optional first-link focus, outside close and link close.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Brief #77 candidate follow-up — 16 October 2026:** enabled link/outside closing safely returns panel focus to the trigger. Outside control focus and explicit false closing settings are preserved; explicit trigger-focus requests remain supported. Nested-link descendant clicks and 0ms/45ms durations pass across all four local deliveries. No browser or assistive-technology claim follows, and historical Acceptance is unchanged. See [focused evidence and limits](webflow/close-panel-focus-2026-10-16.md).
**Source:** [todo.md](todo.md), original line 62 (now 63); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-041 · Add automatic/optional body scroll locking and reliable restoration.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 63 (now 64); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-042 · Respect `prefers-reduced-motion`.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 64 (now 65); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


## 3. Responsive behavior


#### R-043 · Configure collapse through native Webflow component variants.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 68 (now 69); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-044 · Support Never, Tablet, Mobile landscape, Mobile portrait and Always.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 69 (now 70); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-045 · Use Webflow's emitted variant marker for CSS-only behavior.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 70 (now 71); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-046 · Reset native open state safely when crossing between collapsed and expanded layouts.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 71 (now 72); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-047 · Complete a visual pass of all five native Webflow variants at all four core Webflow breakpoints (20/20 live Canvas cases).
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 72 (now 73); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-048 · Verify all five collapse modes across the four core widths in the local reference matrix (20/20 functional state cases).
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 73 (now 74); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-049 · Repeat a browser sweep of all five layouts and five collapse choices at 1280px, 820px, 600px and 400px against the current source candidate. Both 20-case sweeps passed after a demo-only expanded-row wrap correction at narrow widths; see `webflow/browser-matrix.md`.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 74 (now 75); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/browser-matrix.md](webflow/browser-matrix.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


## 4. Layouts and content


#### R-050 · Dropdown, full-width, left drawer, right drawer and overlay layouts.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 78 (now 79); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-051 · Left, center and right dropdown alignment.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 79 (now 80); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-052 · Configurable panel width.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 80 (now 81); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-053 · Native editable backdrop.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 81 (now 82); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-054 · When `Show backdrop` is enabled, support it consistently in every collapsed layout, including Dropdown and Full width as well as Left drawer, Right drawer and Overlay; do not make a dropdown backdrop imply page scroll locking. The two source components now bind this switch to native visibility and `data-backdrop`; the next candidate CSS handles Webflow's capitalized `True`. The candidate and staging fixture passed Dropdown/Full-width checks, but the source Embeds still use v0.2.3 until the next release. Both source Embeds now run `v0.2.4`; published Dropdown (SB Test Five) and Left drawer (self-contained source) backdrops showed with Webflow's `True`. A published Full-width check remains. See `webflow/v0.2.4-release-verification.md`. The Full-width backdrop also passed on the published `v0.2.4` page.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 82 (now 83); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/v0.2.4-release-verification.md](webflow/v0.2.4-release-verification.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-055 · Panel padding, gap, border, radius and shadow remain normal Webflow class styles.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 83 (now 84); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-056 · Native nested-details submenu with independent Escape handling.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 84 (now 85); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-057 · Optional CTA and secondary/social regions.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 85 (now 86); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-058 · Add a native Div chevron to each included submenu with optional visibility and configurable duration, easing and rotation.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 86 (now 87); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-059 · Add optional native Facebook, Instagram, LinkedIn, TikTok, Threads, X, WhatsApp, Telephone and Email Link Blocks with destination props, replaceable icon-image props and visibility toggles.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 87 (now 88); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-060 · Restructure the panel into Secondary navigation then Primary navigation; nest Social and Contact wrappers inside Secondary, and Navigation links plus a final CTA inside Primary.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 88 (now 89); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Qualifier:** Historical wording retained; later direction/checks may supersede this milestone. See DECISIONS and STATUS; built does not mean the full future product is complete.


#### R-061 · Add independent Show primary navigation, Show CTA, Show secondary navigation, Show socials, Show social labels, Show contact links and Show contact labels properties to both delivery editions.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 89 (now 90); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-062 · Evaluate a Component Slot. Decision: do not add one because slots accept component instances rather than arbitrary native link elements.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 90 (now 91); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-063 · Document safe link and submenu editing.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 91 (now 92); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [README.md](README.md)
**Evidence boundary:** Document inspected in this retrofit; this confirms documentation exists, not runtime behavior.


## 5. Built-in motion


#### R-064 · Dropdown, slide left, slide right, slide up, fade, none and custom presets.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 95 (now 96); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-065 · Expose opening/closing duration, distance and easing.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 96 (now 97); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-066 · Add backdrop fade, item stagger and icon duration.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 97 (now 98); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-067 · Preserve closing transitions before final closed state.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 98 (now 99); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-068 · Fix Custom/Fade specificity so external animation can fully replace drawer transforms.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 99 (now 100); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-069 · Keep center alignment independent of animation transforms, including Custom mode.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 100 (now 101); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


## 6. Webflow Interactions and GSAP


#### R-070 · Provide stable hooks for root, trigger, panel, backdrop and items.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 104 (now 105); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-071 · Emit open, opened, close and closed events.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 105 (now 106); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-072 · Expose open, close, toggle and destroy controls.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 106 (now 107); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-073 · Keep state and accessibility working in Custom mode.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 107 (now 108); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-074 · Document the Webflow Interactions two-click setup and its custom-event limitation.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 108 (now 109); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-075 · Supply an event-driven GSAP example.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 109 (now 110); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


## 7. Component properties


#### R-076 · Collapse breakpoint variant.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 113 (now 114); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-077 · Layout, alignment and width.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 114 (now 115); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-078 · Motion, opening/closing duration, distance, easing and stagger.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 115 (now 116); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-079 · Menu label content/visibility and two/three icon bars.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 116 (now 117); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-080 · CTA, secondary region and backdrop visibility.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 117 (now 118); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-081 · Submenu arrow visibility and motion values.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 118 (now 119); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-082 · Named social/contact link destinations, replaceable icon Images and individual visibility toggles; keep labels as ordinary native text.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 119 (now 120); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-083 · Focus, outside close, link close and scroll-lock behavior.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 120 (now 121); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-084 · Add a `Show brand` boolean property to both delivery editions, on by default, which fully hides the Brand from layout, keyboard and accessibility navigation when disabled. Both MWP source editions and the linked SB Test Four self-contained instance passed Designer and published hidden/restored checks; the fresh CDN instance also exposed and applied the switch in Designer. See the linked-component notes below.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 121 (now 122); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-085 · Add clear property groups and tooltips.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 122 (now 123); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-086 · Keep non-attribute-bindable values visible through native Text Blocks.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 123 (now 124); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-087 · Convert `.mwp-css-nav_config` into a compact native Details-based `Smashburger settings` inspector: collapsed by default so it stays out of the author's working Canvas, expandable for a real-time property summary, readable in the Navigator, and hidden after runtime initialization in Preview and published output.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 124 (now 125); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


## 8. Repository deliverables


#### R-088 · Maintain standalone CSS and progressive JavaScript sources.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 128 (now 129); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-089 · Generate the Webflow embed from those sources.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 129 (now 130); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-090 · Maintain an accessible native HTML reference implementation.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 130 (now 131); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-091 · Add an interactive demo covering all layout/motion selections.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 131 (now 132); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-092 · Make the interactive demo work when opened directly from the filesystem without ES-module/CORS failure.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 132 (now 133); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-093 · Prevent the demo's external toggle control from immediately triggering outside-close.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 133 (now 134); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-094 · Preserve standalone root `data-close-duration` configuration.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 134 (now 135); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-095 · Add automated state, focus, outside/link close, backdrop and scroll-lock tests.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Brief #78 candidate Escape check — 16 October 2026:** Escape stays with the navbar containing focus, regardless of initialisation order. It closes the focused submenu first, then that outer menu on a later Escape, restoring focus to its own summary/trigger. An already-consumed Escape leaves both menus alone. The other navbar retains its open submenu, state and focus. All 144 focused regressions pass across the four local deliveries; the complete candidate gate passes 353/353 and existing source tests pass 37/37; existing single-navbar page-level Escape is retained. No multi-menu scroll-lock or menu-exclusivity change was made. This is local evidence only; browser/assistive-technology checks and historical Acceptance remain separate. See [local evidence and browser limits](webflow/escape-menu-ownership-2026-10-16.md).
**Source:** [todo.md](todo.md), original line 135 (now 136); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [Brief #11 local test record](webflow/lite-preparation-local-tests-2026-10-14.md); `tests/runtime-delivery.test.js`.
**Evidence boundary:** DOM/media-query simulation only; fresh-build checks pass. The new breakpoint-timer fix is unreleased and pending Michael; historical Acceptance above is unchanged.
**Brief #73 — 16 October 2026:** Added 80 candidate checks for interrupted opening/closing, repeated public calls, bubbling event order/payloads, native state, focus histories and ARIA/inertness with 280 ms opening and 220 ms closing in Dropdown and Custom motion. Repaired reproduced late completion events before native toggle delivery and cancelled opening focus surviving closure or an `opened` listener's close. Source and all three candidate delivery forms use the same assertions. [Reproduction, evidence and limits](webflow/rapid-menu-reversals-2026-10-16.md). Browser scheduling/rendering, external animation engines and human checks remain open. Scroll-lock ownership, test gate, protected releases and Acceptance are unchanged.
**Brief #68 — 16 October 2026:** Removing an open menu, repeated removal, repeat initialisation, different collapse breakpoints, locking drawers beside non-locking dropdowns, original overflow/padding restoration and independent owner documents pass in source and all three candidate delivery forms. Added 16 tests containing 64 scenario runs to the normal candidate command. No new runtime defect was demonstrated; runtime and generated outputs are unchanged. Nine confirmed failures in immutable v0.2.6 execute as historical TODOs only in the new file; candidate checks have no expected failures. [Precise local evidence and rendered limits](webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md#brief-68--teardown-resize-and-separate-documents). Browser scrolling, visual padding/stacking, Webflow and human/device checks remain open. Acceptance is unchanged.
**Brief #13 latest built-runtime run — 15 October 2026:** all 12 maintained-source checks passed, while 15 checks failed across the immutable distribution, minified files and Embed because they lack the newer stylesheet-failure and breakpoint/focus fixes. The runner restored all 12 generated files. This records the unreleased source/output gap; it does not authorise changing v0.2.6. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 local build — 15 October 2026:** `npm run test:built` passed 48/48; the runner restored all 12 generated files and explicit diff confirmed restoration. This does not add rendered candidate evidence. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current access recheck — 15 October 2026:** Webflow MCP confirms the named probe is still draft and four unrelated pages remain drafts. CUA and Node repl provide no usable request/DOM/viewport inspection for a candidate, and no isolated candidate route is available. The failed-script Network check and candidate Details/focus behavior remain open; previously recorded native Details and closed-link checks were not repeated. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current access readback — 15 October 2026:** Webflow MCP access remains available read-only, but the current Chrome CUA surface has no request-event capture and `cua.getApp("Google Chrome")` returned `cgWindowNotFound`. No source-derived route was available for candidate request, Details or focus checks; no Webflow change occurred. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 route attempt — 15 October 2026:** the backed-up Clean Trial probe was temporarily populated, but Webflow page branching is unavailable on this workspace and Preview stalled after wait/reload/fresh-tab recovery. Temporary code, element and eight styles were removed; the probe reads back empty and draft. No candidate browser behavior is verified. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 candidate access follow-up — 15 October 2026:** current read-only Webflow readback still shows the probe as a draft and four other drafts. Chrome page inspection is available, but no Network request control or accessible Chrome app window was provided; a localhost server was denied by the workspace sandbox. Candidate Details/focus and failed-script capture remain unverified. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 fresh build and inspection check — 15 October 2026:** `npm run test:built` passed 48/48 and restored all 12 generated files. The candidate request, Details/link focus and Full-width/Right short-height checks remain open because no candidate runtime or callable request-inspection control was available. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 DevTools check — 15 October 2026:** visible Chrome DevTools exposes Network and responsive controls, but only on the published v0.2.6 comparison page; no candidate request was captured. Branching requires Enterprise and publishing is site-wide on this workspace, so the failed-script request and candidate Details/focus checks remain open. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current staging and Chrome controls — 15 October 2026:** Webflow readback confirms the probe remains empty/draft, with no page branch; three unrelated pages are also drafts. Chrome's fresh extension tab reached only the published comparison page. Native Chrome lookup failed after a 30-second wait, and neither the extension surface nor Node repl provided Network request capture. Failed-script capture and candidate Details/focus remain open. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 Preview retry — 15 October 2026:** a new Designer Preview logged `CompilationError: Invalid source code` after a 30-second wait; reload/wait and a fresh-tab Preview retry returned the same error. The browser API exposes console logs but no Network request list, and no candidate content rendered. Failed-script request capture and candidate Details/focus checks remain open. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 Chrome bridge retry — 15 October 2026:** confirmed read-only DOM evaluation and viewport controls, but no Network request capture. The backed-up probe remains empty/draft and Preview again failed after wait, reload and fresh-tab recovery. No candidate Details/focus result was added. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Continuation — 14 October 2026:** `npm run test:built` passed 36/36 across source, dist, minified and Embed; generated-file restoration passed. No rendered-browser evidence was obtained. See [continuation test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Focus cancellation regression — 14 October 2026:** a dedicated test now checks that resizing to desktop before the opening timer completes does not apply queued `focusFirst` to desktop links. It passes in maintained source and all three freshly generated deliveries. The exact committed v0.2.6 dist, minified and Embed forms each fail this assertion as labelled TODO. `npm run test:built`: 40/40; ordinary `npm test`: 77 total, 68 pass, 9 expected TODO failures. See [test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 route check — 15 October 2026:** with the published route's script blocked in Chrome DevTools, native Details opened and closed. Tab reached a link while the disclosure was open; once closed, Tab skipped its links and moved to the next visible link. This verifies fallback behavior on the v0.2.6 route only, not the maintained candidate. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 route and request check — 15 October 2026:** DevTools Network captured the known Clean Trial route returning the v0.2.6 CSS and JavaScript (200). Read-only page listing found no separate candidate route; the probe remains empty and draft, with three unrelated drafts unchanged. Candidate checks remain open. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 isolated-route retry — 15 October 2026:** Chrome DevTools showed the existing v0.2.6 JavaScript blocking rule unchecked. The route document stayed pending through a 30-second wait and reload. A fresh tab rendered its navigation, but the loaded runtime could not be confirmed before Chrome input stopped. No candidate failure request was captured; prior fallback evidence remains v0.2.6 only. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 candidate route inspection retry — 15 October 2026:** DevTools Network opened on a fresh isolated-route tab and the pre-existing v0.2.6 script block was unchecked. After the request log was cleared and the route reloaded, its document stayed pending for 30 seconds; Chrome then switched away. A second fresh tab opened, but candidate files and behavior remain unconfirmed. The tabs were closed and the blocking rule was unchanged. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 native fallback follow-up — 14 October 2026:** the maintained CSS with no candidate JavaScript rendered a labelled native Details trigger and its sibling navigation links on Clean Trial staging. Chrome Space/Enter toggled the trigger, Tab reached the first link, and Shift-Tab returned to the trigger. The temporary WHTML and page-head stylesheet were removed; readback shows Body only, blank code and `draft: true`, and the staging route returns 404. When closed, the screenshot hid the panel but Chrome's accessibility tree still listed the links; keyboard reachability in that state remains open. This did not simulate a failed network request, test the JavaScript runtime, or check other layouts. See [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Closed-link keyboard follow-up — 14 October 2026:** a fresh Tab after closing the native Details trigger did not focus either navigation link; the refreshed Chrome accessibility tree omitted both. The temporary fixture was removed and the probe returned to empty/draft; the staging route returned 404 after subdomain-only cleanup publication. See [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 browser keyboard follow-up — 15 October 2026:** on a fresh Chrome tab at the published Clean Trial comparison page, browser keyboard input opened nested “More” with Space and closed it with Escape; accessibility readback showed focus returned to the trigger. This is v0.2.6 comparison evidence, not candidate behavior. The current browser interface has no viewport, console or request inspection. No Webflow change or publication occurred. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Fresh-build follow-up — 14 October 2026:** a new `npm run test:built` run completed with 34 passes and 14 failures. Maintained-source checks passed; failures were in immutable committed v0.2.6 dist, minified and Embed deliveries where the newer local fixes are not present. All 12 generated files were restored to the clean pre-run commit and verified byte-for-byte. This is a failed current delivery gate, not a new source defect or release change. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Fresh-build and published nested-menu check — 14 October 2026:** `npm run test:built` passed 48/48 across source and all generated deliveries; all 12 generated files were restored. On the published Clean Trial Tablet-collapse page, a real browser click opened the nested “More” disclosure and Escape closed it with focus returned to the trigger. This is v0.2.6 nested-menu evidence only; no source-candidate viewport, outer-panel close or DPR geometry was checked. The candidate probe remains Body-only/draft and the site has no custom domains. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 fresh-build verification — 14 October 2026:** from `fb78438`, `npm run test:built` passed 48/48 across maintained source and freshly generated dist, minified and Embed deliveries. All 12 pre-run generated files were restored; explicit generated-path diff, `git diff --check` and worktree readback passed. This is local candidate-build evidence only. Automatic failed-script request capture, Preview compilation, physical/human accessibility and device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback remain open. No Webflow change, sharing or publication occurred. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 browser-surface check — 14 October 2026:** on a fresh Chrome tab at the published Clean Trial comparison, “More” closed on Escape and focus returned to its button in the accessibility tree. This reconfirms v0.2.6 only. The browser surface offered no viewport emulation, console logs or DevTools request capture; no candidate layout or runtime claim follows. The tab was closed and no Webflow change occurred. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 staging readback — 15 October 2026:** a fresh Chrome tab reached the published Clean Trial comparison page and its accessibility tree showed the expected navigation and nested “More” control. This is published v0.2.6 readback only. The available browser API exposed no viewport, console or request controls, so it adds no source-candidate evidence. The new tab was closed; no Webflow change or publication occurred. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 linked Smashburger staging interaction — 15 October 2026:** a fresh Chrome tab rendered the published Smashburger staging navigation. A pointer click opened nested “More”; Escape closed it and returned focus to the button. This is linked-consumer staging behavior, not candidate or responsive evidence. The tab was closed; no site changes or publication occurred. Viewport, console and request controls were unavailable. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 Clean Trial state readback — 15 October 2026:** Webflow MCP confirms the probe remains `draft: true`, Clean Trial has no custom domains, and four other pages remain drafts. A fresh Chrome tab displayed the published comparison navigation, but the available browser surface still has no viewport, console or request capture. No publication or site mutation occurred. Do not publish the whole site to reach the probe while unrelated drafts remain. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 current keyboard check — 15 October 2026:** fresh staging Chrome input opened “More” with Space and Escape returned focus to its trigger. This reconfirms published v0.2.6 only. Candidate responsive/outer-panel checks and the browser viewport/console/request controls remain unavailable; no site change or publication occurred. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 browser-control follow-up — 14 October 2026:** the fresh-tab screenshot of the published v0.2.6 desktop page is not candidate evidence. The browser surface lacked responsive viewport and page-script controls, so candidate layout and outer-panel close checks remain open. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 access review — 15 October 2026:** no test was repeated because the candidate probe is already cleaned up and the browser control available in this run has no DOM, viewport, console or request inspection. The earlier Designer route exposed no usable Preview control. Failed-script request capture and candidate Preview remain open; see [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 responsive and interaction follow-up — 14 October 2026:** using the supported Chrome viewport control on published Clean Trial `/unlink-fallback-isolation`, document overflow was zero at 2,048, 1,280, 992, 991, 820, 768, 767, 480, 393 and 320px widths. At 320×568, the open panel stayed within the viewport and had internal scrolling. Real Tab/Shift-Tab, Space, Enter, nested/outer Escape with focus restoration, pointer open, outside click and Home link closing passed. DPR was browser-reported 1; console had no warnings or errors. This is v0.2.6 fixture evidence only. Candidate rendering is still blocked by the absence of an isolated publishable route; the clean probe remains an empty draft and full-site publication would include unrelated pending pages. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Fresh-build follow-up — 14 October 2026:** the latest fresh-build run reports 34 passes and 14 failures in the committed v0.2.6 deliveries, consistent with the intentionally unreleased source fixes. All generated outputs were restored and verified; acceptance remains pending for newer work. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Actual viewport and focus follow-up — 14 October 2026:** Chrome DevTools responsive emulation reproduced the published v0.2.6 opening/closing race at 800→1200 CSS px after real Space input. A clearly labelled source-derived staging candidate kept desktop links visible in the accessibility tree and Tab-reachable after 700 ms in both directions. Follow-up exposed focus staying in desktop links when resizing back to collapsed mobile; maintained source now recognizes the `MediaQueryListEvent` and focuses the trigger before hiding the panel. Its new test passes across source and fresh generated deliveries; unchanged v0.2.6 outputs carry three additional expected TODOs. The rebuilt temporary candidate passed the desktop→mobile focus transition in rendered Chrome. Both candidate Embeds were removed; readback shows an empty draft probe, staging is subdomain-only and the temporary route is 404. `npm test`: 85 total, 70 pass, zero unexpected failures, 15 expected TODOs; `npm run check` passed; `npm run test:built`: 48/48 with all 12 generated outputs restored. These are emulated CSS viewport and browser keyboard/accessibility-tree checks, not physical-display or human screen-reader checks. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).


**Rendered continuation — 14 October 2026:** the published v0.2.6 staging page reproduced both resize races. A fresh source-derived local browser bundle passed opening and closing resize after 350ms, leaving desktop links visible and operable. Browser UI input passed Tab/Shift-Tab/Enter/Space, nested/outer Escape, trigger/submenu focus restoration, link/outside close and a left-drawer backdrop close. At 320×400 the candidate panel scrolled without document overflow after matching the optional 5rem header-offset token; script-free native Details open/close and link focus also passed. Follow-up rendered full-width, both drawer directions and overlay at 393×852 CSS pixels with zero document overflow; Chrome reduced-motion emulation reduced transitions to 0.01ms and restored them when disabled. In two existing Webflow Preview fixtures, turning custom code off allowed native Details open/close and keyboard link focus; with code on, both stalled at `CompilationError: Invalid source code`. A new empty draft probe page with empty page-level code fields stalled the same way. This rules out those page elements and page-level code but does not distinguish site-wide custom code from Webflow's Preview compiler. The scripts readback endpoint returned 404 and supplied no source location, so root cause is unknown and candidate Preview remains unverified. These are rendered browser checks, not physical-keyboard, touch, assistive-technology or OS motion-setting evidence. Published staging remains pinned to v0.2.6; no candidate was shared or published. The named draft probe is retained unpublished for diagnosis. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Preview/asset follow-up — 14 October 2026:** after Michael restarted the connection, the Designer MCP returned current page Home and mode design. Site/page script readback still returns 404. A local CSS-failure harness was blocked by localhost-bind `EPERM`, so Chrome DevTools request blocking was used on the separate backed-up `Unlink Fallback Isolation` staging tab instead. Blocking the exact v0.2.6 CSS URL preserved native menu open/close at emulated DPR 2; the exact JS URL also preserved native disclosure behavior, including Enter/Space toggling. The width field was set to 393, but that tab did not produce additional geometry evidence. Temporary rules were removed or disabled, the viewport restored to 1280px, and the page reloaded. Source-candidate CSS-failure behavior was later rendered locally and hardened; candidate JS failure and Webflow candidate Preview remain open. The empty compiler probe remains an unpublished draft. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Source-candidate CSS-failure hardening — 14 October 2026:** a fresh local build exposed that, when its component CSS was missing, the runtime still set `aria-hidden` and `inert` while the panel was painted. The source runtime now checks a CSS readiness custom property before enhancing the native menu. Added a regression test across source, dist, minified and Embed outputs. `npm test` passed 69 tests with 12 expected TODO cases (nine immutable v0.2.6 resize-race demonstrations and three immutable v0.2.6 CSS-failure demonstrations); `npm run test:built` passed 44/44 and restored all 12 generated outputs. A fresh source-derived local browser render reported `ERR_FILE_NOT_FOUND` for its component stylesheet, then showed no runtime state, no `aria-hidden`/`inert`, and 14 navigation links in the accessibility tree; the first link had `tabIndex=0`. Responsive width was configured as 393, while `innerWidth` reported 634, so this is not narrow-layout geometry proof. Local candidate fix is pending and unreleased; candidate Preview, candidate JS failure and Webflow staging remain open. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Staging/keyboard continuation — 14 October 2026:** with Michael's authority, Clean Trial, Smashburger and MWP Component Library were published to their Webflow subdomains only. Chrome rendered the Clean Trial published fallback page. On the separate published Smashburger home page, actual Space/Enter input toggled a nested disclosure with focus retained; this is not a Navbar Light resize-candidate result. The probe remains a draft and Preview's `CompilationError: Invalid source code` still blocks candidate Webflow runtime verification. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Rendered source-candidate staging check — 14 October 2026:** On Clean Trial staging, a freshly built, clearly labelled candidate passed opening and closing timer-race assertions in Chrome after 400 ms: expanded state, visible/enabled desktop links, `aria-hidden=false`, `inert=false`. Chrome reported 2060 CSS px / DPR 1. The harness dispatched a synthetic Tablet `matchMedia` event; actual viewport-resize behavior remains open. The Embed was removed, the probe returned to empty/draft, and the subdomain-only site was republished; the temporary route returned 404. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 fresh-build follow-up — 14 October 2026:** `npm run test:built` passed 48/48 across source, freshly generated dist, minified and Embed outputs. The runner restored all 12 generated files, and an explicit diff of those paths was empty. A temporary no-runtime candidate retained maintained CSS, but published Chrome did not render its trigger or links, so this does not verify the candidate fallback. Designer readback showed native Details/Summary; cleanup readback showed Body only, blank page code and `draft: true`, and the staging route returned 404. See [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #12 source and fixture readback — 14 October 2026:** the Library source, linked `/demo` and dedicated staging Home each read back 60 matching component properties; nine source/destination icon IDs were different, while asset names and sizes matched. The unlinked Clean Trial fixture read back 85 nodes, 27 navigation class variants, nine Images, two Embeds and its original Tablet-collapse settings. These are Designer source/property reads only. A Chrome attempt to open the Smashburger staging origin was blocked by the browser approval gate; linked and dedicated staging renders were not checked. No component, asset or fixture was changed. See the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 native fallback staging check — 14 October 2026:** the browser session became available for the backed-up Clean Trial probe. With maintained CSS and no candidate component JavaScript, the correctly structured Details/Summary trigger and sibling links rendered; real Space/Enter, Tab and Shift-Tab checks passed. Cleanup readback confirmed an empty draft, blank page code and a 404 temporary route after subdomain-only republishing. The closed panel looked hidden, but the accessibility tree still listed its links. Closed-link keyboard reachability, actual candidate network failure, responsive source-candidate layouts, motion and icon rendering remain open. No Library sharing/update occurred. See the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Closed-link keyboard follow-up — 14 October 2026:** after Enter closed the native Details trigger, Tab did not focus either navigation link. The refreshed accessibility tree omitted both links. This resolves the earlier transient listing for keyboard navigation in this fixture, not as a human screen-reader test. Both temporary roots and the page-head CSS were removed, the probe returned to empty/draft, and the temporary staging route returned 404 after publication to the Webflow subdomain only. See the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Candidate JavaScript request attempt — 14 October 2026:** the backed-up Clean Trial probe temporarily contained a labelled native Details/Summary fixture, maintained candidate CSS and a footer URL for a deliberately missing candidate script. Designer readback confirmed the full structure and code; published staging Chrome showed the label and trigger. Input timed out before the trigger was operated or the request failure was read in DevTools, so this is not a passing network-failure/fallback check. The temporary root was removed, head/footer code blanked, the page returned to draft, and the route returned 404 after staging cleanup publication. Fresh-build verification passed 48/48 and restored all 12 generated files. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 missing-script fallback follow-up — 14 October 2026:** a new labelled temporary probe on backed-up Clean Trial retained `src/navbar-light.css` and referenced `/__brief12-candidate-js-unavailable__.js`. Chrome's real Space/Enter/Tab/Shift-Tab input confirmed native Details open/close and link focus. Direct HTTPS navigation to the missing script path returned Webflow's 404 page. The Chrome control did not expose the automatic page-load request in DevTools, so its network entry remains unobserved. The temporary root (`410f6f05-7d04-7d56-96c8-3cb570dca2cd`), page-level CSS/script code and five `brief12-*` styles were removed; readback shows Body only, blank head/footer code and `draft: true`. Clean Trial's Webflow subdomain was republished after cleanup; `customDomains` is empty and the temporary route returns 404. No source, Library, consumer or released asset changed. See the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Fresh-build and rendered follow-up — 14 October 2026:** `npm run test:built` passed 48/48 and restored all 12 generated files. On the published Clean Trial v0.2.6 page at 2,044 × 1,131 CSS px, a real click and Escape closed the nested “More” disclosure and restored focus. The page reported DPR 1, no horizontal overflow and a hidden outer trigger at this wide desktop size. This is released-page evidence, not Lite-candidate geometry or physical-display evidence. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

#### R-096 · Document structure, classes, properties, variants, hooks and integration patterns.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 136 (now 137); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [README.md](README.md)
**Evidence boundary:** Document inspected in this retrofit; this confirms documentation exists, not runtime behavior.


#### R-097 · Document the reusable existing-Navbar replacement workflow, current structural contract, stacking diagnosis, native Menu Button restriction and accessibility checks in `webflow/migration-guide.md`.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 137 (now 138); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/migration-guide.md](webflow/migration-guide.md)
**Evidence boundary:** Migration guide inspected; functional verification remains in its historical records.


## 9. Optional jsDelivr distribution

Keep the current Canvas-visible, self-contained Embed as the dependable default. Add a second, explicitly optional distribution mode that loads versioned CSS and progressive-enhancement JavaScript from jsDelivr while leaving the native Webflow structure, classes, component properties and no-script behavior intact.


#### R-098 · Choose public exact-version GitHub tags for the first release; reconsider npm after package naming and ownership are settled.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 143 (now 144); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-099 · Owner selected and added the MIT licence before the first public tag.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 144 (now 145); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-100 · Produce release-ready `dist` CSS and JavaScript files, minified files and source maps from the maintained source.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 145 (now 146); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-101 · Generate exact semantic-version URLs; never generate `latest`, branch or floating version-range URLs.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 146 (now 147); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-102 · Add a small Canvas-visible CDN loader Embed with a readable runtime version while normal editable Webflow settings remain native.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 147 (now 148); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-103 · Preserve useful CSS/native behavior if the enhancement script is blocked, late or unavailable.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 148 (now 149); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-104 · Define non-destructive CSS/JavaScript load diagnostics without hiding native navigation content.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 149 (now 150); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-105 · Add generated SHA-384 Subresource Integrity and `crossorigin="anonymous"`; document that CSP must allow the pinned jsDelivr style/script origin and that jsDelivr receives normal CDN request metadata.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 150 (now 151); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-106 · Add automated release checks that compare CDN artifacts with the repository build before publishing a tag/package.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 151 (now 152); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-107 · Publish and byte-verify the immutable `v0.1.0` GitHub/jsDelivr release.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 152 (now 153); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-108 · Publish and byte-verify the immutable `v0.2.0` GitHub/jsDelivr release; update the CDN component's exact URLs, SRI values and metadata.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 153 (now 154); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-109 · Create a separate `Navbar Light CDN` Webflow component and `/navbar-light-cdn` test page after backup `V1.0.0 First Release`; keep the self-contained component/page untouched.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 154 (now 155); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-110 · Add a minimal native Webflow visual baseline limited to structure, spacing, hit areas and `currentColor`; leave typography, text colour and decoration to destination-project base styles.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 155 (now 156); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-111 · Build a native MWP Component Library demo shell with Webflow variables, base typography, a restrained homepage and a `/style-guide` class-retention page, while keeping its theme classes out of Navbar Light.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 156 (now 157); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-112 · Visually approve the new Home and Style Guide pages in Designer/Preview, then publish them from Webflow.
**State:** in progress · **Evidence:** verified (local, limited to source edit and candidate generation) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 157 (now 158); baseline `c808ca4`.
**Exit criteria:**


#### R-113 · Create a clean Webflow site named `Smashburger` and install `SmashBurger CDN` from the shared MWP Component Library. Verify that component identity, all five variants, all 57 property values/bindings, native Canvas rendering and nine remapped SVG assets survive; confirm ordinary clipboard paste is flattened and is not the supported installation route.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 158 (now 159); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-114 · Test the pinned `v0.2.0` cold-load path on the clean `Smashburger` site, byte-compare cache-bypassed jsDelivr responses, exercise CSS/JavaScript error diagnostics without removing native fallback content, and confirm successful published recovery.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 159 (now 160); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-115 · Test an explicit rollback and semantic-version upgrade on cloned Webflow sites after the first release from the renamed canonical repository.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 160 (now 161); baseline `c808ca4`.
**Exit criteria:**
**Local preparation — 16 October 2026, brief #69:** Added an [executable offline migration/rollback rehearsal](webflow/offline-migration-rollback-2026-10-16.md) using the archived legacy header, the explicit class table and paired v0.2.6/candidate deliveries. It checks authored content preservation, focused interaction and exact restoration of the saved parsed fixture. This is local preparation only; this item remains planned with cloned-Webflow semantic-version upgrade/rollback outstanding. Its State, Evidence and Acceptance fields are unchanged.

**Real-site evidence template — 10 November 2026, brief #410:** The [cloned-site upgrade and rollback checklist](webflow/r115-cloned-site-upgrade-rollback-checklist.md) links to the offline rehearsal and captures exact old/new versions, component and authored state, backup, upgrade, rollback and restored-page evidence. It explicitly says the real-site trial remains untested until performed on a named, backed-up clone. Template preparation only; State, Evidence and Acceptance remain unchanged.

**Offline fixture follow-up — 10 November 2026, brief #420:** Added explicit local checks for preservation of responsive/focus author CSS, an unsupported legacy-looking class and a Webflow-style numbered collision class; the full saved fixture is asserted exact after rollback. Focused rehearsal checks passed 6/6. This is fixture-only evidence; the cloned-Webflow upgrade and rollback remain unrun. State, Evidence and Acceptance remain unchanged.


#### R-116 · Document switching safely between self-contained Embed, pinned CDN and self-hosted delivery without rebuilding the component.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 161 (now 162); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [README.md#switching-delivery-without-rebuilding-the-navigation](README.md#switching-delivery-without-rebuilding-the-navigation)
**Evidence boundary:** Delivery-switching instructions inspected; no switch performed tonight.


#### R-117 · Let the future Designer Extension choose the delivery mode and pin the installed version explicitly.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 162 (now 163); baseline `c808ca4`.
**Exit criteria:**


### SmashBurger repository and local-folder rename

**Current direction — Michael, 15 October 2026:** SmashBurger and the `sb-nav` mapping remain accepted. Michael's completion brief authorises Codex to do the transfer and necessary remote operations. Full branch/tag history is now in the canonical repository and selected clone. The source migration is packaged as an unreleased candidate; existing release bytes, compatibility URLs and the old repository remain protected. See [the migration record](webflow/canonical-rename-2026-10-15.md).


#### R-118 · Commit and push all current portability, Library-installation and cleanup documentation before changing repository identity (`58e1407`).
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 166 (now 167); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.6 release](webflow/v0.2.6-release-verification.md) and [POC record](webflow/smashburger-poc-acceptance.md), released navbar, repository deliverables and source/consumer use before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-119 · Create `madewithpixels/SmashBurger-Webflow-Navbar` as the new canonical GitHub repository with the complete Git history; use `smashburger-webflow-navbar` for the package name.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (31 October 2026)
**Source:** [todo.md](todo.md), original line 167 (now 168); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** The verified empty canonical remote received both branches and all eight existing tags without force. The selected clone contains the complete history; package naming is applied. No new release was published. Acceptance remains pending.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)


#### R-120 · Keep `madewithpixels/Webflow-Navbar-Light` available as an archived compatibility repository so existing immutable `v0.1.0` and `v0.2.0` jsDelivr URLs continue to resolve; do not rely on GitHub repository redirects for the third-party CDN contract.
**State:** in progress · **Evidence:** verified (live) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 168 (now 169); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Old repository retained unchanged. Six v0.1.0/v0.2.0/v0.2.6 pinned asset reads returned 200 and matched tagged bytes. Archiving remains gated by R-125–R-127.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)


#### R-121 · Rename every portable component class from the legacy `mwp-*` / `mwp-css-nav_*` namespace to a documented `sb-*` namespace (`SmashBurger`) as part of the canonical repository rename. Update source HTML/CSS/JavaScript, generated Embeds, demos, Webflow components, clonable, documentation and tests together; treat this as an explicit versioned class migration rather than silently changing an existing release. Reserve `SmashBurger Lite` for the free clonable's product name, not its class prefix.
**State:** in progress · **Evidence:** verified (live) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 169 (now 170); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Source, demo, fixtures, tests and isolated generated output now use accepted sb-nav classes as 0.3.0-rc.1. Webflow component/Library/clonable rollout remains open; this is not a released class migration.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)
**Library follow-up — 15 October 2026:** [Both actual Library candidates](webflow/library-sb-nav-candidates-2026-10-15.md) retain properties/assets/five variants and pass source self-contained Preview checks. Sharing, linked consumer upgrades and clonable rollout remain open.
**Native settings — 16 October 2026, brief #74:** Supported menu attributes, root attributes and settings text pass 168 new local checks across source, candidate distribution, minified output and self-contained Embed. No runtime departure was reproduced. [Input order, saved Library sources and limits](webflow/native-settings-deliveries-2026-10-16.md). This does not verify linked consumers or complete the migration.
**Live evidence — 15 October 2026:** [New Smashburger Test](webflow/new-smashburger-test-2026-10-15.md): backed-up fresh native fixture, exact saved candidate Embeds, authorised staging publication, 35 layout/motion pairs, 25 collapse/width checks, keyboard/focus, short-height and genuine no-JavaScript fallback. This does not verify Library property/asset retention, upgrades or the future clonable.
**Local follow-up — 16 October 2026:** Fixed overlapping overlay scroll locks in the unreleased candidate and added a regression across source, candidate distribution, minified output and Embed. [Check record](webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md). Rendered stacking and short-height placement remain unverified.
**Offline rehearsal — 16 October 2026, brief #69:** [Migration and rollback tests](webflow/offline-migration-rollback-2026-10-16.md) preserve authored extra classes, content, order, links, accessible names, image references and custom settings through repeated explicit class mapping and paired delivery changes. Rollback restores the saved parsed fixture exactly. No Webflow records or released files changed; consumer and clonable rollout remain open.

**Offline fixture follow-up — 10 November 2026, brief #420:** Added focused preservation assertions for responsive/focus author CSS, an unsupported legacy-looking token and a Webflow-style numbered collision class. All six rehearsal tests pass, with repeated conversion/rollback per delivery form and exact full-fixture restoration. This does not constitute Webflow component, Library or clonable rollout evidence.

**Candidate release pack — 10 November 2026, brief #430:** [Current local candidate inventory, hashes, gate results and separate approval/live checks](webflow/candidate-release-evidence-pack-2026-11-10.md). The pack does not complete the class migration or release.


#### R-122 · Audit non-class public hooks separately during the rename. The 2026-10-14 audit records the class-only boundary and retained runtime attributes, custom properties, JavaScript APIs/events, diagnostics and variant markers. See `webflow/class-namespace-migration-audit.md`.
**State:** built · **Evidence:** verified (local) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 170 (now 171); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Retained source contracts inventoried from 0864f82 are asserted in source and candidate outputs. Data hooks, variables, API/event and diagnostic names, variant markers and old files/URLs are preserved.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)
**Native settings — 16 October 2026, brief #74:** [Behavioural configuration evidence](webflow/native-settings-deliveries-2026-10-16.md) now covers supported input priority, explicit false values, preset normalisation and separate opening/closing durations in all four local deliveries. Both saved Library editions' configuration bindings are resolved locally with defaults and selected overrides. No public hook, snapshot, property or binding changed; no linked-consumer claim is made.


#### R-123 · Add a generated-output assertion that a clean renamed release contains no legacy `mwp-*` class tokens while still rejecting accidental changes to retained runtime attributes or compatibility hooks.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (31 October 2026)
**Source:** [todo.md](todo.md), original line 171 (now 172); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Added source/generated class and retained-hook assertions, negative fixtures and 17 immutable-file hashes. Included in candidate checks and CI; no release was tagged.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)


#### R-124 · Audit public-facing HTML, CSS and JavaScript comments, diagnostics, demo copy and generated banners for stale `Navbar Light` wording. Use `SmashBurger` for the product name while retaining versioned filenames, CDN URLs, Webflow variant markers and compatibility API aliases until an explicitly tested migration can replace them.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (31 October 2026)
**Source:** [todo.md](todo.md), original line 172 (now 173); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Audited maintained sources, new banners/console text and demo copy. New output says SmashBurger. Historical Webflow readbacks, filenames, API/diagnostic identifiers and exact old URLs retain their actual names; current guides explain the boundary.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)


#### R-270 · Burger menu navigation button jumping colour and size check
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (10 November 2026)
*(accepted by Michael in boss, 10 November 2026)*
**Try:** Open and close the menu on the Voice Focus and madewithpixels staging pages at desktop and narrow widths. Compare the button’s colour and size while the menu closes; the button on madewithpixels changes colour without a fade, and neither button changes size (R-270).
**Task:** 43612352 in your boss list
**Done when:** Check the trigger's colour and size in closed/open/closing states, compare its transition with the panel close time, and record the responsive conditions.
**Source:** Michael's task #43612352 in the Boss inbox, 3 November 2026; title retained as given there.
**Evidence:** The Voice Focus trigger fades over 180 ms while its panel takes 280 ms to close. The madewithpixels trigger changes colour with no fade while its configured panel close is 220 ms. No trigger size change was found in the inspected rules. Only the stated 511 px and 2044 px widths were checked; see [browser evidence and limits](webflow/evidence/r270-r271-v027-2026-11-04.md).

#### R-271 · Bug in Webflow-Navbar-Light (v0.2.6, navbar-light.min.js):
**State:** built · **Evidence:** verified (live) · **Acceptance:** pending
**Try:** On the Voice Focus and madewithpixels staging pages, open the menu and resize the window without crossing its desktop/mobile layout change; it should stay open. Then cross that change and check the layout switches, and that Escape, a second click on the menu button and a menu link each close it (R-271).
**Covers:** R-125
**Owner:** agent
**Source:** Michael's description in this session, 4 November 2026; task #43612358 in Boss.
**Exit criteria:** A same-breakpoint resize leaves an open menu alone; a real breakpoint change still switches to the correct collapsed or expanded state; Escape, second click and link closing continue to work.
**Task:** #43612358 in your boss list.
**Evidence:** v0.2.7 returns early when the collapsed/expanded result has not changed. All 43 local tests pass, including same-state resize, real breakpoint change, Escape, second click and link closing. Published CDN files match the tested files byte for byte. Consumer-site browser checks remain open; see [release and test evidence](webflow/evidence/r270-r271-v027-2026-11-04.md).

**4 November 2026 — v0.2.9 rollout:** The release also ignores synthetic resize events and uses the exact-byte `.js` CDN URL. MWP and Voice Focus staging now use the v0.2.9 loader; Voice Focus saved-code readback and subdomain publication are confirmed. The release evidence is in [v0.2.9 verification](webflow/v0.2.9-release-verification.md).

#### R-272 · Update the shared SmashBurger candidate and verify the disposable staging page has no duplicate script-name error.
**State:** in progress · **Evidence:** verified (live) · **Acceptance:** pending
**Task:** 43612398 in your boss list
**Source:** Michael's task #43612398 in the Boss inbox, 10 November 2026; title retained as given there.
**Done when:** The shared SmashBurger candidate matches the generated candidate Embed, and reloading the disposable staging page shows no duplicate script-name error. Record whether the check covered the saved Designer page, Preview or the published page.
**Evidence (10 November 2026):** The local generator now wraps its JavaScript in a private scope; the saved Library candidate already had that wrapper and matches the rebuilt Embed exactly. Candidate checks passed 693/693. On 10 November, the exact Disposable SB test site was published to its Webflow subdomain only, with no custom domains. The staging Home page loads and its accessibility tree exposes three menu navigation rows. At the 605 × 900 screenshot viewport, the bottom row's panel showed all its links; the middle panel's first Home link was in the accessibility tree but not visible; the top panel's upper content was visibly hidden behind lower rows. The exact CSS viewport width and row identities remain unknown. Space opened the top menu and Escape closed it with focus remaining on the trigger. No Console was read, so the duplicate-name check remains open. The current saved-page Preview showed Webflow's general “CompilationError: Invalid source code”, with no specific duplicate-name message. The nightshift source review found no concrete local syntax or scope defect in the generated Embed path; it does not prove what Webflow Preview parses or explain the general compiler error. No Library share occurred. See [STATUS](STATUS.md#10-november-2026--published-mobile-menu-and-keyboard-check--codex), [nightshift source review](STATUS.md#10-november-2026--local-preview-error-source-review--codex) and the [earlier Preview diagnosis](webflow/lite-preparation-local-tests-2026-10-14.md#empty-page-preview-compiler-probe).
**Preview follow-up:** [Capture card](webflow/r272-preview-error-capture-card-2026-11-10.md) records the page state, candidate, viewport, exact Console error and source location, plus any related script request or response. It keeps the general compilation error distinct from the unconfirmed duplicate-script hypothesis and the local source review.
**10 November 2026 — Preview capture:** [Chrome observation](webflow/r272-preview-error-capture-2026-11-10.md) records the visible general error and its two `webflow.js` stack locations. The candidate version and related request remain unidentified; a cleared-log reload redirected to sign-in before the error could be reproduced. No duplicate-script message was observed.

#### R-125 · Build, test and publish a new semantic release from `SmashBurger-Webflow-Navbar`; generate exact new jsDelivr URLs and SHA-384 integrity values.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-271)
**Task:** 43612101 in your boss list
**Source:** [todo.md](todo.md), original line 173 (now 174); baseline `c808ca4`.
**Exit criteria:**
**16 October 2026 — brief #72:** Candidate reproducibility verification now builds in a disposable copy and preserves existing paths and bytes on matching, stale and failed builds. Nine bounded fixture checks cover partial failure, new/removed files, termination and deliberate build output. The real verification and deliberate build retain all current output bytes. No release, pin or Acceptance changed. See [behaviour, evidence and limits](webflow/candidate-reproducibility-2026-10-16.md).
**16 October 2026 — brief #70:** Repaired the local test gate using executed expected failures only for confirmed immutable v0.2.6 overlap defects. Fresh candidate checks discover the full maintained-source test set and keep those assertions mandatory. Test files run one at a time to avoid existing timeout contention. No release or runtime change. See [commands, results and limits](webflow/test-gate-repair-2026-10-16.md).
**15 October 2026 — Codex:** Candidate is built/tested with proposed canonical exact-version URLs and SHA-384 values. No new release tag or CDN publication exists. Staging fixture publication is a separate test-site action and does not complete this release item.

**4 November 2026 — v0.2.9:** Released and merged into `main`; exact CDN files were byte-checked, and MWP plus Voice Focus staging use v0.2.9. The `0.3.0-rc.1` class migration remains an unreleased candidate. See [release verification](webflow/v0.2.9-release-verification.md).
**Evidence links:** [candidate and release boundary](webflow/canonical-rename-2026-10-15.md). [Library CDN verification](webflow/library-sb-nav-candidates-2026-10-15.md) reads an already-pushed exact commit and verifies bytes/SRI locally; this does not create or complete a semantic release.

**Candidate release pack — 10 November 2026, brief #430:** [Current candidate gate, exact-version loader metadata and promotion requirements](webflow/candidate-release-evidence-pack-2026-11-10.md). Candidate URLs remain illustrative; hosted release and CDN checks are outstanding.

**16 October 2026 — brief #67:** Repaired candidate verification integrity using raw local Git blobs at the unchanged older pin. Both CSS/JavaScript values match; the current-source illustrative loader remains separate and unchanged. No semantic release, version or URL pin changed. See [repair and local checks](webflow/library-verification-integrity-2026-10-16.md).

**10 November 2026 — brief #424:** Named every workflow step and added an always-run job summary with checked commit, package version, completed steps and failed step names. Local YAML parsing and simulated success/failure summary generation passed. No GitHub run was inspected; the summary script is not exercised by the hosted Actions runner yet.

**10 November 2026 — brief #450:** The published Home opened at the named Webflow subdomain and exposed three navigation containers, but the authorised Chrome controls did not provide a readable Console. No fresh Console reload, menu interaction, CSS viewport measurement, script/asset identity or error/request inventory was obtained. This does not establish whether a duplicate-script error occurs. See [brief 450 access record](webflow/evidence/brief-450-published-console-access-2026-11-10.md). The actual repeated-Embed test, current staging bytes and saved Designer Preview remain distinct checks.


#### R-126 · Update both MWP Component Library editions and the `Smashburger` clean-install instance through the Library workflow; verify properties, variants, assets, CDN loading, rollback and update linkage.
**State:** in progress · **Evidence:** verified (live) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 174 (now 175); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Backed-up isolated copies of both real editions retain 144 nodes, 60 properties, five variants, nine assets and 67 bindings; source self-contained Canvas/Preview is verified. Exact-commit CDN runtime and script-omission fallback are separately verified locally. No Library share or consumer installation occurred. The five-resource sharing review requires approval; linked properties/overrides/assets/class prefixes, fresh unlink, update/rollback and actual Webflow CDN/fallback remain open.
**Evidence links:** [Library candidate checks and sharing scope](webflow/library-sb-nav-candidates-2026-10-15.md)

**Candidate release pack — 10 November 2026, brief #430:** [Local candidate inventory and separate Library/consumer gates](webflow/candidate-release-evidence-pack-2026-11-10.md). No share or consumer update is implied.

**16 October 2026 — brief #67:** Corrected the local verification loader only; installed Embeds and historical Library readbacks are unchanged. The older pin predates the latest overlapping-overlay fix, so matching integrity does not verify that fix or consumer loading. Existing sharing/linkage/rollback gates remain open. See [integrity repair limits](webflow/library-verification-integrity-2026-10-16.md).


#### R-127 · Archive the old compatibility repository only after the new release and old pinned URLs have both been independently verified.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 175 (now 176); baseline `c808ca4`.
**Exit criteria:**


**Local cleanup — 16 October 2026, Michael authorised:** The old checkout was fully backed up, then restored to its live-verified remote baseline `0864f82`; it is clean and Michael confirmed removal from Codex project settings. No old GitHub repository archive, release-tag change or CDN operation occurred. This does not complete R-127's remote-archival gate. [Evidence and recovery](webflow/old-checkout-cleanup-2026-10-16.md); D-019.

#### R-128 · Rename the local folder last to `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`, update the Git remote and reopen Codex from the new workspace path.
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (31 October 2026)
**Source:** [todo.md](todo.md), original line 176 (now 177); baseline `c808ca4`.
**Exit criteria:**
**15 October 2026 — Codex:** Selected clone is populated with the canonical origin and was used for final tests and the push of 1261de5. Its boss key is smashburger; the runner path now points there. Original folder is retained. This chat/boss commit binding still points at the old checkout; final workspace reopen and release-dependent retirement remain open. No folder was destructively moved.
**Evidence links:** [canonical transfer and candidate checks](webflow/canonical-rename-2026-10-15.md)
**Routing diagnosis — 16 October 2026:** Setup rediscovers both folders under the same `smashburger` key and silently lets the old folder overwrite the configured canonical destination. The exact read-only reproduction and 10:47 restart/config-write evidence are in [STATUS](STATUS.md#16-october-2026--why-night-shift-routing-reverted--codex). Preserve explicit mappings and flag duplicates before rerunning setup. Night-shift routing and the MCP tool's own working folder are separate; the runner map does not determine this chat's commit target.
**Current readback — 16 October 2026:** This chat is now open in the canonical path and its origin points to the new repository. However, `~/.config/boss/runner.json` currently maps `smashburger` to the retained old folder, which holds separate local fixes absent here. Workspace reopening is complete; routing and history reconciliation keep this item in progress. No old folder was removed and no remote was contacted. See [checkout handoff](STATUS.md#checkout-handoff).


**Resolution — 16 October 2026:** Authorised setup selected the canonical folder and doctor confirmed it. The seven compatibility commits are reconciled locally with 685 passing candidate checks. This completes the local-folder/workspace/routing step; retirement of the old folder/repository remains separately gated under R-127. The night shift is off; no pause setting or Acceptance changed. [Evidence](webflow/canonical-reconciliation-2026-10-16.md).

**Project-folder cleanup — 16 October 2026:** Michael confirmed that the old folder was removed from Codex project settings after its backed-up restoration to `0864f82`. The canonical path remains the Boss runner destination. [Cleanup evidence](webflow/old-checkout-cleanup-2026-10-16.md). Acceptance is unchanged.


## 10. Migration hardening and public clonable

### Component hardening

2026-10-13 unlink-hardening update: the candidate was shared in MWP Component Library without publishing. Clean-destination Home retains the v0.2.6 controls and one linked candidate; its fresh unlinked duplicate has 79 native nodes, both Embeds and zero numbered variant classes. A separate single-instance isolation page passed the published CSS-only native Details fallback at 820, 667 and 393px with the MWP runtime absent, zero measured overflow and closed-on-refresh behavior; the exact pinned v0.2.6 loader was then restored and read back. Runtime checks passed Desktop, Tablet and both mobile breakpoints, including ARIA/inert, Escape/focus return, backdrop closure, refresh and breakpoint changes. The static-property audit confirmed all 59 candidate props were represented by 66 bound settings and all 66 values survived unlink, including destination-remapped assets, with zero mismatches. A second clean-destination draft also retained all 66 settings under Always/overlay/30rem/presets-off overrides with zero mismatches and zero numbered variants; its Desktop and Tablet Preview interactions passed with correct ARIA/inert, Escape focus return and zero overflow. Its local `data-canvas-open` control was read back false after a temporary Canvas-on test. Both unlinked Embeds matched the candidate source byte-for-byte. The original five-variant v0.2.6 Library component remains separate and unchanged; both Library tag styles remain preserved. The clean trial's isolated route is published only to its Webflow staging subdomain. This evidence applies to this candidate/session, not every Webflow unlink; v0.2.6 remains the released baseline pending a separate release decision. See `webflow/unlink-hardening-candidate.md`.

Follow-up: the isolated `Unlink Fallback Isolation` route also contains a native Paragraph with a static settings snapshot inside the collapsed infrastructure Details. It is visible in Preview and published output but is not property-bound and needs manual updates when settings change. At 2,060, 820, 667 and 393px it wrapped to one through four lines with zero overflow. The Details summary row remains unstyled, so this remains a prototype rather than an accepted shared-component authoring pattern. No Library update or Git push was made for this follow-up.


#### R-129 · Audit the `.always`, `.always-1`, `.always-2` and further variant-derived combo classes materialized when a configured Library instance is unlinked. Record which rules are functional, authoring-only, visibility-related or redundant before removing or consolidating any of them.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 186 (now 187); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/always-unlink-class-audit-2026-10-13.md](webflow/always-unlink-class-audit-2026-10-13.md)
**Evidence boundary:** Dated legacy Always fixture checks; preserve its functional selectors and the site-level JavaScript caveat.


#### R-130 · Use the fresh clean-destination v0.2.6 Always unlink as a class-audit fixture and compare it with the historical madewithpixels counts. It materialized 36 selector names across 103 attachments, not 35/102. Three local selectors carry functional inner/menu/panel layout declarations; 33 are declaration-free across 100 attachments. No class removal is implied by that classification. See `webflow/always-unlink-class-audit-2026-10-13.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 187 (now 188); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/always-unlink-class-audit-2026-10-13.md](webflow/always-unlink-class-audit-2026-10-13.md)
**Evidence boundary:** Dated legacy Always fixture checks; preserve its functional selectors and the site-level JavaScript caveat.


#### R-131 · Remove only the confirmed declaration-free class attachments from a recoverable duplicate of the clean-destination legacy Always unlink. Removed 100 attachments on `Always Unlink Class Audit Backup` (99 numbered plus the unnumbered root token), preserving ordinary base classes, the three functional numbered tokens and the original audit page. Four Canvas breakpoints retain zero overflow; Preview open/Escape, backdrop closure, ARIA/inert, focus return, and CSS/native Details fallback at Desktop and Mobile portrait pass. The pinned loader was restored and read back byte-for-byte. See the dated audit and `webflow/unlink-cleanup-checklist.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 188 (now 189); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/always-unlink-class-audit-2026-10-13.md](webflow/always-unlink-class-audit-2026-10-13.md)
**Evidence boundary:** Dated legacy Always fixture checks; preserve its functional selectors and the site-level JavaScript caveat.


#### R-132 · Minimize variant-specific Webflow styles in the unreleased source candidate where stable base classes and the `data-collapse` value provide the same behavior, reducing generated class clutter without weakening the CSS/native fallback.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 189 (now 190); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/unlink-hardening-candidate.md](webflow/unlink-hardening-candidate.md)
**Evidence boundary:** Candidate-specific source/clean-destination records through 14 October 2026; not a new runtime release or a universal unlink guarantee.

  - 2026-10-13: the candidate uses one Base variant and a static collapse value after unlink; five fresh source unlinks and the clean-destination Always unlink produced zero numbered variant selectors. The released v0.2.6 component remains unchanged.

#### R-133 · Prevent declaration-free variant selectors from being emitted on unlink where Webflow permits it. Consolidate genuinely required Always behavior into stable, deliberately named base/state selectors and aim to leave no numbered `Always` combo trail in a newly unlinked instance.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 191 (now 192); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/unlink-hardening-candidate.md](webflow/unlink-hardening-candidate.md)
**Evidence boundary:** Candidate-specific source/clean-destination records through 14 October 2026; not a new runtime release or a universal unlink guarantee.

  - 2026-10-13: the one-Base candidate produced zero numbered selectors across the five source collapse choices and again in the clean destination. This applies to the candidate path only; a v0.2.6 unlink still has three functional numbered selectors and is documented separately.

#### R-134 · Add an unlink-cleanup checklist and a before/after regression fixture that proves an Always-collapsed instance retains layout, visibility, accessibility and Preview behavior after only demonstrably redundant generated classes are removed.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 193 (now 194); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/always-unlink-class-audit-2026-10-13.md](webflow/always-unlink-class-audit-2026-10-13.md)
**Evidence boundary:** Dated legacy Always fixture checks; preserve its functional selectors and the site-level JavaScript caveat.

  - 2026-10-13: the recovery duplicate has all 100 declaration-free attachments removed. Four Canvas breakpoints and Preview open/Escape, backdrop closure, ARIA/inert, trigger-focus and overflow checks pass. A temporary stylesheet-only loader passed native Details open/close at Desktop and Mobile portrait; the pinned loader was restored and read back byte-for-byte. The class-audit report records the remaining page-level JavaScript caveat.

#### R-135 · Document and test the duplicate-name hazard created by unlinking a Library component: namespaced and unprefixed combo selectors share Designer display names but have distinct IDs. Avoid name-only style-record mutation; use a recoverable duplicate and exact-element class assignment with full-list preflight/readback.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 195 (now 196); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/always-unlink-class-audit-2026-10-13.md](webflow/always-unlink-class-audit-2026-10-13.md)
**Evidence boundary:** Dated legacy Always fixture checks; preserve its functional selectors and the site-level JavaScript caveat.

  - 2026-10-13: the fresh fixture has 36 paired names (72 style records) with distinct selectors/IDs. Exact identities and declarations are recorded in `webflow/always-unlink-class-audit-2026-10-13.md`. The recovery duplicate confirmed an exact-element `set_style` assignment changes only the intended page element; no style records were deleted.

#### R-136 · Build the unreleased one-Base source Library candidate so a newly configured/unlinked instance reproduces the cleaned madewithpixels behavior without manual removal: stable base declarations, no fixed `80rem` maximum and no generated declaration-free `Always` trail.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 197 (now 198); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/unlink-hardening-candidate.md](webflow/unlink-hardening-candidate.md)
**Evidence boundary:** Candidate-specific source/clean-destination records through 14 October 2026; not a new runtime release or a universal unlink guarantee.

  - 2026-10-13: verified in the source fixtures and clean destination. Preserve this candidate as unreleased trial work; do not infer that pre-existing v0.2.6 unlinks or every future Webflow unlink are clean.

#### R-137 · Share only the candidate and verify its clean-destination acceptance path: preserve the v0.2.6 comparison, install and retain the linked candidate, unlink one duplicate, audit retained static values and generated selectors, run responsive/runtime and CSS-only fallback checks, and confirm both imported tag styles remain.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-267)
**Source:** [todo.md](todo.md), original line 199 (now 200); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/unlink-hardening-candidate.md](webflow/unlink-hardening-candidate.md)
**Evidence boundary:** Candidate-specific source/clean-destination records through 14 October 2026; not a new runtime release or a universal unlink guarantee.

  - 2026-10-13: completed for this one-Base candidate in `SB Unlink Clean Trial`; the staging isolation route is published, while the MWP Component Library remains unpublished. No guarantee is made for future Webflow unlink behavior. Keep v0.2.6 as the released baseline pending a separate release decision. Full evidence: `webflow/unlink-hardening-candidate.md`.

#### R-138 · Demote functional-CSS panel geometry defaults beneath ordinary Webflow classes: `display`, `position`, physical insets, width, maximum width, alignment translation and transform origin must use zero-specificity selectors at every collapse breakpoint and layout.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 201 (now 202); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-139 · Keep panel interaction state separate from those presentation defaults so closed panels remain hidden and non-interactive and open panels retain their selected motion.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 202 (now 203); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-140 · Build the cascade correction into `v0.2.1`, regenerate matching distribution files and integrity metadata, tag and publish the immutable release, and verify cache-bypassed jsDelivr CSS and JavaScript are byte-identical to the committed assets.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 203 (now 204); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-141 · Update both MWP Component Library source Embeds to the exact `v0.2.1` self-contained bundle and pinned CDN loader, then read them back to confirm exact persistence.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 204 (now 205); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-142 · Retroactively update the unlinked madewithpixels (`MWP'26`) loader to `v0.2.1`, publish staging and verify loaded CDN assets, full-width project styling, open/closed state, ARIA state, Escape close and trigger focus return.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 205 (now 206); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-143 · Share the MWP Component Library update, apply it to the linked `Smashburger` clean-install fixture, publish it and verify `v0.2.1` CDN loading, linked Tablet behavior, contained panel geometry, ARIA/inert state, Escape close and trigger focus return.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 206 (now 207); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-144 · Audit accidental background inheritance in the portable source classes. The two affected base selectors now use an explicit transparent panel and white/dark submenu pair, with no Tablet variant override; `currentColor` icons and intentional text inheritance remain. Both editions passed source Preview/published staging checks, the Library share included only SmashBurger components, and SB Test Four accepted and published the linked update. See `webflow/background-audit.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 207 (now 208); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/background-audit.md](webflow/background-audit.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-145 · Verify the revised surfaces against light, dark and transparent destination wrappers without MWP Component Library demo-theme variables. The submenu kept a white surface and dark ink; the panel stayed transparent. Main-navigation ink still needs a light choice on a dark site, to be exposed in Control Workbench.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 208 (now 209); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/background-audit.md](webflow/background-audit.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-146 · Remove the fixed `max-width: 80rem` from the portable navigation inner base. Default to the available width and let destination projects add their own container class, variable or project-specific maximum. On 2026-10-01 Michael cleared the base class value in MWP Component Library. Designer readback shows `Max W: None` in both editions. CDN Preview and both Library staging editions passed wide and Tablet checks. The revised Library was shared and accepted on SB Test Four; its fresh linked self-contained instance filled a 1734px Preview canvas. A destination-owned 70rem wrapper then centred the same linked component at wide widths while the inner filled the wrapper. Tablet and mobile Preview and published staging checks passed; see `webflow/width-regression-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 209 (now 210); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/width-regression-fixture.md](webflow/width-regression-fixture.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-147 · Repair the MWP Component Library demo's outdated primary destinations. Native Page targets worked on the source site but resolved to stale fallback `href` values after Library installation on SB Test Four. Both component editions now use absolute Library staging URLs for CDN build, Self-hosted, Style guide and View release. The revised Library was shared and accepted on SB Test Four; Designer, Preview and published consumer readback retained the destinations. The component still contains older custom `href` attributes and other legacy names; inspect them during the rename/cleanup pass.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 210 (now 211); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-148 · Add a repeatable wide-layout regression fixture proving the component itself does not impose a content width while an optional destination container can constrain and centre it. The manual Designer Preview and published staging measurements are recorded in `webflow/width-regression-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 211 (now 212); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/width-regression-fixture.md](webflow/width-regression-fixture.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-149 · Make enhanced collapsed-panel presentation respond to `[data-mwp-panel][data-state="opening"]` and `[data-mwp-panel][data-state="open"]` rather than depending only on `[data-mwp-menu][open] + [data-mwp-panel]`. Local checks and the published wrapped-trigger fixture on SB Test Four pass; see `webflow/enhanced-layout-regression.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 212 (now 213); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/enhanced-layout-regression.md](webflow/enhanced-layout-regression.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-150 · Retain and test the canonical adjacent-sibling selector as the CSS/native no-script baseline. The source candidate retains the rule; the published `/sb-css-regression` fixture on SB Test Four verifies native `<details>` opening and closing at 1280px and 600px without SmashBurger JavaScript, with no horizontal overflow. See `webflow/native-details-regression.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 213 (now 214); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/native-details-regression.md](webflow/native-details-regression.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-151 · Add a native-like `--mwp-nav-z-index` custom property with a documented default and confirm it can be overridden by destination projects. v0.2.3 ships the root token with a `100` default; the source candidate moves `100` into the `z-index` fallback. A published SB Test Four fixture inherited `240` from its destination wrapper and put the backdrop above ordinary sticky content at z-index `10`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 214 (now 215); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/enhanced-layout-regression.md](webflow/enhanced-layout-regression.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-152 · Add regression coverage for a trigger moved inside one ordinary layout wrapper while the panel remains elsewhere under the same root. Source checks and published SB Test Four click, backdrop close, Escape, focus, ARIA and responsive checks pass.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 215 (now 216); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/enhanced-layout-regression.md](webflow/enhanced-layout-regression.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-153 · Add regression coverage for panel state presentation above ordinary sticky content and for the `Show brand` property in both delivery editions. The published SB Test Four enhanced fixture verified the panel/backdrop stacking above sticky content. In MWP Component Library, both source editions now expose a default-on `Content / Show brand` Switch bound to native Brand visibility; Designer readback showed zero layout size when hidden, and both instance defaults were restored before staging publication. The two-component Library update was shared and accepted on SB Test Four; its linked self-contained instance removed Brand from the Canvas accessibility tree when hidden. A temporary published hidden-state check found no Brand anchor and the first Tab focused Facebook. The default was restored and republished; Brand returned as the first anchor and Tab stop. The restored instance also passed a published 600px runtime check.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 216 (now 217); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-154 · Add regression coverage for optional Dropdown and Full-width backdrops: opening/closing presentation, stacking below the panel, click-to-close with trigger focus return, and no unintended scroll lock. The source candidate accepts Webflow's `data-backdrop="True"`. Local tests and published SB Test Four fixtures pass for both layouts at 1280px and 600px. Both source editions bind the native `Show backdrop` switch to visibility and the root attribute; Designer off/on readback wrote `False`/`True`, and both published Library staging pages retained `True`. Distribution of the candidate CSS still needs a release.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 217 (now 218); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-155 · Re-run the complete layout/motion, collapse-breakpoint, keyboard, focus, ARIA/inert, reduced-motion and distribution checks before releasing these changes. The local browser matrix covers 20 layout/width cases, 20 collapse/width cases and 30 layout/motion cases, plus nested submenu Escape behavior; a clean linked CDN import on SB Test Five passed a separate 20-case collapse matrix, five layout interactions and six motion interactions in Designer Preview. Chrome reduced-motion emulation exposed a real `v0.2.3` panel/item duration cascade defect; the maintained CSS correction passed a rendered Designer Preview check on that linked consumer through a temporary page Embed, then the Embed was removed. Versioned distribution and published checks remain open. A build of the current source succeeded, but its generated CSS and Embeds differ from committed immutable `v0.2.3`, so temporary outputs were restored. See `webflow/browser-matrix.md`, `webflow/fresh-cdn-library-placement.md` and `webflow/reduced-motion-regression.md`. `v0.2.4` published checks passed collapse boundaries, ARIA/inert, Escape focus return, icon geometry and simulated reduced-motion timings on both editions. Physical keyboard activation in a visible window and real OS reduced-motion remain. See `webflow/v0.2.4-release-verification.md`. Visible-window follow-up passed real Tab/Enter/Space/Escape (including two-stage submenu Escape), real OS reduced motion on and off, the odd/even icon thickness matrix and the Full-width backdrop. Only DPR 2×/3× remains (tracked separately).
**Combined canonical verification — 16 October 2026:** Settings close-out is committed as `e599c09`. All seven compatibility commits are reconciled with the newer canonical runtime, and a fresh combined candidate run passes 685/685 with no failures, skips or expected failures. Ordinary tests pass 247 of 274 with only the existing 27 expected historical failures. The complete test-discovery gate and all 17 protected release hashes are retained. Original old-checkout evidence counts below remain historical; [this reconciliation record](webflow/canonical-reconciliation-2026-10-16.md) gives the combined proof and limits. Browser/Webflow/consumer/human/release gates remain open.
**Brief #74 — 16 October 2026:** Added 168 mandatory candidate checks for native configuration across four deliveries, including menu/root/text priority, explicit false values, every layout/motion preset, separate timing, focus, link/outside closing, scroll locking, collapse and saved Library binding reconstruction. No runtime repair was needed. [Evidence table, executable coverage and limits](webflow/native-settings-deliveries-2026-10-16.md). Browser, Webflow/linked-consumer, human/device and release gates remain separate. Acceptance is unchanged.
**Brief #73 — 16 October 2026:** Rapid reversals and repeated public calls now have 80 mandatory candidate checks across source, distribution, minified output and self-contained Embed. Dropdown and Custom motion retain non-zero configured durations. The unreleased runtime rejects stale completion and discards cancelled focus requests; event payloads and public hooks remain unchanged. [Exact coverage and handoff](webflow/rapid-menu-reversals-2026-10-16.md). This is controlled-clock DOM evidence; rendered motion, external GSAP/Webflow Interactions, browser/human, linked consumer and release gates remain open. Existing Acceptance is unchanged.
**Brief #72 — 16 October 2026:** Distribution reproducibility checks now preserve the existing candidate even on stale output, newly generated files or a partial build failure. The focused fixture, namespace and distribution checks pass 16/16. Real verification and intentional build preserve all 19 current candidate file hashes; all 17 protected historical hashes match. See [commands and limits](webflow/candidate-reproducibility-2026-10-16.md). Full runtime, browser, Webflow and release gates remain separate. Acceptance is unchanged.
**Brief #71 — 16 October 2026:** The actual Lite example HTML now runs with its declared candidate CSS and browser bundle from disk in the DOM simulator. Mandatory checks cover automatic discovery, distinct panel IDs and trigger relationships, closed ARIA/inert state, independent public opening/closing in either order, repeated initialisation and simulated Escape with focus return when either menu is open on its own. The workbench remains script-free; its missing closed/open fragment targets were repaired. See [method, assertions and limits](webflow/lite-examples-runtime-2026-10-16.md). Browser rendering, native keyboard activation, Canvas editability and clone-flow proof remain open. Existing Acceptance is unchanged.
**Brief #70 — 16 October 2026:** The ordinary test gate now reports confirmed immutable v0.2.6 overlap limitations as executed expected failures. The candidate command discovers every maintained test file, including the 37 source checks previously omitted. Source and fresh candidate overlap assertions remain mandatory. See [reproduction, final commands and limits](webflow/test-gate-repair-2026-10-16.md). No runtime, release or Acceptance changed.
**Brief #69 — 16 October 2026:** Added six mandatory [offline rehearsal checks](webflow/offline-migration-rollback-2026-10-16.md) to the candidate command. They cover paired normal/minified/Embed delivery, repeated migration/rollback, focused open/close and two-stage Escape, focus return, ARIA/inert, all explicit class mappings, preservation failures and mixed-delivery rejection. This is simulated-page preparation only; cloned-site upgrade/rollback, rendered and human checks remain open. Existing Acceptance is unchanged.
**Brief #68 — 16 October 2026:** `npm run test:candidate` passed 81/81, including the 16 new multiple-menu lifecycle tests across maintained source, candidate distribution, minified output and self-contained Embed. No skips or expected failures; all 17 protected historical hashes match. Focused candidate checks passed 16/16. Locks persist until their final owner releases; the saved overflow/padding values return and repeat initialisation works. No runtime or generated output changed. This is DOM simulation only: rendered scrolling/scrollbar padding, menu stacking, narrow-height containment, Webflow Preview, linked consumer update/rollback and human/device checks remain open. [Evidence, historical comparison and handoff](webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md#brief-68--teardown-resize-and-separate-documents). Existing State, Evidence and Acceptance fields retain their historical meaning.
**Brief #78 candidate Escape check — 16 October 2026:** Escape stays with the navbar containing focus, regardless of initialisation order. It closes the focused submenu first, then that outer menu on a later Escape, restoring focus to its own summary/trigger. An already-consumed Escape leaves both menus alone. The other navbar retains its open submenu, state and focus. All 144 focused regressions pass across the four local deliveries; the complete candidate gate passes 353/353 and existing source tests pass 37/37; existing single-navbar page-level Escape is retained. No multi-menu scroll-lock or menu-exclusivity change was made. This is local evidence only; browser/assistive-technology checks and historical Acceptance remain separate. See [local evidence and browser limits](webflow/escape-menu-ownership-2026-10-16.md).
**Brief #77 candidate focus check — 16 October 2026:** all 120 new focus checks pass across source, candidate distribution, minified output and self-contained Embed. They assert focus before hiding/state/inert writes and at completion for public/native/link/outside closing, nested links and 0ms/45ms durations. The full candidate gate passes 209/209; existing source tests pass 37/37. Rebuilds reproduce exactly and all 17 protected historical file hashes match. This is local evidence only; browser and assistive-technology verification remain open. Rapid-reversal, Custom-motion and historical Acceptance are unchanged. See [local evidence and handoff](webflow/close-panel-focus-2026-10-16.md).
**Brief #76 candidate lifecycle check — 16 October 2026:** all 36 focused destroy regressions pass across four deliveries; the complete candidate gate passes 89/89 and existing source tests pass 37/37. The candidate restores native opening, authored ARIA/configuration/styles and repeat initialisation after destruction. Candidate rebuilds reproduce exactly and all 17 protected historical files retain their hashes. This is local evidence only. Rendered native opening, real keyboard/tab order and browser inert behaviour remain to verify. Existing scroll-lock teardown proposals and historical Acceptance are unchanged. See [local evidence and browser handoff](webflow/destroy-native-fallback-2026-10-16.md).
**Brief #13 latest built-runtime run — 15 October 2026:** the maintained source passed all 12 checks, including simulated reduced-motion. Overall, 15 of 48 checks failed in immutable v0.2.6 distribution and Embed outputs against unreleased source fixes; all 12 generated files were restored. Rendered candidate motion and custom-animation integration remain unverified because Preview/isolated staging is unavailable. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 local build — 15 October 2026:** `npm run test:built` passed 48/48, including reduced-motion assertions across maintained source and generated deliveries, and restored all 12 generated files. This is automated local evidence only; candidate reduced-motion rendering and custom-animation integration were not checked because the isolated Preview/staging route remains unavailable. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 Preview retry — 15 October 2026:** the Chrome extension exposed console and viewport inspection, but the backed-up draft probe's Preview logged `CompilationError: Invalid source code` after wait, reload and fresh-tab recovery. No candidate reduced-motion or custom-animation result was obtained. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 fresh build and inspection check — 15 October 2026:** the repeated `npm run test:built` run again passed 48/48, including reduced-motion assertions in source and generated deliveries, and restored all 12 generated files. No candidate rendering was available to verify reduced-motion or custom-animation integration. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 route check — 15 October 2026:** visible Chrome responsive controls were confirmed, but the source-derived candidate route remains unavailable. Candidate Full-width/Right narrow-height and reduced-motion/custom-animation checks were not repeated or inferred from the v0.2.6 comparison. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current route readback — 15 October 2026:** no candidate runtime became available. The exact remaining candidate layout and motion checks are recorded in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md); the previous local build evidence was not repeated.
**Brief #13 current access readback — 15 October 2026:** Webflow publication state is unchanged. No source-derived candidate route or Chrome request-inspection control is available, so Full-width/Right narrow-height and rendered motion/custom-animation remain unverified. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 candidate access follow-up — 15 October 2026:** no candidate route was available for Full-width/Right short-height scrolling or rendered reduced-motion/custom-animation checks. The local demo could not be served because binding a local HTTP server was denied by the workspace sandbox; no Webflow publication was attempted. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 Chrome bridge retry — 15 October 2026:** Webflow readback confirms the probe remains empty/draft and the site has no custom domains. Preview again failed after wait, reload and fresh-tab recovery, so no candidate short-height or motion result was added. `npm run test:built` passed 48/48 and restored all generated files; this is local automated evidence only. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 current staging and Chrome controls — 15 October 2026:** no source-derived candidate route or supported Network capture was available, so Full-width/Right short-height and candidate motion checks remain open. The current Webflow readback shows an empty draft probe with no page branch; the browser tab reached only the published comparison. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 route check — 15 October 2026:** Chrome Network and Console captured the actual `@v0.2.6/dist/navbar-light.min.js` request blocked by DevTools and the page's failed-script fallback message. The temporary block was disabled and normal script loading restored. The route's settings snapshot is Dropdown/right/dropdown-motion, so Full-width and Right short-height, candidate reduced-motion and custom-animation remain unchecked. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #15 isolated-route retry — 15 October 2026:** the route rendered in a fresh tab, but DevTools showed the document pending through a 30-second wait and reload, and Chrome stopped accepting input before its runtime could be confirmed. Full-width/Right short-height, candidate reduced-motion and custom-animation remain unchecked. No Webflow change or publication occurred. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 218 (now 219); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/v0.2.4-release-verification.md](webflow/v0.2.4-release-verification.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.
**Local follow-up — 14 October 2026, brief #11:** new delivery matrix and fresh-build regression checks cover DOM state, synthetic Escape, mocked collapse boundaries/reduced motion and CSS-only Always fallback. Opening/closing breakpoint races are fixed in source; immutable v0.2.6 retains six labelled TODO failures. New fix remains pending and unreleased; historical Acceptance is unchanged. Browser/Webflow/human gates are listed in [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Continuation — 14 October 2026:** repeated fresh-build check passed and Webflow Data MCP read back current source and consumer component definitions. This is source/structure evidence only; Chrome control was unavailable, so Preview, rendered behavior and published runtime were not rechecked. See [continuation test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Additional source readback — 14 October 2026:** both runtime and Canvas-helper Embeds in the current MWP self-contained and CDN source components match committed local files byte for byte. The linked consumer's Library internals cannot be traversed through Webflow MCP; no Preview or published runtime claim follows. See [continuation test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Focus cancellation regression — 14 October 2026:** the fresh-build matrix now tests timer-cancelled first-link focus independently; it passes across source and generated deliveries. Unchanged v0.2.6 artifacts retain this defect alongside the opening/closing state races. This remains DOM simulation, not rendered-browser evidence. See [test record](webflow/lite-preparation-local-tests-2026-10-14.md).


**Rendered continuation — 14 October 2026:** reproduced the opening and closing resize races on the backed-up Clean Trial published page with its original v0.2.6 URLs. A separate local source-derived candidate passed both, with desktop links visible, non-inert and operable after the old animation duration. Responsive samples verified mobile-landscape, mobile-portrait and Tablet collapse edges, zero horizontal overflow, a scrollable 320×400 panel and left-drawer backdrop hit testing. Browser UI keyboard/pointer events and script-free fallback passed within the documented limits. A follow-up measured full-width, left drawer, right drawer and overlay at 393×852 with zero document overflow; Chrome reduced-motion emulation reduced transitions to 0.01ms and restored normal durations when disabled. In two existing Webflow Preview fixtures, native Details and keyboard link focus worked with all custom code disabled; with code enabled, Webflow stalled compiling and logged `CompilationError: Invalid source code`. A new empty draft page with no elements or page-level code stalled identically. This does not distinguish site-wide custom code from a Webflow Preview compiler issue. The scripts readback endpoint returned 404 without a source location, so root cause remains unknown and candidate Preview remains open. Updated the local demo's 5rem header-offset token and added a regression assertion after its first rendered narrow-height sample exposed an 8px fixture overrun. No Webflow content change, share or publish occurred; physical-device/accessibility checks, full DPR visuals and upgrade/rollback remain open. The named probe is retained as an unpublished draft. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Preview/asset follow-up — 14 October 2026:** Designer MCP responded after Michael restarted the connection. The scripts readback route still fails. Published v0.2.6 CSS- and JS-failure fallbacks now passed in the backed-up staging fixture through Chrome DevTools request blocking; state and cleanup are recorded under R-095 and in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). A local source-candidate CSS-failure defect was fixed and freshly rendered; candidate JS failure and Webflow Preview remain open.

**Post-restart verification — 14 October 2026:** Webflow site/Designer reads and candidate Embed writes work. A clearly labelled temporary source-candidate Embed in the empty draft probe read back, but Designer Preview showed only the native Menu summary and logged `CompilationError: Invalid source code` plus an uncaught rejection. The Embed was removed; element readback showed only the Body and the page remained a draft. Page-only staging publish returned `Bad Request: Invalid parameter: pageId`. Four other draft pages are pending, so full-site publish was not attempted. The existing 13 October staging publication remains. A fresh `npm run test:built` rerun passed 44/44 and restored all 12 generated files. Candidate staging runtime/asset-failure checks need an isolated publish path or Michael's scope decision. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 responsive and interaction follow-up — 14 October 2026:** rendered checks on the published v0.2.6 comparison now cover ten widths from 320px to 2,048px, a contained and internally scrollable 320×568 open panel, keyboard activation and focus return, nested and outer Escape, pointer opening, outside closing, and link navigation closing. They do not verify the unreleased source candidate. Preview, motion, broader icon, screen-reader/device and cloned upgrade/rollback checks remain open. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Staging and Chrome follow-up — 14 October 2026:** Under Michael's explicit authority, full-site publishing completed for SB Unlink Clean Trial, Smashburger and MWP Component Library, each to its Webflow subdomain only; `get_site` confirmed current publish timestamps and no custom domains. Clean Trial's four audit/probe pages still read `draft: true`, and the probe remains 404. Chrome rendered all three published staging pages checked; actual Space/Enter input collapsed/expanded Smashburger's nested More disclosure while focus remained on the button. This verifies that published page's nested disclosure only, not the candidate resize fix. No Library share or consumer update occurred. `npm run test:built` passed 44/44 and restored all 12 generated outputs. Candidate Webflow runtime/asset-failure, human accessibility/device and upgrade/rollback checks remain open. See the [dated local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Rendered source-candidate staging check — 14 October 2026:** a freshly built candidate passed both resize-race directions on the Clean Trial subdomain in rendered Chrome after 400 ms. The test dispatched a synthetic Tablet `matchMedia` event at 2060 CSS px / DPR 1, so it verifies candidate runtime timers but not a real browser viewport resize. The temporary Embed and published route were removed; the probe is empty/draft after subdomain-only republishing. `npm run test:built` passed 44/44 and restored all 12 generated outputs. Preview compilation, candidate JS failure and physical/device evidence remain open. See [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Reconnect and build recheck — 14 October 2026:** after Michael refreshed Designer, readback confirmed the compiler probe remains an empty draft and returned its configured collapse boundaries. `npm run test:built` again passed 44/44 at `2621a4a` and restored all 12 generated outputs. Chrome DevTools responsive emulation rendered the published v0.2.6 page at 800 CSS px with its collapsed MENU trigger visible. The subsequent attempt to activate the trigger timed out in Chrome's input channel, so no race direction was tested. Candidate viewport resize, JavaScript-asset failure, Preview, live responsive geometry, physical DPR 2×/3×, human assistive technology/device use and cloned upgrade/rollback remain open. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Actual viewport and focus follow-up — 14 October 2026:** the local source fix passed actual CSS viewport resizing in rendered Chrome on a clearly labelled temporary Clean Trial staging Embed. The check reproduced both v0.2.6 timer races and verified that the candidate left all desktop links visible and Tab-reachable after 700 ms. A second candidate build also restored focus to the trigger before hiding desktop links when resizing to collapsed mobile. The maintained focus fix and regression test are local and unreleased; all v0.2.6 assets remain unchanged. The Embed was removed, Designer readback is Body only/`isDraft: true`, staging has no custom domains and the temporary route returns 404. Remaining gaps include candidate JS failure, broader rendered geometry, Preview compilation, genuine assistive-technology/device and physical-DPR evidence, and cloned upgrade/rollback. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 browser-control follow-up — 14 October 2026:** a fresh Chrome tab rendered the published Clean Trial v0.2.6 desktop navigation in a 2,044 × 1,131 screenshot and was closed after inspection. The available browser surface did not expose responsive viewport emulation or page-script inspection. No candidate layout or closing behavior is inferred from this comparison-page render. See [STATUS](STATUS.md) and the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Browser URL policy boundary — 14 October 2026:** a local `file://` render of the no-JavaScript candidate was denied because Chrome's URL policy allows only HTTP(S). No alternative browser surface or command-line route was used to reach that same local-file outcome. Candidate JavaScript-failure verification remains open; use the already-authorised HTTPS staging fixture if continuing that check. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 remaining-check access review — 15 October 2026:** checked current `main` at `8e7f5bd`; the worktree was clean. No candidate tests were repeated. This run's Chrome control documentation offers screenshots and accessibility/input interaction, but no page DOM, viewport, console or failed-request inspection. The prior probe Designer route exposed no usable Preview controls. Candidate reduced-motion/custom-animation and full-width/right narrow-height scrolling remain open alongside failed-script capture, Preview, physical-device/screen-reader, physical-display DPR 2×/3× and cloned upgrade/rollback. No Webflow change or publication occurred. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 candidate fallback check — 14 October 2026:** the missing script URL returned Webflow's 404 page and the native fallback passed Space, Enter, Tab and Shift-Tab checks with maintained candidate CSS on Clean Trial staging. The browser did not expose the page's automatic request entry, so exact Network/console confirmation is still open. The temporary page, styles and code were removed and staging cleanup was published. Source-candidate responsive geometry and close behavior, Preview, motion, icon, assistive-technology and clone checks remain open. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 responsive and keyboard follow-up — 14 October 2026:** on the published Clean Trial Tablet-collapse page, rendered Chrome measured 1,280, 992, 991, 820, 768, 767, 480, 479, 393 and 320 CSS px at height 900, browser-reported DPR 1. The trigger was hidden above the 991px boundary and visible at and below it; the closed panel stayed within the viewport at each width, with zero document horizontal overflow. At 393×852, pointer opening showed a 377×543px panel within the viewport and the backdrop. Tab/Shift-Tab, Space/Enter, nested Escape, then outer Escape with focus returned to the trigger. This is the existing published v0.2.6 runtime, not the source candidate. Candidate no-runtime verification remains inconclusive. Chrome denied the backdrop click because its hit target resolved to Instagram; no retry was made. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #12 browser-origin gate — 14 October 2026:** Chrome blocked opening the Smashburger staging origin at its approval gate. No alternate surface was used. Rendered checks across its layouts and linked instance remain open; read-only Designer property and asset comparison is documented above.

**Brief #13 readback and route check — 15 October 2026:** `npm run test:built` passed 48/48 and restored all 12 generated files. Chrome's visible DevTools provides Network, viewport and reduced-motion controls. Read-only Designer data confirms the Smashburger staging Home still contains a linked `SmashBurger CDN` instance and the Clean Trial comparison remains its separate unlinked v0.2.6 fixture. The Clean Trial probe is empty/draft, four other pages remain drafts, and the earlier page-only publish failed with an invalid `pageId`; no isolated candidate Preview/publish route was available. No Webflow mutation or publication occurred. Candidate failed-script, full-width/right narrow-height, reduced-motion/custom-animation and Preview checks remain open. See the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).
**Brief #13 continuation — 15 October 2026:** Designer branching returned `not_enterprise_plan_site`; Preview did not compile after three recovery attempts. A temporary draft candidate was removed along with its page code, element and eight styles. Readback is Body-only with blank code; nothing was published. Automatic failed-script request capture, short-height layout and motion checks remain open. Earlier native Details and closed-panel link/focus checks passed in Brief 12 and were not repeated. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Fresh-build and published nested-menu check — 14 October 2026:** `npm run test:built` passed 48/48 and restored all 12 generated files. Chrome rendered the published Clean Trial Tablet-collapse page at wide desktop size; clicking “More” then pressing Escape closed the nested disclosure and left focus on its button. This does not verify the source candidate, outer panel, responsive boundaries, motion integration or icon rendering. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 candidate JavaScript request attempt — 14 October 2026:** Fresh-build verification passed 48/48 and restored all 12 generated files. The temporary Clean Trial candidate retained maintained CSS and included a deliberately unavailable script URL; Chrome rendered the labelled trigger, but input timed out before the script failure or fallback interaction could be confirmed. The probe is clean/draft and the temporary staging route returns 404 after cleanup publication. Candidate request failure, responsive geometry, Webflow Preview, human/device and clone checks remain open. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Fresh-build and nested-menu follow-up — 14 October 2026:** `npm run test:built` passed 48/48 and restored all 12 generated files. The published Clean Trial v0.2.6 nested disclosure closed with Escape and returned focus to its trigger at the actual 2,044 × 1,131 CSS-pixel viewport. Browser-reported DPR was 1; this did not emulate breakpoints or verify the Lite candidate, physical DPR, other icon geometry, motion or the outer panel. See the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 staging readback — 15 October 2026:** the published Clean Trial navigation loaded in a fresh Chrome tab and appeared in the accessibility tree. This adds no candidate geometry or runtime evidence because viewport, console and request controls were unavailable. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 linked Smashburger staging interaction — 15 October 2026:** on a fresh Chrome tab at the published Smashburger staging home, the linked navigation rendered. Pointer opened the nested “More” control; Escape collapsed it and returned focus to its button. This is a single published consumer interaction check only. Candidate geometry, viewport boundaries and console/request evidence remain open. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 responsive and console follow-up — 15 October 2026:** a fresh Chrome viewport-control session checked the published Clean Trial v0.2.6 comparison at 320, 393, 479, 480, 767, 768, 991, 992, 1,280 and 2,060 CSS px. The trigger was visible through the 991px Tablet boundary and hidden from 992px; page overflow was zero throughout. At 320×568, the open dropdown panel was contained and internally scrollable; Escape closed it and restored trigger focus. Chrome reported DPR 1; console warnings/errors were empty. This is published baseline evidence, not a candidate responsive matrix or physical-display check. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 source-derived staging candidate check — 15 October 2026:** a clearly labelled temporary candidate on the backed-up Clean Trial probe passed rendered Chrome checks for five layouts at ten widths, the 991/992px collapse boundary, zero horizontal overflow, outer and nested keyboard focus, pointer/backdrop/outside/link closing, and 24 icon combinations at browser-reported DPR 1. Narrow-height internal scrolling passed in dropdown, left and overlay. A class collision in an initial test fixture was removed before measurements; it did not demonstrate a product defect. The temporary page code and elements were removed, Designer readback confirmed the page was restored as an empty draft, staging cleanup was published to the Webflow subdomain, and the route returned 404. No Library share/update occurred. `npm run test:built` passed 48/48 and restored all 12 generated files. Preview, automatic failed-script request capture, candidate motion/custom-animation integration, remaining narrow-height layouts, human/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback remain open. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 Preview availability follow-up — 15 October 2026:** a new Designer tab for the authorised Clean Trial probe exposed only an empty embedded surface, without usable canvas or Preview controls. The existing `CompilationError: Invalid source code` therefore could not be retested or isolated. A fresh published comparison page loaded, but it is baseline evidence only. No Webflow changes or publication occurred; browser tabs opened for the check were closed. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #12 fixture and inspection-route readback — 15 October 2026:** read-only Webflow MCP confirms the Clean Trial probe remains an empty draft and the site has no custom domains; four unrelated pages remain drafts. The current browser controls do not expose DOM, viewport, console or request inspection, so the completed candidate checks were not repeated and the automatic failed-script request remains unrecorded. No Webflow content or publication changed. See [STATUS](STATUS.md) and the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**16 October 2026 — brief #67:** `npm run test:candidate` passed 65/65 with no skips or expected failures, including both exact-pin integrity comparisons, deliberate wrong-hash rejection and missing-object build failure. All 17 protected historical hashes match; candidate reproducibility and syntax checks pass. Browser/Webflow/human checks were not run. Historical Acceptance is unchanged; this repair remains pending. See [local integrity evidence](webflow/library-verification-integrity-2026-10-16.md).


#### R-156 · Make panel focus order match visual order (WCAG 2.4.3). Decision (Michael, 2026-10-03): Primary first everywhere. Both MWP Component Library source components now have `Primary navigation` before `Secondary navigation` (MCP move and readback); the published source pages Tab through the primary links first, collapsed and expanded, with no overflow. The demo, tests and docs were updated. No CSS or CDN change was needed: the collapsed `order` rules stay so older instances keep their visual layout.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 219 (now 220); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**


#### R-157 · Share the Primary-first Library update and accept it on linked consumers. Done for SB Test Five and Smashburger (republished and verified); SB Test Four not yet accepted. The madewithpixels instance will be replaced with the finished menu, not backported.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 220 (now 221); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/v0.2.4-release-verification.md](webflow/v0.2.4-release-verification.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-158 · Layout presets override destination classes (v0.2.3+). Fixed in v0.2.5 with a `Layout presets` switch (`data-presets`): structural rules always apply, and visual preset rules sit behind the switch (a test guards this). Both source components have the bound property; the self-contained source page was verified On/Off when published. madewithpixels was then upgraded v0.2.2 → v0.2.5 with presets Off and published to dev; its panel matched the v0.2.2 baseline exactly. See `webflow/layout-presets.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 221 (now 222); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/layout-presets.md](webflow/layout-presets.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-159 · Verify the current Webflow variant-marker support on a versioned release candidate. A fresh linked CDN instance on SB Test Four incorrectly collapsed at 2057px; that site's import also lost all sampled Webflow classes. SB Test Five retained those classes and its pinned `v0.2.3` runtime behaved correctly across Desktop, Tablet and Mobile (L), so the stale marker lookup is not proven to be the SB Test Four failure's independent cause. The maintained source supports the current markers as a robustness improvement. See `webflow/variant-marker-regression.md` and `webflow/fresh-cdn-library-placement.md`. Verified on `v0.2.4`: published pages recognised `data-wf--smashburger--variant`, `data-wf--smashburger-cdn--variant` and the namespaced Library marker `data-wf--mwp-component-library--smashburger-cdn--variant`. See `webflow/v0.2.4-release-verification.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 222 (now 223); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [v0.2.4 release](webflow/v0.2.4-release-verification.md) and [v0.2.6 release](webflow/v0.2.6-release-verification.md), released source/consumer work before 14 October; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/v0.2.4-release-verification.md](webflow/v0.2.4-release-verification.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-160 · Repair fresh linked CDN Library placement on SB Test Four before publishing its proof page. Its newly inserted component retains content, properties and runtime hooks but root/inner/panel/icon `className` values are empty, unlike the styled CDN source and working linked self-contained consumer. This is a separate Webflow Library/style import defect from the runtime variant fix. See `webflow/fresh-cdn-library-placement.md`.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 223 (now 224); baseline `c808ca4`.
**Current direction:** Michael, Q-06, 14 October 2026: retain this as a historical defect; leave the SB Test Four page alone. Verify fresh installs in current test projects. This item is not dropped or repaired.
**Exit criteria:**
**Qualifier:** Historical open defect retained; Michael excluded SB Test Four/Five from the v0.2.6 rollout. Reconfirm future test-site ownership before any work (D-010).


#### R-161 · After every relevant source-component release, review and deliberately backport the change to the unlinked/local madewithpixels implementation created from this trial; verify it there before rolling that local component across the project.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 224 (now 225); baseline `c808ca4`.
**Exit criteria:**


### Canvas authoring experience


#### R-162 · Remove custom Navigator display names from portable Webflow release elements so Webflow shows the actual `sb-*` class names authors need for styling and structural work. Make the class names themselves clear enough to describe the element. *(accepted by Michael in boss, 15 Oct 2026)*
**State:** built · **Evidence:** none · **Acceptance:** accepted (15 October 2026)
**Try:** Expand the component in Webflow's Navigator and check that each part has a clear name you can use to find it.
**Covers:** R-163
**Source:** [todo.md](todo.md), original line 228 (now 229); baseline `c808ca4`.
**Exit criteria:**

  - Done on both MWP Library source components (2026-10-03): 21 structural names reset per edition; Embeds renamed `SmashBurger runtime` / `SmashBurger CDN loader` and `SmashBurger Canvas helper`. Class clarity is the later `sb-*` rename.

#### R-163 · Verify the source Library candidate, linked clean-install instance and unlinked/local instance expose the expected class names directly in the Navigator, without friendly labels masking native selectors.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-162)
**Source:** [todo.md](todo.md), original line 230 (now 231); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/unlink-hardening-candidate.md](webflow/unlink-hardening-candidate.md)
**Evidence boundary:** Candidate-specific source/clean-destination records through 14 October 2026; not a new runtime release or a universal unlink guarantee.

  - Done (2026-10-14): Data MCP confirms the candidate's expected `styleNames` and no custom names on the root, inner wrapper, menu or panel. The expanded MWP candidate Navigator visually shows native class labels throughout; the clean Home Navigator shows linked components by name and unlinked copies by class. The unlinked root/inner use automatic class labels. Embed labels remain intentionally descriptive; linked internal selectors stay source-only. See `webflow/unlink-hardening-candidate.md`.

#### R-164 · Verify the future public clonable exposes its expected `sb-*` classes directly in its Navigator. A public clonable does not exist yet; keep this separate from the completed unlink release gate.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 232 (now 233); baseline `c808ca4`.
**Exit criteria:**


#### R-165 · Prototype moving the Canvas-visible Code Embed inside one compact `SmashBurger infrastructure` Details element, collapsed by default, and verify the CSS/JS output and a readable settings snapshot in Preview and published output. *(accepted by Michael in boss, 15 Oct 2026)*
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (15 October 2026)
**Try:** In Preview, check that the settings list is readable and the menu works while the “SmashBurger infrastructure” box is closed. The list is a manual snapshot, so it may need updating if the settings change.
**Covers:** R-167, R-170
**Source:** [todo.md](todo.md), original line 233 (now 234); baseline `c808ca4`.
**Current direction:** Michael, Q-07, 14 October 2026: accepted as a prototype only (D-016), with a muted “Infrastructure and settings” label direction. Manual upkeep remains necessary. Michael accepted the prototype on 15 October 2026 as recorded above; that acceptance does not graduate it into an automatic settings system. The muted label styling remains separate from that prototype acceptance.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.

  - 2026-10-13: both Embeds remain inside the closed native Details wrapper; the v0.2.6 runtime initializes and its output remains active. A native Webflow Paragraph inside the disclosure lists the current Tablet/Dropdown/right/24rem/motion/presets/backdrop/Canvas settings and is visible in Preview and published output. It is deliberately labelled a manual snapshot, not a live binding; update it if root attributes change. At published widths 2,060, 820, 667 and 393px, the text wrapped to one, two, three and four lines respectively with zero overflow. The native no-JS fallback still opens/closes at Tablet and both mobile widths; the script-managed ARIA/inert state and Escape close are not available without JavaScript. The summary row remains unstyled. See `webflow/canvas-authoring-fixture.md` and `webflow/unlink-hardening-candidate.md`.

#### R-166 · Remove the settings inspector Div from normal Canvas flow when it is not being used. Keep it compact/collapsible, selectable from the Navigator and available on demand without letting its summary or property rows push page content down while the navigation is styled. Done via the style-only Canvas helper: the inspector floats as a readable card on the Canvas only. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 235 (now 236); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.
**Qualifier:** Historical wording retained; later direction/checks may supersede this milestone. See DECISIONS and STATUS; built does not mean the full future product is complete.


#### R-167 · Test Webflow's `Keep in HTML when hidden` behavior before relying on a hidden authoring wrapper; the runtime must never disappear because an author hid the Canvas helper. On the isolated clean-destination page, hiding only the Canvas helper with this option enabled left its code stored but made the collapsed panel visible on the Tablet Canvas. Restoring Visible and unchecking the option restored the expected closed Canvas view. Do not rely on this feature for Code Embed authoring CSS; the sibling runtime loader was never hidden. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-165)
**Source:** [todo.md](todo.md), original line 236 (now 237); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-168 · Keep the real Backdrop non-blocking and visually absent on the Designer Canvas, while retaining normal selection through the Navigator and runtime activation in Preview/published output. The Canvas helper sets the backdrop to `display: none` on the Canvas only; it remains selectable in the Navigator. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 237 (now 238); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-169 · Make a normal page's closed SmashBurger menu unobtrusive on the Designer Canvas, with the brand and trigger still visible and the native link structure still reachable through the Navigator. Verify that this authoring-only presentation does not hide links in Preview or published output at any collapse variant or breakpoint. Canvas helper hides a closed collapsed panel at the breakpoints where its variant collapses; verified at Tablet on the source page, expanded Desktop unaffected. Other variants, linked consumers and Preview/published checks remain. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 238 (now 239); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.
**Qualifier:** Historical wording retained; later direction/checks may supersede this milestone. See DECISIONS and STATUS; built does not mean the full future product is complete.


#### R-170 · Prove a Designer-only CSS hook on the disposable linked fixture without changing released assets. A page-local `html.wf-design-mode` rule hid the panel on Canvas while keeping Brand and Menu visible; Preview and published desktop/mobile output retained the links and menu behavior. See `webflow/canvas-authoring-fixture.md`. The full default experience above remains open because the prototype also hides expanded/Never authoring and linked instances cannot expose internal links in the consumer Navigator.
**State:** built · **Evidence:** verified (live) · **Acceptance:** n/a (step — covered by R-165)
**Source:** [todo.md](todo.md), original line 239 (now 240); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-171 · Add a `Canvas: show open menu` component switch (default Off) so a collapsed panel can be shown and styled on the Canvas without affecting Preview or published output. Verified at Tablet on the source page. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 240 (now 241); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-172 · Build a dedicated Navbar workbench page with separate closed-state and forced-open authoring instances. Shared classes should let designers style both states without repeatedly changing production-instance settings or leaving a menu open over page content. Built as the draft `SmashBurger workbench` page in MWP Component Library with closed and Canvas-open `Always` instances; verified by Michael at Desktop and Tablet. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 241 (now 242); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture — Navbar workbench page](webflow/canvas-authoring-fixture.md#navbar-workbench-page-2026-10-03), Michael’s Desktop/Tablet use on 3 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-173 · Include a small backdrop style swatch/reference on the workbench instead of making the fixed runtime Backdrop cover the Canvas while it is styled. A class-only swatch Div (no runtime hook) styles the real backdrop without covering the Canvas; verified in Preview. See `webflow/canvas-authoring-fixture.md`.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 242 (now 243); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture — Navbar workbench page](webflow/canvas-authoring-fixture.md#navbar-workbench-page-2026-10-03), Michael’s Desktop/Tablet use on 3 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-174 · Stop the floating Canvas settings card overlapping the content after its instance (seen on the workbench: it covers the next instance trigger).
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 243 (now 244); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.

  - Now hidden on the Canvas entirely (it only carries prop values; the props panel shows them). Michael's Desktop screenshot confirmed it (2026-10-03).

#### R-175 · Treat visible open/closed buttons inside production element settings as a fallback, not the preferred SmashBurger authoring experience.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 245 (now 246); baseline `c808ca4`.
**Exit criteria:**


#### R-176 · In the future Designer Extension prototype, investigate whether open/closed/isolate authoring controls can be genuinely temporary and non-publishing before promising app-managed state.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 246 (now 247); baseline `c808ca4`.
**Exit criteria:**


### Free Webflow clonable

**Current direction — Michael, Q-01, 14 October 2026:** Accepted D-011 defines Lite as a native local component with plain/styled examples, a workbench, a safe-editing guide and one pinned CDN loader; no Library install, app dependency, CMS or mega-menu. Naming was settled by Michael on 15 October 2026 (D-012/D-013). Publication waits for the released class migration/runtime, native component, clone-flow checks and approval. Future installer handoff remains deferred under D-014. See [SCOPE](SCOPE.md).


#### R-177 · Define a deliberately basic clonable scope that demonstrates SmashBurger without turning the Library component into a site-specific header system. Drafted 2026-10-14 in `webflow/smashburger-lite-clonable-scope.md`; build remains gated on the planned class migration and a verified released runtime.
**State:** built · **Evidence:** verified (local) · **Acceptance:** n/a (housekeeping — no outcome for Michael to try)
**Source:** [todo.md](todo.md), original line 250 (now 251); baseline `c808ca4`.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-lite-clonable-scope.md](webflow/smashburger-lite-clonable-scope.md)
**Evidence boundary:** Scope draft exists at 77716d2; no clonable built or published, and no Michael acceptance inferred.


#### R-178 · Supply a preconfigured, editable local Webflow component so clonable users do not need to install, configure and unlink a shared-Library instance first.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 251 (now 252); baseline `c808ca4`.
**Exit criteria:**


#### R-179 · Ensure the clonable's local component does not ship with the Library unlink workflow's generated `.always*` combo-class trail; retain only deliberately named, explainable classes.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 252 (now 253); baseline `c808ca4`.
**Exit criteria:**


#### R-180 · Leave structural elements on their default class-based Navigator labels; do not add custom display names that hide the clonable's `sb-*` selectors.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 253 (now 254); baseline `c808ca4`.
**Exit criteria:**


#### R-181 · Include a plain baseline and a separately styled example, with one shared set of native links and no duplicated desktop/mobile navigation.
**State:** in progress · **Evidence:** verified (local) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 254 (now 255); baseline `c808ca4`.
**Exit criteria:**
**Local preparation — 16 October 2026:** Candidate plain/styled HTML examples each contain one native panel and one set of three links. A DOM regression checks the link tree and candidate class/runtime hooks. This does not provide a native Webflow component or clonable.
**Runtime evidence — brief #71, 16 October 2026:** The actual page, declared local stylesheets and candidate browser bundle pass automatic discovery of both navbars, unique panel IDs and trigger relationships, closed ARIA/inert state, independent public opening/closing in both orders and repeat initialisation without duplicate completion events. Simulated Escape returns focus with either menu open on its own. This remains DOM simulation; browser rendering, native keyboard activation, Webflow Canvas and clone flow are unverified. [Evidence and limits](webflow/lite-examples-runtime-2026-10-16.md).
**Current automated check — brief #90, 16 October 2026:** `npm run test:candidate` passed 685/685, including the Lite structure/runtime tests. Chrome rejected the local `file:` page under its URL policy, so no rendered layout was checked. See the [native build sheet](webflow/lite-native-build-sheet-2026-10-16.md).
**Destination copy — brief #403, 10 November 2026:** Both local examples use the same generic menu labels for the Plain example, Styled example and Workbench references, and each fragment target names the section it reaches. The home links and navigation labels are generic. This is source inspection only; no browser, Webflow or published-page behavior was checked.
**Navigation semantics — brief #404, 10 November 2026:** Plain and styled review examples, plus the static workbench references, each have a distinct navigation landmark and trigger name. Review-example backdrops remain hidden from assistive technology; the workbench swatch remains a labelled image. See [findings and limits](webflow/r181-navigation-semantics-2026-11-10.md). Source-level review only.
**Example appearance — brief #417, 10 November 2026:** Both local review examples set `data-presets="false"`, so the styled example demonstrates its own authored styling without the runtime's built-in visual presets. Source inspection confirms the attribute on both headers. No Webflow page or browser rendering was changed or checked.
**Integrity gate — brief #421, 10 November 2026:** `npm run check:lite` reports file-level results for both examples, their CSS, the workbench and the two Lite guides. It checks each example's one named native navigation tree, link targets, current presets-off setting and absence of generated `.always*` classes; it also checks workbench CSS scoping, static labels and links, and the guides' unreleased-loader boundary. This is local source evidence only; it does not verify rendering, Webflow or clone flow.
**Trial preparation — brief #428, 10 November 2026:** Added a bounded blank-project checklist and included it in `npm run check:lite`, which now checks seven files, trial sections and local document links. `node --test tests/lite-candidate.test.js` passes 6/6. This remains local preparation and DOM simulation; no browser, Canvas, Preview or clone-flow behavior is established. See the [trial sheet](webflow/lite-blank-project-trial-sheet.md).
**Resilient preflight — brief #446, 10 November 2026:** Missing inputs and broken local targets now appear under the affected file, with remaining checks for that file marked skipped while the other files still report. A clean run passes 7/7; disposable missing-input and broken-workbench-target copies each exit 1 and identify the failure. Remote/candidate loader rejection and the unreleased-loader warning remain in place. Local checker evidence only.
**Exit-criterion map — brief #431, 10 November 2026:** Local evidence for the shared one-tree structure and simulated runtime behavior is the [candidate examples and tests](candidate/lite/review-examples.html) and [runtime evidence](webflow/lite-examples-runtime-2026-10-16.md); source-level labels, destinations and current presets-off values are covered by briefs #403, #404 and #417 above and the seven-file integrity gate. No evidence establishes native Webflow component construction, browser rendering, Canvas editing or cloning. **Next local step:** use the existing integrity gate for source drift; no further local check can complete the Webflow-specific criterion. **Prerequisites:** released `sb-nav` runtime and an authorised blank test project for construction and observation.
**Evidence links:** [candidate examples](candidate/lite/review-examples.html); [Lite candidate checks](tests/lite-candidate.test.js)


#### R-182 · Include the Navbar workbench with prepared closed/open examples and a backdrop reference so common styling work does not obstruct the clonable's real pages.
**State:** in progress · **Evidence:** verified (local) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 255 (now 256); baseline `c808ca4`.
**Exit criteria:**
**Local preparation — 16 October 2026:** Candidate HTML contains one closed and one open native disclosure reference plus a labelled backdrop swatch. A DOM regression checks the two states and retained candidate structure. This is a static workbench reference, not a Webflow workbench.
**Reference evidence — brief #71, 16 October 2026:** The actual workbench with its local CSS retains the native closed/open states and adjacent panels without a runtime, injected ARIA/inert state or readiness marker. Its labelled backdrop remains a static sample. All fragment links now resolve after adding the two missing article IDs. No design or script changed. This does not prove rendering or Canvas editability. [Evidence and limits](webflow/lite-examples-runtime-2026-10-16.md).
**Current automated check — brief #90, 16 October 2026:** The full `npm run test:candidate` run passed 685/685, including the workbench state and fragment checks. Browser rendering and Canvas behavior remain unchecked. See the [native build sheet](webflow/lite-native-build-sheet-2026-10-16.md).
**Evidence links:** [workbench references](candidate/lite/workbench-references.html); [Lite candidate checks](tests/lite-candidate.test.js)
**Exit-criterion map — brief #431, 10 November 2026:** Static closed/open references, the labelled non-interactive backdrop, fragment targets and scoped CSS have local source/DOM evidence in [runtime evidence](webflow/lite-examples-runtime-2026-10-16.md), the [containment review](webflow/r182-workbench-css-containment-2026-11-10.md), the #421 integrity gate and the trial sheet above. Missing evidence: rendered appearance and editing common styles in Webflow Canvas. **Next local step:** none identified beyond keeping the integrity gate current. **Prerequisites:** a blank test project and the released Lite structure; Canvas evidence must be recorded there.
**Integrity gate — brief #421, 10 November 2026:** `npm run check:lite` checks file-level results for the workbench HTML/CSS and Lite instructions, including scoped selectors, static state labels, local links and explicit non-installability of the unreleased loader. This does not establish Canvas behavior or rendering.
**Trial preparation — brief #428, 10 November 2026:** The trial sheet now identifies the local closed/open/backdrop evidence and lists the remaining blank-project checks. The integrity gate checks its sections and local links; the existing DOM regression passes 6/6. Canvas editing and rendered behavior remain unchecked.
**Resilient preflight — brief #446, 10 November 2026:** A broken workbench stylesheet target is reported against the workbench file; its remaining checks are marked skipped and all six unaffected files still report. No Canvas or rendered behavior was checked.


#### R-183 · Install one exact-version pinned CDN Embed with integrity metadata and keep the settings/structure understandable on the Canvas.
**State:** planned · **Evidence:** verified (local) · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 256 (now 257); baseline `c808ca4`.
**Exit criteria:**
**Build gate — 16 October 2026:** Local `0.3.0-rc.1` candidate loader checks pass, but that tag is unreleased and must not be installed. Released v0.2.6 uses the earlier `mwp-*` classes. No released loader matching the settled `sb-nav` migration is verified; final URL and integrity values await an authorised released runtime. See the [native build sheet](webflow/lite-native-build-sheet-2026-10-16.md).
**Instruction integrity — brief #421, 10 November 2026:** `npm run check:lite` checks that the safe-editing guide and native build sheet state the unreleased loader is not installable and do not present it as an installation step. No loader was installed and no Webflow component was created.
**Resilient preflight — brief #446, 10 November 2026:** The seven-file check continues to name unreleased-loader misuse and retains the explicit warning. Missing-file failures now remain inside the per-file report instead of aborting startup.
**Exit-criterion map — brief #431, 10 November 2026:** Local evidence is limited to source/build preparation and the [integrity gate](scripts/check-lite-integrity.mjs), which checks that instructions do not present the unreleased candidate as installable. It does not verify any installed Embed, exact released URL, integrity value or Canvas clarity. R-183 remains **planned** because its build prerequisite is unmet; `Evidence: verified (local)` refers only to that bounded instruction-integrity check, not completion of the exit criterion. **Next local step:** none can produce the required released URL or hash before release. **Prerequisite:** Michael-authorised release of the `sb-nav` runtime, then select its exact version and generate/check the pinned loader before Webflow construction.


**Scheduling — 31 October 2026:** Deferred dependency work, not an immediate request for Michael. The runtime/test-site prerequisites remain unmet; resume at the gate recorded in the Boss attention cleanup. Evidence and Acceptance are unchanged.

#### R-184 · Include a short in-project safe-editing guide covering functional data hooks, the trigger/panel relationship, native Menu Button restrictions, stacking, icon-only accessible names and final duplicate-header removal. *(accepted by Michael in boss, 15 Oct 2026)*
**State:** built · **Evidence:** verified (local) · **Acceptance:** accepted (15 October 2026)
**Try:** Open the safe-editing guide and check how it explains editing the menu safely, including what to keep in place and what needs updating before using it in a future project.
**Source:** [todo.md](todo.md), original line 257 (now 258); baseline `c808ca4`.
**Exit criteria:** Draft covers each listed topic and labels current runtime selectors and instructions for refresh after class migration and runtime selection.
**Evidence links:** [SmashBurger Lite safe-editing guide](webflow/smashburger-lite-safe-editing.md)
**Evidence boundary:** Local documentation review only. Lite is not built or published; final selectors, structure and pinned loader require refresh and verification against the selected released runtime.


#### R-185 · Verify the clone flow into a blank test project, including Canvas editability, all four core breakpoints, keyboard behavior, asset loading, zero overflow and a clean console.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 258 (now 259); baseline `c808ca4`.
**Exit criteria:**
**Project access check — brief #90, 16 October 2026:** Read-only Webflow site listing returned 16 accessible sites but no blank SmashBurger Lite test project. SB Unlink Clean Trial is a populated fixture, so it does not satisfy this clone-flow gate. New Smashburger Test was not re-probed. See the [native build sheet](webflow/lite-native-build-sheet-2026-10-16.md).
**Local instruction integrity — brief #421, 10 November 2026:** The Lite local gate checks the build sheet's unreleased-loader boundary. It does not perform or claim blank-project clone-flow evidence.
**Trial preparation — brief #428, 10 November 2026:** Prepared the [blank-project trial sheet](webflow/lite-blank-project-trial-sheet.md), distinguishing existing local evidence from the required Canvas, breakpoint, keyboard, fallback, asset, overflow and console checks. The gate and DOM checks pass locally. No blank project was cloned or inspected, so this preparation is not clone-flow evidence and the Evidence field remains none.
**Exit-criterion map — brief #431, 10 November 2026:** The trial sheet maps each required observation to a capture step: clone/structure (1), Canvas editing (2), all four breakpoints and overflow (3), keyboard/focus (4), no-JavaScript fallback (5), and assets/console (6). The [clone-flow capture sheet](webflow/lite-clone-flow-capture-sheet.md) is the evidence destination; its fields are still unfilled. Local integrity and DOM checks are preparation only. **Next local step:** none can substitute for the actual clone. **Prerequisites:** released runtime and exact loader, followed by a genuinely blank accessible test project; then perform and record each step. The 16 October site listing is historical and does not establish current project availability.


**Scheduling — 31 October 2026:** Deferred dependency work, not an immediate request for Michael. The runtime/test-site prerequisites remain unmet; resume at the gate recorded in the Boss attention cleanup. Evidence and Acceptance are unchanged.

#### R-186 · Prepare the clonable as an early-exposure route for the SmashBurger site launch, with a clear route from the free baseline to the Library component and future app.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612103 in your boss list
**Source:** [todo.md](todo.md), original line 259 (now 260); baseline `c808ca4`.
**Exit criteria:**


## 11. Webflow app product track

**Current direction — Michael, Q-04, 14 October 2026:** Defer the Designer Extension / Make local commitment until Lite works (D-014).

The preferred app form is a Webflow Designer Extension that installs and configures a native SmashBurger component. It must remain a generator and maintenance tool rather than a proprietary runtime widget: generated links, Divs, classes, variables, variants, properties and the Canvas-visible enhancement Embed must remain editable and continue working when the app is closed or uninstalled. A headline differentiator should be helping an author graduate a managed or adapted SmashBurger instance into a clean project-native component rather than merely installing it.

### Capability prototype


#### R-187 · Scaffold a private Designer Extension with the Webflow CLI.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612102 in your boss list
**Source:** [todo.md](todo.md), original line 267 (now 268); baseline `c808ca4`.
**Exit criteria:**


#### R-188 · Prove end-to-end creation of native elements, existing/new classes and responsive styles.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 268 (now 269); baseline `c808ca4`.
**Exit criteria:**


#### R-189 · Prove component creation, all five collapse variants and component property bindings.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 269 (now 270); baseline `c808ca4`.
**Exit criteria:**


#### R-190 · Prove the Extension API can inspect a selected linked or unlinked instance, create a project-level component, create and group properties, and reconnect those properties to existing elements. Document any Designer-only steps immediately if the API cannot perform them safely.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 270 (now 271); baseline `c808ca4`.
**Exit criteria:**


#### R-191 · Prove insertion of the Canvas-visible CSS/enhancement Embed.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 271 (now 272); baseline `c808ca4`.
**Exit criteria:**


#### R-192 · Confirm generated output remains functional and editable without the extension running.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 272 (now 273); baseline `c808ca4`.
**Exit criteria:**


#### R-193 · Confirm repeated installation is idempotent and does not duplicate components, classes or runtime code.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 273 (now 274); baseline `c808ca4`.
**Exit criteria:**


### Private installer MVP


#### R-194 · Add an Insert SmashBurger workflow.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 277 (now 278); baseline `c808ca4`.
**Exit criteria:**


#### R-195 · Expose collapse breakpoint, layout, alignment, panel width and motion settings.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 278 (now 279); baseline `c808ca4`.
**Exit criteria:**


#### R-196 · Expose duration, easing, distance, stagger, icon and accessibility/behaviour settings.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 279 (now 280); baseline `c808ca4`.
**Exit criteria:**


#### R-197 · Generate a reusable native Webflow component whose semantic `sb-*` classes remain visible in the Navigator, with no custom structural display names masking them; keep property groups clear and purposeful.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 280 (now 281); baseline `c808ca4`.
**Exit criteria:**


#### R-198 · Add installation diagnostics for missing structure, classes, attributes, props and runtime version.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 281 (now 282); baseline `c808ca4`.
**Exit criteria:**


#### R-199 · Store an explicit SmashBurger schema/runtime version marker while preserving compatibility with established runtime hooks.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 282 (now 283); baseline `c808ca4`.
**Exit criteria:**


### Make local / project adoption


#### R-200 · Add a `Make local` workflow for authors who have configured or structurally adapted SmashBurger and want to turn it into their own maintainable project-level component.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 286 (now 287); baseline `c808ca4`.
**Exit criteria:**


#### R-201 · Support both a still-linked Library instance and an already-unlinked native structure. Never discard the static values Webflow creates when props, variants and slots are unlinked.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 287 (now 288); baseline `c808ca4`.
**Exit criteria:**


#### R-202 · Inspect the selected instance and consolidate behavioural configuration such as collapse, layout, motion, backdrop and closing behaviour onto the outer `sb-nav` element where Webflow supports the relevant settings or custom attributes.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 288 (now 289); baseline `c808ca4`.
**Exit criteria:**


#### R-203 · Distinguish site-wide content that belongs in the local main component from the small set of values that genuinely need to vary per instance. Propose a minimal property set instead of recreating every Library property automatically.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 289 (now 290); baseline `c808ca4`.
**Exit criteria:**


#### R-204 · Create the project-level component, recreate and group the approved properties, and reconnect them to the correct existing elements while preserving content, destinations, images, classes, styles, accessibility attributes and runtime hooks.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 290 (now 291); baseline `c808ca4`.
**Exit criteria:**


#### R-205 · Present a preflight summary and before/after diff covering the proposed component name, behavioural attributes, properties, groups, bindings and any unsupported manual steps before changing the selected structure.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 291 (now 292); baseline `c808ca4`.
**Exit criteria:**


#### R-206 · Provide rollback or a recoverable duplicate until the converted component passes structural, responsive, keyboard, focus, ARIA/inert, asset and runtime-version checks.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 292 (now 293); baseline `c808ca4`.
**Exit criteria:**


#### R-207 · Confirm the resulting local component remains fully editable and functional after the Extension is closed or uninstalled, with no app-owned runtime dependency or duplicate source of truth.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 293 (now 294); baseline `c808ca4`.
**Exit criteria:**


#### R-208 · Use the MWP'26 adoption as the first real fixture, then repeat the workflow on a clean clone and a deliberately rearranged native Navbar replacement.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 294 (now 295); baseline `c808ca4`.
**Exit criteria:**


### Safe maintenance and distribution


#### R-209 · Design conservative migrations that preserve user-authored content and intentional style overrides.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 298 (now 299); baseline `c808ca4`.
**Exit criteria:**


#### R-210 · Add a preview/diff step before modifying an existing installation.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 299 (now 300); baseline `c808ca4`.
**Exit criteria:**


#### R-211 · Validate the installer and migrations against cloned test sites before enabling updates.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 300 (now 301); baseline `c808ca4`.
**Exit criteria:**


#### R-212 · Decide whether licensing, hosted libraries, telemetry or managed templates justify a hybrid backend.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 301 (now 302); baseline `c808ca4`.
**Exit criteria:**


#### R-213 · Prepare onboarding, documentation, error handling, privacy/security material and a demonstration for Marketplace review.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 302 (now 303); baseline `c808ca4`.
**Exit criteria:**


#### R-214 · Pursue public Marketplace distribution only after the private extension has been tested with real users.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 303 (now 304); baseline `c808ca4`.
**Exit criteria:**


## 12. Optional mega-menu product track

**Current direction — Michael, Q-05, 14 October 2026:** Mega-menu stays separate from the basic navbar (Accepted D-015). Premium pricing, licensing and backend are deferred.

Treat a mega-menu as a separate component or extension-installed premium feature rather than adding structural complexity to SmashBurger's default instance.


#### R-215 · Define the free/light boundary and a paid feature proposition.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 309 (now 310); baseline `c808ca4`.
**Exit criteria:**


#### R-216 · Prototype native configurable columns, group headings, link lists and optional promotional cards.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 310 (now 311); baseline `c808ca4`.
**Exit criteria:**


#### R-217 · Evaluate native component composition and slots without making ordinary link editing restrictive.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 311 (now 312); baseline `c808ca4`.
**Exit criteria:**


#### R-218 · Support desktop hover/focus intent while retaining click-first keyboard and touch behavior.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 312 (now 313); baseline `c808ca4`.
**Exit criteria:**


#### R-219 · Define collapsed reflow as nested disclosure groups rather than a desktop panel squeezed onto mobile.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 313 (now 314); baseline `c808ca4`.
**Exit criteria:**


#### R-220 · Explore optional CMS-fed groups while keeping a useful static native-element baseline.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 314 (now 315); baseline `c808ca4`.
**Exit criteria:**


#### R-221 · Expose layout, alignment, column count, widths, gaps and motion as ordinary Webflow styles/properties where possible.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 315 (now 316); baseline `c808ca4`.
**Exit criteria:**


#### R-222 · Preserve the same accessibility, lifecycle events, Custom-motion handoff and progressive-enhancement contract.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 316 (now 317); baseline `c808ca4`.
**Exit criteria:**


#### R-223 · Make the future Designer Extension own installation, validation and safe schema migrations.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 317 (now 318); baseline `c808ca4`.
**Exit criteria:**


#### R-224 · Test whether premium value is best delivered through the extension, paid templates/components, or a hybrid.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 318 (now 319); baseline `c808ca4`.
**Exit criteria:**


## 13. Verification


#### R-225 · Publish the dedicated `Smashburger` site as the clean-install deployment target. Library installation, native Canvas editability, all 57 property bindings, five variants, inherited destination-project styles, nine remapped assets, responsive behavior, cold-load bytes, CDN failure diagnostics and recovery are verified.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 322 (now 323); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-226 · Verify the CSS-only Tablet fallback in Webflow Preview.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 323 (now 324); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-227 · Verify keyboard open, Escape close and focus return.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 324 (now 325); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-228 · Verify ARIA state and inertness programmatically.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 325 (now 326); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-229 · Verify drawer/fade, two-line icon, stagger, first-link focus, backdrop and scroll lock in Webflow Preview.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 326 (now 327); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-230 · Verify nested submenu Escape behavior.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 327 (now 328); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-231 · Audit collapsed/open accessibility state, ARIA relationships, focus order and focus restoration on the published component.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 328 (now 329); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-232 · Keep closed nested-submenu descendants out of rendering and keyboard/screen-reader order while preserving Canvas visibility.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 329 (now 330); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-233 · Verify Custom mode removes built-in transform and transition while state continues.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 330 (now 331); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-234 · Verify editable configuration and Embed remain visible in Designer.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 331 (now 332); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-235 · Verify shared navigation entries remain visible in Desktop Designer without relying on runtime CSS.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 332 (now 333); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-236 · Keep collapsed variant panels visible but wrapped below the header row in Designer.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 333 (now 334); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Qualifier:** Historical wording retained; later direction/checks may supersede this milestone. See DECISIONS and STATUS; built does not mean the full future product is complete.


#### R-237 · Restore the collapsed variant authoring overrides after the rebuilt component lost them.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 334 (now 335); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-238 · Stack direct native panel children with the minimal functional collapsed-grid rule.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 335 (now 336); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-239 · Stack native nested-submenu links after the published matrix exposed their inline fallback.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 336 (now 337); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-240 · Restore the test instance to Tablet + Dropdown documented defaults.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 337 (now 338); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-241 · User created a backup, refreshed, removed the obsolete component and published the acceptance page.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 338 (now 339); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-242 · Run the automated suite after repository synchronization (18/18 passing, including direct-file demo startup, closed nested-submenu rendering state, pinned CDN artifact/loader verification, reduced-motion timing and CDN failure fallback).
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 339 (now 340); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-243 · Complete genuine macOS VoiceOver keyboard and spoken-output testing on the published Tablet variant: collapsed/expanded trigger announcements, closed-submenu omission, nested-link order and two-stage Escape focus restoration all pass.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 340 (now 341); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-244 · Complete spoken-output testing with NVDA on Windows.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Source:** [todo.md](todo.md), original line 341 (now 342); baseline `c808ca4`.
**Exit criteria:**


#### R-245 · Verify submenu arrow open/close motion, reduced-motion CSS and Canvas editability in both Webflow components and both published delivery modes.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 342 (now 343); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-246 · Verify all nine social/contact destinations and default icon Images on both published pages; audit every visibility and replaceable icon-image prop binding in both components.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 343 (now 344); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-247 · Verify `v0.2.0` at Desktop and Tablet in both delivery modes: enhancement state, outer and nested Escape focus return, loaded icon assets, hidden runtime config and zero horizontal overflow.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 344 (now 345); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-248 · Complete the full layout/motion matrix (35/35 open, presentation, geometry, overflow and re-close cases).
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 345 (now 346); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-249 · Verify all three dropdown alignments and all seven centered motion presets.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 346 (now 347); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-250 · Obsolete original test component removed by the user after backup.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 347 (now 348); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-251 · Verify the published Desktop acceptance build initializes, expands the Tablet variant, renders shared links and hides authoring settings.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 348 (now 349); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-252 · Verify published nested-submenu keyboard open/Escape behavior.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 349 (now 350); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-253 · Publish and verify the direct collapsed-grid fix at Desktop, Tablet, Mobile landscape and Mobile portrait.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 350 (now 351); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-254 · Publish and verify the nested-submenu grid fix, including two-stage Escape and focus restoration.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 351 (now 352); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-255 · Publish and verify the center-alignment and close-duration Embed update.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 352 (now 353); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-256 · Audit the five native collapse variants' stored Desktop, Tablet, Mobile landscape and Mobile portrait overrides; restore the test instance to Tablet afterward.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 353 (now 354); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-257 · Replace obsolete expanded-variant mobile overrides that hid the shared panel in Never and Mobile portrait; re-run the affected Canvas cases.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 354 (now 355); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-258 · Publish and verify the expanded-panel variant correction at Mobile landscape and Mobile portrait widths.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 355 (now 356); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-259 · Restore the clean-install instance's unintended hidden-primary-navigation test override while retaining the user-selected Tablet variant.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 356 (now 357); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-260 · Verify the published `Smashburger` clean install at 1280px, 984px, 767px and 393px: correct collapse state, zero overflow, loaded icons, hidden runtime settings, ARIA/inert synchronization, nested/outer Escape focus restoration and clean console.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 357 (now 358); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-261 · Compare the MWP Library source and destination component schemas: the same five variants and 57 property IDs/defaults remain linked, with destination-local icon asset remapping intact.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 358 (now 359); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**
**Evidence links:** [webflow/smashburger-poc-acceptance.md](webflow/smashburger-poc-acceptance.md)
**Evidence boundary:** Historical recorded check only; not rerun during this docs retrofit.


#### R-262 · Declare the Navbar Light/SmashBurger POC ready to hand over to the Webflow Designer Extension phase; keep Windows NVDA and the first real version rollback/upgrade as explicit product-phase validation.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 359 (now 360); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [POC record](webflow/smashburger-poc-acceptance.md), released/installed v0.2.1 and its verification; original checklist source above records this milestone.
**Exit criteria:**


#### R-263 · Verify the Canvas helper for every collapse variant at its own breakpoint (Tablet, Mobile landscape, Mobile portrait, Always) on the self-contained source; screenshots 2026-10-03.
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 360 (now 361); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-264 · Verify the Canvas helper on the CDN edition in a linked consumer site (Smashburger `/demo`, 2026-10-03).
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 361 (now 362); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.


#### R-265 · Update the Smashburger demo pages' version copy to v0.2.5 (Overview card via MCP; six `sb-demo-footer` Divs by hand, since MCP `set_text` cannot edit a Div's direct text). 2026-10-03.
**State:** built · **Evidence:** none · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 362 (now 363); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**


#### R-266 · Decide whether to hide Webflow's grey runtime-Embed placeholder bar on the Canvas (it adds about 70px under each instance header).
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (historical)
**Source:** [todo.md](todo.md), original line 363 (now 364); baseline `c808ca4`.
**Acceptance basis:** Michael’s standing historical-acceptance decision, 14 October 2026 (this session); [Canvas fixture](webflow/canvas-authoring-fixture.md), source/consumer use on 3 October 2026; [v0.2.6 release](webflow/v0.2.6-release-verification.md), 8 October 2026.
**Exit criteria:**
**Evidence links:** [webflow/canvas-authoring-fixture.md](webflow/canvas-authoring-fixture.md)
**Evidence boundary:** Recorded authoring fixture checks only; limitations and later superseding checks in the source record still apply.

  - Michael: it's in the way. The helper now hides the component's direct-child `.w-embed` elements on the Canvas (no extra control; select the Embeds in the Navigator). Michael's Desktop screenshot confirmed the bars are gone and both instances are otherwise unchanged (2026-10-03).


**Brief #13 current access recheck — 15 October 2026 (R-037, R-095, R-155):** read-only Webflow site/page details still show Clean Trial has no custom domains, its last publication remains the cleanup publication at `2026-10-14T23:30:40.323Z`, the probe is draft and four unrelated pages remain drafts. Webflow AI confirms the page-level `canBranch: true` does not grant Enterprise branch/staging access. A fresh Chrome tab loaded only the published v0.2.6 comparison; it was closed. CUA exposed no request log, DOM evaluation or viewport control, and `node_repl` returned no browser/CDP handle. There was no source-derived candidate available for capture or behavior checks. No Webflow change or publication occurred. Candidate request capture, Full-width/Right short-height containment, reduced-motion/custom-animation, human/device, physical-display DPR and clone checks remain open. The isolated-route blocker was already reported to Boss; see the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #13 browser and fixture access recheck — 15 October 2026 (R-037, R-095, R-155):** the current Webflow list still shows the Clean Trial probe as a draft, four unrelated drafts, no custom domains, and the same 14 October cleanup publication. The CUA control available in this session has accessibility, screenshot and input methods, but no DOM evaluation, viewport emulation or Network request capture. No Chrome tab or Webflow change was needed for this readback. The candidate checks remain open pending a supported isolated route and inspection controls; see [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #13 fresh build and current inspection-surface check — 15 October 2026 (R-037, R-095, R-155):** `npm run test:built` passed 48/48 and restored all 12 generated files. Read-only Webflow still shows an empty draft probe, four unrelated drafts, no custom domains and the unchanged 14 October cleanup publication. This CUA runtime offers accessibility, screenshots and input only; the separate Playwright/DevTools interface described in its browser documentation is not callable here. The Node repl Playwright import failed with a module export syntax error. No browser tab or Webflow change was made. No candidate request, narrow-height, motion or custom-animation result was obtained; human/device and clone checks also remain open. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #13 current tool access — 15 October 2026 (R-037, R-095, R-155):** Read-only Webflow `list_sites` and `get_site` succeeded; Clean Trial still has no custom domains and its last publication remains `2026-10-14T23:30:40.323Z`. The current Chrome inventory exposes an extension browser; native `cua.getApp("com.google.Chrome")` returned `cgWindowNotFound`. The available CUA page surface has no Network request list or page evaluation, and the Node repl Playwright import failed with `The requested module './index.js' does not provide an export named 'default'`. No browser tab or Webflow content changed. Candidate request capture, Full-width/Right short-height containment, reduced-motion/custom-animation, human/device, physical-display DPR and cloned upgrade/rollback remain open. The isolated-route blocker was already reported; see [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #13 browser and probe readback — 15 October 2026 (R-037, R-095, R-155):** current Webflow readback confirms the Clean Trial probe is still draft and contains only Body; the page list shows three other draft pages, though the brief and earlier records say four. The site has no custom domains and its last publication remains `2026-10-14T23:30:40.323Z`. Chrome is listed in the app inventory, but `cua.getApp("com.google.Chrome")` twice returned `cgWindowNotFound`. The extension browser has no page evaluation or Network request list; its DevTools shortcut did not open a panel on the published comparison page. The fresh tab was closed. `node_repl` Playwright import returned an export error. No Webflow content or publication changed. Candidate runtime checks, human/device, physical-display DPR and cloned upgrade/rollback remain open. The isolated-route blocker was already reported; see [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Brief #13 live fixture and browser capability recheck — 15 October 2026 (R-037, R-095, R-155):** current read-only page readback confirms four drafts total: the empty probe plus three unrelated audit pages. Earlier “four other drafts” wording is stale. The probe remains draft with only Body; the site has no custom domains and the last publication is unchanged at `2026-10-14T23:30:40.323Z`. The supported browser bridge exposes page evaluation, viewport and console access but no Network request capture; native Chrome binding and the Node repl Playwright import failed. No browser tab, Webflow change or publication occurred. Remaining candidate and human/device checks stay open. See [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).


**Brief #13 callable browser control confirmation — 15 October 2026 (R-037, R-095, R-155):** Chrome is listed, but `cua.getApp("com.google.Chrome")` returns `cgWindowNotFound`. The CUA browser-control surface available in this session provides accessibility, screenshots and input, not page evaluation, viewport control or Network request events. A richer Playwright/DevTools interface appears in browser documentation but is not callable through this session's CUA API. No browser tab or Webflow content changed; the empty draft probe remains untouched. Candidate request capture, Details/focus, Full-width/Right short-height, rendered reduced-motion/custom-animation, human/device, physical-display DPR and cloned upgrade/rollback remain open. The route blocker was already reported to Boss; details in [STATUS](STATUS.md) and the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).


#### R-267 · Leave a tidy site after unlinking the component. *(accepted by Michael in boss, 15 Oct 2026)*
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (15 October 2026)
**Try:** On the “Unlink test” page, find an unlinked menu in the list of page elements. Check that there are no duplicate or blank “Always” entries, then use Preview to open and close the menu.
**Covers:** R-122, R-129–R-137
**Source:** [always-class audit](webflow/always-unlink-class-audit-2026-10-13.md); [unlink candidate record](webflow/unlink-hardening-candidate.md).
**Evidence boundary:** Recorded checks cover the legacy cleanup duplicate and the one-Base candidate in the named fixtures; they do not promise the same result for every existing or future Webflow instance.

#### R-268 · Test safe agent styling of an unlinked menu with duplicate class names.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Owner:** agent · **Depends on:** an authorised disposable Webflow consumer with a backup and an exact release/candidate identified
**Source:** Michael's request in this chat, 23 October 2026: record the duplicate-class issue and flag it for testing; [madewithpixels incident and restored-site record](webflow/madewithpixels-menu-2026-10-23.md#duplicate-class-targeting-incident-and-required-test).
**Issue:** Unlinked local classes and imported Library classes can share display names. In the recorded v0.2.6 incident, name-based writes for `mwp-css-nav_panel`, `mwp-css-nav_link` and `mwp-css-nav_contacts` landed on imported records rather than the intended local records. A success response and a name-based readback did not establish that the intended element was styled. Test this agent-customisation risk independently of routine consumer-site updates.
**Release test:** Install → configure → unlink → inspect both style records → agent restyle → inspect both records and actual element assignments → Preview at desktop/mobile → verify rollback. Repeat for the exact renamed release candidate; the v0.2.6 incident is not candidate proof.
**Exit criteria:**
- Record stable style IDs, selectors, Library/local origin and declarations before and after each write. Prove whether a supported write route can select the intended record deterministically; do not assume all API routes lack ID targeting.
- Prove only the intended local records change, while the imported records and a linked sibling remain unchanged. Check normal, hover/focus and breakpoint styles, plus rendered geometry and keyboard behaviour.
- Define and test an agent preflight that detects duplicate names and stops ambiguous writes. If deterministic targeting is unavailable, test a uniquely named local-class route that preserves functional hooks and unrelated styling.
- Document the supported unlink-and-style workflow, its limitations and recovery steps before claiming agent-assisted customisation is verified.
**Evidence links:** The incident and temporary workaround are recorded below; the controlled regression test has **not run**. R-267's existing acceptance remains unchanged and does not cover this separate failure mode.


#### R-269 · Make Designer styling survive the runtime in every menu layout.
**State:** in progress · **Evidence:** verified (live) · **Acceptance:** accepted (5 November 2026)
**Accepted by Michael in boss, 5 November 2026** — checked: Looked at brief #318's result.
**Access gate cleared:** Disposable SB test site is available through Webflow MCP, and its 10 November backup is confirmed. The prior access hold ran from 4 to 10 November 2026.
**Still open:** Compare Designer and Preview styling with the published page; measure the browser's CSS viewport width if an exact responsive threshold is needed; and check presets-off, remaining authored-style cases and short-height behaviour across the required layouts and views. At 667 px in the saved Home Preview, Michael reports that the unlinked bottom candidate opened cleanly in Dropdown, Full-width and Left. The separate, still-linked second menu opened without clipping in Right, though it sat underneath the bottom menu; its Overlay layout was also good. Michael also reports that all five layouts—Dropdown, Full-width, Left, Right and Overlay—open cleanly at Tablet and Mobile sizes in the disposable test site. Exact pixel widths and the menu instance used for each layout in that report were not specified. These are Michael's observations, not independent Codex checks. On the published page, the 605 × 900 screenshot shows three collapsed buttons; the bottom panel displayed all links, the middle panel's first Home link was not visible though present in the accessibility tree, and the top panel's upper content was hidden behind lower rows. Space opened the top menu and Escape closed it with focus remaining on that trigger. The screenshot's exact CSS viewport width is unknown. Michael confirms that the lower rows covering panels from upper rows is expected because multiple test menus share the same page; no stacking fix is needed. A 1280 × 720 screenshot showed three expanded rows. The published Console has not been read. Michael's phone report says the upper expanded menu is cut off by menus beneath it while the lower menu works well; he chose to keep the updated version for further checks (brief #370). Previous reversible checks confirmed the unlinked menu's `data-collapse=tablet`, `data-presets=true` and `data-canvas-open=false`; a temporary `data-collapse=mobile-landscape` check at 820 px made the panel expand, and temporary Canvas-open On displayed its panel. Saved Style-panel readback covers the unlinked inner wrapper, panel, secondary links and CTA, but not computed styles or Preview/published rendering. The current Preview rendered with custom code enabled, but no Console was read; an earlier general script-compilation error remains unexplained and no duplicate-script error is confirmed.
**Single-menu short-height fixture (11 November 2026):** The local Full-width candidate panel measured 471 × 428 CSS px with 480 px of content at 471 × 500, scrolled internally by wheel and by keyboard focus, and allowed Contact us activation. At 471 × 900 it measured 471 × 480 with 480 px of content; all links fit, remained keyboard reachable and Contact us activated. No failure reproduced. The older published 667 px comparison is a separate page with three stacked menus; it did not measure short-height scrolling or test Contact us. See the [fixture observation](STATUS.md#11-november-2026--single-menu-short-height-check-completed--codex-night-shift). This local result does not replace the required Designer, Preview or published comparisons across layouts and styles.
**Try:** Compare the chosen menu layout, colours and spacing in Designer, Preview and the published test page at desktop and mobile widths. Check all five layouts, because the staging console check alone does not show that styles survive the runtime.
**Priority:** Release blocker for the next release/Marketplace readiness; passing existing local checks does not clear it.
**Owner:** agent · **Depends on:** an exact candidate and an authorised disposable Webflow consumer with a backup for Designer/Preview/published checks
**Source:** Michael's report, Claude's supplied diagnosis and Michael's instruction to roadmap it, 24 October 2026; Git audit of `38bbf475e6b3bdfcbd0bc0d261ace0c4502c6639` (8 October), `v0.2.6:dist/navbar-light.css` and current `src/navbar-light.css`; [recorded overlay activation](webflow/madewithpixels-functional-menu-2026-10-23.md).
**Confirmed cause:** The 8 October change added a high-specificity overlay `display: grid` rule intended to override destination Flex layouts. It shipped in v0.2.6 and remains in the immutable release. The current candidate removes that forced display, makes author-owned layout/appearance defaults zero-specificity, and gates visual presets including the backdrop surface. State visibility, pointer handling and motion remain runtime behavior. See [runtime styling boundary and follow-up](webflow/runtime-styling-boundary-2026-10-31.md).
**Required outcome:** Authors control layout and appearance through the Designer. Runtime behaviour must not silently replace their choices. Keep this separate from R-268's duplicate-name targeting failure.
**Exit criteria:**
- Inventory every runtime CSS property by layout and closed/opening/open/closing state, including Canvas-open and no-script fallback. Document which properties the library controls and why; distinguish behaviour requirements from author-owned layout and appearance.
- Remove high-specificity layout/appearance overrides across dropdown, overlay, left, right, full-width and collapsed states. Put overridable defaults in zero-specificity `:where()` selectors so a single author class wins. Preserve necessary visibility, motion, focus, inert/ARIA, scroll-lock and fallback behaviour; explicitly document any justified behavioural exception rather than weakening accessibility.
- Keep visual presets opt-in and consistently gated by `:not([data-presets="false" i])`. With presets disabled, runtime must not impose colours, typography, decorative button styling or other visual presets. Audit trigger/close styling in every state.
- Make layout variants and their editable styles visible in the Designer. Canvas “show open menu” must reproduce the corresponding live open layout; the runtime reads configuration for behaviour rather than masking the authored layout.
- Add a build-time CSS guard against non-zero-specificity author-owned layout/appearance declarations. Define and test a narrow behaviour allowlist and any documented exceptions; cover generated delivery formats as well as source.
- For every layout, test authored Flex and Grid panels with presets disabled; style panel, primary links, secondary/contact links, CTA and trigger through the Style panel. Include opinionated global styles, stale `grid-template-columns`, breakpoint changes and linked/unlinked instances. Compare Designer Canvas-open, Preview and the authorised published test page at desktop/mobile and short viewport heights, with screenshots and computed-style evidence against the exact candidate.
- Preserve open/close, stagger, CTA navigation, keyboard/focus return, Escape, reduced motion, scroll containment and no-script fallback. Test upgrades from v0.2.6 as well as clean installs; do not substitute old release results for candidate checks.
- Audit runtime selectors to keep behavioural hooks on data attributes rather than styling class names. Coordinate imported/local namespace and supported agent customisation checks with R-268; do not claim that selector changes alone remove Webflow's class-name ambiguity.
- Assess compatibility for installs relying on forced layouts; document migration and rollback, choose the appropriate breaking version before release approval, and retain immutable v0.2.6 assets. No consumer rollout is implied by this item.
**Evidence boundary (31 October 2026):** Source changes and candidate build are local only. The first full test run failed: two existing tests still assert the old forced layout/preset behavior, the new CSS contract test has two incorrect assertions, and known immutable v0.2.6 distribution checks fail. No rendered-browser evidence, Designer/Preview/published comparison, CSS build guard or migration verification. Michael's acceptance is pending.
**Local implementation and evidence (31 October 2026):** The candidate has a build-time CSS guard over source, candidate stylesheets and generated Webflow/Library Embed styles, plus JSDOM regressions for Flex with stale Grid tracks, intentionally authored Grid, opinionated host styles, presets disabled and all five layouts; Canvas helper checks also pass. The final candidate-only verification passed 690/690, including simulated upgrade and rollback cases. The full `npm test` passed with 279 tests: 252 passed and 27 are TODO for documented immutable v0.2.6 defects. No rendered-browser, Designer Canvas, Preview, published-page or real-site upgrade/rollback comparison was performed. R-269 remains open until the bounded site comparison and Michael's review are complete.

**Brief 286 access result (4 November 2026):** New Smashburger Test remains absent from the current Webflow MCP `list_sites`; `get_site`, `list_pages` and site-instruction search using its recorded ID returned site-not-found. No site changes or snapshot exports were made. The required before and after backups are confirmed; the comparison remains blocked. See [brief 286 handoff](evidence/brief-286-r269-access-block-2026-11-04.md) for candidate hashes, backup routes, exact unchecked items and restore steps.

**Brief #321 check — 10 November 2026:** The generated self-contained Library candidate now wraps its JavaScript in a private scope, and its Embed matches the saved `SmashBurger 0.3.0-rc.1 candidate` exactly. `npm run test:candidate` passed 693/693. Chrome's Console showed zero messages after reloading the published Disposable SB test site. The published page displays three navbar rows; their relationship to the two roots in the current Designer tree is unresolved. The site was last published 5 November, so this is not a current Designer/Preview check. No Webflow page, component, style, Library share or published content changed. See [STATUS](STATUS.md#10-november-2026--candidate-embed-and-staging-script-check--codex).

**Brief #427 local guard stress check — 10 November 2026:** The existing coverage already includes host styles, stale Grid tracks with authored Flex, authored Grid, presets off, and all five layouts in local JSDOM. The CSS guard's property list omitted several author-owned layout declarations (including Flex direction/wrapping, Grid placement and row/column gaps), so high-specificity runtime regressions using those properties could pass. Added these properties and focused accepted/rejected declaration cases. See [guard limits and risk review](webflow/r269-styling-guard-limits-2026-11-10.md). Focused checks pass locally; this does not establish Designer, Preview or published rendering.

**10 November 2026 — saved-page Preview check:** Readback shows three menu roots: a standalone menu, a nested Library component instance and an unlinked candidate. The Codex in-app Preview showed all three at 1334 px; at 991 px the Tablet copy collapsed while the other two stayed expanded; at 767 and 479 px all three collapsed. At 479 px the closed panels were 384 px wide and hidden, and the triggers were 44 px high. This does not check the open panel or the other four layout settings. With Preview custom code enabled, Webflow reported a general “CompilationError: Invalid source code” and an uncaught promise error, not a specific duplicate-name message. Five inline script bodies parsed individually and together without a duplicate top-level declaration; this does not identify the Webflow error. A click on the unlinked menu trigger opened a JavaScript alert; its text was not recorded, and the Designer connection then closed. No saved page content, style, Library share or publication changed. The Preview tab is left open in the Codex browser. See [STATUS](STATUS.md#10-november-2026--saved-page-preview-and-responsive-check--codex).

**10 November 2026 — 667 px open-panel comparison:** Michael reports that the unlinked bottom candidate opens cleanly in Dropdown, Full-width and Left. The separate, still-linked second menu opens in Right without clipping, though it sits underneath the bottom menu; its Overlay layout is also good. The second menu was restored to Right, and the bottom candidate remains in Dropdown with presets On and Canvas-open Off. Codex could not operate the trigger in Webflow's separate-origin frame, so these are Michael's manual visual observations. No Console was read and no duplicate-script error was asserted. No styles, Library share or published page changed. The published page remains dated 5 November. See [STATUS](STATUS.md#10-november-2026--dropdown-and-full-width-preview-checks--codex).

**10 November 2026 — Tablet and Mobile layout report:** Michael reports that all five layout options open cleanly at Tablet and Mobile sizes in the disposable test site. Exact widths and which menu instance was used for each option were not specified. This does not establish published-page behavior. See [STATUS](STATUS.md#10-november-2026--tablet-and-mobile-layout-checks--codex).

**10 November 2026 — authorised staging publish:** Michael authorised publication of the exact Disposable SB test site. It was published to `disposable-sb-test-site.webflow.io` only; the site had no custom domains. The Home page loads. At 1280 × 720, a screenshot shows three expanded navigation rows stacked vertically; its accessibility tree exposes three menu navigation rows. This does not establish that the desktop appearance is intended or verify responsive behavior, menu interactions, or a duplicate-script error; no Console was read. See [STATUS](STATUS.md#10-november-2026--test-site-published-to-staging--codex).

**10 November 2026 — published mobile interaction check:** At a 605 × 900 screenshot viewport, the published page showed three collapsed MENU buttons. The bottom row's panel displayed all links; the middle row's panel appeared to hide its first Home link behind the row below; the top row's panel was visibly obscured by the rows beneath it. Michael confirms that this stacking is expected because several test menus share one page; it is not a defect to fix. The top menu opened with Space and closed with Escape, retaining focus on its trigger. The CSS viewport width and row-to-component identities are unknown. No Console was read. See [STATUS](STATUS.md#10-november-2026--published-mobile-menu-and-keyboard-check--codex).

**10 November 2026 — measured published comparison:** At 1280 × 720, the published Home page showed three expanded rows at y=0, 91 and 183 px. The first two report Dropdown and the third Full-width; their panel, first-link and CTA computed styles match. At 471 × 900, the top and middle panels are partly covered by the rows below, while the bottom Full-width panel shows all links. Michael has confirmed the shared-page stacking is expected. At 471 × 500, the bottom panel extends from y=216 to y=610; its CTA is visible, but social and contact links fall below the viewport and wheel scrolling does not move the panel. This stacked-page observation does not establish clipping for a single menu. On the top trigger at 471 × 900, Tab then Space opens the menu with visible focus on the trigger; Escape closes it and returns focus to the trigger, including after Tab moves focus to Home. Current saved Designer readback shows the third root as `SmashBurger 0.3.0-rc.1 candidate`, Layout Full-width, Layout presets Off and Canvas-open Off. The published third row is confirmed as the same component by its `mwp-component-library--sb-nav` class and Mobile landscape variant; it is Full-width with presets enabled. Site metadata shows last updated 12:49 UTC and last published 12:01 UTC, so the live page predates the current saved site. The reason for the presets difference is unknown. Webflow's snapshot and tree-readback routes did not support the library component, so a matching saved Preview screenshot remains outstanding. No site changes or screenshot files were made. See [STATUS](STATUS.md#10-november-2026--published-styling-short-height-and-keyboard-comparison--codex).

**10 November 2026 — published-page check card:** A local checklist separates Michael's reported layout observations from the limited published Home-page baseline, then gives one focused sequence for appearance, presets-off, short-height, keyboard opening, Escape and focus return. It marks unknown widths and menu identity rather than filling them in. No new browser check was made. See [the R-269 checklist](webflow/r269-published-page-checklist-2026-11-10.md).

**10 November 2026 — current presets-off staging comparison:** Michael supplied a screenshot of the selected third candidate open in saved Home Preview at 667 px; all links and the CTA are visible, while the social icons appear very dark against the panel. The screenshot height is not separately recorded. In Chrome, I confirmed the backup `R-269 before publishing current saved state`, then published only to `disposable-sb-test-site.webflow.io`; Webflow showed Custom domain disabled. The refreshed published third row matches the library component by its `mwp-component-library--sb-nav` class and reports Full-width with `data-presets=False`. Its computed panel, link and CTA styles were read at 2044 × 1076 CSS pixels, so this verifies the saved presets-off value reached staging but is not a matched-width visual comparison. No page or component styles were edited and the Library was not shared. The 667 px published comparison, one-menu short-height behavior, remaining authored-style cases and Console remain open. See [STATUS](STATUS.md#10-november-2026--saved-preview-backup-and-staging-comparison--codex).

**10 November 2026 — local presets-off declaration audit:** The maintained source, readable generated CSS and main generated Embed gate panel/overlay appearance, link appearance, decorative spacing, contact separators, icon tint and drawer close-button styling with `:not([data-presets="false" i])`. CTA appearance has no runtime rule, and the closed trigger has behavior rules only. Backdrop colour is gated while its positioning and visibility behavior remain active. Unconditional collapse geometry and Full-width grid tracks remain; the audit records them separately from visual presets. No source/generated gating discrepancy was found. This is local CSS evidence only and says nothing about Webflow rendering. See [the declaration list](webflow/presets-off-style-audit-2026-11-10.md).


