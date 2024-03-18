import { createSlice } from '@reduxjs/toolkit';

/**
 * The themeSlice is responsible for managing the theme of the application.
 **/
const initialState = {
    preference: window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
};

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            state.preference = !state.preference;
        },
    }
});

export default theme.reducer;
export const { toggle } = theme.actions;