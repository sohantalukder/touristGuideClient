import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from "../../sliceName/sliceName";
const initialState = { preference: {} };

const getPreference = createSlice({
    name: sliceName.preference,
    initialState,
    reducers: {
        preference: (state, { payload }) => {
            state.preference = payload;
        },
    },
});

export const { preference } = getPreference.actions;

export default getPreference.reducer;
