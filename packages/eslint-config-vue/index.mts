import { isPackageExists } from "local-pkg";
import pluginVue from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'
import scriptLint from '@script-development/eslint-config'
import typeScriptLint from '@script-development/eslint-config-ts'

const TS = isPackageExists('typescript')

// We extend either our TS config (Which extends our base) or base directly
const baseLintRules = TS ? typeScriptLint : scriptLint

export default tsEslint.config(
    ...baseLintRules,
    ...pluginVue.configs['flat/recommended'],
    {
        name: '@script-development/eslint-config-vue',
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                defineEmits: 'readonly',
                defineProps: 'readonly',
                defineModel: 'readonly',
                T: 'readonly',
            },
            parserOptions:{
                parser: tsEslint.parser,
            }
        },
        rules: {
            'vue/component-tags-order': [
                'error',
                {
                    order: [['template', 'script', 'style']],
                },
            ],
            'vue/no-deprecated-destroyed-lifecycle': ['error'],
            'vue/component-definition-name-casing': ['error', 'PascalCase'],
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            'vue/no-restricted-syntax': [
                'error',

                {
                    selector:
                        "CallExpression[callee.type='Identifier'][callee.name='$emit']",
                    message:
                        '$emit is not type safe, so we use `const emit = defineEmits<{}>()`',
                },
            ],
            // Prettier handles this rule
            'vue/max-attributes-per-line': ['off'],
            'vue/singleline-html-element-content-newline': 'off',
            'vue/attributes-order': [
                'error',
                {
                    // Not sure about the order here, will need to test more with this
                    order: [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        'UNIQUE',
                        'SLOT',
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT',
                    ],
                    alphabetical: false,
                },
            ],
            'vue/html-self-closing': [
                'error',
                {
                    // This is off, cause prettier can't handle it
                    html: { void: 'always' },
                },
            ],
            'vue/no-mutating-props': 'error',

            // Off because we use https://vuejs.org/guide/extras/reactivity-transform.html#reactive-props-destructure
            'vue/no-setup-props-destructure': 'off',

            'vue/no-side-effects-in-computed-properties': 'error',

            'vue/multi-word-component-names': 'off',

            'vue/component-api-style': ['error', ['script-setup']],

            'vue/block-lang': TS
                ? [
                    'error',
                    {
                        script: {
                            lang: 'ts',
                        },
                    },
                ]
                : ['warn'],

            'vue/no-empty-component-block': ['error'],

            'vue/max-len': [
                'warn',
                {
                    code: 120,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreHTMLAttributeValues: true,
                },
            ],

            'vue/padding-line-between-blocks': ['error'],

            'vue/padding-line-between-tags': ['error', [{ blankLine: 'consistent', prev: "*", next: "*" }]],

            'vue/component-name-in-template-casing': ['error'],

            'vue/custom-event-name-casing': ['error'],

            'vue/define-emits-declaration': ['error', 'type-based'],

            'vue/define-props-declaration': ['error', 'type-based'],

            'vue/define-macros-order': [
                'error',
                {
                    order: ['defineProps', 'defineEmits'],
                },
            ],

            'vue/html-comment-content-newline': ['error'],

            'vue/html-comment-content-spacing': 'error',

            'vue/html-comment-indent': ['error', 4],

            'vue/no-multiple-objects-in-class': 'error',

            'vue/no-template-target-blank': 'error',

            'vue/no-useless-mustaches': 'error',

            'vue/no-useless-v-bind': 'error',

            'vue/no-root-v-if': 'error',

            'vue/prefer-define-options': 'error',

            'vue/prefer-separate-static-class': 'error',

            'vue/prefer-true-attribute-shorthand': 'error',

            'vue/require-macro-variable-name': 'error',

            'vue/static-class-names-order': 'error',
        }
    });

