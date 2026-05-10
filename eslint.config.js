import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime'
    ),
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: [
            'node_modules/**',
            'build/**',
            'dist/**',
            'eslint.config.js',
            '**/*.config.js',
            '**/*.min.js',
            '**/*.chunk.js',
        ],
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
