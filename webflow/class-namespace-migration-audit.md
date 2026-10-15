# SmashBurger class namespace migration audit

Prepared 2026-10-14 from the maintained source, generated Webflow embeds,
demos, tests and documentation. The mapping was accepted on 15 October 2026 (D-012) and is now implemented in the maintained source and isolated `candidate/` outputs. This document retains the original inventory. Released v0.2.6 files and Webflow baselines remain unchanged. See [the implementation and transfer record](canonical-rename-2026-10-15.md).

## Scope to rename

The portable Webflow structure currently uses the `mwp-css-nav` root and
`mwp-css-nav_*` structural classes. The current one-Base unlink candidate uses
27 distinct base class names. Rename the complete portable class family to a
documented `sb-*` family in one versioned migration, including classes in:

- source and generated CSS selectors;
- demo and regression-fixture HTML/CSS;
- generated self-contained Webflow Embeds;
- component maps and Webflow component structures;
- generated-output assertions, examples and current user-facing docs.

### Chosen class mapping

Use the concise, role-based family `sb-nav` for the root and `sb-nav-{role}`
for its structural children. Apply this deterministic transformation:

- `.mwp-css-nav` → `.sb-nav`
- `.mwp-css-nav_inner` → `.sb-nav-inner`
- `.mwp-css-nav_submenu-icon-line-left` →
  `.sb-nav-submenu-icon-line-left`

For every remaining structural token, replace the `mwp-css-nav_` prefix with
`sb-nav-` and convert suffix underscores to hyphens. This keeps the role names
clear in the Webflow Navigator and avoids carrying the old internal `css`
namespace into the public class API. This mapping applies to Webflow class
tokens and CSS class selectors only.

| Current class | New class |
| --- | --- |
| `mwp-css-nav` | `sb-nav` |
| `mwp-css-nav_inner` | `sb-nav-inner` |
| `mwp-css-nav_brand` | `sb-nav-brand` |
| `mwp-css-nav_menu` | `sb-nav-menu` |
| `mwp-css-nav_summary` | `sb-nav-summary` |
| `mwp-css-nav_label` | `sb-nav-label` |
| `mwp-css-nav_icon` | `sb-nav-icon` |
| `mwp-css-nav_line` | `sb-nav-line` |
| `mwp-css-nav_panel` | `sb-nav-panel` |
| `mwp-css-nav_primary` | `sb-nav-primary` |
| `mwp-css-nav_links` | `sb-nav-links` |
| `mwp-css-nav_link` | `sb-nav-link` |
| `mwp-css-nav_submenu` | `sb-nav-submenu` |
| `mwp-css-nav_submenu-trigger` | `sb-nav-submenu-trigger` |
| `mwp-css-nav_submenu-icon` | `sb-nav-submenu-icon` |
| `mwp-css-nav_submenu-icon-line-left` | `sb-nav-submenu-icon-line-left` |
| `mwp-css-nav_submenu-icon-line-right` | `sb-nav-submenu-icon-line-right` |
| `mwp-css-nav_submenu-list` | `sb-nav-submenu-list` |
| `mwp-css-nav_submenu-link` | `sb-nav-submenu-link` |
| `mwp-css-nav_cta` | `sb-nav-cta` |
| `mwp-css-nav_secondary` | `sb-nav-secondary` |
| `mwp-css-nav_socials` | `sb-nav-socials` |
| `mwp-css-nav_secondary-link` | `sb-nav-secondary-link` |
| `mwp-css-nav_secondary-icon` | `sb-nav-secondary-icon` |
| `mwp-css-nav_secondary-label` | `sb-nav-secondary-label` |
| `mwp-css-nav_contacts` | `sb-nav-contacts` |
| `mwp-css-nav_backdrop` | `sb-nav-backdrop` |
| `mwp-css-nav_settings` | `sb-nav-settings` |
| `mwp-css-nav_settings-summary` | `sb-nav-settings-summary` |
| `mwp-css-nav_settings-title` | `sb-nav-settings-title` |
| `mwp-css-nav_settings-help` | `sb-nav-settings-help` |
| `mwp-css-nav_settings-note` | `sb-nav-settings-note` |
| `mwp-css-nav_config-row` | `sb-nav-config-row` |
| `mwp-css-nav_config-label` | `sb-nav-config-label` |
| `mwp-css-nav_config-title` | `sb-nav-config-title` |
| `mwp-css-nav_config-value` | `sb-nav-config-value` |
| `mwp-css-nav_desktop` | `sb-nav-desktop` |

