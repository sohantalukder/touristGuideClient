import { createSlice } from "@reduxjs/toolkit";
const initialState = { guiders: [] };

const getTopGuiders = createSlice({
    name: "topGuiders",
    initialState,
    reducers: {
        topGuiders: (state, action) => {
            if (action.payload) {
                state.guiders = action.payload;
            }
        },
    },
});

export const { topGuiders } = getTopGuiders.actions;

export default getTopGuiders.reducer;
