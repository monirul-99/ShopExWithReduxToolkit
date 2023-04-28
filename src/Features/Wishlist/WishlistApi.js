import APISlice from "../API/APISlice";

const WishApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    CreateWishlist: builder.mutation({
      query: (product) => ({
        method: "POST",
        url: `/api/v1/wishlist`,
        body: product,
      }),
      invalidatesTags: ["wish"],
    }),
    GetWishData: builder.query({
      query: (email) => ({
        method: "GET",
        url: `/api/v1/wishlist/${email}`,
      }),
      providesTags: ["wish", "wishRemove"],
    }),

    WishlistRemove: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/api/v1/wishlist/${id}`,
      }),
      invalidatesTags: ["wishRemove"],
    }),
  }),
});

export const {
  useCreateWishlistMutation,
  useGetWishDataQuery,
  useWishlistRemoveMutation,
} = WishApi;
