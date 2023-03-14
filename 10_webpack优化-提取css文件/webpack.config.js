const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin  = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/[name]-bundle.js",
    // 单独针对分包的文件进行命名
    chunkFilename: "js/[name]_chunk.js",
    // 重新打包时, 先将之前打包的文件夹删除掉
    clean: true,
  },
  externals: {
    react: 'React',
    axios: 'axios'
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    compress: false, //文件压缩
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        pathRewrite: {
          "^api": "",
        },
      },
    },
  },
  // 优化配置
  optimization: {
    splitChunks: {
      chunks: "all",
      // maxSize: 20000,
      // minSize: 10000
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: "js/abc_vendors",
        },
        utils: {
          test: /utils/,
          filename: "js/[name]_utils",
        },
      },
    },
  },
  // 代码优化: TerserPlugin => 让代码更加简单 => Terser
  // minimizer: [
  //   // JS代码简化
  //   new TerserPlugin({
  //     extractComments: false
  //   })
  //   // CSS代码简化
  // ],
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
          'css-loader'
        ]
      }
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
  ],
};
