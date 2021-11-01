const { merge } = require('webpack-merge');
// const common = require('./webpack.common');
const config = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    compress: true,
    https: true,
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FB_ENV': JSON.stringify(true)
    })
  ]
})