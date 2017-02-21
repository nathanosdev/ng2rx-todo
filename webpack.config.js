const path = require('path');

const plugins = require('./config/webpack.plugins');
const loaders = require('./config/webpack.loaders');
const envConfig = require('./config/webpack.env');

let config = {
	target: 'web',
  entry: {
    'app': path.join(__dirname, 'src', 'index')
  },
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		sourceMapFilename: '[name].map.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.html']
	},
	plugins: plugins,
	module: {
		loaders: loaders
	}
};

if (!envConfig.isProduction) {
	config.devtool = 'cheap-module-source-map';
	config.devServer = {
		contentBase: path.join(__dirname, 'build'),
		inline: true,
		historyApiFallback: true
	};
}

module.exports = config;