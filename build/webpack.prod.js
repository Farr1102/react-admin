// webpack.prod.js

const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const globAll = require("glob-all");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist"),
          filter: (source) => {
            return !source.includes("index.html");
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
    }),
    new PurgeCSSPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: globAll.sync([
        `${path.join(__dirname, "../src")}/**/*.tsx`,
        path.join(__dirname, "../public/index.html"),
      ]),
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"], // 删除console.log
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          minChunks: 1,
          chunks: "initial",
          minSize: 0,
          priority: 1,
        },
        commons: {
          name: "commons",
          minChunks: 2,
          chunks: "initial",
          minSize: 0,
        },
      },
    },
  },
});
