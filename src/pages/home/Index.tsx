import React from 'react';
import { PageProps } from '@/types/common';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
const { Resizable } = require('react-resizable');
import RouterView from '@/router/Router';
import TopTabs from '@components/tabs/Index';
import TopNavigator from '@components/navigator/Index';
import Menus from '@components/menus/Index';
import './index.less';

const { Header, Sider, Content } = Layout;

const Index: React.FC<PageProps> = (props) => {
	const [width, setWidth] = React.useState(200);
	const [tempWidth, setTempWidth] = React.useState(200);

	const { intlState } = useSelector((store: any) => store);
	const { direction } = intlState;

	function onResize(
		event: MouseEvent,
		{ size }: { size: { width: number } }
	) {
		setTempWidth(size.width);
	}
	function onResizeStart(
		event: MouseEvent,
		{ size }: { size: { width: number } }
	) {}
	function onResizeStop(
		event: MouseEvent,
		{ size }: { size: { width: number } }
	) {
		setWidth(size.width);
	}

	return (
		<Layout className="index-page" style={{ position: 'relative' }}>
			<Resizable
				width={tempWidth}
				height={0}
				onResizeStop={onResizeStop}
				onResizeStart={onResizeStart}
				onResize={onResize}
				axis="x"
				resizeHandles={[direction == 'ltr' ? 'ne' : 'nw']}
			>
				<Sider className="left-sider" width={width} trigger={null}>
					<div className="app_name">react主应用</div>
					<Menus />
				</Sider>
			</Resizable>
			{tempWidth != width ? (
				direction == 'ltr' ? (
					<div
						className="temp-border"
						style={{ left: tempWidth - 5 }}
					/>
				) : (
					<div
						className="temp-border"
						style={{ right: tempWidth - 5 }}
					/>
				)
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
