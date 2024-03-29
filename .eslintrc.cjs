/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
      'vue',
      'import'
  ],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended",
    '@vue/eslint-config-airbnb'
  ],
  settings: {
    "import/resolver": {
      "typescript": {
        paths: "./tsconfig.json",
        alwaysTryTypes: true
      }
    },
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/require-default-prop": 0,
    "no-use-before-define": 0,
    "import/no-extraneous-dependencies": 0
  }
};