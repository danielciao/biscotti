const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['import', 'flowtype', 'prettier', 'jsx-a11y', 'jest'],
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 1,
    'no-unused-vars': 1,
    'import/no-extraneous-dependencies': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0
  }
};
