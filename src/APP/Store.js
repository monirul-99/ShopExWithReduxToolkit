import APISlice from "../Features/API/APISlice";
import AuthSlice from "../Features/Auth/AuthSlice";
const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    Auth: AuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});

export default Store;
