import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSliceReducer from "../slice/authentication/authSlice";
import Cookies from "js-cookie";
import { production_mode } from "../../../config";
import preferenceReducer from "../slice/preference/preferenceSlice";
import topGuidersReducer from "../slice/guiders/topGuidersSlice";

const userInfoFromStorage = Cookies.get("auth")
    ? JSON.parse(Cookies.get("auth"))
    : {};

const preloadedState = {
    auth: userInfoFromStorage,
};
export const store = configureStore({
    preloadedState,
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        preference: preferenceReducer,
        topGuiders: topGuidersReducer,
    },
    devTools: production_mode !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
