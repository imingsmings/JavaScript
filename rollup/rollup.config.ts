// export default {
//     input: 'src/index.js',
//     output: [
//         {
//             file: 'dist/bundle-iife.js',
//             format: 'iife'
//         },
//         {
//             file: 'dist/bundle-esm.js',
//             format: 'esm'
//         },
//         {
//             file: 'dist/bundle-cjs.js',
//             format: 'cjs'
//         },
//         {
//             file: 'dist/bundle-umd.js',
//             format: 'umd'
//         },
//         {
//             file: 'dist/bundle-amd.js',
//             format: 'amd'
//         },
//         {
//             file: 'dist/bundle-system.js',
//             format: 'system'
//         }
//     ]
// }

// export default {
//     input: ['./src/index.js', './src/main.js'],
//     output: [
//         {
//             dir: './dist/cjs',
//             format: 'cjs'
//         },
//         {
//             dir: './dist/esm',
//             format: 'esm'
//         }
//     ]
// }

import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import MyCustom from './plugins/rollup-plugin-example'

const buildIndexOptions = {
    input: 'src/index.ts',
    output: {
        dir: './dist/esm',
        format: 'esm'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**',
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts']
        }),
        typescript(),
        MyCustom()
    ]
}

// const buildMainOptions = {
//     input: ['src/main.js', 'src/main2.js'],
//     output: {
//         dir: './dist/esm',
//         entryFileNames: '[name].js',
//         chunkFileNames: 'chunk-[name]-[hash].js',
//         format: 'esm'
//     }
// }

export default [
    buildIndexOptions
    // buildMainOptions
]
