import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from '@components/style/GlobalStyle';
import Theme from '@components/style/Theme';
import PageContainer from '@layout/PageContainer';
import Home from '@pages/Home/Home';
import SignIn from '@pages/SignIn/SignIn';

import store from './app/store';
import './app/i18n';

/**
 * Router
 * @description
 * This is the router for the application.
 **/
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<PageContainer />}>
			<Route index element={<Home />} />
			<Route path='/signin' element={<SignIn />} />
		</Route>
	));

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
