import esbuild from 'esbuild'

const deps = []

function depScanPlugin(deps) {
    return {
        name: 'esbuild-dep-scan',
        setup(build) {
            build.onResolve(
                {
                    filter: /^[^\.]/
                },
                (args) => {
                    // console.log(args)
                    deps.push(args.path)
                }
            )
        }
    }
}

;(async () => {
    await esbuild.build({
        entryPoints: ['./src/index.tsx'],
        write: false,
        bundle: true,
        outdir: './dist',
        plugins: [depScanPlugin(deps)]
    })

    await esbuild.build({
        entryPoints: deps.filter((dep) =>
            dep.includes('react')
        ),
        write: true,
        bundle: true,
        format: 'esm',
        outdir: './node_modules/.vite/deps'
    })
})()
