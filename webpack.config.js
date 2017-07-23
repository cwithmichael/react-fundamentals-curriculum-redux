const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app')
        ],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig],

  devServer: {
    contentBase: "./app",
    historyApiFallback: true,
    inline: true,
    disableHostCheck: true
  }
}
