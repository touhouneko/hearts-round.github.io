const config = require('./webpack.base.config');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
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