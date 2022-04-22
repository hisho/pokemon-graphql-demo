const { difference } = require('lodash')
const pkg = require('./package.json')
const dependenciesList = Object.entries(pkg.dependencies).flatMap(([k]) => k)
const safeList = [
  '@mantine/next',
  '@mantine/core',
  'next',
  'react',
  'react-dom',
  'pathpida',
]
const noRestrictedImportsPatterns = difference(dependenciesList, safeList)

module.exports = {
  root: true,
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
  plugins: [
    'simple-import-sort',
    'typescript-sort-keys',
    'sort-keys-fix',
    'sort-destructure-keys',
    'unused-imports',
  ],
  ignorePatterns: ['src/**/*.test.ts', 'src/**/*.graphql.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
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
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
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
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*', ...noRestrictedImportsPatterns],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
