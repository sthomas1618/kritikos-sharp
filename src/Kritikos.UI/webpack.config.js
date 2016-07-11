var path = require('path');
var webpack = require('webpack');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');
var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';

module.exports = merge({
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
    path: path.join(__dirname, '/wwwroot', 'dist'),
    filename: '[name].js',
    publicPath: '/dist/' // Tells webpack-dev-middleware where to serve the dynamically compiled content from
  },
  plugins: [
    // Put webpack plugins here if needed, or leave it as an empty array if not

    // To create manifest, run: webpack --config webpack.config.vendor.js
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./wwwroot/dist/vendor-manifest.json')
    })
  ]
}, isDevelopment ? devConfig : prodConfig);;