const envConfig = require('./webpack.env');

let loaders = [{
  test: /\.ts$/,
  loader: 'ts-loader!tslint-loader'
}, {
  test: /\.html$/,
  loader: 'html-loader?-minimize'
}, {
  test: /\.css$/,
  loader: 'css-to-string-loader!css-loader!postcss-loader'
}, {
  test: /\.scss$/,
  loader: 'css-to-string-loader!css-loader!postcss-loader!sass-loader'
}, {
  test: /\.(jpg|jpeg|png|gif|svg|ico)$/i,
  loader: 'file-loader?name=[name].[ext]&context=./src/assets/img'
}, {
  test: /\.(otf|eot|svg|ttf|woff|woff2)/i,
  loader: 'file-loader?name=[name].[ext]'
}];

module.exports = loaders;
