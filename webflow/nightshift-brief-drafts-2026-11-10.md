# Nightshift brief drafts — 10 November 2026

These are ready-to-queue drafts based on the current R-269/R-272 record. The nightshift boundary is local repository work only: no Webflow or browser access, remote access, publishing, Library sharing, tags, paid operations, dependency changes or external messages. Do not add or run tests unless a brief separately authorises them.

The Boss connection available to this session can read, take and close briefs, but does not expose an action to create or queue a new brief. These drafts are therefore saved here for queueing through the normal Boss brief workflow.

## Brief 1 — R-272 local source review of the Preview compilation error

### Goal

Use only the current checkout to inspect the generated candidate Embed and its source-building path for a concrete explanation of Webflow's general Preview `CompilationError: Invalid source code`. The error has not been shown to be a duplicate script-name error.

### Work

1. Read the relevant script and Embed source, including `src/navbar-light.js`, `webflow/navbar-light-embed.html`, `scripts/build-webflow-embed.mjs`, `scripts/build-webflow-library-candidates.mjs` and the checked-in candidate Embed.
2. Trace how script bodies and declarations are wrapped or concatenated in the generated output.
3. Record any concrete syntax or scope issue with file and line references. If no local cause is supported, say that plainly and list the evidence that rules out the checked candidates.

### Boundaries

- Local files and Git history only. Do not open Webflow, use a browser or network, or inspect another service.
- Do not change source, generated output or dependencies.
- Do not add or run tests.
- Do not claim that a static source review proves whether Webflow Preview or the published runtime compiles.

### Deliverable

A short evidence note linked to R-272 that distinguishes confirmed source facts, plausible leads and the still-unexplained Webflow error.

### Done when

The source path is traced, evidence cites exact local files and lines, and unresolved runtime questions are handed to the next authorised browser session.

## Brief 2 — R-269 prepare the remaining published-page check card

### Goal

Prepare a compact local checklist for the next authorised daytime comparison of Designer, Preview and the newly published Disposable SB test site.

### Work

1. Read the latest R-269 STATUS and ROADMAP evidence, including the 667 px menu results, Michael's Tablet and Mobile report, and the 10 November staging publish.
2. Separate checks already reported by Michael from checks not yet made on the published page.
3. List the exact remaining checks: compare authored appearance across Designer/Preview/published, verify presets-off behavior, check short viewport height, and test keyboard opening, Escape closing and focus return.
4. For each check, state the page, menu instance where known, breakpoint or viewport condition, action and evidence to record. Mark unknown widths or instance identity instead of guessing.

### Boundaries

- Local repository only. Do not access Webflow, any browser or the network.
- Do not edit site code or design, publish, share the Library, or change Michael's tasks.
- Do not add or run tests.
- Keep reported Preview behavior separate from published-page evidence and from Michael's acceptance.

### Deliverable

A concise local checklist under `webflow/` linked from R-269, suitable for the next authorised browser session.

### Done when

The checklist is short enough to run in one browser session, avoids repeating checks already reported, and does not claim that the published page has passed any interaction or layout check.
