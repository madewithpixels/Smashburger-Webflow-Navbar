# Human and physical-display check run sheets

Prepared 16 October 2026 by Codex (night shift). Serves R-037, R-155 and
R-244. These are instructions and blank records; no human or physical-display
checks were performed and no result is a pass.

## Windows NVDA — published Tablet variant

### Identify the tested page

- Release or candidate and exact version/commit: __________________________
- Published page URL: _________________________________________________
- Expected release for the known published Smashburger example: v0.2.6,
  `/demo-overlay` (copy the exact staging hostname from the browser address
  bar). Release record: `webflow/v0.2.6-release-verification.md`.
- Confirm the page runs the named release before testing. Do not describe a
  Preview, another page or a different version as this published result. The
  combined candidate has no approved published route; leave its result Not run
  until one exists.

### Setup

- Windows version/build: ______________________________________________
- NVDA version: _______________________________________________________
- Browser and version: ________________________________________________
- Page and URL: _______________________________________________________
- Date / tester: ______________________________________________________
- Screen-reader speech and browser zoom: ________________________________
- Variant confirmed as Tablet at the page width: __________________________

### Steps and observations

Use the keyboard only for menu interaction. Keep NVDA speech output or Speech
Viewer available so the spoken words can be transcribed. Record the actual
words, including role and expanded/collapsed state; do not infer them.

1. Reload the named page, move to the menu trigger, and focus it without
   opening it. Record its full announcement and whether it clearly says the
   menu is collapsed.
   - Observed words / result: ___________________________________________
2. Press Enter or Space once. Record the trigger announcement and whether it
   clearly says expanded. Confirm focus remains on the trigger unless the
   page's recorded design moves it elsewhere.
   - Observed words / result: ___________________________________________
3. Move through the expanded menu. Record each submenu link in announcement
   order and confirm links under the closed nested submenu are not exposed in
   the reading or tab sequence while that submenu is closed.
   - Link order: _______________________________________________________
   - Closed submenu links exposed? _____________________________________
4. Open a nested submenu. Press Escape once. Confirm only that submenu closes
   and focus returns to its own submenu trigger. Record both announcements.
   - Closed / focus target / words: _____________________________________
5. Press Escape a second time. Confirm the main menu closes and focus returns
   to the main menu trigger. Record the collapsed announcement.
   - Closed / focus target / words: _____________________________________
6. Repeat once using the other trigger key (Enter, then Space, or vice versa).
   - Result: __________________________________________________________

### Observations and evidence

- Unexpected speech, missing/extra links, or focus loss: __________________
- Screenshot or NVDA Speech Viewer capture file: _________________________
- Evidence filename and saved location: __________________________________
- Overall result for this exact release/page: Pass / Fail / Not run
- Notes: ______________________________________________________________

## Physical display — two-line and three-line menu icons at 2× and 3×

### Identify the exact artifact first

- Release or candidate name/version/commit: ______________________________
- Exact page/component and URL: ________________________________________
- Delivery mode (published page, Preview, or local candidate): _______________
- CSS and JavaScript asset URLs/version or embedded build identity: __________
- Evidence that the named files belong to the tested artifact: ________________

The combined candidate is currently unreleased and has no approved route. For
that candidate, leave all four results Not run until an approved route serves
its exact files. Do not use v0.2.6 as a substitute candidate result. The
published v0.2.6 page may be recorded as a separate baseline only.

### Record the real display and setup

- Computer and operating system: _______________________________________
- Physical display make/model: _________________________________________
- Native resolution: __________________________________________________
- OS display scaling / effective resolution: ______________________________
- Browser/version and browser zoom (use 100%): __________________________
- Display connection / scaling mode if relevant: ____________________________
- Date / tester: ______________________________________________________
- Confirmed physical pixel ratio (from the actual display/browser): ____________

Do not turn on browser device emulation or a simulated pixel ratio. Keep any
emulation screenshot or result in a separately labelled browser-emulation
record; it is not evidence from this physical display.

### Measure and capture each combination

For each of 2-line at 2×, 3-line at 2×, 2-line at 3×, and 3-line at 3×, use
the same identified artifact. Open the menu so the icon forms its X. Record the
computed height of one bar, the row gap between adjacent bars, and the measured
shift of each rotating bar. Record CSS-pixel and physical-pixel measurements
when the method provides both. For the released default, the recorded expected
setup is 2px bars and 5px gap; measure the page rather than assuming it. For
another exact artifact, record its actual values.

| Icon lines | Physical DPR | Bar height | Row gap | Bar shifts | Centres / raster observation | Screenshot filename |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | 2× | | | | | |
| 3 | 2× | | | | | |
| 2 | 3× | | | | | |
| 3 | 3× | | | | | |

Save an unscaled browser screenshot for each row and, if pixel-level display
inspection is needed, a separate native-resolution capture or close-up with
its capture method stated. Keep original files; do not resize or recompress the
evidence image. Include the artifact/version, icon mode, DPR and row number in
each filename, for example `0.2.6-2line-2x-01.png`. Save raw measurements in
the evidence record beside the screenshots and state the ruler/tool and units.
Check that the visible bars form a balanced X and that their centres align as
expected. Record blur, uneven edges, clipping or other defects plainly.

Overall result for this exact artifact: Pass / Fail / Not run
Notes: __________________________________________________________________

## Still needed

- A Windows computer with NVDA installed, a supported browser and access to the
  exact published staging page for the named release; a human tester able to
  operate NVDA and record its speech is required.
- A real 2× display and a real 3× display (or two verified physical display
  configurations), access to the exact release/candidate page and a tester able
  to save native screenshots and measurements.
- An approved route serving the exact combined candidate before candidate
  accessibility or physical-display results can be recorded. The current
  candidate is not released; its result stays Not run.
- Human review of the completed observations and results. No Acceptance is
  implied by filling in this sheet.

