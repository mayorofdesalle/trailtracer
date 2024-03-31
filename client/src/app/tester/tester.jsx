import { render } from '@testing-library/react'
import { Provider } from 'react-redux';

import './mocks/matchMedia.mock';
import store from '@app/store';
import Theme from '@components/style/Theme'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <Theme>
                {children}
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