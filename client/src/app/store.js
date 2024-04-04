import { configureStore } from '@reduxjs/toolkit';

import { backgroundSlice } from '@features';
import { gridSizeProviderSlice } from '@features';
import { themeSlice } from '@features';

/**
 * Redux store
 */
const store = configureStore({
    reducer: {
        theme: themeSlice,
        background: backgroundSlice,
        gridSizeProvider: gridSizeProviderSlice
    },
});

export default store;