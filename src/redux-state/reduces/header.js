import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showBurger: false,
    activeButton: [0, 0, 0, 0, 0],
}

export const headerReducer = createSlice({
    name: 'headerReducer',
    initialState,
    reducers: {
        setShowBurger: (state, action) => {
            state.showBurger = action.payload;
        },
        setActiveButton: (state, action) => {
            const newActiveButton = state.activeButton.map((num, index) => {
                return index === action.payload ? 1 : 0;
            });
            state.activeButton = newActiveButton;
        }
    }
})

export const { setShowBurger, setActiveButton } = headerReducer.actions
export default headerReducer.reducer