var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
      }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('precss')
    ];
  },
  plugins: [
    new webpack.DefinePlugin({
      '__PRERELEASE__': JSON.stringify(JSON.parse(process.env.PRERELEASE || 'true')),
      '__DEV__': JSON.stringify(JSON.parse(process.env.PRERELEASE || 'true'))
    }),
    new ExtractTextPlugin('main.css')
  ]
}
