import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSliceReducer from "../slice/authentication/authSlice";
import Cookies from "js-cookie";
import { production_mode } from "../../../config";

const userInfoFromStorage = Cookies.get("auth")
    ? JSON.parse(Cookies.get("auth"))
    : null;

const preloadedState = {
    auth: { user: userInfoFromStorage ? userInfoFromStorage : null },
};
export const store = configureStore({
    preloadedState,
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
    },
    devTools: production_mode !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
