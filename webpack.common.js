const path = require("path");
const fs  = require('fs');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
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
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js'
  },
  // module: {
  //   rules: [
  //     // {
  //     //   test: /\.elm$/,
  //     //   exclude: ["/elm-stuff/", "/node_modules"],
  //     //   loader: "elm-webpack-loader",
  //     //   options: {
  //     //     pathToMake: elmMakePath,
  //     //     maxInstances: 2,
  //     //     debug: !isProd,
  //     //     warn: true,
  //     //     cwd: elmSource
  //     //   }
  //     // },
  //   ],
  //   noParse: [/\.elm$/]
  // },
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
  node: {
    fs: 'empty' // Weird hack for now to prevent 'fs' errors
  },
  plugins: [
    new Dotenv(),

    // new ReactLoadablePlugin({
    //   filename: './dist/react-loadable.json',
    // }),
    // new CopyWebpackPlugin([{
    //   from: "./src/assets/images",
    //   to: "src/assets/images"
    // }]),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ]
};
