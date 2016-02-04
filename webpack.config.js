const path = require('path');
const webpack = require('webpack');
const port = 3030;

module.exports = {
  entry: './src/devpanel',
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'devpanel.bundle.js',
    publicPath: `/js/`
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};
