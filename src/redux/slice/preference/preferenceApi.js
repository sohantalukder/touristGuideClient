import { apiSlice } from "../../api/apiSlice";
import { preference } from "./preferenceSlice";
export const preferenceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        preference: builder.mutation({
            query: () => ({
                url: "/preference",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result?.data?.response?.status?.code === 200) {
                        dispatch(preference(result?.data?.response?.records));
                    }
                } catch (e) {}
            },
        }),
    }),
});

export const { usePreferenceMutation } = preferenceApi;
