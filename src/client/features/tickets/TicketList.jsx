import React from "react";
import { useGetTicketsQuery } from "./ticketSlice";
import TicketCard from "./TicketCard";
import TicketForm from "./TicketForm";
import "./Styling/TicketList.less";

function TicketList() {
  const { data: tickets, isLoading, isError } = useGetTicketsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !tickets) return <p>Error fetching tickets.</p>;

  return (
    <>
      <div className="Ticket_form_header">
        <TicketForm />
      </div>
      <ul className="Ticket-flex">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </>
  );
}

export default TicketList;
