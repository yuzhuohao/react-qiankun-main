import axios from "axios";
import Router from "../router";
import message from "ant-design-vue/es/message";

axios.defaults.timeout = 36000000; //设置超时时间

// 添加请求拦截器
// axios.interceptors.request.use(
// 	(req) => {
// 		//统一设置传header
// 		if (req.url.indexOf("login") == -1) {
// 			let token = localStorage.getItem("token") || "";
// 			req.headers.token = token;
// 		}
// 		return req;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

//响应拦截器
axios.interceptors.response.use(
	(response) => {},
	(error) => {
		if (error.code === 401) {
		} else if (error.data.code !== 200) {
			message.error(error.data.message);
		}
		return error;
	}
);
export default axios;
