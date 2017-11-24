const path = require('path');
const webpack = require('webpack');

console.log('Dir of execution', __dirname, path);

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: '/\.js$/', use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};

module.exports = webpackConfig;