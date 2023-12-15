import React from "react";
function SoldTickets({ ticket }) {
  console.log(ticket);
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
            <h2>Date and Time: {ticket.dateTime}</h2>
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
