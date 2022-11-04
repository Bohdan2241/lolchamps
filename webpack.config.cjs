const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['node_modules'],
  },
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, './src/scripts/'),
    filename: 'main.min.js',
  },
  mode: 'development',
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
