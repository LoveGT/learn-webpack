const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  mode: "development",
  optimization: {
    chunkIds: 'deterministic',
    // runtime的代码是否抽取到单独的包中(早Vue2脚手架中)
    runtimeChunk: {
      name: "runtime"
    },
     // 分包插件: SplitChunksPlugin
     splitChunks: {
      chunks: "all",
      minSize: 10,

      // 自己对需要进行拆包的内容进行分包
      cacheGroups: {
        utils: {
          test: /utils/,
          filename: "js/[id]_utils.js"
        },
        vendors: {
          // /node_modules/
          // window上面 /\
          // mac上面 /
          test: /[\\/]node_modules[\\/]/,
          filename: "js/[id]_vendors.js"
        }
      }
    },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name]_chunk.css'
    })
  ]
};
