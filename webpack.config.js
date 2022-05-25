const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '0x29a.me',
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ],
  },
};
