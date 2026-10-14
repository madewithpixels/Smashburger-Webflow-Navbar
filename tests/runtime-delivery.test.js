import assert from 'node:assert/strict';
import test from 'node:test';
import { deliveries, runtimeFixture, event, change } from '../scripts/runtime-test-fixture.mjs';

for (const delivery of deliveries) {
  test(`${delivery}: missing component CSS leaves native navigation accessible`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 stylesheet-failure defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, () => {
    const f = runtimeFixture(delivery, { includeCss: false });
    try {
      const panel = f.root.querySelector('[data-mwp-panel]');
      const menu = f.root.querySelector('[data-mwp-menu]');
      assert.equal(f.dom.window.initNavbarLight().length, 0);
      const navbar = f.create();
      assert.equal(f.root.hasAttribute('data-mwp-ready'), false);
      assert.equal(panel.getAttribute('aria-hidden'), null);
      assert.equal(panel.hasAttribute('inert'), false);
      assert.equal(panel.querySelector('a').tabIndex, 0);
      menu.open = true;
      assert.equal(menu.open, true);
      assert.equal(panel.querySelector('a').textContent, 'First');
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: collapse boundaries and open resize preserve accessible state`, async () => {
    const f = runtimeFixture(delivery);
    try {
      const thresholds = { never: -Infinity, tablet: 991, 'mobile-landscape': 767, 'mobile-portrait': 479, always: Infinity };
      for (const [collapse, threshold] of Object.entries(thresholds)) {
        f.root.dataset.collapse = collapse;
        for (const width of [320, 393, 478, 479, 480, 766, 767, 768, 990, 991, 992, 1280, 2060]) {
          f.resize(width);
          const navbar = f.create();
          const panel = f.root.querySelector('[data-mwp-panel]');
          assert.equal(f.root.dataset.mwpCollapsed, String(width <= threshold), `${collapse} at ${width}`);
          assert.equal(panel.inert, width <= threshold);
          assert.equal(panel.getAttribute('aria-hidden'), String(width <= threshold));
          navbar.destroy();
        }
      }
      f.root.dataset.collapse = 'tablet'; f.resize(820);
      const navbar = f.create();
      await change(f, () => navbar.open(), 'opened');
      f.resize(1280);
      assert.equal(f.root.dataset.state, 'expanded');
      f.resize(393);
      assert.equal(f.root.querySelector('[data-mwp-menu]').open, false);
      assert.equal(f.root.querySelector('[data-mwp-panel]').inert, true);
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: all 35 layout/motion combinations open and Escape-close`, async () => {
    const f = runtimeFixture(delivery);
    try {
      for (const layout of ['dropdown', 'full-width', 'left', 'right', 'overlay']) {
        for (const motion of ['dropdown', 'left', 'right', 'up', 'fade', 'none', 'custom']) {
          f.root.dataset.layout = layout; f.root.dataset.motion = motion;
          f.root.style.setProperty('--mwp-nav-duration-open', '1ms');
          f.root.style.setProperty('--mwp-nav-duration-close', '1ms');
          const navbar = f.create();
          await change(f, () => navbar.open({ focusFirst: true }), 'opened');
          assert.equal(f.root.querySelector('[data-mwp-trigger]').getAttribute('aria-expanded'), 'true');
          assert.equal(f.root.querySelector('[data-mwp-panel]').inert, false);
          assert.equal(f.dom.window.document.activeElement.textContent, 'First');
          assert.equal(f.dom.window.document.documentElement.dataset.mwpScrollLocked === 'true', ['left', 'right', 'overlay'].includes(layout));
          await change(f, () => f.dom.window.document.dispatchEvent(new f.dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })), 'closed');
          assert.equal(f.root.dataset.state, 'closed');
          assert.equal(f.root.querySelector('[data-mwp-panel]').inert, true);
          assert.equal(f.root.querySelector('[data-mwp-panel]').getAttribute('aria-hidden'), 'true');
          assert.equal(f.dom.window.document.activeElement, f.root.querySelector('[data-mwp-trigger]'));
          assert.equal(f.dom.window.document.documentElement.dataset.mwpScrollLocked, undefined);
          navbar.destroy();
        }
      }
    } finally { f.close(); }
  });

  test(`${delivery}: nested Escape, close controls, disabled closing and repeat initialisation`, async () => {
    const f = runtimeFixture(delivery);
    try {
      const navbar = f.create();
      assert.equal(f.dom.window.initNavbarLight().length, 0);
      await change(f, () => navbar.open(), 'opened');
      const submenu = f.root.querySelector('[data-mwp-submenu]'); submenu.open = true;
      submenu.querySelector('a').focus();
      const escape = () => f.dom.window.document.dispatchEvent(new f.dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      escape();
      assert.equal(submenu.open, false); assert.equal(f.root.dataset.state, 'open');
      assert.equal(f.dom.window.document.activeElement, submenu.querySelector('summary'));
      await change(f, escape, 'closed');
      for (const selector of ['[data-mwp-backdrop]', '[data-mwp-panel] > a', '#outside']) {
        await change(f, () => navbar.open(), 'opened');
        await change(f, () => f.dom.window.document.querySelector(selector).click(), 'closed');
      }
      f.root.dataset.closeOnOutside = 'false'; f.root.dataset.closeOnLink = 'false';
      await change(f, () => navbar.open(), 'opened');
      f.dom.window.document.querySelector('#outside').click(); f.root.querySelector('a').click();
      assert.equal(f.root.querySelector('[data-mwp-menu]').open, true);
      navbar.destroy(); navbar.destroy();
      assert.equal(f.root.mwpNavbarLight, undefined);
      assert.equal(f.dom.window.document.documentElement.dataset.mwpScrollLocked, undefined);
      assert.equal(f.dom.window.initNavbarLight().length, 1);
    } finally { f.close(); }
  });

  test(`${delivery}: both icon modes calculate odd/even custom geometry`, () => {
    const f = runtimeFixture(delivery);
    try {
      for (const mode of ['2', '3']) for (const height of [1, 2, 3, 4]) for (const gap of [5, 7, 9]) {
        f.root.dataset.iconLines = mode;
        f.root.querySelector('[data-mwp-icon]').style.rowGap = `${gap}px`;
        f.root.querySelectorAll('[data-mwp-line]').forEach(line => { line.style.height = `${height}px`; });
        const navbar = f.create();
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-icon-auto-shift'), `${height + gap}px`);
        navbar.destroy();
      }
    } finally { f.close(); }
  });

  test(`${delivery}: reduced motion removes waits in every motion mode`, () => {
    const f = runtimeFixture(delivery, { reducedMotion: true });
    try {
      for (const motion of ['dropdown', 'left', 'right', 'up', 'fade', 'none', 'custom']) {
        f.root.dataset.motion = motion;
        f.root.style.setProperty('--mwp-nav-duration-open', '280ms');
        f.root.style.setProperty('--mwp-nav-duration-close', '220ms');
        const navbar = f.create();
        assert.equal(navbar.motionDuration('open'), 0); assert.equal(navbar.motionDuration('close'), 0);
        navbar.destroy();
      }
    } finally { f.close(); }
  });

  test(`${delivery}: expanding during an opening transition cancels the collapsed timer`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.root.dataset.motion = 'fade';
      f.root.style.setProperty('--mwp-nav-duration-open', '40ms');
      const navbar = f.create();
      const opening = event(f.root, 'mwp-nav:open'); navbar.open(); await opening;
      f.resize(1280);
      await new Promise(resolve => setTimeout(resolve, 80));
      assert.equal(f.root.dataset.state, 'expanded');
      assert.equal(f.root.querySelector('[data-mwp-trigger]').getAttribute('aria-expanded'), 'false');
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: breakpoint expansion cancels queued first-link focus`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.root.dataset.motion = 'fade';
      f.root.style.setProperty('--mwp-nav-duration-open', '40ms');
      const navbar = f.create();
      const opening = event(f.root, 'mwp-nav:open');
      navbar.open({ focusFirst: true }); await opening;
      f.resize(1280);
      await new Promise(resolve => setTimeout(resolve, 80));
      assert.notEqual(f.dom.window.document.activeElement, f.root.querySelector('[data-mwp-panel] a'));
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: expanding during a closing transition cancels hiding and preserves scroll styles`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.root.dataset.layout = 'overlay'; f.root.dataset.motion = 'fade';
      f.root.style.setProperty('--mwp-nav-duration-open', '1ms');
      f.root.style.setProperty('--mwp-nav-duration-close', '40ms');
      const html = f.dom.window.document.documentElement;
      html.style.overflow = 'clip'; html.style.paddingRight = '13px';
      const navbar = f.create();
      await change(f, () => navbar.open(), 'opened');
      const closing = event(f.root, 'mwp-nav:close'); navbar.close(); await closing;
      f.resize(1280);
      await new Promise(resolve => setTimeout(resolve, 80));
      assert.equal(f.root.dataset.state, 'expanded');
      assert.equal(f.root.querySelector('[data-mwp-panel]').inert, false);
      assert.equal(f.root.querySelector('[data-mwp-panel]').getAttribute('aria-hidden'), 'false');
      assert.equal(html.style.overflow, 'clip'); assert.equal(html.style.paddingRight, '13px');
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: CSS-only Always fallback reveals native sibling links without enhancement`, () => {
    const f = runtimeFixture(delivery, { javascript: false });
    try {
      const panel = f.root.querySelector('[data-mwp-panel]');
      const menu = f.root.querySelector('[data-mwp-menu]');
      const visible = () => f.dom.window.getComputedStyle(panel).visibility;
      assert.equal(f.root.mwpNavbarLight, undefined);
      assert.equal(f.root.hasAttribute('data-mwp-ready'), false);
      assert.equal(visible(), 'hidden');
      menu.open = true;
      assert.equal(visible(), 'visible');
      assert.equal(panel.querySelector('a').textContent, 'First');
      menu.open = false;
      assert.equal(visible(), 'hidden');
      assert.equal(f.root.querySelector('[data-mwp-trigger]').hasAttribute('aria-expanded'), false);
    } finally { f.close(); }
  });
}
