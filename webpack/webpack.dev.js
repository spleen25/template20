const webpack = require('webpack');
const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
