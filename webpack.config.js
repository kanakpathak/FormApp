const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    hot: true
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/static/index.html",
      filename: "./index.html"
    })
  ]
};
