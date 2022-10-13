// This is the basic set of rules shared between a node and a next.js setup.

// We want to share all plugins and rule sets as part of this package instead of
// requiring every consuming repository to add these dependencies again.
// Unfortunately this isn't possible with ESLint out-of-the-box so we have to
// use a workaround/patch.
// Related ESLint issue: https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports'
    }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/order': ['error', {
      groups: [
        "type",
        "builtin",
        "external",
        "internal",
        "index",
        "parent",
        "sibling",
        "object"
      ],
      'newlines-between': "always",
    }],
    'prettier/prettier': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', '**/*.spec.js', '**/*.spec.ts'],
      env: {
        jest: true, // now **/*.test|spec.js|ts files' env has both es6 *and* jest
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
