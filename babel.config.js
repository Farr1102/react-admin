// babel.config.js
const isDEV = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    isDEV && require.resolve("react-refresh/babel"),
    ["@babel/plugin-proposal-decorators", { legacy: true }]
  ].filter(Boolean)
};
