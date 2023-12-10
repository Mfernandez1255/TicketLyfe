import React from 'react';
import { useNavigate } from 'react-router-dom';

function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/tickets/${ticket.id}`);
  };

  const handleBuy = async () => {
 
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.eventName}</h3>
      <p>{ticket.description}</p>
      <p>Location: {ticket.location}</p>
      <p>Date & Time: {ticket.dateTime}</p>
      <p>Price: ${ticket.price}</p>
      <button onClick={handleViewDetails}>View Details</button>
      <button onClick={handleBuy}>Buy Ticket</button>
    </div>
  );
}

export default TicketCard;
