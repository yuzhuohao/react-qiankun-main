module.exports = {
	//代理到mock
	'/mock': {
		target: 'http://localhost:9090',
		pathRewrite: { '^/mock': '' },
	},
};
