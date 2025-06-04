import { configureStore } from '@reduxjs/toolkit'
import initialReducer from './reduces/initial';
import headerReducer from './reduces/header';

export const store = configureStore({
    reducer: {
        initial: initialReducer,
        headerReducer: headerReducer,
    },
});