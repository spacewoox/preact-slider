const path = require('path')
const dev = process.env.NODE_ENV === 'dev'

let config = {
  entry: ['./index.js'],
  output: {
    filename: 'preact-slider.js',
    path: path.resolve('dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1'
        ]
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
