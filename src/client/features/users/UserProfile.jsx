import { useParams, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "./UserSlice";
import "./Styling/UserProfile.less";

function UserProfile() {
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserQuery(id);
  const navigate = useNavigate();

  const handleViewSoldTickets = () => {
    navigate(`/users/${id}/sold`);
  };

  if (isLoading) return <div>Loading . . . </div>;

  return (
    <div className="userprof_position">
      <h1>User Profile</h1>
      <ul className="user-prof">
        <li>
          <h3>{user.firstName}</h3>
        </li>
        <li>
          <h3>{user.lastName}</h3>
        </li>
        <li>
          <h3>{user.email}</h3>
        </li>
        <li>
          <h3>{user.username}</h3>
        </li>
        <li>
          <p>seller id: {user.id}</p>
        </li>
        <li>
          <button onClick={handleViewSoldTickets}> View Tickets </button>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
