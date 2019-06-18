const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

let config = {
    devtool: false,
	//mode: 'development',
	mode: 'production',
	optimization: {
		runtimeChunk: false,
		splitChunks: false
	},
	//入口
    entry: {
  	    index: './src/index.js'
    },
    //出口
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'vstrap.js',
        chunkFilename: 'vstrap.chunk.js',
        library: 'VStrap',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        'vue': 'Vue',
        "axios": "axios",
        'bootstrap/dist/css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
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
        new cleanWebpackPlugin(['dist'], {
            "root": path.resolve(__dirname, '../'),// 一个根的绝对路径.
            //"verbose": true,// 将log写到 console.
            //"dry": false,// 不要删除任何东西，主要用于测试.
            //"exclude": ["files","to","ignore"]//排除不删除的目录，主要用于避免删除公用的文件
                
        }),
		// new OptimizeCssAssetsPlugin(),//压缩css
	]
}

module.exports = merge(config, baseConfig)
