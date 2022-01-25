import { zh_CN } from './zh_CN';
import { en_US } from './en_US';

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

function loadLocale(lang: string) {
	let message = null;
	let antLocale = null;
	switch (lang) {
		case 'en-US':
			message = en_US;
			antLocale = enUS;
			break;
		case 'zh-CN':
			message = zh_CN;
			antLocale = zhCN;
			break;
		default:
			message = zh_CN;
			antLocale = zhCN;
			break;
	}
	return { message, antLocale };
}
export { loadLocale };
