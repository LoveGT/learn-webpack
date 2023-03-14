const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: "production",
  devtool: false,
  entry: "./src/demo.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/[name]_[contenthash]_bundle",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: true,
          },
          mangle: true,
          // toplevel: false,
          keep_fnames: true,
        },
        // JS压缩插件TerserPlugin
        // css压缩插件MiniCssExtractPlugin
      }),
    ],
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
          // 开发阶段
          // 'style-loader',
          // 生产阶段
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
};
