const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
module.exports = {
	//生产环境去掉
	devtool: 'eval-source-map',
	mode: 'development',
	// mode: 'production',
	//入口
  entry: {
  	index: './src/index.js',
  	mains: './src/mains.js'
  },
  //出口
  output: {
	publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
  	//服务器根路径
	  contentBase: path.join(__dirname, "dist"),
	  //服务器ip地址
	  host:'localhost',
	  //服务端压缩是否开启
	  compress: true,
	  port: 8080,
	  inline: true
	},
	module: {
		rules:
		[
			{
        test: /\.css$/,
        // use: ["style-loader", "css-loader"]
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
      	test: /\.(jpg|png|gif|jpeg|bmp)$/,
      	use: 'url-loader?limit=50000&name=[hash:8]-[name].[ext]'
      },
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'url-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins:
	[
		new webpack.HotModuleReplacementPlugin(),
		new cleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		}),
		// new OptimizeCssAssetsPlugin(),//压缩css
		new htmlWebpackPlugin({
			//包含的html代码
			template: './src/index.html',
			//引入的js文件
			chunks: ['index'],
			//文件名
			filename: 'index.html',
			hash: true
			//去除注释
			/*minify: {
				caseSensitive: false, //是否大小写敏感
		    collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled 
		    collapseWhitespace: true, //是否去除空格
		    removeAttributeQuotes: true,//去除引号
		    removeComments: true,//去除注释
		    removeEmptyAttributes: true//去除空属性
			}*/
		}),
		new htmlWebpackPlugin({
			//包含的html代码
			template: './src/mains.html',
			//引入的js文件
			chunks: ['mains'],
			//文件名
			filename: 'mains.html',
			hash: true
			//去除注释
			/*minify: {
				caseSensitive: false, //是否大小写敏感
		    collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled 
		    collapseWhitespace: true, //是否去除空格
		    removeAttributeQuotes: true,//去除引号
		    removeComments: true,//去除注释
		    removeEmptyAttributes: true//去除空属性
			}*/
		})
	]
}