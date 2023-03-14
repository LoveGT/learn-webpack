const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  // entry: {
  //   index: "./src/index.js",
  //   main: './src/main.js',
  //   shared: ['axios']
  // },
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared1",
    },
    main: {
      import: "./src/main.js",
      dependOn: "shared1",
    },
    shared1: ["axios"],
    // shared2: ["dayjs", "redux"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name]-bundle.js",
    // 重新打包时, 先将之前打包的文件夹删除掉
    clean: true,
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
