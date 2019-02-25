module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "semi": [2, "never"],
  },
  globals: {
    "document": true,
    "window": true
  }
};
