import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from '@features/backgroundSlice';
import gridPlaceholderReducer from '@features/gridPlaceholderSlice';

const store = configureStore({
    reducer: {
        background: backgroundReducer,
        gridPlaceholder: gridPlaceholderReducer
    },
});

export default store;