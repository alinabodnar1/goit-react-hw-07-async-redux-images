import { configureStore } from "@reduxjs/toolkit";
import { picturesReducer } from './picturesReducer';

export const store = configureStore({
    reducer: {
        pictures: picturesReducer,
    },
});