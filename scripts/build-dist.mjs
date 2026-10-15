import { build } from 'esbuild';
import { mkdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { projectRoot, outputRoot } from './build-paths.mjs';

const sourceDirectory = resolve(projectRoot, 'src');
const outputDirectory = resolve(outputRoot, 'dist');
const packageMetadata = JSON.parse(await readFile(resolve(projectRoot, 'package.json'), 'utf8'));
const version = packageMetadata.version;
const moduleSource = await readFile(resolve(sourceDirectory, 'navbar-light.js'), 'utf8');
const browserEntry = `${moduleSource.trim()}

globalThis.NavbarLight = NavbarLight;
globalThis.initNavbarLight = initNavbarLight;
globalThis.MWP_NAVBAR_LIGHT_VERSION = ${JSON.stringify(version)};
`;

await mkdir(outputDirectory, { recursive: true });

const shared = {
  bundle: true,
  charset: 'utf8',
  legalComments: 'none',
  sourcemap: 'external',
  sourcesContent: true,
  target: ['es2020']
};

await Promise.all([
  build({
    ...shared,
    entryPoints: [resolve(sourceDirectory, 'navbar-light.css')],
    outfile: resolve(outputDirectory, 'navbar-light.css'),
    banner: { css: `/*! SmashBurger v${version} */` }
  }),
  build({
    ...shared,
    entryPoints: [resolve(sourceDirectory, 'navbar-light.css')],
    outfile: resolve(outputDirectory, 'navbar-light.min.css'),
    minify: true,
    banner: { css: `/*! SmashBurger v${version} */` }
  }),
  build({
    ...shared,
    stdin: {
      contents: browserEntry,
      loader: 'js',
      resolveDir: sourceDirectory,
      sourcefile: 'navbar-light.js'
    },
    format: 'iife',
    outfile: resolve(outputDirectory, 'navbar-light.js'),
    banner: { js: `/*! SmashBurger v${version} */` }
  }),
  build({
    ...shared,
    stdin: {
      contents: browserEntry,
      loader: 'js',
      resolveDir: sourceDirectory,
      sourcefile: 'navbar-light.js'
    },
    format: 'iife',
    minify: true,
    outfile: resolve(outputDirectory, 'navbar-light.min.js'),
    banner: { js: `/*! SmashBurger v${version} */` }
  })
]);
