const path = require("path");
const fs  = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglify-js-plugin");
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const Dotenv = require('dotenv-webpack');

const env = process.env.NODE_ENV || "development";
const devMode = env === "development";
const mode = env === "production" ? "production" : "development"

// const elmSource = __dirname + "/js/elm";
// const prodElm = "/app/apps/platform_web/assets"
// const elmMake = "/node_modules/elm/binwrappers/elm-make"
// const elmMakePath = !devMode ? prodElm + elmMake : __dirname + elmMake

module.exports = {
  mode: mode,
  devtool: "source-map",
  entry: {
    app: ["./src/js/app.js"
      // , "./js/elm/app/Main.elm"
    ]
  },
  output: {
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, "dist"),
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: 'dist/js/[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /antd.*\.less$/,
      //   use: [
      //     {
      //       loader:  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      //       options: {
      //         // sourceMap: devMode,
      //       },
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //         // sourceMap: devMode,
      //       },
      //     },
      //     AntdScssThemePlugin.themify({
      //       loader: 'less-loader', // compiles Less to CSS
      //         options: {
      //           // sourceMap: devMode,
      //           javascriptEnabled: true,
      //         }
      //     }),
      //     // {
      //     //   loader: 'postcss-loader',
      //     //   options: {
      //     //     config: {
      //     //       path: './postcss.config.js',
      //     //     },
      //     //   },
      //     // },
      //   ]
      // },
      {
        test: /\.(sc|c|)ss$/,
        use: [
          {
            loader:  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: {
              // sourceMap: devMode,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // sourceMap: devMode,
              // camelCase: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
            options: {
              // sourceMap: devMode,
            },
          }),
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: {
              // sourceMap: devMode,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // sourceMap: devMode,
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader', // compiles Less to CSS
              options: {
                // sourceMap: devMode,
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
      // {
      //   test: /\.elm$/,
      //   exclude: ["/elm-stuff/", "/node_modules"],
      //   loader: "elm-webpack-loader",
      //   options: {
      //     pathToMake: elmMakePath,
      //     maxInstances: 2,
      //     debug: !isProd,
      //     warn: true,
      //     cwd: elmSource
      //   }
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?name=/images/[name].[ext]",
      },
      {
        test: /\.(ttf|otf|eot|woff2?)$/,
        loader: "file-loader?name=/fonts/[name].[ext]",
      }
    ],
    noParse: [/\.elm$/]
  },
  resolve: {
    extensions: [".css", ".sass", ".scss", ".less", ".js", ".jsx"],
    alias: {
      Actions: path.resolve(__dirname, 'src/js/react_app/src/actions'),
      Reducers: path.resolve(__dirname, 'src/js/react_app/src/reducers'),
      Components: path.resolve(__dirname, 'src/js/react_app/src/components'),
      Styles: path.resolve(__dirname, 'src/js/react_app/src/styles'),
      Utils: path.resolve(__dirname, 'src/js/react_app/src/utils'),
      Images: path.resolve(__dirname, 'src/assets/images'),
      Css: path.resolve(__dirname, 'src/assets/css'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts'),
      Templates: path.resolve(__dirname, 'src/templates'),
      Views: path.resolve(__dirname, 'src/js/react_app/src/views'),
      Proposals: path.resolve(__dirname, 'src/js/react_app/src/views/proposals'),
      Content: path.resolve(__dirname, 'src/js/react_app/src/views/content'),
      Base: path.resolve(__dirname, 'src/js/react_app/src/views/base'),
      Developers: path.resolve(__dirname, 'src/js/react_app/src/views/content/developers'),
      Auth: path.resolve(__dirname, 'src/js/react_app/src/views/backoffice/auth'),
      Marketing: path.resolve(__dirname, 'src/js/react_app/src/views/backoffice/marketing'),
      Sessions: path.resolve(__dirname, 'src/js/react_app/src/views/backoffice/sessions')
    }
  },
  devServer: {
    // webpack-dev-server defaults to localhost:8080
    proxy: {
      "/api": {
        target: 'localhost:4000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false
      }
    },
    historyApiFallback: {
      index: '/'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*"
    },
    watchOptions: {ignored: /node_modules/, include: /node_modules\/antd/},
    contentBase: path.resolve(__dirname, "dist"),
    port: 8081,
  },
  node: {
    fs: 'empty' // Weird hack for now to prevent 'fs' errors
  },
  plugins: [
    new Dotenv(),
    new AntdScssThemePlugin('./src/assets/css/theme.scss'),
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CopyWebpackPlugin([{
      from: "./src/js/react_app/src/"
    }]),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ]
};
