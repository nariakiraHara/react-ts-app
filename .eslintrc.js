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
    'no-console': 2,
    'react/jsx-uses-vars': 1,
    'react/jsx-key': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'no-useless-constructor': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-useless-constructor': 2,
    'simple-import-sort/sort': 0,
    'jsdoc/newline-after-description': 1,
    'multiline-ternary': 0
  }
}
