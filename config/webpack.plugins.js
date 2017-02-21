const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envConfig = require('./webpack.env');

let plugins = [
	new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-ie/),
	new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
		__dirname
	)
];

if (envConfig.isProduction) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true,
			comments: false
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				html5: true,
				caseSensitive: true,
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				conservativeCollapse: true,
				decodeEntities: true,
				keepClosingSlash: true,
				removeComments: true,
				minifyCSS: true,
				minifyJS: true
			}
		})
	);
} else {
	plugins.push(new HtmlWebpackPlugin({
		template: './src/index.html'
	}));
}

module.exports = plugins;