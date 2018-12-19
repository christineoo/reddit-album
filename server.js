const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

// new WebpackDevServer(webpack(config), {
//   contentBase: config.output.path,
//   watchContentBase: true,
//   hot: true,
// }).listen(3000, "0.0.0.0", function(err, result) {
//   if (err) {
//     console.log(err);
//   }

//   console.log("Running at http://0.0.0.0:3000");
// });

const options = {
  contentBase: config.output.path,
  hot: true,
  host: "localhost"
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, "localhost", () => {
  console.log("dev server listening on port 3000");
});
