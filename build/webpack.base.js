// webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: "static/js/[name].[chunkhash:8].js",
    path: path.join(__dirname, "../dist"),
    clean: true,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        include: [path.resolve(__dirname, "../src")],
        use: ["thread-loader", "babel-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: "static/images/[name].[contenthash:8][ext]" // 文件输出目录和命名
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV)
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    alias: {
      "@": path.join(__dirname, "../src")
    },
    modules: [path.resolve(__dirname, "../node_modules")]
  },
  cache: {
    type: "filesystem"
  }
};
