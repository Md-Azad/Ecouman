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
    // getRelatedVideo: builder.query({
    //   query: (title) => {
    //     const tags = title.split(" ");
    //     const likes = tags.map((tag) => `title_like=${tag}`);
    //     const links = `/videos?${likes.join("&")}&_limit=4`;
    //     return links;
    //   },
    //   providesTags: (result, error, arg) => [
    //     { type: "RelatedVideos", id: arg.id },
    //   ],
    // }),
    // addVideo: builder.mutation({
    //   query: (data) => ({
    //     url: "/videos",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Videos"],
    // }),
    // editVideo: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/videos/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, arg) => [
    //     "Videos",
    //     { type: "Video", id: arg.id },
    //     { type: "RelatedVideos", id: arg.id },
    //   ],
    // }),
    // deleteVideo: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `/videos/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Videos"],
    // }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useChangeRoleMutation,
  useDeleteUserMutation,
} = userSlice;
