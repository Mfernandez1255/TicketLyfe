import React from "react";
import "./Styling/UserTicketCard.less";
function SoldTickets({ ticket }) {
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
    <div className="soldtickets_position">
      <ul className="sold-tickets">
        <li>
          <h1>Event: {ticket.eventName} </h1>
        </li>
        <li>
          <h3>Location: {ticket.location} </h3>
        </li>
        <li>
          <p>Date & Time: {formatDateTime(ticket.dateTime)}</p>
        </li>
        <li>
          <p>Description: {ticket.description} </p>
        </li>
        <li>
          <p>Seat/Section: {ticket.seatSection} </p>
        </li>
        <li>
          <p>Seller Id: {ticket.sellerId} </p>
        </li>
        <li>
          <h3>Price: $ {ticket.price} </h3>
        </li>
      </ul>
    </div>
  );
}
export default SoldTickets;
