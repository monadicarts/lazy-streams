import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";

// Setup FlatCompat for backward compatibility
const compat = new FlatCompat({
  recommendedConfig: {
    extends: ["eslint:recommended"],
  },
});

export default [
  js.configs.recommended,
  ...compat.config({
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      "no-console": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  }),
  {
    files: ["*.ts"],
    plugins: {
      prettier,
    },
    rules: {
      ...prettier.rules,
    },
  },
];
