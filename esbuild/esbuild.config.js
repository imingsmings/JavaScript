import esbuild from 'esbuild'

import time from './plugins/time.js'
;(async () => {
    const result = await esbuild.build({
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
        },
        plugins: [time()],
        publicPath: ''
    })

    // 打印详细的元信息
    const text = await esbuild.analyzeMetafile(
        result.metafile,
        {
            verbose: true
        }
    )
    console.log(text)
})()
