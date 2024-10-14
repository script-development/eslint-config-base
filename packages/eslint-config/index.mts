import eslint from '@eslint/js'
import { Linter } from 'eslint';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        name:'@script-development/eslint-config',
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.vue', '.js', '.ts', '.d.ts', '.spec.ts']
                }
            }
        },
        plugins: { promise: promisePlugin, 'unused-imports': unusedImportsPlugin },
        rules: {
            'multiline-comment-style': 'off',
            'capitalized-comments': 'off',
            complexity: ['error', 5],
            'max-lines-per-function': [
                'warn',
                { max: 30, skipBlankLines: true, skipComments: true },
            ],
            'max-lines': [
                'warn',
                { max: 300, skipBlankLines: true, skipComments: true },
            ],
            indent: ['warn', 4, { SwitchCase: 1 }],
            'comma-dangle': ['warn', 'always-multiline'],
            'array-bracket-spacing': ['warn', 'never'],
            'space-before-blocks': ['warn', 'always'],
            'arrow-spacing': ['warn', { before: true, after: true }],
            'keyword-spacing': ['warn', { before: true, after: true }],
            quotes: ['warn', 'single', { avoidEscape: true }],
            'no-console': 'warn',
            'object-curly-spacing': 'warn',
            'arrow-parens': ['warn', 'as-needed'],
            'no-template-curly-in-string': 'warn',
            'arrow-body-style': ['warn', 'as-needed'],
            'dot-notation': 'warn',
            'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
            'no-return-await': 'warn',
            'no-underscore-dangle': ['warn', { allowAfterThis: true }],
            'spaced-comment': 'warn',
            yoda: 'warn',
            'no-warning-comments': 'warn',

            'padding-line-between-statements': [
                'warn',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'multiline-const' },
            ],

            'max-depth': ['error', 4],
            'max-statements-per-line': ['error', { max: 2 }],
            'array-callback-return': 'error',
            'require-atomic-updates': ['error', { allowProperties: true }],
            'block-scoped-var': 'error',
            curly: ['error', 'multi-or-nest'],
            eqeqeq: 'error',
            'func-style': ['error', 'expression'],
            'id-length': ['error', { exceptions: ['_'] }],
            'max-nested-callbacks': 'error',
            'new-cap': ['error', { newIsCapExceptions: ['default'] }],
            'no-else-return': ['error', { allowElseIf: false }],
            'no-constructor-return': 'error',
            'no-self-compare': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            'no-array-constructor': 'error',
            'no-alert': 'error',
            'no-caller': 'error',
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-label': 'error',
            'no-floating-decimal': 'error',
            'no-implicit-globals': 'error',
            'no-invalid-this': 'error',
            'no-label-var': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-loop-func': 'error',
            "no-magic-numbers": [
                "error",
                {
                    ignoreArrayIndexes: true,
                    ignoreDefaultValues: true,
                    enforceConst: false,
                    detectObjects: false,
                    ignore: [-1, -0, 1]
                }
            ],
            'no-multi-assign': 'error',
            'no-negated-condition': 'error',
            'no-nested-ternary': 'error',
            'no-new-func': 'error',
            'no-new-object': 'error',
            'no-new-wrappers': 'error',
            'no-param-reassign': ['error', { props: false }],
            'no-sequences': 'error',
            'no-shadow': 'off',
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-expressions': 'error',
            'no-useless-call': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'no-restricted-imports': ['warn', { patterns: ['../..*'] }],
            'no-multiple-empty-lines': ["error", { "max": 1, "maxBOF": 1, "maxEOF": 0 }],

            'object-shorthand': 'error',

            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': ['error', { array: false, object: true }],
            'prefer-object-spread': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',

            'require-await': 'error',

            /**
             * Promise rules
             */
            'promise/prefer-await-to-then': 'warn',
            'promise/prefer-await-to-callbacks': 'warn',
            'promise/no-new-statics': 'warn',

            /**
             * Imports
             */
            'import/newline-after-import': ['error', { count: 1 }],
            'import/no-mutable-exports': 'error',
            'import/no-absolute-path': 'off',
            'import/named': 'off',
            'import/no-unresolved': 'off',
            'import/first': 'error',

            'import/order': [
                'error',
                {
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    groups: [
                        'type',
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                    ],
                    'newlines-between': 'always',
                },
            ],
            'import/no-named-as-default-member': 0,

            // Infavor off import/no-duplicates
            'no-duplicate-imports': 'off',
            'import/no-duplicates': ['error', { 'prefer-inline': false }],

            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error'
        }
    }
)