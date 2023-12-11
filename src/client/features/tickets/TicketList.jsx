import React from "react";
import { useGetTicketsQuery } from "./ticketSlice";
import TicketCard from "./TicketCard";

function TicketList() {
  const { data: tickets, isLoading, isError } = useGetTicketsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !tickets) return <p>Error fetching tickets.</p>;

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