The last ten names occur in legacy settings/demo structures beyond the
candidate's 27-node-base class set. Confirm which remain in each source edition
before renaming or deleting them; the mapping is defined so they cannot be
left behind by a root/children-only replacement.

Preserve the descriptive role of each structural class. Webflow-generated
collision suffixes such as `-5`, historical `.always*` combos, and
`mwp-component-library--`-prefixed Library selector records are environment or
fixture evidence, not names to copy into the new component. The new clonable
must start from deliberate base classes and must not inherit unlink-generated
combos.

The motion preset values such as `mwp-motion-dropdown` and `mwp-motion-left`
are written into a `data-mwp-motion` attribute and consumed as configuration
values; they are not ordinary Webflow class selectors. Treat them as runtime
compatibility hooks unless a separate migration explicitly changes their
contract.

## Contracts to retain through the class rename

Changing Webflow class names does not itself require changing these public
runtime contracts. Keep them stable in the class-only migration and test that
generated output still contains them:

- Runtime hooks such as `data-mwp-navbar`, `data-mwp-menu`, `data-mwp-trigger`,
  `data-mwp-panel`, `data-mwp-backdrop`, submenu hooks and runtime state/config
  attributes.
- CSS custom properties in the `--mwp-nav-*` family.
- JavaScript compatibility API names: `NavbarLight`, `initNavbarLight`, the
  `mwpNavbarLight` root property, and `mwpNav` on the native menu.
- Lifecycle events `mwp-nav:open`, `mwp-nav:opened`, `mwp-nav:close` and
  `mwp-nav:closed`.
- CDN diagnostic event `mwp-navbar-light:cdn-error` and its load/status
  attributes.
- Existing `data-wf--*--variant` compatibility markers, versioned CDN
  filenames/URLs and immutable historical release records.

These are separately versionable choices. Do not mechanically replace every
`mwp-` token: a broad text replacement would silently break existing consumers.

## Webflow-specific migration points

- Rename source component classes and each generated Embed together; verify the
  saved Embed readback matches the generated output exactly.
- Preserve component properties, element IDs/structure, styles, assets,
  accessibility attributes and bindings while changing class names.
- Preserve both `All Links` and `Body (All Pages)` shared tag styles when
  updating a clean consumer; inspect their global effect before distribution.
- Keep structural display names unset so Designer Navigator labels expose the
  new `sb-*` classes. Keep descriptive labels on the intentional Embeds.
- Review Webflow variant-marker strings separately. Keep existing markers in
  compatibility CSS until a dedicated compatibility test supports removal.

## Generated-output guard

Add an assertion against generated, portable release surfaces that rejects
legacy `mwp-css-nav` class selectors/tokens while allowing the preserved
`data-mwp-*`, `--mwp-nav-*`, event/API strings and documented compatibility
markers. Scope it to class syntax and component class attributes rather than a
global `mwp-` substring search. Include a positive assertion for the new root
and structural `sb-*` selectors, and run it on both source and generated
outputs before tagging a new semantic version.

## Build order and release boundary

1. Create the canonical repository with complete history and agree the package
   identity; do not rename this checkout's remote or folder before that exists.
2. Finalize and document the exact `sb-*` mapping. Keep `SmashBurger Lite` as
   the clonable product name, not the class prefix.
3. Change source, tests, demos and generated sources as one class-only
   migration, preserving the contracts above.
4. Generate, assert and review every output; run the relevant regression and
   compatibility checks before choosing a new semantic version.
5. Update Webflow Library editions and consumers only through a separate
   approved Library workflow. Keep the released v0.2.6 baseline immutable.
6. Point the public clonable only at the exact verified release produced by
   this migration.

The class mapping is specified above. The roadmap already names
`madewithpixels/SmashBurger-Webflow-Navbar` and package
`smashburger-webflow-navbar`; the canonical repository and clone now contain the complete history. The renamed candidate is packaged locally; release and Webflow rollout remain gated.
