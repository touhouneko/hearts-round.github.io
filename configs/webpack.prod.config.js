const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const config = require('./webpack.base.config');

module.exports = {
  ...config,
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    ...config.plugins,
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      // outputDir: path.join(__dirname, '../prerendered'),
      routes: ['/home', '/discography']
    })
  ]
};