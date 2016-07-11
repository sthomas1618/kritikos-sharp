var path = require('path');
var webpack = require('webpack');
var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';

// https://github.com/aspnet/JavaScriptServices/issues/96#issuecomment-223086073
// The reason for the "vendor" bundle (and the DllReferencePlugin which enables it) is 
// just to make your builds much faster. 
// All the really huge dependencies only need to go through Webpack's static analysis process 
// when you explicitly rebuild your "vendor" module, and can be skipped entirely for most builds.
//
// In practice I find this shortens the build time from about 15 seconds to about 3 seconds. 
// This is especially important when you're using Hot Module Replacement, 
// because you want your code changes to appear in the browser pretty much instantly, not 10 seconds after you make them.
//
// I appreciate that it makes the webpack setup more complex, but the benefit is pretty huge
module.exports = {
    resolve: {
        extensions: [ '', '.js' ]
    },
    entry: {
      vendor: ['react', 'react-dom', 'react-router', 'react-bootstrap', 'react-router-bootstrap', 'redux', 'redux-thunk', 'react-redux', 'react-router-redux', 'lodash', 'isomorphic-fetch', 'es6-promise' ]
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ].concat(isDevelopment ? [] : [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
    ])
};
