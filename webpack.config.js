const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 
        {
          loader: "postcss-loader",
          options: {
              autoprefixer: {
                  browsers: ['last 2 versions', 'iOS >= 8']
              },
              plugins: () => [
                  autoprefixer
              ]
          },
      }, 
      'sass-loader']
      }
    ]
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};
