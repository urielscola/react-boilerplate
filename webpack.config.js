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
        resolve: {
          extensions: ['.js', '.json', '.jsx'],
          alias: {
            Components: path.join(__dirname, '.', 'src', 'js', 'components'),
            Actions: path.join(__dirname, '.', 'src', 'js', 'store', 'actions'),
            Reducers: path.join(__dirname, '.', 'src', 'js', 'store', 'reducers')
          }
        }
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
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        use: 'file-loader'
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
