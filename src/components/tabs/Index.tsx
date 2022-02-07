import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tabs } from 'antd';
import { TabProps, PageProps } from '@/types/common';
import { changeActive, closeTab } from '@/stores/actions/menus';
import store from '@/stores';
const { TabPane } = Tabs;

const TopTabs: React.FC<PageProps> = (props) => {
	const { menuState } = useSelector((store: any) => store);
	const dispatch = useDispatch();
	const { tabs, activeKey } = menuState;


	function onChange(activeKey: string) {
		dispatch(changeActive(activeKey));
		let path = tabs.find((item: TabProps) => {
			return item.key == activeKey;
		}).path;
		props.history.push(path);
	}

	function onEidt(targetKey: any) {
		dispatch(closeTab(targetKey));
		const menuState = store.getState().menuState;
		const { activeKey, tabs } = menuState;
		const path = tabs.find((item) => {
			return activeKey == item.key;
		}).path;
		props.history.push(path);
	}

	return (
		<Tabs
			type="editable-card"
			hideAdd
			style={{ marginTop: '24px' }}
			activeKey={activeKey}
			onChange={onChange}
			onEdit={onEidt}
		>
			{tabs.map((item: TabProps) => (
				<TabPane
					tab={item.title}
					key={item.key}
					closable={item.closable}
				></TabPane>
			))}
		</Tabs>
	);
};
export default withRouter(TopTabs);
