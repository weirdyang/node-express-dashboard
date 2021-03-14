module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
  overrides: [
    {
      files: ['*.spec.js', 'test/*/*.js', 'test/**/*.spec.js'],
      env: { mocha: true },
      rules: {
        'no-unused-expressions': 'off',
        'no-console': 'off',
        'no-undef': 'off',
        strict: ['error', 'never'],
      },
    },
    {
      files: ['public/**/*.js'],
      rules: {
        'no-unused-expressions': 'off',
        'no-console': 'off',
        strict: ['error', 'global'],
      },
    },
  ],
};
