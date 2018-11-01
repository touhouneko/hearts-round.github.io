const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.base.config');

const prerenderUrls = [
  '/', '/home', '/contact',
  '/discography', '/discography/albums', '/discography/videos'
];

module.exports = {
  ...config,
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    ...config.module,
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      ...config.module.rules
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    ...config.plugins,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      // outputDir: path.join(__dirname, '../prerendered'),
      routes: prerenderUrls,
      postProcess (renderedRoute) {
        // Ignore any redirects.
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      },
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
    })
  ]
};