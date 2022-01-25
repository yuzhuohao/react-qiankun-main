const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");
/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const prodConfig = {
	mode: "production",
};

module.exports = webpackMerge.merge(commonConfig, prodConfig);
