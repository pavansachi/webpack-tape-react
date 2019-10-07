var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'tests', 'all.test.js')
  },
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // For CSS modules
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: []
};
