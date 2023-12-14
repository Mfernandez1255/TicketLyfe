import React from "react";
import { useGetUsersQuery } from "./UserSlice";
import UserCard from "./UserCard";

function Users() {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading) return <p>Loading . . . </p>;
  if (isError) return <p>Error . . . </p>;

  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
