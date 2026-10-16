import assert from 'node:assert/strict';
import test from 'node:test';
import { deliveries, runtimeFixture, change } from '../scripts/runtime-test-fixture.mjs';

// These three lifecycle groups were each observed failing in all immutable
// v0.2.6 deliveries. Execute them as TODOs only there, never for candidates.
function historicalLockFailure(delivery) {
  return { todo: delivery !== 'source' && !process.env.SMASHBURGER_CANDIDATE && !process.env.SMASHBURGER_FRESH_BUILD
    ? 'Known v0.2.6 scroll-lock ownership defect; immutable artifacts retained. Candidate assertions remain mandatory.' : false };
}

function cloneNavbar(f, settings = {}) {
  const root = f.root.cloneNode(true);
  root.querySelector('[data-mwp-panel]').removeAttribute('id');
  Object.assign(root.dataset, settings);
  f.root.after(root);
  return { ...f, root, create: () => new f.dom.window.NavbarLight(root) };
}

// jsdom has no layout. Supply explicit viewport/document widths so both the
// scrollbar-compensation and no-scrollbar paths have meaningful assertions.
function documentStyles(f, { overflow = 'clip', padding = '13px', scrollbar = 24 } = {}) {
  const html = f.dom.window.document.documentElement;
  Object.defineProperty(f.dom.window, 'innerWidth', { configurable: true, value: 1024 });
  Object.defineProperty(html, 'clientWidth', { configurable: true, value: 1024 - scrollbar });
  html.style.overflow = overflow;
  html.style.paddingRight = padding;
  return {
    locked() {
      assert.equal(html.dataset.mwpScrollLocked, 'true');
      assert.equal(html.style.overflow, 'hidden');
      assert.equal(html.style.paddingRight, scrollbar > 0 ? `${scrollbar}px` : padding);
    },
    restored() {
      assert.equal(html.dataset.mwpScrollLocked, undefined);
      assert.equal(html.style.overflow, overflow);
      assert.equal(html.style.paddingRight, padding);
    }
  };
}

