import { createSlice } from '@reduxjs/toolkit';

/**
 * The gridSizeProviderSlice is responsible for providing size and position information to the
 * Slider and StartButton components, so that they can adjust their forms accordingly.
 **/
const initialState = {
};

const gridSizeProvider = createSlice({
    name: 'gridSizeProvider',
    initialState,
    reducers: {
        set: (state, action) => {
            state[action.payload.id] = action.payload.value;
        },
    }
});

export default gridSizeProvider.reducer;
export const { set } = gridSizeProvider.actions;