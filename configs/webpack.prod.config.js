const fs = require('fs');
const path = require('path');
const papa = require('papaparse');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.base.config');

function getStaffNames() {
  const content = fs.readFileSync(path.join(__dirname, '../src/data/staff.csv'), 'utf-8');
  const staffs = papa.parse(content, {
    header: true,
    skipEmptyLines: true,
    comments: '#'
  });
  return staffs.data.filter((_, idx) => idx > 0).
  map(s => encodeURI(s.name).toLowerCase());
}

const prerenderUrls = [
  '/', '/home', '/contact', '/management', '/works', '/gallery',
  '/discography', '/discography/albums', '/discography/videos',
  '/about',
  ...getStaffNames().map(n => `/about/${n}`)
];

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