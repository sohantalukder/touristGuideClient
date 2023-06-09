import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = { user: {} };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                Cookies.set("auth", JSON.stringify(action.payload), {
                    expires: 7,
                    secure: true,
                    sameSite: "strict",
                    path: "/",
                });
            }
        },
        userLoggedOut: (state) => {
            state.user = {};
            Cookies.remove("auth");
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
