import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { transform } from 'esbuild';
import { JSDOM } from 'jsdom';
import { createLibraryVerificationLoader } from './library-verification.mjs';
export { verificationCommit } from './library-verification.mjs';

// Isolated review definitions have their own Webflow-generated variant markers.
// Keep every released marker and add aliases only to these unshared candidates.
const root = new URL('../', import.meta.url);
const aliases = [
  'smashburger-0-3-0-rc-1-candidate',
  'smashburger-cdn-0-3-0-rc-1-candidate',
  'mwp-component-library--smashburger-0-3-0-rc-1-candidate',
  'mwp-component-library--smashburger-cdn-0-3-0-rc-1-candidate'
];
export function addCandidateAliases(code, names = aliases) {
  // A single old selector in each list receives the aliases, without replacing
  // old hooks or changing specificity. The JavaScript is copied unchanged.
  const oldNames = ['navbar-light', 'smashburger', 'smashburger-cdn',
    'mwp-component-library--smashburger', 'mwp-component-library--smashburger-cdn'];
  const unmarkedBase = `[data-mwp-navbar]:not([data-collapse]):not(:is(${[...oldNames, ...aliases].map(name => `[data-wf--${name}--variant]`).join(', ')}))`;
  return code.replace(/\[data-wf--navbar-light--variant="([a-z-]+)"\]/g,
    (old, value) => [old, ...names.map(name => `[data-wf--${name}--variant="${value}"]`),
      ...(value === 'mobile-landscape' ? [unmarkedBase] : [])].join(', '));
}
export async function buildLibraryCandidates() {
  const { version } = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
  // Resolve both immutable blobs before writing any Library outputs.
  const loader = createLibraryVerificationLoader(version);
  await mkdir(new URL('candidate/webflow/library/', root), { recursive: true });
  for (const name of ['navbar-light-embed.html', 'navbar-light-canvas-embed.html']) {
    const source = await readFile(new URL(`candidate/webflow/${name}`, root), 'utf8');
    const names = name.includes('canvas') ? aliases : aliases.filter(name => !name.includes('cdn-'));
    let output = addCandidateAliases(source, names);
    // CSS-only minification leaves room under the native Embed character limit.
    // Preserve the already-verified candidate JavaScript byte for byte.
    const css = output.match(/<style>([\s\S]*?)<\/style>/)[1];
    const minified = await transform(css, { loader: 'css', minify: true });
    output = output.replace(/<style>[\s\S]*?<\/style>/, `<style>\n${minified.code}</style>`);
    if (output.length > 50000) throw new Error(`${name} exceeds Webflow's Embed limit`);
    await writeFile(new URL(`candidate/webflow/library/${name}`, root), output);
  }
  // The CDN verification edition loads bytes already pushed at this exact
  // commit. This is a test pin, not a new semantic release or distribution tag.
  // Only variant-dependent CSS is repeated inline for the isolated name;
  // the CSS-ready sentinel must still come from the fetched stylesheet.
  const css = await readFile(new URL('src/navbar-light.css', root), 'utf8');
  const dom = new JSDOM(`<style>${css}</style>`);
  function variantRules(rules) {
    return [...rules].map(rule => {
      if (rule.type === 4) {
        const children = variantRules(rule.cssRules);
        return children ? `@media ${rule.conditionText}{${children}}` : '';
      }
      return rule.selectorText?.includes('--variant') ? rule.cssText : '';
    }).join('\n');
  }
  const aliasCss = addCandidateAliases(variantRules(dom.window.document.styleSheets[0].cssRules), aliases.filter(name => name.includes('cdn-')));
  if (!aliasCss.includes('data-wf--smashburger-cdn-0-3-0-rc-1-candidate--variant')) throw new Error('Missing CDN candidate variant aliases');
  dom.window.close();
  const minifiedAliases = await transform(aliasCss, { loader: 'css', minify: true });
  if (minifiedAliases.code.includes('--mwp-nav-css-ready')) throw new Error('Alias layer must not fake CDN CSS readiness');
  await writeFile(new URL('candidate/webflow/library/navbar-light-cdn-candidate-loader.html', root), `<style>\n${minifiedAliases.code}</style>\n${loader}`);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await buildLibraryCandidates();
