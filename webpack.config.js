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
    modules: ['node_modules', resolve('loaders')]
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'replace-loader',
            // 如果是单个 loader，可以在这里指定 loader 位置
            // loader: './loaders/replace-loader'
            options: {
              origin: 'HELLO',
              target: 'HI'
            }
          },
          {
            loader: 'touppercase-loader'
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}