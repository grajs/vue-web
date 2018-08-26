const resolve = (path) => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const isProduction = process.env.NODE_ENV === 'production' ? 1 : 0
module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: ['babel-polyfill', resolve('../src/main')],
  output: {
    path: resolve('../dist'),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.css$/, loader: ['vue-style-loader', 'css-loader', 'postcss-loader']},
      {test: /\.scss$/, loader: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff2?|svgz?)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: `assets/images/[name].${isProduction ? '[hash]' : ''}.[ext]`,
            limit: 5000
          }
        }]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('../src/template.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': resolve('../src')
    }
  },
  devServer: {
    port: 8080,
    hot: true,
    contentBase: resolve('../dist'),
    proxy: {
      '/web': {
        target: 'https://m.xxx.com/',
        changeOrigin: true
      }
    }
  }
}