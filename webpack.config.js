const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  mode: 'development', //or 'production'
  entry: path.resolve(__dirname, `src`, `app`),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      images: path.resolve(__dirname, './src/images'),
      videos: path.resolve(__dirname, './src/videos'),
      store: path.resolve(__dirname, './src/app/store'),
      utils: path.resolve(__dirname, './src/utils'),
      styles: path.resolve(__dirname, './src/styles')
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    host: 'localhost'
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
      entry: path.resolve(__dirname, 'dist'),
      globals: {
        window: {}
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.mp4/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimtetype: 'video/mp4'
          }
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
              limit: 40000,
              context: './images'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader?attrs[]=video:src'
      },
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] }
    ]
  }
};
