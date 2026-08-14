import js from "@eslint/js";
import setEslint from "@monospaced/set-config/eslint";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/", "src/v1/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...setEslint,
  {
    // Unused vars are a warning, not an error, so work-in-progress imports
    // and commented-out code paths don't break the build while iterating.
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
