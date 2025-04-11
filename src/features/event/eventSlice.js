import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventSlice = createApi({
  reducerPath: "event",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Event"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/events`,
      keepUnusedDataFor: 600,
      providesTags: ["Events"],
    }),
    getEvent: builder.query({
      query: (id) => `/events/${id}`,
      keepUnusedDataFor: 600,
      providesTags: ["Events"],
    }),
    addEvent: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Events"],
    }),
    editEvent: builder.mutation({
      query: ({ id, data }) => {
        console.log(id, { data });
        ({
          url: `/events/${id}`,
          method: "PATCH",
          body: data,
        });
      },

      invalidatesTags: ["Events"],
    }),

    // addUser: builder.mutation({
    //   query: (data) => ({
    //     url: "/users",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Users"],
    // }),
    // changeRole: builder.mutation({
    //   query: ({ email, role }) => ({
    //     url: `/users/${email}`,
    //     method: "PUT",
    //     body: { role },
    //   }),
    //   invalidatesTags: (result, error, { email }) => [
    //     "Users",
    //     { type: "User", id: email },
    //   ],
    // }),

    // deleteUser: builder.mutation({
    //   query: (email) => ({
    //     url: `/users/${email}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Users"],
    // }),
  }),
});

export const {
  useAddEventMutation,
  useGetEventsQuery,
  useGetEventQuery,
  useEditEventMutation,
} = eventSlice;
