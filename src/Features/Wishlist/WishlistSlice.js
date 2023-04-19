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
});

export default WishlistSlice.reducer;
