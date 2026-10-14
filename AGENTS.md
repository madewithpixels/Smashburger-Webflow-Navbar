# AGENTS.md — SmashBurger house rules

Read by Codex and imported by Claude through CLAUDE.md. Project owner: Michael
Auty. Boss repo key: `smashburger`. Current checkout:
`/Users/michaelauty/Work on MacStudio/Webflow-Navbar-Light`.

Retrofitted 14 October 2026 under Michael's brief #6. House rules adapt the
project-docs skill and boss AGENTS.md; Webflow safety comes from README §Webflow
testing safety and todo §Project constraints. The reporting section below is
copied verbatim from boss `docs/agents-setup.md` §4, read on 14 October 2026.

## 1. Read the project record

Read STATUS first, then relevant SCOPE, ROADMAP and DECISIONS. Use the project-docs
skill for session, decision and handoff procedures. Check git history since
**Reviewed at commit** and `git --no-optional-locks status`; report relevant gaps.
Leave other people's uncommitted work alone. ROADMAP carries the numbered plan;
`todo.md` is preserved historical context, not evidence of current completion.

## 2. Separate work, evidence and acceptance

- State: planned · in progress · blocked · built · dropped (only Michael drops).
- Evidence: none · verified (local) · verified (live) · n/a, with proof and limits.
- Acceptance: pending · accepted (date), Michael only. Never accept your own work.
- Decisions: Proposed · Accepted · Superseded by D-nnn · Rejected.
- Never rewrite settled decisions: add a successor and retain the original text.
- Stable S-nn, R-nnn and D-nnn IDs are never reused or renumbered.
- Every extracted claim cites a source or says `(inferred — confirm)`.

## 3. Work within authority

Work on main unless Michael directs otherwise or the task requires isolation
(source: boss house-rule amendment by Michael, 8 October 2026; brief #6).
Ask Michael through boss for product/design, scope, costly or hard-to-undo choices;
record unresolved decisions as Proposed and continue independent authorised work.
Never create or change Michael's tasks, time, estimates, billing, invoices or
Acceptance. Do not drop roadmap items or delete historical records.

Before structural Webflow testing, require a backup. Never refresh the Navbar Light
test page without explicit approval and confirmed backup. Publishing, Library
sharing, CDN releases, remote changes and tags need Michael's explicit authority.
Retain pinned assets and user-authored content; distinguish source readback,
Preview behavior and published checks. See README and the webflow records.

During the night shift: local repo only; no remote access (push, pull, fetch),
deploys, Webflow/Designer changes, CDN releases, tags, external messages or paid
operations. No force, rebase, reset --hard, branch deletion or history rewrite.
No dependency installs/upgrades. Do not delete files you did not create unless the
brief explicitly asks. Use boss_commit for local commits with explicit paths;
never write .git directly. Brief #6 is docs only and uses one commit named
`Retrofit project docs`. Future sessions follow their own authorised brief.

## 4. Close with evidence and a handoff

Add a dated, signed STATUS entry: Changed (R- IDs), Outputs, Checked how, Still
open, Needs Michael, Next useful action. Set Reviewed at commit to the checked
baseline. Add Handoff when another session will continue. Reference roadmap IDs
in commits where applicable; use British English and plain wording. Do not turn a
historical tick, a Library update acceptance or an agent report into Michael's
roadmap sign-off.

## 5. Reporting into boss
This repo reports into boss through the `boss` MCP tools. They record agent work; they never touch
Michael's time, tasks or acceptance.
- **Start:** call `boss_start` with a one-line intent and the R- items you're serving. Claude Code's
  session hook does this for you, so Claude reads the inbox it printed. If a brief from Michael fits
  the work, `boss_take_brief` it first.
- **If the other agent has an open session here,** don't edit the same files. Use a separate branch
  or worktree, or wait.
- **During the work:** `boss_report` for meaningful progress or a blocker. Use `boss_ask_michael`
  for anything that's his call, instead of guessing.
- **Handing over:** `boss_handoff` to the other agent, as well as the Handoff paragraph in STATUS.
- **End:** `boss_brief_done` for a brief you finished (your account, not acceptance), then
  `boss_end_run` with a short summary: what changed, checked how, still open.
