import React from "react";
function SoldTickets({ ticket }) {
  console.log(ticket);

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
    <>
      <div>
        <ul>
          <li>
            <h3>Event: {ticket.eventName} </h3>
          </li>
          <li>
            <h3>Location: {ticket.location} </h3>
          </li>
          <li>
            <h2>Date & Time: {formatDateTime(ticket.dateTime)}</h2>
          </li>
          <li>
            <h2>Description: {ticket.description} </h2>
          </li>
          <li>
            <p>Seat/Section: {ticket.seatSection} </p>
          </li>
          <li>
            <h2>Seller Id: {ticket.sellerId} </h2>
          </li>
          <li>
            <h2>Price: $ {ticket.price} </h2>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SoldTickets;
