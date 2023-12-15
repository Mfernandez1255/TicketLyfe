import React from "react";
import SoldTickets from "./UserTicketCard";
import { useGetSoldTicketsQuery } from "./UserSlice";
import { useParams } from "react-router-dom";
import "./Styling/UserSellingList.less";

function UserSellingList() {
  const { id } = useParams();
  const { data: user, isLoading, isError } = useGetSoldTicketsQuery(id);
  console.log(user);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !user) return <p>Error fetching tickets.</p>;

  return (
    <>
      <div className="sellinglist_position">
        <h2>User: {user.username}</h2>
        <ul>
          {user.selling.map((ticket) => (
            <SoldTickets key={ticket.id} ticket={ticket} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserSellingList;
