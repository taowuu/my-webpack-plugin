const { resolve } = require('path')
const MdToHtmlPlugin = require('./plugins/md-to-html-plugin')

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// 
module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devtool:'source-map',
  // module: {
  //   rules:[
  //     {
  //       // .tpl 文件
  //       test:/\.tpl$/,
  //       use:[
  //         'babel-loader',
  //         {
  //           loader:'./loaders/tpl-loader',
  //           options: {
  //             log: true
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    new MdToHtmlPlugin({
      template: resolve(__dirname, 'test.md'),
      filename: 'test.html'
    })
  ],
  // devServer: {
  //   port: 3333
  // }
}