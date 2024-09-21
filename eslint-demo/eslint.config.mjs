import js from '@eslint/js'
import globals from 'globals'

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: 'espree'
        },
        files: ['src/**/*.js'],
        ignores: ['**/*.config.mjs'],
        rules: {
            indent: ['error', 2],
            quotes: ['error', 'single'],
            semi: ['error', 'always']
        }
    }
]
