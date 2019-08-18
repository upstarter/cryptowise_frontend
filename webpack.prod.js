const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.(sc|c|)ss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //   ],
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader:  MiniCssExtractPlugin.loader,
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader',
          {
            loader: "image-webpack-loader",
            options: {
              name: '/images/[name].[ext]',
              limit: 10000,
              disable: false
            }
          },
        ],

      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),

  ]
})
