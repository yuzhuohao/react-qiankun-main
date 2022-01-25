import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/index';
import { registerMicroApps, start } from 'qiankun';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

registerMicroApps([
	{
		name: 'react-ts-qiankun-app',
		entry: 'http://localhost:3000',
		container: '#app',
		activeRule: '/react-ts-qiankun-app',
	},
]);
start();
