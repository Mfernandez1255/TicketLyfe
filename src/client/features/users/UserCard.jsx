import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styling/UserCard.less";

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="usercard_position">
      <ul className="user-card">
        <li>
          <h3>{user.username}</h3>
        </li>
        <li>
          <h3>seller id: {user.id}</h3>
        </li>
        <li>
          <button onClick={handleViewProfile}> View Profile</button>
        </li>
      </ul>
    </div>
  );
}

export default UserCard;
