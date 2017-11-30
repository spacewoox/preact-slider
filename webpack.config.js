const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dev = process.env.NODE_ENV === 'dev'

let config = {
  entry: ['./index.js'],
  output: {
    filename: 'preact-slider.js',
    path: path.resolve('dist/')
  },
  plugins: [
    new ExtractTextPlugin("preact-slider.css"),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
}
if (dev) {
  config.entry.push('./sample/index.js')
  config.devtool = 'source-map'
}
else {
  config.externals = {
    preact: 'preact',
    'enquire.js': 'enquire.js',
    json2mq: 'json2mq',
  }
}
module.exports = config
