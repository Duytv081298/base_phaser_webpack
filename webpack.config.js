
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  mode: 'development',

  devtool: 'inline-source-map', // chỉ ra dòng lỗi chính xác
  // mode: 'production',

  watch: true, // tự động thay đổi dist khi có sự thay đổi

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
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
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