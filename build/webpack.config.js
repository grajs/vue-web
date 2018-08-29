const resolve = (path) => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const isProduction = process.env.NODE_ENV === 'production' ? 1 : 0
module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: ['babel-polyfill', resolve('../src/main')]
  },
  output: {
    path: resolve('../dist'),
    filename: isProduction ? '[name].[chunkhash:8].js' : '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.vue$/, loader: 'vue-loader'},
      {
        test: /\.css$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff2?|svgz?)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: `assets/images/[name]${isProduction ? '.[hash:8]' : ''}.[ext]`,
            limit: 5000
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('../src/template.html')
    })
  ].concat(isProduction ? [
    new webpack.HashedModuleIdsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime-.+\.js$/
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css'
    }),
    new OptimizeCssAssetsPlugin()
  ] : [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]),
  optimization: isProduction ? {
    runtimeChunk: {
      name: entrypointer => `runtime-${entrypointer.name}`
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        init: {
          name: 'init',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        elementUI: {
          name: 'elementUI',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 20
        }
      }
    }
  } : {},
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