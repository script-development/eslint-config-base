module.exports = {
    extends: [
        '@script-development',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {extensions: ['.js', '.mjs', '.ts', '.vue', '.d.ts']},
            'typescript': {
                'alwaysTryTypes': true,
            },
        },
    },
    parser: '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2022,
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser',
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {'ts-ignore': 'allow-with-description'},
        ],
        // @TODO :: Fix this rule
        // "@typescript-eslint/no-unused-vars": [
        //   "error",
        //   {
        //     argsIgnorePattern: "_",
        //     destructuredArrayIgnorePattern: "_",
        //     ignoreRestSiblings: true,
        //   },
        // ],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {assertionStyle: 'angle-bracket', objectLiteralTypeAssertions: 'never'},
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
};
