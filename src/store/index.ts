import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from './currencySlice'

const store = configureStore({
    reducer: {
        currency: currencyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;