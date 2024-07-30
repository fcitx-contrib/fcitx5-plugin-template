import { build } from 'esbuild'

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  target: 'es2020',
  format: 'iife',
  platform: 'browser',
  sourcemap: false,
})
