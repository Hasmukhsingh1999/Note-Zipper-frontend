import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8000/api`,
  }),
  tagTypes: ["user"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({ url: `/users` }),
    }),
  }),
});

export const { useLazyGetUsersQuery } = userApi;

export default userApi;
