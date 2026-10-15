import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { JSDOM } from 'jsdom';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Lite review examples keep one native link tree and remain candidate-only', () => {
  const examples = read('candidate/lite/review-examples.html');
  const workbench = read('candidate/lite/workbench-references.html');
  const guide = read('webflow/smashburger-lite-safe-editing.md');

  assert.match(examples, /Unreleased local review material/);
  assert.match(examples, /not a native Webflow component, a clonable or installation instructions/);
  assert.equal((examples.match(/data-mwp-navbar/g) || []).length, 2);
  for (const hook of ['data-mwp-menu', 'data-mwp-trigger', 'data-mwp-panel', 'data-mwp-item']) {
    assert.ok(examples.includes(hook), `example retains ${hook}`);
  }
  assert.ok(examples.includes('class="sb-nav-inner"'));
  assert.ok(examples.includes('class="sb-nav-panel"'));
  assert.ok(examples.includes('../demo/navbar-light.browser.js'));
  assert.equal((workbench.match(/data-mwp-navbar/g) || []).length, 2);
  assert.ok(workbench.includes('data-mwp-menu open'));
  assert.ok(workbench.includes('Backdrop reference'));
  assert.ok(!workbench.includes('<script'));
  assert.ok(!examples.includes('0.3.0-rc.1/dist/navbar-light.min.js'));
  assert.ok(guide.includes('unreleased review material'));
  assert.ok(guide.includes('not an installation instruction'));
});

test('Lite examples keep each navbar to one native link tree and candidate classes', () => {
  const examples = new JSDOM(read('candidate/lite/review-examples.html')).window.document;
  const workbench = new JSDOM(read('candidate/lite/workbench-references.html')).window.document;

  for (const document of [examples, workbench]) {
    const roots = [...document.querySelectorAll('[data-mwp-navbar]')];
    assert.equal(roots.length, 2);
    for (const root of roots) {
      assert.equal(root.querySelectorAll('nav[data-mwp-panel]').length, 1);
      assert.equal(root.querySelectorAll('details[data-mwp-menu] > summary[data-mwp-trigger]').length, 1);
      assert.ok(root.querySelector('div.sb-nav-inner'));
      assert.ok(root.querySelector('nav.sb-nav-panel'));
      assert.ok(!root.querySelector('[class*="always"]'), 'no generated .always* class trail');
      assert.ok(!root.querySelector('[data-wf--mwp-component-library--smashburger--variant]'), 'no Library variant marker');
    }
  }

  const exampleRoots = [...examples.querySelectorAll('[data-mwp-navbar]')];
  for (const root of exampleRoots) {
    assert.equal(root.querySelectorAll('nav[data-mwp-panel] a[data-mwp-item]').length, 3);
    assert.equal(root.querySelectorAll('a[data-mwp-item]').length, 3, 'links are not duplicated outside the single panel');
  }
  assert.equal(workbench.querySelectorAll('[data-mwp-menu] > summary[data-mwp-trigger]').length, 2);
  assert.equal(workbench.querySelectorAll('[data-mwp-menu][open]').length, 1);
});
