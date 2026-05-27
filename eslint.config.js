// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [{
  files: ['src/**/*.{js,jsx,ts,tsx}'],
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  languageOptions: {
    parser: tsParser,
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
  },
}, ...storybook.configs["flat/recommended"]];