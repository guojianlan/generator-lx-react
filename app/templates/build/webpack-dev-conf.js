var config = require('../config')
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack-base-conf.js')
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
	module: {
    loaders:[
    	{
        test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin(config[config.moduleName+'dev'].definePlugin),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: baseWebpackConfig.htmlPath['index'],
      inject: true
    })
  ]
})
