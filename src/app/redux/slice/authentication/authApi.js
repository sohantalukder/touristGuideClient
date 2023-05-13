import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            user: result.response?.records,
                        })
                    );
                    dispatch(
                        userLoggedIn({
                            user: result.response?.records,
                        })
                    );
                } catch (e) {
                    userLoggedIn({
                        user: result.response?.records,
                    });
                }
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
