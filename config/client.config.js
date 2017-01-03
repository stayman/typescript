const {resolve} = require('path');
const webpack = require('webpack');

const basePath = resolve(__dirname, '..')

module.exports = {
  entry: './src/App.tsx',
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
      },
      {
        test: /\.css$/,
        exclude: [
          resolve(basePath, 'node_modules')
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
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
    new webpack.LoaderOptionsPlugin({
      options: {
        context: resolve(basePath),
        parser: 'postcss-comment',
        postcss: [
          require('postcss-import')({path: [resolve(basePath, 'src')], skipDuplicates: false}),
          require('autoprefixer'),
          require('postcss-mixins'),
          require('postcss-nested'),
          require('postcss-simple-vars'),
          require('postcss-custom-media'),
          require('postcss-property-lookup')
        ]
      }
    }),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: "'production'"}}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ]
}
