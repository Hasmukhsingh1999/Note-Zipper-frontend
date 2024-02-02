import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8000/api`,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: () => ({
        url: `/users`,
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateUserMutation } = authApi;
