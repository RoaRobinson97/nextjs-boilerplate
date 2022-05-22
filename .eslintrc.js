module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'plugin:mdx/recommended'
  ],
  settings: {
    'mdx/code-blocks': true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    'mdx/language-mapper': {}
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.sx', '.ts', '.tsx']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off'

  }
};
