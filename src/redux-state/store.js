import { configureStore } from '@reduxjs/toolkit'
import initialReducer from './reduces/initial';

export const store = configureStore({
    reducer: {
        initial: initialReducer,
    },
});