const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /* ... */
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],

  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
