import { useGetUsersQuery } from "../../features/user/userSlice";
import UserTable from "./UserTable";

const ManageUsers = () => {
  const { data: users, isLoading, isError, isSuccess } = useGetUsersQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>something went wrong.</p>;
  }
  if (isSuccess) {
    console.log(users);
  }

  return (
    <div>
      <h1>Here is All users.{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Donor</th>
              <th>Make vulenteer</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <UserTable key={user._id} user={user} index={index}></UserTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
