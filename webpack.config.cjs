const path = require('path');

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
};
