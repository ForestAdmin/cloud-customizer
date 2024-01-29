import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outdir: 'dist/nodejs',
    minify: true,
    treeShaking: true,
    logLevel: 'debug',
})
