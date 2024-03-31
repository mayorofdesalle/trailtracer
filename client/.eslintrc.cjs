module.exports = {
  root: true,
  env: { browser: true, es2020: true, "vitest": true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ["error", 'single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': [0, { 'ignore': ['args, fragmentShader, vertexShader, uniforms'] }],
    'react/display-name': 'off'
  },
}
