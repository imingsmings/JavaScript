import js from '@eslint/js';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  eslintPluginPrettier.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: 'espree',
    },
    rules: {
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
    },
  },
];
