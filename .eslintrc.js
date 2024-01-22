module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["google", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "endOfLine": "auto",
    camelcase: "off",
    "prettier/prettier": "error",
  },
};
