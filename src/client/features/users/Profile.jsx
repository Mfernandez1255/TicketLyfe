import { useParams, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "./UserSlice";

function UserProfile() {
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserQuery(id);

  return (
    <>
      <div>
        <ul>
          <li>
            <h1></h1>
          </li>
        </ul>
      </div>
    </>
  );
}
