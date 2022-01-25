import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterView from '@router/Index';
import { routes } from '@router/config';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'antd/dist/antd.css';

const App: React.FC = () => {
	const { intlState } = useSelector((store: any) => store);
	const { direction, language, message } = intlState;
	return (
		<IntlProvider locale={language} messages={message}>
			<ConfigProvider direction={direction}>
				<BrowserRouter>
					<RouterView routes={routes} />
				</BrowserRouter>
			</ConfigProvider>
		</IntlProvider>
	);
};

export default App;
