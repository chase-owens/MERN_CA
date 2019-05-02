const path = require('path');

module.exports = {
  mode: 'development', //or 'production'
  entry: path.resolve(__dirname, `src`, `app`),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      images: path.resolve(__dirname, './src/images'),
      store: path.resolve(__dirname, './src/app/store')
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    host: 'localhost'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
