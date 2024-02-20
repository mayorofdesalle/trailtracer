import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './components/style/GlobalStyle';
import Theme from './components/style/Theme';

import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
