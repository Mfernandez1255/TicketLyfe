import { useParams, useNavigate } from "react-router-dom";
import { useGetTicketQuery } from "./ticketSlice";
import "./Styling/TicketDetails.less";
import { useDeleteTicketMutation } from "./ticketSlice";
import TicketUpdate from "./TicketUpdate.jsx";

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
      <div className="details">
        <h1>Event: {ticket.eventName}</h1>
        <h2>Location: {ticket.location}</h2>
        <p>Date & Time: {formatDateTime(ticket.dateTime)}</p>
        <h3>Description: {ticket.description}</h3>
        <p>Seat/Section: {ticket.seatSection}</p>
        <h1>Seller Id: {ticket.sellerId}</h1>
        <h2>Buy Now Price: ${ticket.price}</h2>
        <div className="buy-now">
          <TicketUpdate />
        </div>
      </div>
    </>
  );
}

export default TicketDetails;
