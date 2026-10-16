import assert from 'node:assert/strict';
import test from 'node:test';
import { classMapping, createRehearsal, migrate, rollback, authoredStructure, assertPreserved, checkContract } from './fixtures/migration-rehearsal.mjs';

for (const form of ['dist', 'minified', 'embed']) {
  test(`${form}: offline legacy → candidate → exact rollback preserves authoring and focused contract`, async () => {
    const f = createRehearsal(form);
    try {
      await checkContract(f, false);
      // Run twice against the same saved author fixture: no accumulating changes.
      for (let cycle = 0; cycle < 2; cycle++) {
        migrate(f);
        f.nodes.forEach((node, index) => {
          const original = f.classes[index];
          assert.equal(node.getAttribute('class'), original === null ? null
            : original.replace(/\S+/g, token => classMapping.get(token) || token));
        });
        await checkContract(f, true);
        rollback(f);
        await checkContract(f, false);
        assert.equal(f.dom.serialize(), f.original);
      }
    } finally { f.dom.window.close(); }
  });
}

test('every explicit documented class maps and rolls back; unrelated lookalikes survive', () => {
  const f = createRehearsal('dist');
  try {
    // Cover table entries absent from the archived header without changing the seed.
    f.root.className += ` ${[...classMapping.keys()].join(' ')} mwp-css-nav_unknown mwp-css-nav_panel_extra`;
    f.classes[0] = f.root.className;
    // Take a new backup after this extra test-only authoring.
    f.original = f.dom.serialize();
    // The normalised preservation snapshot includes the added unrelated classes.
    const { root } = f;
    const saved = root.className;
    // Derive expected class result directly from the table's ordered values.
    const expected = [...classMapping.values()].join(' ');
    f.authored = authoredStructure(root);
    migrate(f);
    assert.ok(root.className.includes(expected));
    assert.ok(root.classList.contains('mwp-css-nav_unknown'));
    assert.ok(root.classList.contains('mwp-css-nav_panel_extra'));
    rollback(f);
    assert.equal(root.className, saved);
  } finally { f.dom.window.close(); }
});

test('preservation and exact rollback reject content, order, attributes and unrelated-class loss', () => {
  for (const mutate of [
    f => { f.root.querySelector('a').textContent = 'Lost author content'; },
    f => { f.root.querySelector('img').setAttribute('src', 'wrong.svg'); },
    f => { f.root.querySelector('a').setAttribute('href', '#wrong'); },
    f => { f.root.querySelector('[data-mwp-trigger]').setAttribute('aria-label', 'Wrong name'); },
    f => { f.root.setAttribute('data-close-on-link', 'true'); },
    f => { f.root.querySelector('[data-mwp-panel]').append(f.root.querySelector('[data-mwp-panel]').firstElementChild); },
    f => { f.root.classList.remove('mwp-client-theme'); }
  ]) {
    const f = createRehearsal('dist');
    try {
      migrate(f); mutate(f);
      assert.throws(() => assertPreserved(f));
      // Class-only damage can be repaired from the class snapshot. Other damage
      // must fail rollback rather than being hidden by replacement of the tree.
      if (!f.root.classList.contains('mwp-client-theme')) rollback(f);
      else assert.throws(() => rollback(f));
    } finally { f.dom.window.close(); }
  }
});

test('mixed historical/candidate delivery is rejected before execution', async () => {
  const f = createRehearsal('dist');
  try {
    migrate(f);
    const pair = JSON.parse(f.delivery.textContent);
    pair.js = 'dist/navbar-light.js';
    f.delivery.textContent = JSON.stringify(pair);
    await assert.rejects(checkContract(f, true), /same delivery/);
    rollback(f);
  } finally { f.dom.window.close(); }
});
