import { createSlice } from '@reduxjs/toolkit';

/**
 * The themeSlice is responsible for managing the theme of the application.
 * The theme is stored in the Redux store and in the session storage.
 **/
const initialState = {
    preference: sessionStorage.getItem('theme') !== null
        ? JSON.parse(sessionStorage.getItem('theme'))
        : window.matchMedia('(prefers-color-scheme: dark)').matches
};

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            state.preference = !state.preference;
            sessionStorage.setItem('theme', state.preference);
        },
    }
});

export default theme.reducer;
export const { toggle } = theme.actions;