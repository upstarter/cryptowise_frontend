const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const AntdScssThemePlugin = require('antd-scss-theme-plugin');
// var DashboardPlugin = require("webpack-dashboard/plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    // publicPath: '/',
    filename: '[name].bundle.js'
  },
  devServer: {
    // webpack-dev-server defaults to localhost:8080
    // lazy: true,
    open: true,
    overlay: true,
    port: 8081,
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    inline: true,
    // compress: true,
    watchOptions: {include: 'src', ignored: ['build','dist','nginx','src/js/elm','node_modules','src/assets']},
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new DashboardPlugin({port: 8081}),
    // new AntdScssThemePlugin('./src/assets/css/theme.scss'),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ]
})
