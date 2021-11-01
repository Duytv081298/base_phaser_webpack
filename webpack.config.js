
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    clean: true
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devtool: "eval-source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader"
      }
    ]
  },

  devServer: {
    compress: true,
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      'CANVAS_RENDERER': JSON.stringify(true),
      'WEBGL_RENDERER': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: './index.html',
        title: 'Phaser',
      }
    ),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/assets'),
          to: path.resolve('dist/assets')
        },
        {
          from: path.resolve('fbapp-config.json'),
          to: path.resolve('dist')
        }
      ],
    })],


}