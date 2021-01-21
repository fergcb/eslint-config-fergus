module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
  },
}
