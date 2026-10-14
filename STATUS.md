# SmashBurger — Status
**Stage:** v0.2.6 released baseline; Lite scope accepted, naming/class migration and Lite publication pending; Designer Extension / Make local deferred until Lite works.
**Last updated:** 14 October 2026 — Codex
**Reviewed at commit:** 161b744 — checked baseline before this documentation update
**Next action:** Continue Lite preparation within D-011; class migration and publication wait for the product name. Verify future fresh installs in current test projects.
**Needs Michael:** Decide the product name. This blocks the class migration and Lite publication.

Stage sources: Michael’s Q-01–Q-07 answers in this session, 14 October 2026;
DECISIONS D-010–D-016; webflow/v0.2.6-release-verification.md. No new boss question.

## 14 October 2026 — Michael’s answers and historical acceptance — Codex

**Changed:** Applied Q-01–Q-07 to the four project docs. D-011 accepts the Lite
boundary (R-177–R-186); D-015 accepts separate mega-menu scope and defers premium
pricing/licensing/backend (R-212, R-215–R-224); D-016 accepts the manual settings
snapshot as a prototype with a muted “Infrastructure and settings” label (R-165).
The label is direction only, not an implemented change. D-014 and R-187–R-214
remain deferred until Lite works. Appended Q-06 to settled D-010 without rewriting
its original record: R-160 stays a historical defect; leave SB Test Four alone and
verify fresh installs in current test projects. D-012/D-013 remain Proposed while
Michael decides the product name (R-119–R-128). Nothing is deployed on a live
domain yet, so the old repo’s CDN compatibility role matters less; no repository
change is authorised. Source: Michael’s explicit answers in this session.

**Historical acceptance — Michael, 14 October 2026:** Applied his standing rule to
183 built roadmap items supported by pre-today release or use records, including
the v0.2.6 release work. Each item now says `accepted (historical)` and cites an
acceptance basis. This applies Michael’s rule, not agent sign-off. 83 items remain
pending: 66 not built and 17 built. Of those 17, four are newer work, four are
unreleased candidate work, two are prototypes, and seven have unclear qualifying
release/use evidence. The unclear count is seven; no item-by-item questions raised.
Evidence fields and States are unchanged. Historical acceptance of superseded
milestones does not revive them. Sources: project-docs v0.3 Historical acceptance;
Michael’s instruction in this session; ROADMAP acceptance-basis links to the POC,
Canvas fixture and v0.2.4/v0.2.6 release records.

**Outputs:** Updated SCOPE.md, DECISIONS.md, ROADMAP.md and STATUS.md only. Local
commit requested: `Apply Michael's answers and historical acceptance`.

**Checked how:** Clean main baseline at 161b744. Reviewed c808ca4..HEAD: 770bcdf
contains the retrofit and 161b744 its whitespace fix; no intervening implementation
gap. Compared all 266 roadmap IDs/titles/order, State and Evidence fields against
HEAD; checked Acceptance totals, per-item sources, retained pending candidates,
prototypes and newer work, decision statuses, local Markdown file links and
`git diff --check`. Original todo and settled D-001–D-010 text remain intact;
D-010 has a dated follow-up. No code tests or live checks rerun for this docs update.

**Still open:** Product name, class migration and Lite build/publication gates;
unreleased one-Base candidate, prototype styling/upkeep, and the seven ambiguous
historical-acceptance cases remain pending. Existing rollback (R-115), icon matrix
(R-037) and Windows NVDA (R-244) validation remain open. Designer Extension /
Make local and premium commercial/backend choices are deferred as above.

**Needs Michael:** Decide the product name. This blocks the class migration and Lite publication.

**Open questions (not blocking):** None raised in this update. Deferred choices
remain recorded in D-014/D-015; they do not block this documentation work.

**Next useful action:** Continue authorised Lite preparation under D-011, using
current test projects for fresh-install verification. Michael pushes the local
commit. No repeat naming question in boss.

**Handoff:** For Michael or the next agent: read this header and D-010–D-016 first.
Branch main; no new worktree. Do not act on the historical Q-01–Q-07 question list
below: this entry supersedes it. Keep SB Test Four untouched, R-160 historical,
and D-012/D-013 Proposed. Publication, Library sharing, remote changes and tags
still require explicit authority. This update changes documentation only.

## Historical log

The retrofit entry below records the earlier position before Michael’s answers
and standing historical-acceptance rule. Its pending-acceptance statements and
question queue are preserved as history and superseded by the entry above.

## 14 October 2026 — Retrofit baseline — Codex (night shift)

**Changed:** brief #6 extracted 266 ordered checklist items as R-001–R-266,
with State, Evidence and Acceptance. Added SCOPE, ROADMAP, DECISIONS and STATUS;
added AGENTS plus CLAUDE import. Added one pointer line to todo without rewriting
its contents. This is record maintenance across existing items; no new retrofit
roadmap item was invented. Sources: todo, README, webflow release/verification
records, local git log, project-docs skill and boss docs/agents-setup.md §4.

