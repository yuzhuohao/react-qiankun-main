import React from 'react';
import { withRouter } from 'react-router-dom';
import { PageProps } from '@/types/common';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '@/stores/actions';
import { MenuProps } from '@/types/common';

import './index.less';

const Menus: React.FC<PageProps> = (props) => {
	const { menuState } = useSelector((store: any) => store);
	const dispatch = useDispatch();

	const { menus, activeKey } = menuState;

	function jumpTo(menu: MenuProps) {
		dispatch(addTab(menu));
		props.history.push(menu.path);
	}

	return (
		<Menu
			selectedKeys={[activeKey]}
			theme="dark"
			mode="inline"
			className="left-menu"
		>
			{menus.map((item: MenuProps) => {
				return (
					<Menu.Item key={item.key} icon={<UserOutlined />}>
						<a onClick={() => jumpTo(item)}>{item.title}</a>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default withRouter(Menus);
