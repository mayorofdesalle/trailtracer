import { createSlice } from '@reduxjs/toolkit';

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