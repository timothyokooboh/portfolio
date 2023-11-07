module.exports = {
  root: true,
  // https://eslint.org/docs/rules/no-undef#nodejs
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "eslint-config-prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
