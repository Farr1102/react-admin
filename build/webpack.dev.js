// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map", // 源码调试模式
  devServer: {
    port: 3000,
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true,
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
