import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { projectRoot, outputRoot } from './build-paths.mjs';

const sourceDirectory = resolve(projectRoot, 'src');
const outputDirectory = resolve(outputRoot, 'dist');
// Use the normal logical location for source-map paths, even in isolated checks.
const logicalOutputDirectory = resolve(projectRoot, 'candidate/dist');
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
  write: false,
  target: ['es2020']
};

const results = await Promise.all([
  build({
    ...shared,
    entryPoints: [resolve(sourceDirectory, 'navbar-light.css')],
    outfile: resolve(logicalOutputDirectory, 'navbar-light.css'),
    banner: { css: `/*! SmashBurger v${version} */` }
  }),
  build({
    ...shared,
    entryPoints: [resolve(sourceDirectory, 'navbar-light.css')],
    outfile: resolve(logicalOutputDirectory, 'navbar-light.min.css'),
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
    outfile: resolve(logicalOutputDirectory, 'navbar-light.js'),
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
    outfile: resolve(logicalOutputDirectory, 'navbar-light.min.js'),
    banner: { js: `/*! SmashBurger v${version} */` }
  })
]);
await Promise.all(results.flatMap(result => result.outputFiles.map(file =>
  writeFile(resolve(outputDirectory, basename(file.path)), file.contents))));