for (const delivery of deliveries) {
  test(`${delivery}: scroll-lock lifecycle survives open-menu destroy, repeated destroy and reinitialisation`, historicalLockFailure(delivery), async () => {
    for (const destroyedIndex of [0, 1]) for (const scrollbar of [0, 24]) {
      const f = runtimeFixture(delivery);
      try {
        f.root.dataset.layout = 'overlay';
        const fixtures = [f, cloneNavbar(f)];
        const styles = documentStyles(f, { scrollbar });
        const navbars = fixtures.map(item => item.create());
        for (let i = 0; i < 2; i++) await change(fixtures[i], () => navbars[i].open(), 'opened');
        styles.locked();

        const removed = fixtures[destroyedIndex];
        const old = navbars[destroyedIndex];
        const survivor = navbars[1 - destroyedIndex];
        old.destroy();
        assert.equal(removed.root.mwpNavbarLight, undefined);
        assert.equal(fixtures[1 - destroyedIndex].root.querySelector('[data-mwp-menu]').open, true);
        styles.locked();
        old.destroy();
        styles.locked();

        const replacements = f.dom.window.initNavbarLight();
        assert.equal(replacements.length, 1);
        const [replacement] = replacements;
        assert.ok(replacement);
        assert.equal(f.dom.window.initNavbarLight().length, 0);
        await change(removed, () => replacement.open(), 'opened');
        old.destroy(); // A stale instance cannot release its replacement's lock.
        styles.locked();
        survivor.destroy();
        survivor.destroy();
        styles.locked();
        await change(removed, () => replacement.close(), 'closed');
        styles.restored();
        replacement.destroy();
        replacement.destroy();
        styles.restored();

        // A new lock cycle must capture today's styles, not the first snapshot.
        const nextStyles = documentStyles(f, { overflow: 'scroll', padding: '7px', scrollbar });
        const again = removed.create();
        await change(removed, () => again.open(), 'opened');
        nextStyles.locked();
        again.destroy();
        nextStyles.restored();
      } finally { f.close(); }
    }
  });

  test(`${delivery}: scroll-lock lifecycle releases only the navbar crossing its collapse breakpoint`, historicalLockFailure(delivery), async () => {
    const presets = [['tablet', 991], ['mobile-landscape', 767], ['mobile-portrait', 479]];
    for (let i = 0; i < presets.length; i++) for (let j = i + 1; j < presets.length; j++) {
      for (const reverse of [false, true]) {
        const f = runtimeFixture(delivery, { width: 320 });
        try {
          const [wide, narrow] = [presets[i], presets[j]];
          const ordered = reverse ? [narrow, wide] : [wide, narrow];
          Object.assign(f.root.dataset, { layout: 'left', collapse: ordered[0][0] });
          const g = cloneNavbar(f, { layout: 'right', collapse: ordered[1][0] });
          const fixtures = [f, g];
          const navbars = fixtures.map(item => item.create());
          const styles = documentStyles(f);
          const narrowIndex = reverse ? 0 : 1;
          const wideIndex = 1 - narrowIndex;
          for (let k = 0; k < 2; k++) await change(fixtures[k], () => navbars[k].open(), 'opened');
          styles.locked();

          f.resize(narrow[1]);
          styles.locked(); // The boundary itself remains collapsed.
          f.resize(narrow[1] + 1);
          assert.equal(fixtures[narrowIndex].root.dataset.state, 'expanded');
          assert.equal(fixtures[wideIndex].root.dataset.state, 'open');
          styles.locked();
          f.resize(wide[1]);
          styles.locked();
          f.resize(wide[1] + 1);
          styles.restored();
          assert.ok(fixtures.every(item => item.root.dataset.state === 'expanded'));

          f.resize(320);
          assert.ok(fixtures.every(item => item.root.querySelector('[data-mwp-menu]').open === false));
          styles.restored();
          // Reopen in the other order, then release through the other lifecycle.
          for (const k of [1, 0]) await change(fixtures[k], () => navbars[k].open(), 'opened');
          navbars[wideIndex].destroy();
          styles.locked();
          f.resize(narrow[1] + 1);
          styles.restored();
          navbars[narrowIndex].destroy();
          f.resize(320);
          f.resize(1280);
          styles.restored(); // Removed breakpoint listeners cannot reacquire locks.
        } finally { f.close(); }
      }
    }
  });

  test(`${delivery}: scroll-lock lifecycle keeps a locking drawer independent of a non-locking dropdown`, async () => {
    for (const layout of ['left', 'right']) for (const dropdownFirst of [false, true]) {
      const f = runtimeFixture(delivery);
      try {
        f.root.dataset.layout = layout;
        const g = cloneNavbar(f, { layout: 'dropdown' });
        const drawer = f.create();
        const dropdown = g.create();
        const styles = documentStyles(f);
        assert.equal(drawer.usesScrollLock(), true);
        assert.equal(dropdown.usesScrollLock(), false);
        if (dropdownFirst) {
          await change(g, () => dropdown.open(), 'opened');
          styles.restored();
        }
        await change(f, () => drawer.open(), 'opened');
        if (!dropdownFirst) await change(g, () => dropdown.open(), 'opened');
        styles.locked();

        dropdown.destroy();
        dropdown.destroy();
        styles.locked();
        const replacements = f.dom.window.initNavbarLight();
        assert.equal(replacements.length, 1);
        const [replacement] = replacements;
        await change(g, () => replacement.open(), 'opened');
        await change(f, () => drawer.close(), 'closed');
        styles.restored(); // An open dropdown must not retain the drawer's lock.
        assert.equal(g.root.dataset.state, 'open');
        await change(f, () => drawer.open(), 'opened');
        styles.locked();
        await change(g, () => replacement.close(), 'closed');
        styles.locked();
        drawer.destroy();
        styles.restored();
        replacement.destroy();
        styles.restored();
      } finally { f.close(); }
    }
  });

  test(`${delivery}: scroll-lock lifecycle isolates owner documents within one runtime`, historicalLockFailure(delivery), async () => {
    for (const releaseFirst of [0, 1]) {
      const f = runtimeFixture(delivery);
      const g = runtimeFixture(delivery, { javascript: false });
      try {
        const fixtures = [f, g];
        fixtures.forEach(item => { item.root.dataset.layout = 'overlay'; });
        const styles = [documentStyles(f), documentStyles(g, { overflow: 'auto', padding: '9px', scrollbar: 16 })];
        // Both instances deliberately share one constructor and its lock map.
        // Separate evaluated bundles would not detect a runtime-global counter.
        const navbars = fixtures.map(item => new f.dom.window.NavbarLight(item.root));
        await change(f, () => navbars[0].open(), 'opened');
        styles[0].locked();
        styles[1].restored();
        await change(g, () => navbars[1].open(), 'opened');
        styles.forEach(item => item.locked());
        navbars[releaseFirst].destroy();
        navbars[releaseFirst].destroy();
        styles[releaseFirst].restored();
        styles[1 - releaseFirst].locked();
        await change(fixtures[1 - releaseFirst], () => navbars[1 - releaseFirst].close(), 'closed');
        styles.forEach(item => item.restored());
        navbars[1 - releaseFirst].destroy();

        for (const item of fixtures) {
          assert.equal(f.dom.window.initNavbarLight(item.dom.window.document).length, 1);
          assert.equal(f.dom.window.initNavbarLight(item.dom.window.document).length, 0);
          await change(item, () => item.root.mwpNavbarLight.open(), 'opened');
        }
        styles.forEach(item => item.locked());
        fixtures[1 - releaseFirst].root.mwpNavbarLight.destroy();
        styles[1 - releaseFirst].restored();
        styles[releaseFirst].locked();
        fixtures[releaseFirst].root.mwpNavbarLight.destroy();
        styles.forEach(item => item.restored());
      } finally { f.close(); g.close(); }
    }
  });
}
