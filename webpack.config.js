'use strict'

const path = require('path') ;

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app:'./js/entry.js',
		events:"./js/events.js"
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	resolve:{
		modules:[path.resolve(__dirname, 'src'), "node_modules"]
	},
	module: {
		rules: [
			{test: /\.txt$/, use: 'raw-loader'},
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options:{
					presets: ['es2015']
				}
			},
			{
				test:/\.css$/,
				use:[
					{ 
						loader: "style-loader"
					},
					{
						loader:"css-loader",
						options: {
							modules:false
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
				use: [
					'file-loader'
				]
			},
			{
	          test: /\.(woff|woff2|eot|ttf|otf)$/,
	          use: [
	            'file-loader'
	          ]
	        },
	        {
	        	test:/\.(csv|tsv)$/,
	        	use: [
	        		'csv-loader'
	        	]
	        },
	        {
	        	test:/\.xml$/,
	        	use: [
	        		'xml-loader'
	        	]
	        }
		]
	},
	devServer:{
		port: 9000,
		contentBase: __dirname
	}
}
