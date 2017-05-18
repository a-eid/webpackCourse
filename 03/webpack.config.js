const path = require('path') 
const ExtractTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath : "build/" , 
  },
  module:{
    rules:[
      {use:'babel-loader' , test: /\.js$/  , exclude: /node_modules/ }, 
      // applied from right to left .. 
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }) , 
        test: /\.css$/  , exclude: /node_modules/ 
      },
      {
        use:[
          {loader:'url-loader' , options: { limit: 40000 }} , 
          'image-webpack-loader'] , 
        test:/\.jpe?g|gif|png|svg$/ , 
        exclude: /node_modules/ }
    ]
  },
  plugins:[
    new ExtractTextPlugin('style.css')
  ]
};