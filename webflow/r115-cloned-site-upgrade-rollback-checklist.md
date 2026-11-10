# R-115 cloned-site upgrade and rollback evidence checklist

Prepared 10 November 2026 — Codex (night shift), brief #410. This is a blank
record for a future separately authorised Webflow trial. It records evidence;
it does not authorise a site change, backup, Library share, release or publish.

The [offline migration and rollback rehearsal](offline-migration-rollback-2026-10-16.md)
is the local reference for authored-content preservation, explicit class mapping,
paired delivery changes and restoration of its saved parsed fixture. This sheet
captures the additional Webflow site and component evidence that the offline
rehearsal cannot provide.

## Entry conditions

- Do not begin until the trial is explicitly authorised for one named cloned
  staging or test site. Record its exact Webflow site name and URL below.
- Record and confirm a named Webflow backup made before the first change. If no
  confirmed backup exists, stop; do not upgrade.
- Use the exact old and new runtime versions and matching delivery files. Do not
  mix versions or infer the saved version from a planned candidate.
- Keep the trial on the named clone. Do not publish unless separately authorised;
  if publication is authorised, record the exact destination and approval.
- Record observations and evidence references as they occur. Use `Not checked`
  or `Not applicable` with a reason; do not fill gaps by inference.

## Trial identity and baseline

- Trial date and tester:
- Authorisation / brief reference:
- Exact cloned site name:
- Site URL and environment (staging or test):
- Exact page name and URL:
- Clone source and clone date, if known:
- Webflow backup name made before changes:
- Backup confirmation evidence (dashboard entry, date/time or capture reference):
- Exact currently saved runtime version:
- Exact proposed runtime version:
- Delivery type and exact asset/Embed names for old version:
- Delivery type and exact asset/Embed names for new version:
- Runtime/version evidence source (saved-code readback or other):

## Before changing anything: component and authored state

Record the saved Webflow state before the upgrade. Attach or link evidence for
each item; write `Not checked` with a reason if Webflow does not expose it.

- Component name, ID and instance/link state:
- Component variant and property values:
- Structure and child order:
- Class names and element assignments:
- Authored styles by element/class (layout, spacing, size, colour, typography,
  borders, effects and responsive overrides):
- Custom attributes, accessible names and menu settings:
- Links and destinations:
- Assets and image references:
- Interactions/animations affecting the component:
- Page-level and site-level custom code relevant to runtime loading:
- Relevant Webflow style records, properties, asset bindings and overrides:
- Evidence references for this baseline:

## Upgrade: old version to new version

- Start date/time:
- Exact old version and delivery removed/replaced:
- Exact new version and delivery installed:
- Elements, component instances or settings changed (identify page/element):
- Saved-state readback evidence after upgrade:
- Authored styles, properties, bindings and assets retained or changed:
- Upgrade result: `Not run` / `Pass` / `Fail` — evidence and notes:
- Preview result: `Not run` / `Pass` / `Fail` — page, browser/version and evidence:
- Published result, only if separately authorised: destination, approval,
  `Not run` / `Pass` / `Fail`, evidence:
- Console/network or runtime errors and evidence:
- Deviations, unexpected changes or stop conditions:

## Rollback: new version back to old version

- Start date/time:
- Exact new version and delivery removed/replaced:
- Exact old version and matching delivery restored:
- Rollback method and elements/settings changed:
- Saved-state readback evidence after rollback:
- Rollback result: `Not run` / `Pass` / `Fail` — evidence and notes:
- Errors or deviations and evidence:

## Restored-page checks

Compare against the before-change record above. A rollback is not complete until
these checks have been performed and evidence recorded on the named clone.

- Exact old runtime version and matching delivery are saved:
- Component identity, variants, properties and instance/link state restored:
- Structure, child order, classes and element assignments restored:
- Authored styles and responsive overrides restored:
- Custom attributes, accessible names and menu settings restored:
- Links, destinations and assets restored:
- Relevant interactions/animations and custom-code references checked:
- Page opens and renders in the authorised check surface:
- Menu opens and closes; keyboard, focus and accessible state checked:
- No unexpected page/component changes observed (describe checked surface):
- Restored-page result: `Not run` / `Pass` / `Fail` — evidence and notes:
- Remaining differences, uncheckable state or follow-up:

## Outcome and evidence boundary

- Overall trial outcome: `Not run` / `Pass` / `Fail` / `Stopped`:
- Evidence folder/links and capture dates:
- Site changes made (site, page, component/element, change):
- Backup used for recovery, if any:
- Who reviewed the record and when:

Until this record is completed on a **named, backed-up cloned site**, the real-site
semantic-version upgrade and rollback remain **untested**. Completing a blank
template or repeating the offline rehearsal does not change that status. A result
on one clone does not establish results on another site or a published page.
