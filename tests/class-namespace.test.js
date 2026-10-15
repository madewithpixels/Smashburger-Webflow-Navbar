import assert from 'node:assert/strict';
import test from 'node:test';
import { assertNoLegacyClasses, assertContracts, checkNamespace } from '../scripts/check-class-namespace.mjs';
import { runtimeFixture } from '../scripts/runtime-test-fixture.mjs';

test('renamed candidate preserves the release baseline and runtime contracts', checkNamespace);
test('namespace guard rejects legacy selectors and class tokens, allowing compatibility attributes', () => {
  for (const text of ['.mwp-css-nav_panel {}', '<div class="sb-nav mwp-css-nav_inner">', '<div class="mwp-other">', "querySelector('.mwp-css-nav_panel')"]) {
    assert.throws(() => assertNoLegacyClasses(text, 'negative fixture'));
  }
  assertNoLegacyClasses('<div class="sb-nav" data-mwp-css-nav data-motion="mwp-motion-left" data-wf--mwp-component-library--smashburger--variant="always">', 'retained hooks');
});
test('compatibility guard rejects removed hooks', () => {
  assert.throws(() => assertContracts('data-sb-navbar', ['data-mwp-navbar'], 'negative fixture'));
  assert.throws(() => assertContracts('SmashBurger', ['NavbarLight'], 'negative fixture'));
});
test('source runtime discovers the renamed panel class when the panel hook is absent', () => {
  const fixture = runtimeFixture('source');
  try {
    const panel = fixture.root.querySelector('[data-mwp-panel]');
    panel.removeAttribute('data-mwp-panel');
    panel.className = 'sb-nav-panel';
    const navbar = fixture.create();
    assert.equal(navbar.panel, panel);
    assert.equal(fixture.root.dataset.mwpReady, 'true');
    navbar.destroy();
  } finally { fixture.close(); }
});
