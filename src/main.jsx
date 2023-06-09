import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_SECRET } from "../config";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_SECRET}>
                <RouterProvider router={router} />
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);
