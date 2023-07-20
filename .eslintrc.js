module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ['@script-development/eslint-config-ts'],
    rules: {
        '@typescript-eslint/naming-convention': 'off',
        'id-length': ['error', {exceptions: ['_', 'T', 'H']}],
    },
};
