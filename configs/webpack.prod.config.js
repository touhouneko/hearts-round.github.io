const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.base.config');

const prerenderUrls = [
  '/', '/home', '/contact', '/management',
  '/discography', '/discography/albums', '/discography/videos'
];

module.exports = {
  ...config,
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: 4,
        sourceMap: true
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
      filename: "static/css/[name].[chunkhash:8].css",
      chunkFilename: "static/css/[name].[chunkhash:8].css"
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: prerenderUrls,
      postProcess (renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      },
      // minify: {
      //   collapseBooleanAttributes: true,
      //   collapseWhitespace: true,
      //   decodeEntities: true,
      //   keepClosingSlash: true,
      //   sortAttributes: true
      // },
    })
  ]
};