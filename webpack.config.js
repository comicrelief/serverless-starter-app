const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  output: {
    libraryTarget: 'commonjs',
    path: 'build',
    filename: 'handler.js', // this should match the first part of function handler in serverless.yml
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
