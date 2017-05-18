var webpack = require('webpack');
var HtmlWebpack = require('html-webpack-plugin')
var path = require('path');

const VENDOR_LIBS = [
  'faker' , 'lodash' , 'react' , 'redux' , 'react-dom' ,
  'react-redux' , 'react-input-range' , 'redux-form' ,
  'redux-thunk' 
]

module.exports = {
  entry: {
    vendor: VENDOR_LIBS ,
    bundle: './src/index.js',
  }, 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devtool:"source-map",
  module:{
    rules:[
      {use: 'babel-loader' , test: /\.js$/ , exclude: /node_modules/} , 
      {use:['style-loader' , 'css-loader'] , test: /\.css$/ , exclude: /node_modules/}
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor' , 'manifest'] 
    }),
    new HtmlWebpack({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV) 
    })
  ]
};
