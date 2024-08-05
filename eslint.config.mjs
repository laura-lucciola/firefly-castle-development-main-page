import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import onlyWarn from "eslint-plugin-only-warn";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            "node_modules",
            "dist",
        ],
    },
    ...compat.extends(
        "prettier",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ),
    {
        plugins: {
            prettier,
            react,
            "only-warn": onlyWarn,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            "prettier/prettier": "error"
        },
    },
];
