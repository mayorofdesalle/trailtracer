import { createSlice } from '@reduxjs/toolkit';

import textureShaderData from '@data/textureShader';

const initialState = {
    distortion: textureShaderData.uniforms.u_distortion,
    slope: textureShaderData.uniforms.u_slope,
    jitter: textureShaderData.uniforms.u_jitter,
};

const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        set: (state, action) => {
            state.distortion = action.payload.distortion ? action.payload.distortion : state.distortion;
            state.slope = action.payload.slope ? action.payload.slope : state.slope;
            state.jitter = action.payload.jitter ? action.payload.jitter : state.jitter;
        },

        randomize: (state) => {
            state.distortion = Math.random() * 4 + 4;
            state.slope = Math.floor(Math.random() * 50) + 50;
            state.jitter = Math.random() + 1;
        },

        modify: (state, action) => {
            state.distortion += action.payload.distortion;
            state.slope += action.payload.slope;
            state.jitter += action.payload.jitter;
        },
    }
});

export default backgroundSlice.reducer;
export const { set, randomize, modify } = backgroundSlice.actions;