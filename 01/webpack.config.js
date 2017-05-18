var path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {use:'babel-loader' , test: /\.js$/  , exclude: /node_modules/ }
    ]
  }
};