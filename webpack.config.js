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
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
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
