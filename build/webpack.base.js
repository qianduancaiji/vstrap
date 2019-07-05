
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    module: {
		rules: [
	        {
	        	test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
	        },
	        {
	        	test: /\.(jpg|png|gif|jpeg|bmp)$/,
	        	use: 'url-loader?limit=50000&name=[hash:8]-[name].[ext]'

		    },
		    {
		      	test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: {
                	loader: 'file-loader',
                	options: {
                        publicPath: './fonts',
                        outputPath: 'fonts/',
                        name: '[name].[ext]'
                	}
                }
		    },
		    {
		      	test: /\.js$/,
		      	use: 'babel-loader',
		      	exclude: /node_modules/
		    },

			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false
					}
				}
			}
		]
    },
    plugins:
	[
		new VueLoaderPlugin()
		// new OptimizeCssAssetsPlugin(),//压缩css
	]
}
