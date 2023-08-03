const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');

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
    port: 5000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
});
