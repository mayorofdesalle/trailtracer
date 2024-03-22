import { createSlice } from '@reduxjs/toolkit';

/**
 * The gridPlaceholderSlice is responsible for providing size and position information to the
 * Slider and StartButton components, so that they can adjust their forms accordingly.
 **/
const initialState = {
};

const gridPlaceholder = createSlice({
    name: 'gridPlaceholder',
    initialState,
    reducers: {
        set: (state, action) => {
            state[action.payload.id] = action.payload.value;
        },
    }
});

export default gridPlaceholder.reducer;
export const { set } = gridPlaceholder.actions;