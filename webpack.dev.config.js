const { merge } = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
  output: {
    publicPath: '/js'
  },
  devServer: {
    publicPath: '/js',
    contentBase: './public',
    port: 1234,
    host: 'localhost',
    hot: true,
  }
})