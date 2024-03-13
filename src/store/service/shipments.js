import { wrapperAPI } from "../helper/wrapperApi";

export const ShipmentsApi = wrapperAPI.injectEndpoints({
    reducerPath: "ShipmentsApi",
    endpoints: (builder) => ({
        getShipmentDetails: builder.query({
            providesTags: ["Shipments"],
            query: (id) => `shipments/track/${id}`,
        })
    })
})

export const {
    useGetShipmentDetailsQuery,
} = ShipmentsApi;
