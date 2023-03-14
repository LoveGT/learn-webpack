const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
      // JS压缩插件TerserPlugin
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
      }),
       // css压缩插件MiniCssExtractPlugin
       new CSSMinimizerPlugin({})
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name]_chunk.css'
    })
  ]
};
