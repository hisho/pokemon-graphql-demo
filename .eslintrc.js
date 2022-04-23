const { difference } = require('lodash')
const pkg = require('./package.json')
const dependenciesList = Object.entries(pkg.dependencies).flatMap(([k]) => k)
const safeList = [
  '@apollo/client',
  '@mantine/next',
  '@mantine/core',
  '@mantine/hooks',
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
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
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
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'default',
        trailingUnderscore: 'allow',
      },

      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'variable',
        trailingUnderscore: 'allow',
      },

      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*', ...noRestrictedImportsPatterns],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react
    'react/boolean-prop-naming': [
      'warn',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
    ],

    'react/destructuring-assignment': ['warn', 'always'],

    'react/display-name': 'off',

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/jsx-boolean-value': 'warn',

    'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],

    'react/jsx-no-useless-fragment': 'warn',

    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, shorthandFirst: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'unused-imports/no-unused-imports': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
