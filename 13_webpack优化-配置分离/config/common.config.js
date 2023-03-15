const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const devConfig = require("./dev.config");
const prodConfig = require("./prod.config");

const commonConfig = function (env) {
  return {
    entry: "./src/demo.js",
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "js/[name]_[contenthash]_bundle",
      clean: true,
    },
    resolve: {
      extensions: [".js", ".json", ".wasm", ".jsx", ".ts"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        // 针对jsx?代码进行babel处理
        {
          test: /\.jsx?$/, // x?: 0或者1个x
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.tsx?$/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            // 开发阶段
            // 'style-loader',
            // 生产阶段
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
    ],
  };
};
module.exports = function (env) {
  const isProd = env.production;
  let mergeConfig;
  if (isProd) {
    mergeConfig = prodConfig;
  } else {
    mergeConfig = devConfig;
  }
  return merge(commonConfig(env), mergeConfig);
};
