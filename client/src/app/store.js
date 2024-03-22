import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@features/themeSlice';
import backgroundReducer from '@features/backgroundSlice';
import gridPlaceholderReducer from '@features/gridPlaceholderSlice';

/**
 * Redux store
 */
const store = configureStore({
    reducer: {
        theme: themeReducer,
        background: backgroundReducer,
        gridPlaceholder: gridPlaceholderReducer
    },
});

export default store;