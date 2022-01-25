import { RouteComponentProps } from 'react-router-dom';
import H from 'history';
import { FunctionComponent } from 'react';
import { Locale } from 'antd/lib/locale-provider';

export interface SubRouteComponent extends FunctionComponent {
	routes: RouteConfig[];
}

export interface RouteConfig {
	path: string;
	component: FunctionComponent<PageProps>;
	exact?: boolean;
	children?: RouteConfig[];
}

export interface Location extends H.Location {
	// query: { [key: string]: string };
}
export interface PageProps extends RouteComponentProps {
	location: Location;
	routes?: Array<RouteConfig>;
}
export interface MenuProps {
	title: string;
	key: string;
	path: string;
	icon?: string;
}

export interface IntlState {
	language: 'en-US' | 'zh-CN';
	message: {
		[propName: string]: string | Object;
	};
	antLocale: Locale;
	languageList: { name: string; code: string }[];
	direction: 'rtl' | 'ltr';
}
export interface TabProps {
	title: string;
	key: string;
	path: string;
	closable?: boolean;
}

export interface MenuState {
	menus?: Array<MenuProps>;
	tabs?: Array<TabProps>;
	activeKey?: string;
	activePath?: string;
}
