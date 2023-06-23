import { createSlice } from "@reduxjs/toolkit";
const initialState = { preference: {} };

const getPreference = createSlice({
    name: "preference",
    initialState,
    reducers: {
        preference: (state, action) => {
            if (action.payload) {
                state.preference = action.payload;
            }
        },
    },
});

export const { preference } = getPreference.actions;

export default getPreference.reducer;
