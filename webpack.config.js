const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|mp4)/,
        use: ['file-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
