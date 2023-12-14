import { useParams, useNavigate } from "react-router-dom";
import { useGetTicketQuery } from "./ticketSlice";
import "./Styling/TicketDetails.less";
import { useDeleteTicketMutation } from "./ticketSlice";

function TicketDetails() {
  const { id } = useParams();
  const { data: ticket, isLoading } = useGetTicketQuery(id);
  const navigate = useNavigate();

  const [deleteTicket] = useDeleteTicketMutation();
  const handleDelete = () => {
    deleteTicket({ id });
    navigate("/");
  };
  if (isLoading) return <div>Loading . . .</div>;

  return (
    <>
      <div className="details">
        <h1>Event: {ticket.eventName}</h1>
        <h2>Location: {ticket.location}</h2>
        <h2>Date and Time: {ticket.dateTime}</h2>
        <h3>Description: {ticket.description}</h3>
        <p>Seat/Section: {ticket.seatSection}</p>
        <h1>Seller Id: {ticket.sellerId}</h1>
        <h2>Buy Now Price: ${ticket.price}</h2>
        <button onClick={handleDelete}> Remove post </button>
      </div>
    </>
  );
}

export default TicketDetails;
