/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// define the basepath
export const baseUrl = import.meta.env.VITE_API_BASE_URL;
// Define the API slice
const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
    credentials: "include",
  }), // Replace with your API base URL
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (payload) => `allaccounts`, // Endpoint to fetch user details
    }),
    transact: builder.mutation({
      query: (payload) => ({
        url: "transact",
        method: "POST",
        body: {
          amount: payload.amount,
          mode: payload.mode,
        },
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery, useTransactMutation } = userApi;
export default userApi;
