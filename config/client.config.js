const {resolve} = require('path');
const webpack = require('webpack');

const basePath = resolve(__dirname, '..')
console.log(basePath)
module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: resolve(basePath, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [
          resolve(basePath, 'node_modules')
        ],
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      resolve(basePath, 'src')
    ],
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  target: 'web',
  stats: 'normal'
}