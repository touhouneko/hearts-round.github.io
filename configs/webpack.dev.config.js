const config = require('./webpack.base.config');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  }
}