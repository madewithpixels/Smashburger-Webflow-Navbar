# Canonical reconciliation — 16 October 2026

Codex, authorised by Michael in this chat. This brings the work from briefs
#75–#78 into the canonical checkout without modifying the retained old folder.
It also closes the settings-evidence recovery from brief #74.

## Preserved baseline and routing

The canonical checkout started on main at `bc2caeb`, with four refreshed docs and
the existing settings test/evidence files uncommitted. Local commit `e599c09`
saves those six files before integration. The saved settings run passed 385/385;
147 non-document input hashes still matched, while only the intentionally
refreshed four docs differed from that run. No finished tests were discarded.

Michael authorised the explicit setup choice using Claude's uncommitted Boss
0.10 repair:

```sh
node agents/boss-mcp/boss-runner.mjs setup --repo 'smashburger=/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar'
node agents/boss-mcp/boss-runner.mjs doctor
```

Both exited 0. Setup selected the canonical folder, saved the mapping and reloaded
the background job. It added the canonical pre-push guard; other existing guards
were left in place. Doctor reported the canonical path and the night shift off.
It did not show a project paused flag. This session did not start a shift or alter
pause settings. Claude retains ownership of the uncommitted Boss code/docs.

## Original commits and reconciliation

These seven original commits remain intact in the retained old checkout on main
at `e4a8f8d`. Their hashes identify the work incorporated here; generated files
were rebuilt from combined source rather than copied from the older branch.
The original commit objects/history in the retained checkout are not rewritten.
The canonical integration is a new scoped commit recording these source hashes,
not a claim that the divergent histories were fast-forwarded or cherry-picked.

| Original commit | Work retained |
| --- | --- |
| `a59f4552f9fb48576fb79defa1110df7caa1cf9b` | docs: refresh versioned migration instructions (R-009, R-096, R-097) |
| `7c6abddf07bf73f43a4592fed60c1c5d64100a5b` | fix: restore native navigation on destroy (R-005, R-006, R-155) |
| `8efb6e89c63724cf6a02f07027a454d5bba40399` | docs: record native destroy regressions and browser handoff (R-005, R-006, R-155) |
| `1886f86c750d8d91a07f4f58e0b677e601739930` | fix: return panel focus before closing hides it (R-038, R-040, R-155) |
| `ea4d09bfcdd603ca5a5c7e6a64513f47053c2774` | docs: record close-focus ordering evidence (R-038, R-040, R-155) |
| `f6c9d587b8c8b48195993d667be56bfadd456c76` | fix: keep Escape within the focused navbar (R-039, R-095, R-155) |
| `e4a8f8d76119cf6b61c38daf2ededf6c2c4c9587` | docs: record two-navbar Escape evidence and browser limits (R-039, R-095, R-155) |

- README and the migration guide retain the released v0.2.6 instructions,
  candidate boundaries and all newer canonical integrity/test-gate guidance.
- The native-removal snapshot/restoration and Escape-ownership changes were
  reconciled with the canonical source. Closing focus now leaves the panel before
  native hiding and before enhanced ARIA/inert writes, while the canonical
  cancelled-focus requests and late-event guards remain in place.
- The canonical document-owned, reference-counted scroll locks are retained.
- The three imported regression files and three evidence records retain their
  original committed bytes. Historical test counts and old-folder limitations in
  those records describe their original runs; this record supplies combined proof.
- All roadmap evidence additions are retained, including both branches' evidence
  at R-155. Local Evidence upgrades from the imported records are retained;
  Acceptance is unchanged.
- The canonical candidate runner still discovers every test file and runs files
  serially. The older branch's restricted file list was not reinstated.
- Candidate outputs are generated afresh. The older Library verification pin,
  its loader/SRI and protected v0.2.6 release files are unchanged.

## Checks and limits

The imported source-only regressions pass 75/75. The first combined build caught
an Embed size problem: the self-contained Library output was 50,002 characters,
two over the existing limit. Shortening two explanatory source comments changed
no logic or settings. The generated main Embed is now 49,605 characters and the
Library Embed is 49,894; the unchanged build limit passes.

Fresh combined `npm run test:candidate` exits 0: **685/685 pass**, with no
failures, cancellations, skips or expected failures (52,461 ms). `npm test`
exits 0: 274 tests, 247 passes and the existing 27 executed expected historical
failures; no unmarked failures, cancellations or skips (30,379 ms). The fresh
candidate includes all 300 imported regression checks and 168 settings checks.

`npm run check:dist`, `npm run check` and `npm run check:namespace` pass;
all 17 protected historical hashes match. All 76 local guidance/evidence links
and anchors resolve. The canonical serial complete-discovery runner and
all six imported test/evidence files retain their pre-integration/original bytes.
Snapshot comparisons confirm 137 old-checkout and 370 Boss repository file hashes,
HEADs and working-tree status are unchanged. Existing test assertions, TODO
labels, dependencies and integrity-pinned Library verification bytes are retained.
`git diff --check` passes.
No release, tag, push, Webflow operation, Library sharing or Acceptance change is
part of this work. Browser rendering, real input, screen readers/devices, linked
consumer updates/rollback and actual CDN/fallback remain separate checks.

## Handoff

Use the canonical checkout and its complete candidate test command. Do not use
the older exact-commit Library pin as evidence for the integrated repairs. Keep
the old folder and Claude's Boss changes untouched. Michael's requested pause
must be maintained through Boss before any later shift is started; this session
observed the shift off and did not change pause settings.
