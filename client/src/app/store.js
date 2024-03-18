import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@features/themeSlice';
import backgroundReducer from '@features/backgroundSlice';
import gridPlaceholderReducer from '@features/gridPlaceholderSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        background: backgroundReducer,
        gridPlaceholder: gridPlaceholderReducer
    },
});

export default store;