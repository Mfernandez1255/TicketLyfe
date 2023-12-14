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
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = userApi;
