import path from 'node:path'
import TypeScript from '@rollup/plugin-typescript'
import Babel from '@rollup/plugin-babel'

const baseDirPath = process.cwd()

const TypeScriptOptions = {
  tsconfig: path.resolve(baseDirPath, 'tsconfig.json'),
  exclude: ['**/*.test.ts', '**/*.spec.ts'],
  declaration: true
}

export default [
  {
    input: path.resolve(baseDirPath, 'packages/react/index.ts'),
    output: [
      {
        file: path.resolve(baseDirPath, 'dist/react/index.js'),
        format: 'esm'
      }
    ],
    plugins: [
      Babel({
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled'
      }),
      TypeScript({
        ...TypeScriptOptions,
        declarationDir: path.resolve(baseDirPath, 'dist/react/types')
      })
    ]
  },
  {
    input: path.resolve(baseDirPath, 'packages/react/jsx-runtime.ts'),
    output: [
      {
        file: path.resolve(baseDirPath, 'dist/react/jsx-dev-runtime.js'),
        format: 'esm'
      },
      {
        file: path.resolve(baseDirPath, 'dist/react/jsx-runtime.js'),
        format: 'esm'
      }
    ],
    plugins: [
      Babel({
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled'
      }),
      TypeScript({
        ...TypeScriptOptions,
        declarationDir: path.resolve(baseDirPath, 'dist/react/types')
      })
    ]
  }
]
