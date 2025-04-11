import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Users", "User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      keepUnusedDataFor: 600,
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (email) => `/users/${email}`,
      providesTags: (result, error, arg) => [
        "Users",
        { type: "User", id: arg },
      ],
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    changeRole: builder.mutation({
      query: ({ email, role }) => ({
        url: `/users/${email}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: (result, error, { email }) => [
        "Users",
        { type: "User", id: email },
      ],
    }),

    deleteUser: builder.mutation({
      query: (email) => ({
        url: `/users/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useChangeRoleMutation,
  useDeleteUserMutation,
} = userSlice;
