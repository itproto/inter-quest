const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});
const HtmlWebpackPluginConfig1 = new HtmlWebpackPlugin({
  template: './client/index1.html',
  filename: 'index1.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js+?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [HtmlWebpackPluginConfig, HtmlWebpackPluginConfig1]
};