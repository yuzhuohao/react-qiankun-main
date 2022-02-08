//  config/webpack.config.base.js
const packageName = require('../package.json').name;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
	entry: {
		//项目入口
		app: "./src/Index.tsx",
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'assets/js/[name].[hash].js',
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			//别名配置，需要在tsconfig中也配置一下，否则会报错
			"@": path.resolve(__dirname, "../src"),
			"@components": path.resolve(__dirname, "../src/components"),
			"@utils": path.resolve(__dirname, "../src/utils"),
			"@pages": path.resolve(__dirname, "../src/pages"),
			"@router": path.resolve(__dirname, "../src/router"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "react-qiankun-main",
			template: path.resolve(__dirname, "../index.html"),
			filename: "index.html",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ },
			{ test: /\.(ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
		],
	},
	cache: {
		type: "filesystem",
		// 可选配置
		buildDependencies: {
			config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
		},
		name: "development-cache",
	},
};
