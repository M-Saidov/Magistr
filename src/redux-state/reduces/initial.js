import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    init: false,
}

export const initialReducer = createSlice({
    name: 'initialReducer',
    initialState,
    reducers: {
        changeInit: (state) => {
            state.init = !state.init;
        }
    }
});

export const { changeInit } = initialReducer.actions
export default initialReducer.reducer