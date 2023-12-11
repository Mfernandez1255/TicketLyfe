import { useParams } from "react-router-dom";
import { useGetTicketQuery } from "./ticketSlice";

function TicketDetails() {
  const { id } = useParams();
  const { data: ticket, isLoading } = useGetTicketQuery(id);

  if (isLoading) return <div>Loading . . .</div>;

  return (
    <>
      <div>
        <h1>Event: {ticket.eventName}</h1>
        <h2>Location: {ticket.location}</h2>
        <h2>Date and Time: {ticket.dateTime}</h2>
        <h3>Description: {ticket.description}</h3>
        <p>Seat/Section: {ticket.seatSection}</p>
        <h2>Buy Now Price: ${ticket.price}</h2>
      </div>
    </>
  );
}

export default TicketDetails;
