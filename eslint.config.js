import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
])
