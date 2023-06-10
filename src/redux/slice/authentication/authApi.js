import Cookies from "js-cookie";
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
                    if (result?.data?.response?.status?.code === 200) {
                        Cookies.set(
                            "auth",
                            JSON.stringify(result?.data?.response?.records),
                            {
                                expires: 7,
                                secure: true,
                                sameSite: "strict",
                                path: "/",
                            }
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
