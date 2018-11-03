const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, '../src')
    },
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          header: true,
          skipEmptyLines: true,
          comments: '#'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
};