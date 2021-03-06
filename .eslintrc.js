module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2],
    'no-console': 'off'
  }
}
