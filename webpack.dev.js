const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');


module.exports = merge(common, {
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  devServer: {
    // allowedHosts: [
    //   'localhost',
    //   'api.localhost'
    // ],
    // webpack-dev-server defaults to localhost:8080
    // lazy: true,
    overlay: true,
    port: 8081,
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    compress: true,
    watchOptions: {ignored: /node_modules/, include: /node_modules\/antd/},
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Expose-Headers": "*"
    },
    proxy: {
      "/v1": {
        target: 'http://localhost:4000',
        // pathRewrite: { '^/api': '/api' },
        cookieDomainRewrite: "localhost",
        changeOrigin: true,
        // secure: true
        onProxyReq: proxyReq => {
          // Browers may send Origin headers even with same-origin
          // requests. To prevent CORS issues, we have to change
          // the Origin to match the target URL.
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', 'http://localhost:4000');
          }
        },
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CryptoWise',
      template: './src/assets/dev.index.html'
    }),
    new AntdScssThemePlugin('./src/assets/css/theme.scss'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
})
