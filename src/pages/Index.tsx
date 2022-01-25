import React from 'react';
import { PageProps } from '@/types/common';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
const { Resizable } = require('react-resizable');

import { addTab, changeActive } from '@/stores/actions';
import { MenuProps } from '@/types/common';
import RouterView from '@/router/Index';
import TopTabs from '@components/tabs/Index';
import TopNavigator from '@components/navigator/Index';
import Menus from '@components/menus/Index';
import './Index.less';

const { Header, Sider, Content } = Layout;

const Index: React.FC<PageProps> = (props) => {
	const [width, setWidth] = React.useState(200);
	const [tempWidth, setTempWidth] = React.useState(200);

	const { intlState } = useSelector((store: any) => store);
	const { direction } = intlState;

	function onResize(event: any, { element, size }: any) {
		setTempWidth(size.width);
	}
	function onResizeStart(event: any, { element, size }: any) {
		// console.log('开始', size);
		// setTempWidth(width);
	}
	function onResizeStop(event: any, { element, size }: any) {
		setWidth(size.width);
		// setTempWidth(0);
	}
	return (
		<Layout className="index-page" style={{ position: 'relative' }}>
			<Resizable
				width={tempWidth}
				onResizeStop={onResizeStop}
				onResizeStart={onResizeStart}
				onResize={onResize}
				axis="x"
				resizeHandles={[direction == 'ltr' ? 'we' : 'nw']}
			>
				<Sider className="left-sider" width={width} trigger={null}>
					<div className="app_name"></div>
					<Menus />
				</Sider>
			</Resizable>
			{tempWidth != width ? (
				<div
					className="temp-border"
					style={{ left: tempWidth - 5 }}
				></div>
			) : (
				''
			)}
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{
						backgroundColor: '#1C242E',
						padding: 0,
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<TopTabs />
					<TopNavigator />
				</Header>
				<Content
					className="site-layout-background"
					style={{
						minHeight: 'calc( 100vh - 64px)',
					}}
				>
					<div id="app"></div>
					<RouterView routes={props.routes} />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Index;
