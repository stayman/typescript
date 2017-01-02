const {resolve} = require('path');
const webpack = require('webpack');

const basePath = resolve(__dirname, '..')

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
  devServer: {
    contentBase: [resolve(basePath, 'build'), resolve(basePath, 'views')],
    compress: true,
    port: 3000,
    publicPath: '/build'
  },
  target: 'web',
  stats: 'normal',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: "'production'"}}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ]
}