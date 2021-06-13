module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "build",
    filename: "bundle-main.js",
  },
  devServer: {
    historyApiFallback: {
      index: "build/index.html",
    },
  },
};
