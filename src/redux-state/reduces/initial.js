import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    init: false,
    clientMode: 'mobile',
    sectionPadding: '20px',
}

export const initialReducer = createSlice({
    name: 'initialReducer',
    initialState,
    reducers: {
        changeInit: (state) => {
            state.init = true;
        },
        setClientMode: (state, action) => {
            state.clientMode = action.payload
        },
        setSectionPadding: (state, action) => {
            state.sectionPadding = action.payload
        }
    }
});

export const { changeInit, setClientMode, setSectionPadding } = initialReducer.actions
export default initialReducer.reducer