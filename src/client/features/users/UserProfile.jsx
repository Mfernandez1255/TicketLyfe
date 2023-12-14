import { useParams, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "./UserSlice";

function UserProfile() {
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserQuery(id);

  if (isLoading) return <div>Loading . . . </div>;

  return (
    <>
      <div>
        <ul>
          <li>
            <h1>User Profile</h1>
          </li>
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
        </ul>
      </div>
    </>
  );
}

export default UserProfile;
