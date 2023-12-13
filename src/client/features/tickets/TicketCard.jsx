import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styling/TicketCard.less";
import { useDeleteTicketMutation } from "./ticketSlice";

function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/ticket/${ticket.id}`);
  };

  const [deleteTicket] = useDeleteTicketMutation();

  const handleBuy = async () => {};

  return (
    <div className="ticket-card">
      <h3>{ticket.eventName}</h3>
      <p>{ticket.description}</p>
      <p>Location: {ticket.location}</p>
      <p>Date & Time: {ticket.dateTime}</p>
      <p>Price: ${ticket.price}</p>
      <div className="details-button">
        <button onClick={handleViewDetails}> See Details </button>
      </div>
      <div className="buy-button">
        <button onClick={handleBuy}>Buy Ticket</button>
      </div>
      <div>
        <button onClick={deleteTicket}> Remove post </button>{" "}
      </div>
    </div>
  );
}

export default TicketCard;
