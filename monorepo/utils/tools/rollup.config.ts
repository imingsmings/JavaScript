import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
// import babel from '@rollup/plugin-babel'

const extensions = ['.js', '.ts']

export default defineConfig([
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.cjs',
      format: 'cjs'
    },
    plugins: [
      typescript(),
      resolve({ extensions }),
      commonjs(),
      json()
    ]
  },
  
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.es.js',
      format: 'es'
    },
    plugins: [
      typescript(),
      resolve({ extensions }),
      commonjs(),
      json()
    ]
  },
  // {
  //   input: './src/index.ts',
  //   output: {
  //     file: 'dist/index.browswer.js',
  //     format: 'iife'
  //   },
  //   plugins: [
  //     typescript(),
  //     resolve({ extensions }),
  //     commonjs(),
  //     json(),
  //     babel({
  //       exclude: "node_modules/**",
  //       extensions,
  //       babelHelpers: "bundled",
  //       presets: [
  //         [
  //           "@babel/preset-env",
  //           {
  //             targets: "> 0.25%, not dead",
  //           },
  //         ],
  //       ],
  //     }),
  //   ]
  // },
])