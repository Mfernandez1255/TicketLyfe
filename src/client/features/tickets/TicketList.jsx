import React from "react";
import { useGetTicketsQuery } from "./ticketSlice";
import TicketCard from "./TicketCard";
import TicketForm from "./TicketForm";
function TicketList() {
  const { data: tickets, isLoading, isError } = useGetTicketsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !tickets) return <p>Error fetching tickets.</p>;

  return (
    <div className="ticket-list">
      <TicketForm />
      <ul>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
