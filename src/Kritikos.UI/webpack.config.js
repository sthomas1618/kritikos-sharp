var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  entry: {
    main: ['./client/boot-client.jsx']
  },
  output: {
    path: path.join(__dirname, '/wwwroot/dist'),
    filename: '[name].js',
    publicPath: '/dist/' // Tells webpack-dev-middleware where to serve the dynamically compiled content from
  },
  plugins: [
       // Put webpack plugins here if needed, or leave it as an empty array if not
  ]
};