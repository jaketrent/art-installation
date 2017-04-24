import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import template from 'html-webpack-template';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, path.join('..', 'dist'))
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template,
      appMountId: 'app',
      devServer: 'http://localhost:3001',
      title: 'Art Installation'
    })
  ]
};
