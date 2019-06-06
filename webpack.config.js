const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebackPlugin = require('clean-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      { test: /\.(sa|sc|c|le)ss$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(png|jpg|gif|bmp)$/, use: 'url-loader?limit=43959?&name=images/img-[hash:8].[name].[ext]' },
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
	  { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发测试页面',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
	new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebackPlugin(),
    new webpack.ProvidePlugin({
        $:'xxx'   // 需要引入的第三方库向jquery，这里引用就不用分别在每个页面import了
    })
  ]
}