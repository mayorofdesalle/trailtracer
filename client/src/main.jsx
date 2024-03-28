import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from '@components/style/GlobalStyle';
import Theme from '@components/style/Theme';
import AppContainer from '@layout/AppContainer';
import Home from '@pages/Home/Home';
import Profile from '@pages/Profile/Profile';

import store from './app/store';
import './app/i18n';

/**
 * Router
 * @description
 * Router for the application.
 **/
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<AppContainer />}>
			<Route index element={<Home />} />
			<Route path='/signin' element={<Profile />} />
		</Route>
	));

/**
 * Main
 * @description
 * Entry point of the application.
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
