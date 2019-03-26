module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "semi": [2, "never"],
    "react/jsx-curly-spacing": [2, "always"],
  },
  "plugins": [
    "react",
  ],
  globals: {
    "document": true,
    "window": true
  }
};
