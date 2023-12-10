import api from "../../store/api";

const ticketApi = api.injectEndpoints({
  endpoints: {
    getTickets: builder.query({
      query: () => "/tickets",
      provideTags: ["tickets"],
    }),
    getTicket: builder.query({
      query: (id) => `/tickets/${id}`,
      provideTags: ["ticket"],
    }),
    postTicket: builder.mutation({
      query: (ticket) => ({
        url: "/tickets",
        method: "POST",
        body: ticket,
      }),
    }),
    updateTicket: builder.mutation({
      query: ({ id, buyerId }) => ({
        url: `/tickets/${id}`,
        method: "PATCH",
        body: { buyerId },
      }),
    }),
  },
});

export const {
  useGetTicketsQuery,
  useGetTicketQuery,
  usePostTicketMutation,
  useUpdateTicketMutation,
} = ticketApi;