**Outputs:** SCOPE.md, ROADMAP.md, DECISIONS.md, STATUS.md, AGENTS.md, CLAUDE.md and
the todo pointer; one local commit requested as `Retrofit project docs` (brief #6).

**Checked how:** read-only git status was clean on main at c808ca4; skimmed the
last 80 commits and inspected source records. Local document checks compare all
266 R titles/order to the original todo checklist, verify original todo bytes
remain after the pointer, require one set of State/Evidence/Acceptance fields per
item, check local file-link targets and IDs, and compare the boss reporting text
byte-for-byte to §4. `git diff --check` verifies whitespace. No code tests, builds,
Webflow or live browser checks are part of this docs-only verification. Historical
live evidence is labelled as such; it was not rerun tonight.

**Current evidence:**

- Released v0.2.6 was recorded on 8 October with 41/41 tests, syntax/distribution
  checks and CDN byte comparison. Published readback proved exact code in the
  active staging rollout; rendered acceptance came from Michael's Preview checks.
  Source: webflow/v0.2.6-release-verification.md §§Evidence, Active rollout.
- Dated historical acceptance: **8 October 2026 — Michael accepted the Preview
  results**, per todo's release status. This is release/Preview sign-off only;
  no complete individual todo item is assigned Acceptance from it. Library update
  acceptance and records headed “acceptance” are not automatically roadmap sign-off.
- The one-Base candidate was shared without Library publication. Clean destination
  retained 79 native nodes, both Embeds, no numbered variants and all 66 settings;
  non-default overrides, responsive runtime, fallback and Embed parity passed within
  the recorded fixture limits. The isolated staging route was published. The
  original five-variant v0.2.6 component remains separate. Source:
  webflow/unlink-hardening-candidate.md §§Isolated clean-destination follow-up,
  Clean-destination non-default override follow-up, Final Canvas-affordance and
  Embed-parity readback; todo §10.
- The source candidate/clean Navigator gate is recorded complete on 14 October.
  No public clonable exists and no universal future unlink guarantee is claimed.
  Source: git 802679d; todo R-163–R-164; unlink candidate Navigator sections.
- Lite scope and the exact structural class mapping are documents only, committed
  on 14 October (77716d2, 5d720b1, c808ca4). Source: namespace audit and clonable
  draft; runtime/class/Webflow construction remains unperformed.

**Still open / contradictions retained:**

- R-037 icon matrix has partial native-fixture high-DPI proof; the 4px JS two-line
  pass and recorded DPR, linked candidate and exact distribution checks remain.
  Source: webflow/icon-geometry-regression.md, especially the final 4px follow-up.
- R-115 explicit rollback and R-244 Windows NVDA remain open. Source: todo and
  webflow/smashburger-poc-acceptance.md §Result.
- R-160 old SB Test Four import defect is open but excluded from the v0.2.6 rollout
  (D-010). Future ownership needs Michael; no item was dropped.
- R-128 retains an obsolete Macbook path. Today's actual checkout is on MacStudio;
  future replacement destination is unconfirmed (D-013).
- README/migration-guide paragraphs still describe v0.2.3 candidate behavior,
  adjacent-sibling limitations for enhanced presentation, visible settings and
  older cleanup gates. Later enhanced/native, v0.2.4/v0.2.6, Canvas and 13 October
  unlink records qualify them. Those originals were not rewritten under this brief.
  Sources: README §§Replacing an existing Webflow Navbar, Component properties;
  webflow/migration-guide.md §§Backdrop behavior, Designer, Preview and delivery;
  webflow/enhanced-layout-regression.md; webflow/canvas-authoring-fixture.md;
  webflow/always-unlink-class-audit-2026-10-13.md.
- R-060 Secondary-first and R-166 floating inspector describe superseded milestones;
  D-005 and D-009 hold later settled direction. R-169 retains partial-check wording
  even though later Canvas records extend coverage. Historic ticks stay built;
  broad future-product completion is not inferred.
- A smashburger-designer-extension directory exists locally while R-187 is unchecked.
  Its existence is not proof of a completed capability prototype; keep planned until
  a relevant verification record establishes progress. Source: local directory
  inventory at c808ca4 and todo §11.
- Infrastructure Details with a manual settings snapshot remains an unstyled
  prototype requiring upkeep; not an accepted shared pattern (D-016).

**Needs Michael — complete inference list (queued in boss):**

- **Q-01 / D-011:** approve the detailed Lite first-clonable boundary (inferred — confirm).
- **Q-02 / D-012:** approve exact sb-nav / sb-nav-{role} structural mapping (inferred — confirm).
- **Q-03 / D-013:** confirm canonical repository/package identity and the MacStudio
  replacement for R-128's old Macbook target (inferred — confirm).
- **Q-04 / D-014:** confirm the preferred Designer Extension / Make local product
  commitment (inferred — confirm).
- **Q-05 / D-015:** confirm a separate premium mega-menu boundary; commercial/backend
  choices remain open (inferred — confirm).
- **Q-06 / D-010:** decide whether to resume R-160 on old SB Test Four or use current
  fixtures instead (inferred — confirm); the agent has not dropped it.
- **Q-07 / D-016:** decide whether to graduate the manual infrastructure snapshot
  prototype and choose summary styling (inferred — confirm).

**Next useful action:** review Q-01–Q-07 and the evidence boundaries. Issue a separate
brief for any migration, release, clonable or external workflow; today's brief
provides no authority for those actions.

**Handoff:** Michael in the morning, or the next agent: read this header, then SCOPE
open questions and Proposed DECISIONS. ROADMAP preserves original todo order and
wording; edit its fields going forward and retain todo as history. Current branch
is main, no new worktree. Keep v0.2.6, source/consumer sites, CDN, remotes and code
untouched under the retrofit brief. Review recorded evidence before any new live
check; do not use older memory to reopen the completed clean-destination gate.
