import assert from 'node:assert/strict';
import test from 'node:test';
import { deliveries, runtimeFixture, change } from '../scripts/runtime-test-fixture.mjs';

const tick = f => new Promise(resolve => f.dom.window.setTimeout(resolve, 20));
const applicable = deliveries.filter(delivery => delivery === 'source' || process.env.SMASHBURGER_CANDIDATE);
const attributes = element => Object.fromEntries([...element.attributes]
  .filter(attribute => attribute.name !== 'style').map(attribute => [attribute.name, attribute.value]));
const styles = element => Object.fromEntries([...element.style].map(name =>
  [name, [element.style.getPropertyValue(name), element.style.getPropertyPriority(name)]]));

for (const delivery of applicable) {
  for (const initiallyOpen of [false, true]) for (const destroyedOpen of [false, true]) {
    test(`${delivery}: native opening after destroy from ${destroyedOpen ? 'open' : 'closed'} restores initially ${initiallyOpen ? 'open' : 'closed'} Details`, async () => {
      const f = runtimeFixture(delivery);
      try {
        const { root } = f;
        const menu = root.querySelector('[data-mwp-menu]');
        const trigger = root.querySelector('[data-mwp-trigger]');
        const panel = root.querySelector('[data-mwp-panel]');
        const link = panel.querySelector('a');
        menu.open = initiallyOpen;
        const navbar = f.create();
        const api = root.mwpNavbarLight;
        if (destroyedOpen) await change(f, () => api.open(), 'opened');
        assert.equal(root.dataset.state, destroyedOpen ? 'open' : 'closed');
        api.destroy();
        assert.equal(menu.open, initiallyOpen);
        assert.equal(root.hasAttribute('data-mwp-ready'), false);
        assert.equal(root.hasAttribute('data-mwp-collapsed'), false);
        for (const element of [root, menu, panel, root.querySelector('[data-mwp-backdrop]')]) {
          assert.equal(element.hasAttribute('data-state'), false);
        }
        assert.equal(trigger.getAttribute('aria-label'), 'Navigation menu');
        assert.equal(trigger.hasAttribute('aria-expanded'), false);
        assert.equal(trigger.hasAttribute('aria-controls'), false);
        assert.equal(trigger.hasAttribute('aria-haspopup'), false);
        assert.equal(panel.hasAttribute('id'), false);
        assert.equal(panel.hasAttribute('aria-hidden'), false);
        assert.equal(panel.hasAttribute('inert'), false);
        assert.ok(!panel.inert);
        assert.equal(root.mwpNavbarLight, undefined);
        assert.equal(menu.mwpNav, undefined);
        assert.equal(root.hasAttribute('style'), false);
        assert.equal(link.hasAttribute('style'), false);

        // Start closed, then use the native summary default action, without the API.
        menu.open = false;
        await tick(f);
        trigger.click();
        await tick(f);
        assert.equal(menu.open, true);
        assert.equal(panel.previousElementSibling, menu);
        const appearance = f.dom.window.getComputedStyle(panel);
        assert.notEqual(appearance.display, 'none');
        assert.notEqual(appearance.visibility, 'hidden');
        assert.notEqual(appearance.opacity, '0');
        assert.ok(!panel.inert);
        assert.equal(panel.hasAttribute('aria-hidden'), false);
        assert.equal(link.tabIndex, 0);
        link.focus();
        assert.equal(f.dom.window.document.activeElement, link);
        api.destroy(); navbar.destroy();
        assert.equal(menu.open, true, 'repeated destroy must leave native interaction alone');

        const [next] = f.dom.window.initNavbarLight();
        assert.ok(next);
        assert.equal(f.dom.window.initNavbarLight().length, 0);
        const nextApi = root.mwpNavbarLight;
        api.destroy();
        assert.equal(root.mwpNavbarLight, nextApi, 'old destroy must not erase a new instance');
        await change(f, () => nextApi.open(), 'opened');
        assert.equal(panel.getAttribute('aria-hidden'), 'false');
        assert.equal(panel.inert, false);
        await change(f, () => nextApi.close(), 'closed');
        assert.equal(panel.inert, true);
        nextApi.destroy();
        assert.equal(menu.open, true, 'new instance restores its own native baseline');
        assert.equal(panel.hasAttribute('aria-hidden'), false);
        assert.ok(!panel.inert);
      } finally { f.close(); }
    });
  }

  for (const authoredInert of [false, true]) {
    test(`${delivery}: destroy preserves authored attributes, configuration, styles and inert=${authoredInert}`, async () => {
      const f = runtimeFixture(delivery);
      try {
        const { root } = f;
        const menu = root.querySelector('[data-mwp-menu]');
        const trigger = root.querySelector('[data-mwp-trigger]');
        const panel = root.querySelector('[data-mwp-panel]');
        const submenu = root.querySelector('[data-mwp-submenu]');
        const item = panel.querySelector('a');
        root.dataset.collapse = 'never';
        root.dataset.mwpReady = 'authored-ready';
        root.dataset.mwpCollapsed = 'authored-collapse';
        root.dataset.align = 'left';
        root.dataset.focusFirst = 'false';
        root.dataset.closeOnLink = 'false';
        root.dataset.scrollLock = 'false';
        menu.dataset.mwpLayout = 'mwp-layout-full-width';
        menu.dataset.mwpMotion = 'mwp-motion-fade';
        menu.dataset.mwpOpenDuration = '2ms';
        menu.dataset.mwpCloseDuration = '3ms';
        menu.dataset.mwpDistance = '8px';
        menu.dataset.mwpEase = 'linear';
        menu.dataset.mwpPanelWidth = '400px';
        menu.dataset.mwpStagger = '1ms';
        menu.dataset.mwpIconDuration = '4ms';
        root.dataset.submenuIconDuration = '5ms';
        root.dataset.submenuIconEasing = 'ease-in';
        root.dataset.submenuIconRotation = '90deg';
        root.style.setProperty('--mwp-nav-duration-open', '7ms', 'important');
        root.style.setProperty('--mwp-nav-icon-auto-shift', '11px', 'important');
        root.style.color = 'red';
        item.style.setProperty('--mwp-item-index', '12', 'important');
        trigger.setAttribute('aria-controls', 'authored-panel other-panel');
        trigger.setAttribute('aria-haspopup', 'menu');
        trigger.setAttribute('aria-expanded', 'mixed');
        trigger.setAttribute('aria-describedby', 'help');
        panel.id = 'authored-panel';
        panel.setAttribute('aria-hidden', authoredInert ? 'true' : 'false');
        panel.setAttribute('aria-label', 'Authored navigation');
        panel.inert = authoredInert;
        if (authoredInert) panel.setAttribute('inert', 'authored-inert');
        submenu.open = true;
        menu.mwpNav = { authored: true };
        const oldHandle = menu.mwpNav;
        for (const element of [root, menu, panel, root.querySelector('[data-mwp-backdrop]')]) element.dataset.state = 'authored';
        const elements = [root, ...root.querySelectorAll('*')];
        const before = elements.map(element => ({ attributes: attributes(element), styles: styles(element) }));
        const navbar = f.create();
        assert.equal(submenu.open, false, 'expanded enhancement closes the authored submenu');
        // Unrelated edits made during enhancement must survive, too.
        item.textContent = 'Edited destination';
        item.setAttribute('aria-current', 'page');
        root.style.backgroundColor = 'blue';
        navbar.destroy();
        assert.equal(panel.inert, authoredInert);
        assert.equal(menu.mwpNav, oldHandle);
        assert.equal(submenu.open, true);
        elements.forEach((element, index) => {
          const expected = before[index];
          if (element === item) expected.attributes['aria-current'] = 'page';
          if (element === root) expected.styles['background-color'] = ['blue', ''];
          assert.deepEqual(attributes(element), expected.attributes);
          assert.deepEqual(styles(element), expected.styles);
        });
        assert.equal(item.textContent, 'Edited destination');
        navbar.destroy();
      } finally { f.close(); }
    });
  }

  for (const state of ['opening', 'closing']) {
    test(`${delivery}: destroy during ${state} cancels delayed state and first-link focus`, async () => {
      const f = runtimeFixture(delivery);
      try {
        const panel = f.root.querySelector('[data-mwp-panel]');
        const outside = f.dom.window.document.querySelector('#outside');
        f.root.dataset.motion = 'fade';
        f.root.style.setProperty('--mwp-nav-duration-open', state === 'opening' ? '60ms' : '0ms');
        f.root.style.setProperty('--mwp-nav-duration-close', '60ms');
        const navbar = f.create();
        if (state === 'closing') await change(f, () => navbar.open(), 'opened');
        await change(f, () => state === 'opening' ? navbar.open({ focusFirst: true }) : navbar.close(), state === 'opening' ? 'open' : 'close');
        const lateEvents = [];
        for (const type of ['opened', 'closed']) f.root.addEventListener(`mwp-nav:${type}`, () => lateEvents.push(type));
        outside.focus();
        navbar.destroy();
        await new Promise(resolve => f.dom.window.setTimeout(resolve, 100));
        assert.equal(f.root.hasAttribute('data-state'), false);
        assert.equal(panel.hasAttribute('aria-hidden'), false);
        assert.ok(!panel.inert);
        assert.equal(f.dom.window.document.activeElement, outside);
        assert.deepEqual(lateEvents, []);
      } finally { f.close(); }
    });
  }

  test(`${delivery}: destroying skipped enhancement leaves incomplete or CSS-free markup alone`, () => {
    for (const missing of ['menu', 'panel', 'trigger', 'css']) {
      const f = runtimeFixture(delivery, { includeCss: missing !== 'css' });
      try {
        if (missing !== 'css') f.root.querySelector(`[data-mwp-${missing}]`).remove();
        const before = f.root.outerHTML;
        const navbar = f.create();
        navbar.destroy(); navbar.destroy();
        assert.equal(f.root.outerHTML, before);
      } finally { f.close(); }
    }
  });
}
