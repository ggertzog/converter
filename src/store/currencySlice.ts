import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
    usd: number;
    eur: number;
};

const initialState: CurrencyState = {
    usd: 0,
    eur: 0,
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        updateUsd(state, action) {
            state.usd = action.payload;
            state.eur = action.payload * 1.07;
        },
        updateEur(state, action) {
            state.eur = action.payload;
            state.usd = action.payload / 1.07;
        },
    }
});

export const {updateUsd, updateEur} = currencySlice.actions;

export default currencySlice.reducer;