module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
