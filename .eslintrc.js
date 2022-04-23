const { difference } = require('lodash')
const pkg = require('./package.json')
const dependenciesList = Object.entries(pkg.dependencies).flatMap(([k]) => k)
const safeList = [
  '@apollo/client',
  '@mantine/next',
  '@mantine/core',
  'next',
  'react',
  'react-dom',
  'pathpida',
]
const noRestrictedImportsPatterns = difference(dependenciesList, safeList)

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['src/**/*.test.ts', 'src/**/*.graphql.ts'],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  plugins: [
    'simple-import-sort',
    'typescript-sort-keys',
    'sort-keys-fix',
    'sort-destructure-keys',
    'unused-imports',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'default',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],

    'react/react-in-jsx-scope': 'off',

    // https://github.com/yannickcr/eslint-plugin-react
    'react/boolean-prop-naming': [
      'warn',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
    ],

    'simple-import-sort/exports': 'warn',

    'react/destructuring-assignment': ['warn', 'always'],

    'simple-import-sort/imports': 'warn',

    'react/display-name': 'off',

    'sort-destructure-keys/sort-destructure-keys': 'warn',

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'sort-keys-fix/sort-keys-fix': 'warn',
    'react/jsx-boolean-value': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*', ...noRestrictedImportsPatterns],
      },
    ],
    'typescript-sort-keys/string-enum': 'warn',
    'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],
    'unused-imports/no-unused-imports': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, shorthandFirst: true },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
