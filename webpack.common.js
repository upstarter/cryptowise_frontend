const path = require("path");
const fs  = require('fs');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const Dotenv = require('dotenv-webpack');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

const env = process.env.NODE_ENV || "development";
const devMode = env === "development";
const mode = env === "production" ? "production" : "development"

// const elmSource = __dirname + "/js/elm";
// const prodElm = "/app/apps/platform_web/assets"
// const elmMake = "/node_modules/elm/binwrappers/elm-make"
// const elmMakePath = !devMode ? prodElm + elmMake : __dirname + elmMake

module.exports = {
  mode: mode,
  // devtool: "source-map",
  entry: {
    app: ["./src/js/app.js"
      // , "./js/elm/app/Main.elm"
    ]
  },
  output: {
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, "dist"),
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].bundle.js',
    publicPath: '/',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|)ss$/,
        // exclude: [path.resolve(__dirname, "node_modules"),path.resolve(__dirname, "src/js/elm")],
        issuer: {
          exclude: /\.less$/,
        },
        use: [
          {
            loader:  'style-loader',
            options: {
              // sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // modules: true,
              // sourceMap: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, "src/js/elm")],
        issuer: {
          exclude: /\.(sc|c|)ss$/,
        },
        use: [
          {
            loader:  'style-loader',
            options: {
              // sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // sourceMap: true,
            },
          },
          {
            loader: 'less-loader', // compiles Less to CSS
              options: {
                // sourceMap: true,
                javascriptEnabled: true,
              }
          },
        ],
      },

      {
        test: /\.(jsx?)/,
        exclude: [path.resolve(__dirname, "node_modules"),path.resolve(__dirname, "src/js/elm")],
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: "babel-loader?cacheDirectory=true",
          }
        ]
      },

      {
        test: /\.scss$/,
        exclude: [path.resolve(__dirname, "node_modules"),path.resolve(__dirname, "src/js/elm")],
        issuer: /\.less$/,
        use: {
          loader: './src/js/sassVarsToLess.js' // Change path if necessary
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [path.resolve(__dirname, "node_modules"),path.resolve(__dirname, "src/js/elm")],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]',
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
        exclude: [path.resolve(__dirname, "node_modules"),path.resolve(__dirname, "src/js/elm")],
        loader: "file-loader",
        options: {
          name: 'fonts/[name].[ext]',
        }
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
      Config: path.resolve(__dirname, 'src/js/react_app/src/config'),
      Services: path.resolve(__dirname, 'src/js/react_app/src/services'),
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
  node: {
    fs: 'empty' // Weird hack for now to prevent 'fs' errors
  },
  plugins: [
    new Dotenv(),

    // new ReactLoadablePlugin({
    //   filename: './dist/react-loadable.json',
    // }),
    new CopyWebpackPlugin([{
      from: "./src/assets/css",
      to: "css"
    },

     // { from: './src/assets/images', to: 'images' },
  ]),
  ]
};
