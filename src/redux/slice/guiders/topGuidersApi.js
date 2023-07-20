import { apiSlice } from "../../api/apiSlice";
import { topGuiders } from "./topGuidersSlice";
export const topGuidersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        topGuiders: builder.mutation({
            query: () => ({
                url: "/guider/top/list",
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result?.data?.response?.status?.code === 200) {
                        dispatch(
                            topGuiders(result?.data?.response?.records?.guiders)
                        );
                    }
                } catch (e) {
                    console.log(e.message);
                }
            },
        }),
    }),
});

export const { useTopGuidersMutation } = topGuidersApi;
