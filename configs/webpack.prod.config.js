// const fs = require('fs');
const path = require('path');
// const papa = require('papaparse');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.base.config');

// function getStaffNames() {
//   const content = fs.readFileSync(path.join(__dirname, '../src/data/staff.csv'), 'utf-8');
//   const staffs = papa.parse(content, {
//     header: true,
//     skipEmptyLines: true,
//     comments: '#'
//   });
//   // the first one is about the site globally.
//   return staffs.data.filter((_, idx) => idx > 0).
//   map(s => s.name.toLowerCase());
// }

module.exports = {
  ...config,
  output: {
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
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
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[chunkhash:8].css",
      chunkFilename: "static/css/[name].[chunkhash:8].css"
    }),
    new CopyWebpackPlugin(['_config.yml', 'favicon.ico']),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: ['/', '/home', '/contact'],
      postProcess (renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      }
    })
  ]
};