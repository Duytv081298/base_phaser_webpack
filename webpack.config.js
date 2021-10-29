
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    mode: 'development',

    // devtool: 'inline-source-map' // chỉ ra dòng lỗi chính xác
    // mode: 'production',

    // watch: true, // tự động thay đổi dist khi có sự thay đổi

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
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Phaser',
                filename: 'index.html'
            }
        )],
   
}