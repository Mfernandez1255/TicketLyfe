import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styling/TicketCard.less";

function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/ticket/${ticket.id}`);
  };

  const handleBuy = async () => {};

  const formatDateTime = (isoDateTime) => {
    const dateTime = new Date(isoDateTime);
    const options = {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return dateTime.toLocaleString("en-US", options);
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.eventName}</h3>
      <p>{ticket.description}</p>
      <p>Location: {ticket.location}</p>
      <p>Date & Time: {formatDateTime(ticket.dateTime)}</p>
      <p>Price: ${ticket.price}</p>
      <div className="details-button">
        <button onClick={handleViewDetails}> See Details </button>
      </div>
      <div className="buy-button">
        <button onClick={handleBuy}>Buy Ticket</button>
      </div>
    </div>
  );
}

export default TicketCard;
