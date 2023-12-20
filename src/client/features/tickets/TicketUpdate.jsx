import { useParams } from "react-router-dom";
import { useUpdateTicketMutation } from "./ticketSlice";
import { useContext } from "react";
import { useGetTicketQuery } from "./ticketSlice";

function TicketUpdate() {
  const { id } = useParams();
  const { data: sellerId } = useGetTicketQuery(id);

  const [updateTicket] = useUpdateTicketMutation();

  const handleBuyNow = async (e) => {
    e.preventDefault();
    try {
      await updateTicket({ id, buyerId: sellerId });
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleBuyNow}> Buy Ticket </button>;
}

export default TicketUpdate;
