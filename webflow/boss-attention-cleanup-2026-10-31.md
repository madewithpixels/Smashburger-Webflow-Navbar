# Boss attention cleanup — 31 October 2026

Michael authorised clearing immediate clutter while retaining future work. This closes obsolete or premature requests, not engineering checks, acceptance or release gates. No publication, Library sharing or candidate installation is authorised by the cleanup.

## What needs Michael now

Nothing for the local styling brief #164. Agents should run authorised work and report an exact access failure only if one actually occurs. Michael authorised the local Chrome destroy/reinitialisation test with “Go ahead with the local Chrome test. Do not publish anything.” Closing its question is permission, not evidence that testing passed.

## Retained work and when to bring it back

| Work | Record | Bring back when |
| --- | --- | --- |
| Runtime styling fix | R-269 / brief #164 | Agent work now; ask Michael to review only after a tested result exists. |
| Safe customisation after unlinking | R-268 | Agent prepares a backed-up disposable-site test; ask only for missing access or exact approval needed. |
| Native opening after destroy/reinitialisation | R-155; answered request #145 | Run the authorised local Chrome test. Keep results pending until observed. |
| Windows NVDA and physical-device checks | R-244, R-037; request #164 | Exact corrected candidate has a testable approved route and run sheet. Then ask Michael once to arrange any human/device access unavailable to agents. |
| Exact Library share and release approval | R-121, R-125, R-126, R-155; former bundled request #170 | Present the exact tested artifacts and scope. Local-preview permission does not approve Library sharing, publishing or release. |
| Lite loader and blank-site clone checks | R-183, R-185 | Required runtime is released/approved and a backed-up blank project is ready. Dependencies remain unfinished; not an immediate personal action. |
| SmashBurger launch site | R-186; task #43612103 | Prepare alongside Lite when the product offer/examples are sufficiently settled. Publication remains separate. |
| Webflow app / Make local | D-014; R-187–R-214; task #43612102 | After Lite works. Michael accepted the product direction in Boss on 31 October; this does not by itself change sequencing or authorise release. |
| Update existing consumer sites | Migration/release records | Finished version and site-specific approval; not part of the local styling brief. |

## Requests being removed from immediate attention

- #144, writable canonical checkout: earlier repair and saved commits supersede the old failure. If Nightshift still cannot write, it must report its current exact error; do not recycle the historical request.
- #164, Windows NVDA: deferred, not completed. Reactivation condition above.
- #170, bundled preview/share/human/release request: superseded by staged gates above. Local Chrome permission is already recorded; no sharing/release approval inferred.
- #171, install unreleased build on MWP: obsolete after Michael chose the installed version and restored/styled it. Its premise that v0.2.6 cannot stagger/overlay was incorrect. No candidate installation or publication approved.
- #172, choose a SmashBurger menu link: misunderstanding of Michael's estimate CTA request. The requested CTA is Instant Estimate to /estimate. No separate SmashBurger destination is required by that site brief.

## Original Boss task records retained

The task IDs, open status and eventual work are preserved. Historical percentage descriptions are stale, not current completion estimates. Tasks will be renamed to distinguish current agent work from later projects; none will be ticked complete.

```json
{
  "project_id": 1235610,
  "lists": [
    {
      "id": 15,
      "name": "MWP Tools",
      "position": 1
    }
  ],
  "tasks": [
    {
      "id": 43612101,
      "task_list_id": 15,
      "parent_task_id": null,
      "name": "Finish componentising SmashBurger with Codex",
      "description": "90% done (23 Sep 2026)",
      "status": "new",
      "position": 1,
      "urgent": false,
      "due_date": null
    },
    {
      "id": 43612102,
      "task_list_id": 15,
      "parent_task_id": null,
      "name": "SmashBurger Webflow App development with Codex",
      "description": "0% done (23 Sep 2026)",
      "status": "new",
      "position": 2,
      "urgent": false,
      "due_date": null
    },
    {
      "id": 43612103,
      "task_list_id": 15,
      "parent_task_id": null,
      "name": "Build SmashBurger site with Codex",
      "description": "0% done (23 Sep 2026)",
      "status": "new",
      "position": 3,
      "urgent": false,
      "due_date": null
    }
  ]
}
```

## Original question records retained

