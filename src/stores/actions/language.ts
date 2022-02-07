export interface changeLanguageAction {
	type: 'CHANGE_LANGUAGE' | 'CHANGE_DIRECTION';
	language: 'en-US' | 'zh-CN';
	direction: 'rtl' | 'ltr';
}

export const changeLanguage = (lang: string) => {
	return {
		type: 'CHANGE_LANGUAGE',
		language: lang,
	};
};

export const changeDirection = () => {
	return {
		type: 'CHANGE_DIRECTION',
	};
};
