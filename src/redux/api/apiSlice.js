import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../../config";
// import { userLoggedOut } from "../auth/authSlice";
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = getState()?.auth?.accessToken;
        if (token) {
            headers.set("Authorization", "Bearer " + token);
        }
        return headers;
    },
});
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            //     api.dispatch(userLoggedOut());
            localStorage.clear();
        }
        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
});
