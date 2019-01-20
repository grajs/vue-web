const resolve = (path) => require('path').resolve(__dirname, path)
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: (isProduction ? ['babel-polyfill'] : []).concat([resolve('../src/main')])
  },
  output: {
    path: resolve('../dist'),
    filename: isProduction ? 'static/js/[name].[chunkhash:8].js' : 'static/js/[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.css$/,
        use: [isProduction ? {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../../' }
        } : 'vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [isProduction ? {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../../' }
        } : 'vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: `[name]${isProduction ? '.[hash:8]' : ''}.[ext]`,
            limit: 5000,
            outputPath: 'static/image/'
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff2?|svgz?)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: `[name]${isProduction ? '.[hash:8]' : ''}.[ext]`,
            limit: 5000,
            outputPath: 'static/fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('../src/template.html')
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('../src/public'),
        to: resolve('../dist/static/public')
      }
    ])
  ].concat(isProduction ? [
    new webpack.HashedModuleIdsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime-.+\.js$/
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css'
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
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    disableHostCheck: true,
    contentBase: resolve('../dist'),
    proxy: {
      '/api': {
        target: 'http://60.205.217.144:3389',
        changeOrigin: true
      },
      '/wf': {
        target: 'http://60.205.217.144:3389',
        changeOrigin: true
      }
    }
  },
  devtool: isProduction ? '' : 'souce-map'
}
