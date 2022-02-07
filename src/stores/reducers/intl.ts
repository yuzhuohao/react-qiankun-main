import { changeLanguageAction } from '../actions/language';
import { IntlState } from '@/types/common';
import { loadLocale } from '@/locale/index';

const defaultState: IntlState = {
	language: 'zh-CN',
	message: loadLocale('zh-CN').message,
	antLocale: loadLocale('zh-CN').antLocale,
	languageList: [
		{ name: 'English', code: 'en-US' },
		{ name: '中文', code: 'zh-CN' },
	],
	direction: 'ltr',
};

const intl = (
	state = defaultState,
	action: changeLanguageAction
): IntlState => {
	const { type } = action;
	switch (type) {
		case 'CHANGE_LANGUAGE':
			const { language } = action;
			const { message, antLocale } = loadLocale(language);
			return {
				...state,
				language: language,
				antLocale: antLocale,
				message: message,
			};
		case 'CHANGE_DIRECTION':
			let current = state.direction;
			if (current == 'rtl') {
				current = 'ltr';
			} else {
				current = 'rtl';
			}
			return { ...state, direction: current };
		default:
			return state;
	}
};

export default intl;
