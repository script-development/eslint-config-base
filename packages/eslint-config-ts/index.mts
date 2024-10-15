import importPlugin from 'eslint-plugin-import';
import tsEslint from 'typescript-eslint'
import scriptLint from '@script-development/eslint-config'

export default tsEslint.config(
    ...scriptLint,
    importPlugin.flatConfigs.typescript,
    ...tsEslint.configs.recommended,
    {
        name:'@script-development/eslint-config-ts',
        settings: {
            'import/resolver': {
                node: { extensions: ['.vue', '.js', '.ts', '.d.ts', '.spec.ts'] },
                'typescript': {
                    'alwaysTryTypes': true,
                },
            },
        },
        languageOptions: {
            parser: tsEslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            }
        },

        rules: {
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/ban-ts-comment': [
                'error',
                { 'ts-ignore': 'allow-with-description' },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    'argsIgnorePattern': '^_',
                    'destructuredArrayIgnorePattern': '_',
                    'ignoreRestSiblings': true,
                },
            ],
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/consistent-type-assertions': [
                'error',
                { assertionStyle: 'angle-bracket', objectLiteralTypeAssertions: 'never' },
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: ['memberLike', 'method', 'property', 'variableLike'],
                    format: ['camelCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                    filter: {
                        // We want to ignore _ because it is our symbol for unused variable
                        // We ignore words with a / for mimetypes
                        regex: '_|/|\\d+',
                        match: false,
                    },
                },
                {
                    selector: ['typeLike'],
                    format: ['PascalCase'],
                    leadingUnderscore: 'forbid',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'variable',
                    format: ['UPPER_CASE', 'camelCase'],
                    modifiers: ['const'],
                },
                {
                    selector: 'variable',
                    format: ['PascalCase'],
                    modifiers: ['const'],
                    filter: {
                        regex: 'Component$',
                        match: true,
                    },
                },
            ],
        },

    }
)