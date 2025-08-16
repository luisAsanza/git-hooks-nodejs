// .eslintrc.cjs
module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module" // you're using ESM in your code
  },
  rules: {}
};
