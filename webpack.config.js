const path = require('path');

module.exports = {
  entry: './public/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
};
