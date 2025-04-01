module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: 'babel-eslint',
  ignorePatterns: ["node_modules/", "dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true, }, },
  settings: { react: { version: "18.2" } },
  plugins: ["prettier", 'react', 'react-hooks', "react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
