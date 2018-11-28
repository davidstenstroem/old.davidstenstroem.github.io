const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const port = 5647
const host = 'localhost'

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host,
    port,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    }
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
