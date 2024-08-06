const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = [
    ...compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime'
    ),
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: ['node_modules/**', 'build/**', 'eslint.config.cjs', '**/*.config.cjs'],
        plugins: {
            prettier,
            react,
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'commonjs',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
];
