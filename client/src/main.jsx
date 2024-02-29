import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from '@components/style/GlobalStyle';
import Theme from '@components/style/Theme';
import Home from '@pages/Home/Home';

import store from './app/store';

/**
 * Router
 * @description
 * This is the router for the application.
 **/
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

/**
 * Main
 * @description
 * This is the main entry point of the application.
 **/
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme>
				<GlobalStyle />
				<RouterProvider router={router} />
			</Theme>
		</Provider>
	</React.StrictMode>,
);
