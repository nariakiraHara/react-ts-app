module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'simple-import-sort',
    '@typescript-eslint',
    'jsdoc'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
  }
}
