var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  output: {filename: 'bundle.js', path: 'dist'},

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
