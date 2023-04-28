import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const APISlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DEV_URL,
  }),
  tagTypes: ["wish", "cart", "remove", "wishRemove"],
  endpoints: (builder) => ({}),
});

export default APISlice;
