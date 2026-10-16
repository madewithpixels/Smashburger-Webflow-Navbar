# SmashBurger — Decisions

Extracted for brief #6 on 14 October 2026 at `c808ca4`. Accepted means the
source presents a settled choice, not agent acceptance of implementation. Unknown
original dates are explicit. Michael’s 14 October answers are applied below;
remaining Proposed choices are recorded here without another boss question.

## Current reading — 16 October 2026

SmashBurger, the `sb-nav` structural names and the canonical repository/package/path are settled (D-012/D-013). Their original questions, proposal text and follow-ups below are retained as decision history; they are not current blockers. The class migration exists as an unreleased local candidate (D-017), and both Library review candidates are prepared (D-018). Library sharing, consumer verification and release approval remain open.

Lite's agreed scope is unchanged (D-011). Local examples and workbench references are prepared; the native Webflow component and public clonable are unfinished. Designer Extension / Make local waits until Lite works (D-014); mega-menu and commercial/backend choices remain separate (D-015). The infrastructure snapshot remains an accepted prototype requiring manual upkeep (D-016; Michael accepted R-165 on 15 October 2026).

Boss routing is restored to the canonical checkout, and the seven old-checkout commits are reconciled with its newer runtime fixes. The combined candidate passes 685/685 local checks. The original pre-cleanup state is preserved in a verified recovery set; the old working tree is now restored to its remote baseline and removed from this Codex project under Michael’s later instruction (D-019). See [reconciliation evidence](webflow/canonical-reconciliation-2026-10-16.md) and [cleanup evidence](webflow/old-checkout-cleanup-2026-10-16.md). See [STATUS current position and handoff](STATUS.md#current-position--16-october-2026), [candidate boundary](webflow/canonical-rename-2026-10-15.md) and [Lite preparation](webflow/lite-examples-runtime-2026-10-16.md). No new decision or Acceptance is recorded by this refresh.

## D-001 - Native, CSS-first progressive enhancement
**Status:** Accepted
**Date:** Not recorded in the source; extracted 14 October 2026
Use native Webflow structure, one link tree, no pseudo-elements and CSS/details fallback. JavaScript enhances accessibility and behavior.
**Source:** README §§Introduction, Design constraints; todo §Project constraints (R-001–R-007, R-024).
**Consequence:** Keep the output editable and usable without a proprietary runtime.

## D-002 - Self-contained default and exact-version optional CDN
**Status:** Accepted
**Date:** Not recorded in the source; extracted 14 October 2026
Keep the self-contained Embed as the dependable default. CDN delivery is optional, pinned to semantic versions with matching integrity metadata; never float a production URL. MIT was owner-selected before the first public tag.
**Source:** todo §9 (R-098–R-106); README §Optional CDN distribution.
**Consequence:** Corrections need new immutable releases; npm identity/ownership remains future work.

## D-003 - No Component Slot in the ordinary navbar
**Status:** Accepted
**Date:** Not recorded in the source; extracted 14 October 2026
Do not add a Component Slot: slots accept component instances rather than arbitrary native link elements.
**Source:** todo §4, explicit Decision (R-062).
**Consequence:** Preserve ordinary native link/submenu editing; premium composition remains a separate exploration.

## D-004 - Secondary before Primary in the original structure
**Status:** Superseded by D-005
**Date:** Not recorded in the source; extracted 14 October 2026
The original panel structure put Secondary navigation before Primary navigation, with Social/Contact inside Secondary and links/CTA inside Primary.
**Source:** todo §4 (R-060).
**Consequence:** Historical structure retained here; the later focus-order decision replaces the group order.

## D-005 - Primary first everywhere
**Status:** Accepted
**Date:** 3 October 2026
Michael chose Primary first everywhere so DOM focus order matches visual order.
**Source:** todo §10 Component hardening, explicit Decision (Michael, 2026-10-03), R-156; git 44e131d; webflow/v0.2.4-release-verification.md §Consumer rollout.
**Consequence:** Supersedes D-004. Reorder native groups without removing compatibility CSS for older instances.

## D-006 - Friendly structural Navigator labels in the original component
**Status:** Superseded by D-007
**Date:** Not recorded in the source; extracted 14 October 2026
Initially give structural elements custom Navigator display names.
**Source:** todo §1 (R-028).
**Consequence:** Retained as historical direction; adaptation showed these labels obscure useful selectors.

## D-007 - Expose structural class names in the Navigator
**Status:** Accepted
**Date:** 3 October 2026 implementation; original agreement date not recorded
Remove custom structural Navigator labels; let native class names describe the structure. Keep intentional descriptive Embed labels.
**Source:** todo §10 Canvas authoring (R-162–R-163); git 9d84cef; webflow/unlink-hardening-candidate.md §Source candidate Navigator visual check (14 October 2026).
**Consequence:** Supersedes D-006. Future sb-* migration remains unimplemented, and a public clonable is unbuilt.

## D-008 - Floating Canvas settings inspector
**Status:** Superseded by D-009
**Date:** 3 October 2026
Use a floating compact Canvas settings inspector rather than leaving its rows in normal page flow.
**Source:** webflow/canvas-authoring-fixture.md §§Canvas helper in the source components, Navbar workbench page; R-166.
**Consequence:** Historical intermediate treatment; overlap and unhelpful interaction led to the later hidden-inspector decision.

## D-009 - Hide redundant Canvas inspector and script placeholder bars
**Status:** Accepted
**Date:** 3 October 2026
Hide the Canvas inspector because the props panel supplies its values, and hide script Embed placeholder bars that Michael found in the way. Keep selection through the Navigator and normal Preview/published runtime.
**Source:** webflow/canvas-authoring-fixture.md §§Navbar workbench page (fix step 3), Script placeholder bar hidden; todo R-174, R-266; git be62005, b0bc2dd.
**Consequence:** Supersedes D-008. This does not accept the newer manual infrastructure snapshot prototype.

## D-010 - v0.2.6 active rollout excludes old test sites
**Status:** Accepted
**Date:** 8 October 2026
Michael authorised the active Library, Smashburger, Voice Focus, madewithpixels and Lattice staging rollout and explicitly excluded SB Test Four and SB Test Five. Retain their unresolved historical records.
**Source:** todo opening Release status; webflow/v0.2.6-release-verification.md §§Active rollout, Test-site scope; git 7a69f8d.
**Consequence:** No broad claim that older test-site defects were fixed. Their future ownership is an open question Q-06, not authority to drop R-160.

**Follow-up — Michael, 14 October 2026, Q-06 (this session):** Verify fresh installs in current test projects. Keep R-160 as a historical defect and leave the SB Test Four page alone. This resolves the future verification route without dropping R-160 or claiming its defect repaired.

## D-011 - Detailed SmashBurger Lite first-clonable boundary
**Status:** Accepted
**Date:** 14 October 2026 — Michael, Q-01
Lite contains a local native component, plain/styled examples, workbench, safe-editing guide, one exact-version CDN loader and class-based Navigator labels; no Library installation, app dependency, CMS or mega-menu. Michael accepted this boundary in his Q-01 answer.
**Source:** Michael’s Q-01 answer, 14 October 2026 (this session); webflow/smashburger-lite-clonable-scope.md; git 77716d2; R-177–R-186.
**Consequence:** Build waits for a verified class migration/runtime and clone-flow checks; no clonable exists yet.

## D-012 - Exact structural sb-nav class mapping
**Status:** Accepted
**Qualifier:** settled by Michael in boss, 15 October 2026
**Original question — resolved 15 October 2026:** Should the visible class names use “sb-nav” and its role names? I recommend keeping that clear pattern; choosing it lets the migration start, while another name changes the class names designers see.
**Date:** 14 October 2026 specification
The proposed mapping uses sb-nav for the root and sb-nav-{role} for children, replacing mwp-css-nav_ and converting suffix underscores to hyphens. The mapping remains Proposed while Michael decides the product name (Q-02/Q-03, 14 October 2026); do not begin the class migration.
**Source:** webflow/class-namespace-migration-audit.md §Chosen class mapping; git c808ca4, 5d720b1; R-121–R-124.
**Consequence:** Keep data attributes, CSS variables, APIs/events, diagnostic names, variant markers and old release URLs stable in this class-only migration.

**Follow-up — Michael, 15 October 2026:** Accepted the `sb-nav` mapping. Product
identity remains SmashBurger; proceed with the planned versioned class migration
when the new canonical checkout is available.

## D-013 - Canonical repository/package and replacement local path
**Status:** Accepted
**Qualifier:** settled by Michael in boss, 15 October 2026 — *"'/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar'"*
**Original question — resolved 15 October 2026:** What should the main repository and package be called, and where should the local folder live? I recommend keeping the SmashBurger name and choosing a MacStudio path; this sets where you and collaborators find the work, while another choice changes those names and location.
**Date:** Not recorded in the source; extracted 14 October 2026
The earlier proposal names madewithpixels/SmashBurger-Webflow-Navbar as the repository and smashburger-webflow-navbar package, retaining the old repository for CDN compatibility and renaming the local folder last. R-128 still names Work on Macbook; a MacStudio replacement target and final identity remain unresolved, Q-03. Michael is still deciding whether to rename the product; nothing is deployed on a live domain yet, so retaining the old repository for CDN compatibility matters less. This is context for the decision, not permission to remove it (Michael, 14 October 2026, this session).
**Source:** todo §SmashBurger repository and local-folder rename (R-119–R-128); namespace audit §Build order and release boundary; current local cwd.
**Consequence:** Do not create the canonical repo, archive the old repo, rename this folder or alter remotes under this docs brief.

**Follow-up — Michael, 15 October 2026:** The selected local destination is
`/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`. Michael will
create and clone the new repository. This records his planned action; it does not
change the current checkout or remote. The local folder move remains the last
rename step (R-128).

**Follow-up — Michael, 15 October 2026, completion brief:** Explicitly authorised Codex to carry out the full history transfer and necessary remote repository operations. The clone already exists at the selected path; Michael will not handle the Git transfer. Preserve the old repository and all release hooks/URLs. This authority replaces the earlier allocation of the transfer work to Michael; it does not authorise bypassing the release or Webflow gates.

## D-014 - Designer Extension with Make local as the preferred product track
**Status:** Proposed
**For Michael:** After you have used the Lite release, do you want to build a separate Designer Extension and menu-maintenance tool? I recommend waiting for that experience before deciding; committing means building and maintaining a second tool, while declining keeps SmashBurger focused on the native navbar component.
**Qualifier:** Deferred until Lite works — Michael, Q-04, 14 October 2026
**Date:** Not recorded in the source; extracted 14 October 2026
The proposed Designer Extension generator/maintenance track includes Make local for linked and unlinked instances, minimal grouped properties, preflight/diff and rollback. Michael deferred this product commitment until Lite works (Q-04 answer, this session).
**Source:** todo §11 and R-187–R-214; README §Switching delivery without rebuilding the navigation.
**Consequence:** Generated native output must work without the app. API feasibility and genuinely temporary authoring controls need proof, not promises.

## D-015 - Separate mega-menu and deferred commercial model
**Status:** Accepted
**Date:** 14 October 2026 — Michael, Q-05
Mega-menu stays separate from the basic navbar. Michael accepted this boundary and deferred premium pricing, licensing and backend decisions (Q-05 answer, this session).
**Source:** todo §12, R-215–R-224; todo §11 Safe maintenance and distribution, R-212.
**Consequence:** Premium pricing, licensing and backend are deferred. Premium delivery and telemetry remain undecided; no commercial implementation is authorised by this decision.

## D-016 - Keep the infrastructure settings snapshot as a prototype
**Status:** Accepted
**Qualifier:** Prototype only
**Date:** 14 October 2026 — Michael, Q-07
Keep the closed infrastructure Details and manual settings snapshot as a prototype, with a muted “Infrastructure and settings” label. Michael accepted the prototype boundary and label direction (Q-07 answer, this session); this docs update does not implement styling.
**Source:** webflow/canvas-authoring-fixture.md §§Closed native Details wrapper, Static settings snapshot; webflow/unlink-hardening-candidate.md §Published Details-wrapper follow-up; R-165.
**Consequence:** Static text requires manual upkeep; no live binding or accepted shared pattern is claimed.

## D-017 - Isolate the renamed class candidate from the immutable release
**Status:** Accepted
**Qualifier:** technical — settled by Codex, 15 October 2026, under project-docs / boss D-096
**Date:** 15 October 2026
Use package name `smashburger-webflow-navbar` and prerelease version `0.3.0-rc.1` for the accepted `sb-nav` class migration. Generate into `candidate/`; retain the existing top-level v0.2.6 distribution, Embeds, loader and archived demo bytes. Protect these bytes and the retained runtime contracts with automated assertions. Do not create a release tag or install the illustrative candidate loader.
**Rationale:** R-121 requires an explicit versioned class change; R-122 and S-07 protect runtime compatibility and existing immutable releases. Separate output allows the full renamed build to be reviewed without silently replacing the released baseline or inventing a published CDN URL.
**Source:** Michael's completion brief, 15 October 2026; D-012/D-013; R-121–R-125; `scripts/build-paths.mjs`; `compatibility/`; [migration record](webflow/canonical-rename-2026-10-15.md).
**Consequence:** Release promotion to top-level `/dist`, final loader generation, tags and Webflow/Library rollout remain gated work. The selected canonical clone can be used now while the old repository stays available.

## D-018 - Isolate Library verification names and pin already-pushed candidate bytes
**Status:** Accepted
**Qualifier:** technical — settled by Codex, 15 October 2026, under project-docs / boss D-096
**Date:** 15 October 2026
Duplicate the two actual Library editions into explicitly named 0.3.0-rc.1 review candidates, retaining their five variants, native content, assets and property bindings. Copy authored declarations to new sb-nav class records; retain original definitions and class declarations. Generate candidate-only CSS aliases for the new Webflow variant markers and unmarked Mobile landscape base, while preserving old hooks. Use an exact already-pushed canonical commit and verified SRI for the CDN test candidate; retain the released v0.2.6 loader and the illustrative, uninstalled tag proposal separately.
**Rationale:** A class-only rehearsal should not silently redesign the original Library properties/variants or publish a nonexistent release tag. An immutable existing-commit pin enables CDN verification without a new release operation.
**Source:** Michael's continuation and full-focus instructions, 15 October 2026; D-012/D-017; R-121/R-122/R-126; [candidate checks and limits](webflow/library-sb-nav-candidates-2026-10-15.md); `scripts/build-webflow-library-candidates.mjs`.
**Consequence:** This is technical candidate preparation, not Michael's Acceptance or sharing authority. The actual five-resource sharing review, clean consumer linkage/update/unlink/rollback, Webflow fallback, stable release and human/device checks remain gated. The separate one-Base Lite/unlink direction remains unchanged.

## D-019 - Freeze the old local checkout at its remote baseline
**Status:** Accepted
**Date:** 16 October 2026 — Michael in this chat
Michael asked to remove unwanted local development from the old checkout, restore
it to where it should have been left and remove it from the Codex project's
folders. This authorises the bounded local cleanup after verified backup; it
supersedes the earlier keep-untouched instruction for that cleanup only.
**Source:** Michael's cleanup request and subsequent confirmation that he removed
the folder from Codex project settings; [execution and recovery evidence](webflow/old-checkout-cleanup-2026-10-16.md).
**Consequence:** The old local main/worktree is a clean compatibility copy at
`0864f82`, matching its live-verified GitHub main. Its complete pre-cleanup history
and working files are backed up. Development uses the canonical folder. Release
tags, the prototype worktree, the old GitHub repository and CDN pins remain intact;
remote archival/retirement stays gated under R-127. No roadmap Acceptance follows.