```json
[
  {
    "id": 144,
    "repo": "smashburger",
    "item": null,
    "question": "Reopen the night shift with the canonical checkout writable so its final record and local commit can be saved. Existing Library-sharing, human/device and final release gates remain separate.",
    "raised_by": "codex",
    "run_id": null,
    "answer": null,
    "resolved_at": null,
    "seen_by_run": null,
    "created_at": "2026-10-16T09:54:30.108135+00:00",
    "kind": "question",
    "verdict": null,
    "recorded_at": null,
    "recorded_commit": null,
    "record_note": null,
    "plain": {
      "why": "The earlier night shift could not save its final project record or local changes.",
      "time": "about 2 minutes",
      "steps": [
        "Reopen the SmashBurger night shift with the main project folder available for writing.",
        "Leave the shared menu and release checks for their separate approvals."
      ],
      "details": "Canonical checkout: Smashburger-Webflow-Navbar; prior session summary mentions writable access.",
      "headline": "Reopen the night shift with the main project folder writable",
      "done_when": "The night shift can save its project record and local changes."
    }
  },
  {
    "id": 164,
    "repo": "smashburger",
    "item": "R-244",
    "question": "Can you arrange a Windows NVDA tester to check the published Tablet menu and save the spoken-output and focus results?",
    "raised_by": "codex",
    "run_id": "64ccf20f-7768-4f60-842c-f0976a16a3c1",
    "answer": null,
    "resolved_at": null,
    "seen_by_run": null,
    "created_at": "2026-10-16T22:14:58.706871+00:00",
    "kind": "question",
    "verdict": null,
    "recorded_at": null,
    "recorded_commit": null,
    "record_note": null,
    "plain": {
      "why": "The menu still needs a human check of what the screen reader announces and where focus goes.",
      "time": "about 20 minutes",
      "steps": [
        "Arrange a tester with a Windows computer, NVDA and a supported browser.",
        "Ask them to open the published Overlay example on the Smashburger staging website and confirm it is the named release and Tablet variant.",
        "Have them complete the screen-reader run sheet and save their observations and speech capture with the exact page and release."
      ],
      "details": "R-244; use webflow/human-and-physical-check-run-sheets-2026-10-16.md. Candidate checks must remain Not run until its exact release has an approved route.",
      "headline": "Arrange a Windows screen-reader check of the menu",
      "done_when": "The completed run sheet and evidence files record the exact release, page, spoken announcements, link order and focus after both Escape presses."
    }
  },
  {
    "id": 170,
    "repo": "smashburger",
    "item": null,
    "question": "Enable local browser preview; approve the exact Library update before sharing; arrange human/device checks and approve the final release. Naming is settled. No new product decision is needed for these docs.",
    "raised_by": "claude",
    "run_id": null,
    "answer": null,
    "resolved_at": null,
    "seen_by_run": null,
    "created_at": "2026-10-20T15:04:12.797962+00:00",
    "kind": "question",
    "verdict": null,
    "recorded_at": null,
    "recorded_commit": null,
    "record_note": null,
    "plain": {
      "why": "This lets the team check the proposed menu safely and complete the remaining release checks.",
      "time": "about 10 minutes, plus the checks",
      "steps": [
        "Enable the local browser preview for the SmashBurger project.",
        "Review the exact menu and Library changes when they are shown in the preview.",
        "Approve sharing the Library update only after that review.",
        "Arrange a Windows screen-reader check and a human check of the published menu."
      ],
      "details": null,
      "headline": "Enable the preview and approve the menu review",
      "done_when": "The preview is available, the exact Library update is approved for sharing, and the human checks are arranged before the final release decision."
    }
  },
  {
    "id": 171,
    "repo": "smashburger",
    "item": "R-121",
    "question": "May I install the exact unreleased 0.3.0-rc.1 build on the madewithpixels site and publish it to its current Webflow subdomain?",
    "raised_by": "codex",
    "run_id": "8d96decf-856b-4cab-bde5-437113968c40",
    "answer": null,
    "resolved_at": null,
    "seen_by_run": null,
    "created_at": "2026-10-23T19:27:34.866057+00:00",
    "kind": "question",
    "verdict": null,
    "recorded_at": null,
    "recorded_commit": null,
    "record_note": null,
    "plain": {
      "why": "The released menu version cannot provide the full-screen overlay and staggered links you asked for.",
      "time": "about 2 minutes",
      "steps": [
        "Review the proposed menu update and its test results in the SmashBurger project.",
        "Approve trying this exact update on madewithpixels and publishing it to the current madewithpixels-dev.webflow.io address, or ask me to wait for the finished version."
      ],
      "details": "Exact version: 0.3.0-rc.1. This untagged release candidate is unreleased; its record is webflow/library-sb-nav-candidates-2026-10-15.md. The current Webflow site has no custom domains connected. The request is for this site only, not sharing the Webflow Library.",
      "headline": "Approve the SmashBurger menu update",
      "done_when": "I know whether to try this exact update on madewithpixels or wait for the finished version."
    }
  },
  {
    "id": 172,
    "repo": "smashburger",
    "item": "R-155",
    "question": "What should the new SmashBurger menu link say and which page or web address should it open?",
    "raised_by": "codex",
    "run_id": "8d96decf-856b-4cab-bde5-437113968c40",
    "answer": null,
    "resolved_at": null,
    "seen_by_run": null,
    "created_at": "2026-10-23T19:27:58.653672+00:00",
    "kind": "question",
    "verdict": null,
    "recorded_at": null,
    "recorded_commit": null,
    "record_note": null,
    "plain": {
      "why": "The current Estimate link opens the estimate form, and there is no static SmashBurger page in the site list.",
      "time": "about 1 minute",
      "steps": [
        "Tell me the exact words to show for the SmashBurger link.",
        "Tell me the page or web address it should open."
      ],
      "details": "Current link text is Estimate and its destination is /estimate. No static SmashBurger destination was found in the madewithpixels page list.",
      "headline": "Choose the SmashBurger menu link",
      "done_when": "The link has a clear label and destination."
    }
  }
]
```

## Boss display limit

The current task controls offer open/completed states, urgency, order and dates, but no snooze/defer/hide state. Future tasks remain open and labelled Later rather than being falsely completed or deleted. This limitation prevents a literal immediate-only view in All open tasks; attention requests can still be cleared. No Boss product code changed.
