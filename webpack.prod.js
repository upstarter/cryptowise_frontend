const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin')
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sc|c|)ss$/,
        issuer: {
          exclude: /\.less$/,
        },
        use: [
          {
            loader:  MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
          }),
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader', // compiles Less to CSS
              options: {
                javascriptEnabled: true,
              }
          }),
        ],
      },
      {
        test: /\.scss$/,
        issuer: /\.less$/,
        use: {
          loader: './src/js/sassVarsToLess.js' // Change path if necessary
        }
      },
      {
        test: /\.(ttf|otf|eot|woff2?)$/,
        loader: "file-loader",
        options: {
          name: 'fonts/[name].[ext]',
        }
      }
    ],
    noParse: [/\.elm$/]
  },
  // optimization: {
  //   minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin({})]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CryptoWise',
      template: './src/assets/prod.index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new AntdScssThemePlugin('./src/assets/css/theme.scss'),
  ],
  // resolve: {
  //   extensions: [".css", ".sass", ".scss", ".less", ".js", ".jsx"],
  //   alias: {
  //     Images: path.resolve(__dirname, 'src/assets/images'),
  //     Css: path.resolve(__dirname, 'src/assets/css'),
  //     Fonts: path.resolve(__dirname, 'src/assets/fonts'),
  //   }
  // }
})
