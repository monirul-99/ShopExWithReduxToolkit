import APISlice from "../API/APISlice";
import { getUser } from "./AuthSlice";

const AuthAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/api/v1/users",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(getUser(data.email));
        } catch (error) {
          //nothing
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = AuthAPI;
