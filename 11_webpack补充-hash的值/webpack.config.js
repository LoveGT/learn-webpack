const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name]_[contenthash]_bundle.js',
    clean: true
  }
}