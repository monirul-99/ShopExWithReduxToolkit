import APISlice from "../Features/API/APISlice";
import AuthSlice from "../Features/Auth/AuthSlice";
import ProductSlice from "../Features/Products/ProductSlice";
import WishlistSlice from "../Features/Wishlist/WishlistSlice";
const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    Auth: AuthSlice,
    Product: ProductSlice,
    Wish: WishlistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});

export default Store;
