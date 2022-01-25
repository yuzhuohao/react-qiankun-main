import { MenuProps } from '@/types/common';
import { TabProps } from '@/types/common';

export interface changeLanguageAction {
	type: 'CHANGE_LANGUAGE' | 'CHANGE_DIRECTION';
	language: 'en-US' | 'zh-CN';
	direction: 'rtl' | 'ltr';
}

export interface MenuAction {
	type: 'LOAD_MENUS' | 'CHANGE_ACTIVE' | 'ADD_TAB' | 'CLOSE_TAB';
	menus?: Array<MenuProps>;
	tab?: TabProps;
	activeKey?: string;
	deleteKey?: string;
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

export const loadMenu = (menus: Array<MenuProps>) => {
	return {
		type: 'LOAD_MENUS',
		payload: menus,
	};
};

export const addTab = (tab: TabProps) => {
	return {
		type: 'ADD_TAB',
		tab: tab,
	};
};

export const changeActive = (activeKey: string) => {
	return {
		type: 'CHANGE_ACTIVE',
		activeKey: activeKey,
	};
};

export const closeTab = (deleteKey: string) => {
	return {
		type: 'CLOSE_TAB',
		deleteKey: deleteKey,
	};
};
