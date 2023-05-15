"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_SECRET } from "../../../../config";

export function GoogleProvider({ children }) {
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_SECRET}>
            {children}
        </GoogleOAuthProvider>
    );
}
