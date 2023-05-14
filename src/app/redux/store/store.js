import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSliceReducer from "../slice/authentication/authSlice";
const userInfoFromStorage = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;
const preloadedState = {
    auth: { user: userInfoFromStorage?.user },
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
