import { MenuAction } from '../actions/menus';
import { MenuState, TabProps } from '@/types/common';

const defaultState: MenuState = {
	tabs: [
		{
			title: '控制台',
			key: 'dashboard',
			path: '/dashboard',
			closable: false,
		},
	],
	menus: [
		// {
		// 	title: 'react子应用user',
		// 	key: 'react_user',
		// 	path: '/react-ts-qiankun-app/user',
		// },
		// {
		// 	title: 'react子应用article',
		// 	key: 'react_article',
		// 	path: '/react-ts-qiankun-app/article',
		// },
	],
	activeKey: 'dashboard',
	activePath: '/dashboard',
};

const menus = (state = defaultState, action: MenuAction): MenuState => {
	const { type, menus, tab, activeKey, deleteKey } = action;
	let newTabs = state.tabs;
	switch (type) {
		case 'LOAD_MENUS':
			return { ...state, menus: menus };
		case 'ADD_TAB':
			return { ...state, ...addTab(newTabs, tab) };
		case 'CHANGE_ACTIVE':
			return { ...state, activeKey: activeKey };
		case 'CLOSE_TAB':
			return {
				...state,
				...closeTab(newTabs, state.activeKey, deleteKey),
			};
		default:
			return state;
	}
};

function addTab(newTabs: Array<TabProps>, tab: TabProps) {
	if (
		newTabs.every((item) => {
			return item.key != tab.key;
		})
	) {
		newTabs.push(tab);
	}
	return { tabs: newTabs, activeKey: tab.key };
}

function closeTab(
	newTabs: Array<TabProps>,
	activeKey: string,
	deleteKey: string
) {
	if (activeKey == deleteKey) {
		console.log(activeKey, 'activekey');
		console.log(newTabs, 'newTabs');
		if (newTabs[newTabs.length - 1].key == activeKey) {
			activeKey = newTabs[newTabs.length - 2].key;
		} else {
			let indexActive = 0;
			newTabs.forEach((item, index) => {
				if (item.key === activeKey) {
					indexActive = index;
				}
			});
			activeKey = newTabs[indexActive].key;
		}
	}
	newTabs = newTabs.filter((item) => {
		return item.key !== deleteKey;
	});
	return { tabs: newTabs, activeKey: activeKey };
}

export default menus;
