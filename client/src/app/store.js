import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from '@features/backgroundSlice';
import gridSizeProviderReducer from '@features/gridSizeProviderSlice';
import themeReducer from '@features/themeSlice';

/**
 * Redux store
 */
const store = configureStore({
    reducer: {
        theme: themeReducer,
        background: backgroundReducer,
        gridSizeProvider: gridSizeProviderReducer
    },
});

export default store;