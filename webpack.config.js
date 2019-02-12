// @ts-check

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const devMode = process.env.NODE_ENV !== "production"
const isProdMode = process.env.NODE_ENV === "production"

/**
 * @type {import('webpack').Configuration}
 */

const config = {
  mode: devMode ? "development" : "production",
  entry: ["./src/index.tsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: devMode ? "/" : "/reddit-album",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: devMode ? "cheap-module-eval-source-map" : "hidden-source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendors"
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: "./src/assets/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[name].[hash].css"
    })
  ]

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  //   externals: {
  //     react: "React",
  //     "react-dom": "ReactDOM"
  //   }
}

// Automatically split vendor and commons
// https://twitter.com/wSokra/status/969633336732905474
// https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
if (isProdMode) {
  config.optimization = {
    splitChunks: {
      maxSize: 50000,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity
    },
    runtimeChunk: true
  }
}

module.exports = config
