# SmashBurger Lite blank-project clone-flow capture sheet

Use one copy of this sheet for each clone-flow attempt. Record what was actually
seen in the named blank project. Write `Unknown` when a value cannot be
established, `Not checked` when a check was skipped, and `Failed` with the
observed result when the expected behavior did not occur. Add evidence links or
short descriptions beside observations; do not fill gaps from source files or
another project's results.

**This sheet is a recording template only. Completing or preparing it is not
clone-flow evidence.** Evidence begins only when a tester performs and records
the checks below in the named blank test project.

## Attempt and project identity

- Tester and date/time:
- Webflow account/workspace:
- Blank test project name:
- Project URL or ID:
- How the blank project was confirmed blank:
- Clone source name and URL:
- Clone attempt date/time and method:
- Clone result: `Not attempted / Succeeded / Failed / Unknown`
- Clone error or unexpected result:
- Evidence (URL, screenshot name, or observation):

## Page and component identity

- Page name and URL:
- Page state tested: `Designer / Preview / published / other / Unknown`
- Component name as shown in Navigator:
- Component instance location on page:
- Runtime/version and exact loader source, if visible:
- Component count on page:
- Unknowns or differences from the intended Lite setup:

### Structure observed in Navigator

Record the actual element types, nesting, labels, classes and relevant
attributes. Use `Unknown` for anything not inspectable.

- Root/header:
- Inner wrapper:
- Brand/home link:
- Native disclosure element:
- Trigger element and accessible name:
- Navigation panel and relationship to disclosure:
- Link count, order and destinations:
- Backdrop element, if present:
- Extra, missing or duplicated elements/classes:
- Evidence:

## Canvas editing

For each action, record whether it was possible in Designer Canvas and whether
the saved change appeared in Preview or the tested page.

- Select component and individual child elements:
- Edit heading/brand text:
- Change an example link label and destination:
- Change an ordinary visual style:
- Find the component and children in Navigator:
- Save changes and reopen the page:
- Any locked, missing, detached or unexpectedly changed content:
- Unknowns, failures and evidence:

## Responsive checks

Record the actual Webflow breakpoint label and viewport width shown. At each
size, inspect the closed and open menu where applicable, link visibility,
trigger, panel placement and horizontal overflow.

### Desktop

- Breakpoint label and viewport width:
- Closed state:
- Open state and trigger:
- Links visible and usable:
- Layout or overflow issue:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and notes:

### Tablet

- Breakpoint label and viewport width:
- Closed state:
- Open state and trigger:
- Links visible and usable:
- Layout or overflow issue:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and notes:

### Mobile landscape

- Breakpoint label and viewport width:
- Closed state:
- Open state and trigger:
- Links visible and usable:
- Layout or overflow issue:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and notes:

### Mobile portrait

- Breakpoint label and viewport width:
- Closed state:
- Open state and trigger:
- Links visible and usable:
- Layout or overflow issue:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and notes:

## Keyboard and focus

- Starting focus location:
- Tab to trigger: observed focus indicator and order:
- Enter activation:
- Space activation:
- Tab order through open menu links:
- Escape behavior, if supported by the intended runtime:
- Focus destination after closing:
- Focus visible on trigger and links:
- Any keyboard trap, skipped item or unexpected focus move:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and exact key sequence:

## No-script fallback

Record how JavaScript was unavailable or disabled and how that condition was
confirmed. Do not infer fallback behavior from markup or a local fixture.

- Page and state used:
- Method used to disable or block JavaScript:
- Confirmation that JavaScript did not run:
- Disclosure open/close behavior:
- Navigation links usable in fallback:
- Any hidden or unreachable content:
- Result: `Pass / Fail / Not checked / Unknown`
- Unknowns, failure details and evidence:

## Assets

Record each required image, icon, font or other external asset and whether it
loaded in the tested page.

- Asset and expected location/source:
- Loaded, missing or uncertain:
- Visible symptom or request result:
- Other missing or substituted assets:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and notes:

## Horizontal overflow

- Page and breakpoint/viewport width:
- How overflow was checked:
- Horizontal scrollbar or content extending beyond viewport:
- Element or area responsible, if identified:
- Result: `Pass / Fail / Not checked / Unknown`
- Evidence and notes:

## Console observations

- Browser and version:
- Page state and URL:
- Console cleared before the check: `Yes / No / Unknown`
- Warnings, errors or failed requests (copy exact text and source location):
- Whether each message reproduced after reload:
- Messages judged unrelated, with reason:
- Result: `No messages observed / Messages observed / Not checked / Unknown`
- Evidence (screenshot or saved text):

## Outcome and unresolved items

- Overall clone-flow result: `Complete / Incomplete / Failed / Unknown`
- Checks not completed and why:
- Failures requiring follow-up:
- Unknowns that could affect the result:
- Evidence files/links collected:
- Tester summary:

Do not describe the clone flow as passed if any required check is failed,
unknown or not checked. Keep the underlying observations so a later reviewer
can distinguish a clean result from missing evidence.
