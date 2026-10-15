import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const baseline = JSON.parse(await read('webflow/evidence/library-sb-nav-baseline-2026-10-15.json'));
const after = JSON.parse(await read('webflow/evidence/library-sb-nav-candidate-2026-10-15.json'));
const map = name => name.replace(/^mwp-css-nav/, 'sb-nav').replace(/_/g, '-');
const settings = (rows, edition, id) => rows.find(row => row.label === `${edition}:${id}`).result[0].data.matches;
const withoutVariantIds = ({ id, ...prop }) => prop;
const runtime = await read('candidate/webflow/library/navbar-light-embed.html');
const canvas = await read('candidate/webflow/library/navbar-light-canvas-embed.html');
const cdn = await read('candidate/webflow/library/navbar-light-cdn-candidate-loader.html');
for (let edition = 0; edition < 2; edition++) {
  const old = baseline.editions[edition], candidate = after.editions[edition];
  assert.equal(candidate.props.length, 60);
  assert.deepEqual(candidate.props.filter(p => p.type !== 'variant').map(withoutVariantIds), old.props.filter(p => p.type !== 'variant').map(withoutVariantIds));
  assert.deepEqual(candidate.variants.map(v => v.name), old.variants.map(v => v.name));
  const beforeTree = baseline.trees[edition], afterTree = after.trees[edition];
  assert.equal(afterTree.length, beforeTree.length);
  let embedIndex = 0, bindings = 0;
  for (let index = 0; index < beforeTree.length; index++) {
    const a = beforeTree[index], b = afterTree[index];
    assert.equal(b.type, a.type);
    assert.equal(b.childCount, a.childCount);
    assert.equal(b.textContent, a.textContent);
    assert.deepEqual(b.styleNames || [], (a.styleNames || []).map(map));
    if (a.type === 'String') continue;
    const expected = structuredClone(settings(baseline.settings, edition, a.id.element));
    const actual = settings(after.settings, edition, b.id.element);
    for (const setting of expected) {
      if (setting.key === 'attributes') for (const attribute of setting.value) {
        if (attribute.name === 'class') attribute.value = attribute.value.split(/\s+/).map(map).join(' ');
      }
      if (setting.key === 'code') {
        if (embedIndex === 1) setting.value = canvas;
        else setting.value = edition === 0 ? runtime : cdn;
        embedIndex++;
      }
    }
    assert.deepEqual(actual, expected, `${candidate.name}: node ${index} settings`);
    bindings += (JSON.stringify(actual).match(/"sourceType":"prop"/g) || []).length;
  }
  assert.equal(bindings, 67);
  assert.equal(afterTree.filter(n => n.type === 'Image').length, 9);
}
assert.deepEqual(after.originalSettings, baseline.settings, 'Original component settings changed');
assert.deepEqual(after.originalStyles, baseline.styles, 'Pre-existing global style records changed');
for (const copied of after.variantStyles) {
  const old = baseline.variantStyles.find(row => row.label === copied.label);
  assert.deepEqual(copied.result[0].properties, old.result[0].properties, copied.label);
}
assert.equal(after.variantStyles.length, baseline.variantStyles.length);
for (const row of after.releasedVariantRecheck) assert.deepEqual(row.result[0].properties, baseline.variantStyles.find(old => old.label === row.label).result[0].properties, `Released variant changed: ${row.label}`);
assert.equal(after.orphanOverrideCleanup.length, 34);
assert.ok(after.orphanOverrideCleanup.every(row => Object.keys(row.result[0].properties).length === 0), 'Unused legacy-class overrides remain on duplicate variants');
console.log('Both Library candidates retain 144 nodes, 60 properties, five variants, nine assets and 67 bindings. Checked original settings/styles and their v0.2.6 pin match baseline; Webflow still flags three existing definitions in sharing review.');
