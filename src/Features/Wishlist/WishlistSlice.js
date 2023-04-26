import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  isLoading: false,
  isError: false,
  error: "",
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    loadWishlist: (state, { payload }) => {
      state.wishlist = payload;
    },

    removeLocalWishlist: (state, { payload }) => {
      const latestWish = state.wishlist.filter((item) => item._id !== payload);
      state.wishlist = latestWish;
    },

    addLocalWishlist: (state, { payload }) => {
      state.wishlist = [...state.wishlist, payload];
    },
  },
});

export const { loadWishlist, removeLocalWishlist, addLocalWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
