import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


export default [
  { languageOptions: { globals: globals.browser } },
  {
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/array-element-newline': [
        'error',
        {
          ArrayExpression: 'consistent',
          ArrayPattern: { minItems: 4 },
        },
      ],
      '@stylistic/eol-last': [ 'error', 'always' ],
      '@stylistic/brace-style': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/comma-spacing': [
        'error',
        { before: false, after: true },
      ],
      '@stylistic/dot-location': [ 'error', 'property' ],
      '@stylistic/max-len': [
        'error',
        {
          code: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreRegExpLiterals: true,
        },
      ],
      '@stylistic/object-curly-newline': [ 'error', {
        consistent: true,
        minProperties: 3,
        multiline: true,
      } ],
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/key-spacing': [ 'error', { mode: 'strict' } ],
      '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
      '@stylistic/function-paren-newline': [ 'error', 'consistent' ],
      '@stylistic/function-call-spacing': [ 'error', 'never' ],
      '@stylistic/comma-style': [ 'error', 'last' ],
      '@stylistic/quotes': [ 'error', 'single' ],
      '@stylistic/semi': [ 'error', 'never' ],
      '@stylistic/space-before-function-paren': [ 'error', {
        asyncArrow: 'always',
        named: 'never',
        anonymous: 'never',
      } ],
      '@stylistic/space-in-parens': [ 'error', 'never' ],
      '@stylistic/array-bracket-spacing': [
        'error',
        'always',
        {
          singleValue: false, arraysInArrays: false,
        },
      ],
      '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
      '@stylistic/newline-per-chained-call': [
        'error',
        { ignoreChainWithDepth: 2 },
      ],
      '@stylistic/no-confusing-arrow': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/nonblock-statement-body-position': [ 'error', 'beside' ],
      '@stylistic/quote-props': [ 'error', 'as-needed' ],
      '@stylistic/type-generic-spacing': ['error'],
      '@stylistic/ts/type-annotation-spacing': 'error',
      '@stylistic/ts/member-delimiter-style': [ 'error', {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
        },
      } ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]

