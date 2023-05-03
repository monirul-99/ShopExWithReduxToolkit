import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.isLoading = true;
    },
  },
});

export const { loadProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
