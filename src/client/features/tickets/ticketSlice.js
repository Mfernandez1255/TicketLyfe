import api from "../../store/api";

const ticketApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "/tickets",
      providesTags: ["tickets"],
    }),
    getTicket: builder.query({
      query: (id) => `/tickets/${id}`,
      providesTags: ["ticket"],
    }),
    postTicket: builder.mutation({
      query: (ticketData) => ({
        url: "/tickets",
        method: "POST",
        body: ticketData,
      }),
    }),
    updateTicket: builder.mutation({
      query: ({ id, buyerId }) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
        body: { buyerId },
      }),
    }),
    deleteTicket: builder.mutation({
      query: ({ id }) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ticket", "tickets"],
    }),
  }),
});
export const {
  useGetTicketsQuery,
  useGetTicketQuery,
  usePostTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
} = ticketApi;
