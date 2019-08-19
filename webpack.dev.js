const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /antd.*\.less$/,
        use: [
          {
            loader:  'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader', // compiles Less to CSS
              options: {
                sourceMap: false,
                javascriptEnabled: true,
              }
          }),
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     config: {
          //       path: './postcss.config.js',
          //     },
          //   },
          // },
        ]
      },
      {
        test: /\.(sc|c|)ss$/,
        use: [
          {
            loader:  'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          }),
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:  'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader', // compiles Less to CSS
              options: {
                sourceMap: false,
                javascriptEnabled: true,
              }
          }),
        ],
      },
      {
        test: /\.(jsx?)/,
        exclude: ["/node_modules", "/src/js/elm"],
        use: [
          { loader: "babel-loader?cacheDirectory=true",
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name]-[hash:8].[ext]'
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
              mozjpeg: {
               progressive: true,
               quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
               enabled: true,
              },
              pngquant: {
               quality: '65-90',
               speed: 4
              },
              gifsicle: {
               interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
               quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff2?)$/,
        loader: "file-loader",
        options: {
          name: 'fonts/[name].[ext]',
          outputPath: 'fonts',
        }
      }
    ],
    noParse: [/\.elm$/]
  },
  devServer: {
    // webpack-dev-server defaults to localhost:8080
    port: 8081,
    watchOptions: {ignored: /node_modules/, include: /node_modules\/antd/},
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: {
      index: '/'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Expose-Headers": "*"
    },
    proxy: {
      "/api": {
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
    new AntdScssThemePlugin('./src/assets/css/theme.scss'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
})
