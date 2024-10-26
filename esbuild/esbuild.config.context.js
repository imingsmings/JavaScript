import esbuild from 'esbuild'
;(async () => {
    const ctx = await esbuild.context({
        // 入口文件列表，为一个数组
        entryPoints: ['./src/index.js', './index.html'],
        // 是否需要打包，一般设为 true
        bundle: true,
        // 是否进行代码压缩
        minify: false,
        // 是否生成 SourceMap 文件
        sourcemap: false,
        metafile: true,
        // 指定语言版本和目标环境
        target: [
            'es2020',
            'chrome58',
            'firefox57',
            'safari11'
        ],
        // 指定输出文件
        // outfile: './dist/index.js',
        outdir: './dist',
        // 指定loader
        loader: {
            '.html': 'copy',
            '.svg': 'dataurl',
            '.js': 'jsx',
            '.module.css': 'local-css'
        }
    })

    ctx.watch()
    ctx.serve({
        servedir: './dist',
        port: 8000,
        host: 'localhost'
    }).then((server) => {
        console.log(
            `server is running at ${server.host}:${server.port}`
        )
    })
})()
