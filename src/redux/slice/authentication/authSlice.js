import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = { user: undefined };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            Cookies.set("auth", JSON.stringify(action.payload.user), {
                expires: 7,
                secure: true,
                sameSite: "strict",
                path: "/",
            });
        },
        userLoggedOut: (state) => {
            state.user = undefined;
            Cookies.remove("auth");
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
