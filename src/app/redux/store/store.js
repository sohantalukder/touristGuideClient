import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSliceReducer from "../slice/authentication/authSlice";
import Cookies from "js-cookie";

const userInfoFromStorage = Cookies.get("auth")
    ? JSON.parse(Cookies.get("auth"))
    : null;

const preloadedState = {
    auth: { user: userInfoFromStorage },
};
export const store = configureStore({
    preloadedState,
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
