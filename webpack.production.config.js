'use strict';
const path = require('path');
const isWsl = require('is-wsl');
const TerserPlugin = require('terser-webpack-plugin');
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = {
  mode: 'development', //or 'production'
  entry: path.resolve(__dirname, `src`, `app`),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
    // libraryTarget: 'umd',
    // globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
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
  // plugins: [
  //   new StaticSiteGeneratorPlugin({
  //     crawl: true,
  //     entry: 'main',
  //     globals: {
  //       window: {}
  //     }
  //   })
  // ],
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
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: !isWsl,
        cache: true,
        sourceMap: shouldUseSourceMap
      })
    ]
  }
};
