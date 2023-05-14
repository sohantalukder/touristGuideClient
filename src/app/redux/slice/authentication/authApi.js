import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result) {
                        localStorage.setItem(
                            "auth",
                            JSON.stringify({
                                user: result?.data?.response?.records,
                            })
                        );
                        dispatch(
                            userLoggedIn({
                                user: result?.data?.response?.records,
                            })
                        );
                    }
                } catch (e) {}
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
