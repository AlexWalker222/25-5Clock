const newLocal = 'plugin:react/jsx-runtime';
const newLocal_1 = 'plugin:react/recommended';
const newLocal_2 = 'eslint:recommended';
const newLocal_3 = 'plugin:react-hooks/recommended';
const newLocal_4 = '.dist';
const newLocal_5 = '.eslintrc.cjs';
const newLocal_6 = 'latest';
const newLocal_7 = '18.2';
const newLocal_8 = 'react-refresh';
const newLocal_9 = true;
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    newLocal_2,
    newLocal_1,
    newLocal,
    newLocal_3,
  ],
  ignorePatterns: [newLocal_4, newLocal_5],
  parserOptions: { ecmaVersion: newLocal_6, sourceType: 'module' },
  settings: { react: { version: newLocal_7 } },
  plugins: [newLocal_8],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: newLocal_9 },
    ],
  },
}
