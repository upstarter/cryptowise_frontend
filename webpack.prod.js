const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin')
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /antd.*\.less$/,
        use: [
          {
            loader:  MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader', // compiles Less to CSS
              options: {
                javascriptEnabled: true,
              }
          }),
      //     // {
      //     //   loader: 'postcss-loader',
      //     //   options: {
      //     //     config: {
      //     //       path: './postcss.config.js',
      //     //     },
      //     //   },
      //     // },
        ]
      },
      {
        test: /\.(sc|c|)ss$/,
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
              disable: false,
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
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new AntdScssThemePlugin('./src/assets/css/theme.scss'),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),

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
