module.exports = {
	//代理到mock
	'/mock': {
		target: 'http://localhost:9090',
		pathRewrite: { '^/mock': '' },
	},
	// '/react-qiankun-micro': {
	// 	target: 'http://localhost:3000',
	// 	pathRewrite: { '^/react-qiankun-micro': '' },
	// 	changeOrigin: true,
	// },
};
