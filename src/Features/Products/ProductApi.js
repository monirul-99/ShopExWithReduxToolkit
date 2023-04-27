import APISlice from "../API/APISlice";

const ProductApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/api/v1/products",
      }),
    }),
    getDataByProductsId: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/api/v1/products/${id}`,
      }),
    }),
    getProductsId: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/api/v1/products/product-by-id/${id}`,
      }),
    }),
    getBestProducts: builder.query({
      query: () => ({
        method: "GET",
        url: `/api/v1/products/bestProducts/products`,
      }),
    }),
    OrderPost: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/api/v1/orders`,
        body: data,
      }),
    }),
    OrderSuccessPayment: builder.mutation({
      query: (quantity, id) => ({
        method: "POST",
        url: `/api/v1/orders/payment/success?quantity=${quantity}&productID=${id}`,
      }),
    }),
    AddToCardPost: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/api/v1/orders/add-to-cart/list/added`,
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    OrderSuccessInfo: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/api/v1/orders/payment-products/${id}`,
      }),
    }),
    CartDataGetWithEmail: builder.query({
      query: (email) => ({
        method: "GET",
        url: `/api/v1/orders/cart-data/product/${email}`,
      }),
      providesTags: ["cart", "remove"],
    }),
    cartProductRemove: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/api/v1/orders/cart-data/product/${id}`,
      }),
      invalidatesTags: ["remove"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetDataByProductsIdQuery,
  useGetBestProductsQuery,
  useGetProductsIdQuery,
  useOrderPostMutation,
  useOrderSuccessInfoQuery,
  useAddToCardPostMutation,
  useCartDataGetWithEmailQuery,
  useCartProductRemoveMutation,
  useOrderSuccessPaymentMutation,
} = ProductApi;
