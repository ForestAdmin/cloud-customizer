import * as esbuild from 'esbuild'
const define = {}
for (const k in process.env) {
    define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outdir: 'dist/code-customizations',
    minify: true,
    treeShaking: true,
    logLevel: 'debug',
    target: 'node18',
    platform: 'node',
    define,
})
