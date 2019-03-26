const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const devMode =  process.env.NODE_ENV !== 'production';
module.exports = {
	entry : './front-end/app.js',
	output : {
		path : path.join(__dirname,'backend/public'),
		filename : 'js/bundle.js'
	},
	module : {
		rules : [{
				test : /\.css/,
				use : [
				devMode ? 'style-loader' : MiniCssExtractPlugin.loader,  //si estoy en desarrollo carga los archivosstyle-loader , si estoy en produccion convierte con minicss
				'css-loader'
				]
		}
		] 
	},
	plugins : [
       new HtmlWebpackPlugin({
       	  template : './front-end/index.html',
       	  minify : {
       	  	collapseWhitespace : true,
       	  	removeComments : true,
       	  	removeReduantAttributes : true,
       	  	removeScriptTypeAttributes : true,
       	  	removeStyleLinkAttributes : true,
       	  	useShortDoctype : true 
       	  }
       }),
       new MiniCssExtractPlugin({
       	filename : 'css/bundle.css'
       })


	],
	devtool : 'source-map'
};