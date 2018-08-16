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
  plugins: ['import', 'flowtype', 'prettier', 'jsx-a11y', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
    node: true
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
    'eslint padding-lin-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'function'],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'react/forbid-prop-types': 0
  }
};
