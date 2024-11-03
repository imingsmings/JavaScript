import { rollup, watch } from 'rollup'

const inputOptions = {
    input: 'src/main.js',
    external: [],
    plugins: []
}

const outputOptions = {
    dir: './dist',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].[hash].js'
}

const watchOptions = {
    ...inputOptions,
    output: [outputOptions],
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    }
}

async function build() {
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
}

const watcher = watch(watchOptions)

watcher.on('event', (event) => {
    console.log(event)

    if (event.result) {
        event.result.close()
        process.exit(0)
    }
})

watcher.on('close', () => {
    console.log('close')
    /* 监视器被关闭了，请看下面的代码 */
})

watcher.close()

build()
