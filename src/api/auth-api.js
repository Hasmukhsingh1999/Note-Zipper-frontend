import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8000/api`,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `/users`,
        method: "POST",
        body: { name, email, password },
      }),
    }),
  }),
});

export const { useCreateUserMutation } = authApi;
