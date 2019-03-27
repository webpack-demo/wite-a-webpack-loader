const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  // 多个 loader，指定路径
  resolveLoader: {
    modules: [resolve('loaders'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.png/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}