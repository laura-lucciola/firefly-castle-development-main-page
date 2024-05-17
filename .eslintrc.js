module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    root: true,
    extends: [
        'prettier',
        'eslint:recommended',
        'react-app',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks', 'only-warn'],
    rules: {
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
