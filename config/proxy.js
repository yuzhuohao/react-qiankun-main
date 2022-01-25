module.exports = [
	// {
	// 	//代理到后台地址
	// 	'/express-intl': {
	// 		target: 'http://150.158.170.90:8002',
	// 		changeOrigin: true,
	// 	},
	// },
	{
		//代理到mock
		'/mock/*': {
			target: 'http://localhost:9090',
			pathRewrite: { '^/mock': '' },
		},
	},
	// {
	// 	'/react-ts-qiankun-app/*': {
	// 		target: 'http://150.158.170.90:8002/',
	// 		changeOrigin: true,
	// 	},
	// },
	{
		'/react-ts-qiankun-app/*': {
			target: 'localhost:3000/',
			changeOrigin: true,
		},
	},
];
