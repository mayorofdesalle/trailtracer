import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from '@features/background/backgroundSlice';
import gridPlaceholderReducer from '@features/gridPlaceholder/gridPlaceholderSlice';

const store = configureStore({
    reducer: {
        background: backgroundReducer,
        gridPlaceholder: gridPlaceholderReducer
    },
});

export default store;