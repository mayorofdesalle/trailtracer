import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './mocks/i18n.mock';
import './mocks/matchMedia.mock';
import './mocks/resizeObserver.mock';

import store from '@app/store';
import GlobalStyle from '@components/style/GlobalStyle';
import Theme from '@components/style/Theme';

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <Theme>
                <GlobalStyle />
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Theme>
        </Provider>
    );
};

const customRender = (ui, options) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';
export * from 'vitest';

// override render method
export { customRender as render };
