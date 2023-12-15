import api from "../../store/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["user"],
    }),
    getSoldTickets: builder.query({
      query: (id) => `/users/${id}/sold`,
      providesTages: ["sold-tickets"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useGetSoldTicketsQuery } =
  userApi;
