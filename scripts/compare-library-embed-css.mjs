import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { transform } from 'esbuild';
import { addCandidateAliases } from './build-webflow-library-candidates.mjs';

const root = new URL('../', import.meta.url);
const paths = {
  source: 'src/navbar-light.css',
  readable: 'candidate/webflow/navbar-light-embed.html',
  library: 'candidate/webflow/library/navbar-light-embed.html'
};

async function css(path) {
  const text = await readFile(new URL(path, root), 'utf8');
  if (!path.endsWith('.html')) return text.trim();
  const match = text.match(/<style>([\s\S]*?)<\/style>/);
  if (!match) throw new Error(`No style block in ${path}`);
  return match[1].trim();
}

function sha256(text) {
  return createHash('sha256').update(text).digest('hex');
}

const [source, readable, library] = await Promise.all(Object.values(paths).map(css));
if (source !== readable) throw new Error('Readable candidate Embed CSS differs from maintained CSS');

const aliasNames = [
  'smashburger-0-3-0-rc-1-candidate',
  'mwp-component-library--smashburger-0-3-0-rc-1-candidate'
];
const expanded = addCandidateAliases(readable, aliasNames);
const { code: expected } = await transform(expanded, { loader: 'css', minify: true });
const exact = expected === library;
const trailingNewlineOnly = expected.trimEnd() === library.trimEnd();

console.log(`Maintained CSS == readable Embed CSS: yes (${source.length} characters each)`);
console.log(`Library CSS == minified aliased Embed CSS: ${exact ? 'yes' : 'no'}`);
console.log(`Equal after trimming trailing whitespace: ${trailingNewlineOnly ? 'yes' : 'no'}`);
console.log(`Expected SHA-256: ${sha256(expected)}`);
console.log(`Library SHA-256:  ${sha256(library)}`);
console.log(`Expected length: ${expected.length}; Library length: ${library.length}`);

if (!trailingNewlineOnly) process.exitCode = 1;

