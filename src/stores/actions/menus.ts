import axios from '@/utils/axios';
import { MenuProps } from '@/types/common';
import { TabProps } from '@/types/common';

export interface MenuAction {
	type: 'LOAD_MENUS' | 'CHANGE_ACTIVE' | 'ADD_TAB' | 'CLOSE_TAB';
	menus?: Array<MenuProps>;
	tab?: TabProps;
	activeKey?: string;
	deleteKey?: string;
}

export const getWeather = () => {
	return (dispatch: Function) => {
		axios
			.get('/mock/menus')
			.then((res) => {
				dispatch({ type: 'LOAD_MENUS', menus: res.data.data });
			})
			.catch((err: any) => {
				console.log('错误', err);
			});
	};
};

export const loadMenu = (menus: Array<MenuProps>) => {
	return {
		type: 'LOAD_MENUS',
		menus: menus,
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
