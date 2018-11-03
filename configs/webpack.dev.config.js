const webpack = require('webpack');
const path = require('path');

const config = require('./webpack.base.config');

module.exports = {
  ...config,
  output: {
    filename: "static/js/[name].[hash:8].js",
    chunkFilename: 'static/js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    ...config.module,
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      ...config.module.rules
    ]
  }
}