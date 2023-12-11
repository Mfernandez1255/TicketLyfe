import { useUpdateTicketMutation } from "./ticketSlice";
import { useState } from "react";

function TicketUpdate({ buyerId, sellerId, ticket }) {
  const [BuyerId, setBuyerId] = useState(ticket.buyerId);
  const [updateTicket] = useUpdateTicketMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      console.error(err);
    }
  };
}
