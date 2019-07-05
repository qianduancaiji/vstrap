const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
	//生产环境去掉
	devtool: 'eval-source-map',
	mode: 'development',
	optimization: {
		runtimeChunk: false,
		splitChunks: false
	},
	//入口
    entry: {
        index: './example/index.js'
    },
    //出口
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js'
    },
    devServer: {
        //服务器根路径
        contentBase: path.resolve(__dirname, "../dist"),
        //服务器ip地址
        host:'localhost',
        //服务端压缩是否开启
        compress: true,
        port: 8900,
        inline: true
    },
	module: {
		rules: [
			
		]
	},
	plugins:
	[
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			//包含的html代码
			template: './example/index.html',
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
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].[hash].css',
        })
	]
}

module.exports = merge(config, baseConfig)
