import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useGetUserQuery } from "../../../features/user/userSlice";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserQuery(user?.email);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }
  console.log(user, data.role);
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        {user?.photoURL ? (
          <figure className="px-10 pt-10">
            <img
              src={user?.photoURL}
              alt={user?.email}
              className="rounded-xl"
            />
          </figure>
        ) : (
          <div className="w-full h-32 bg-red-500 flex justify-center items-center">
            <h1 className="text-2xl text-white">N/A</h1>
          </div>
        )}
        <div className="card-body items-center text-center bg-gray-200">
          <h2 className="card-title">{user?.email}</h2>
          <p className="text-xl">Role: {data?.role}</p>

          <div className="card-actions">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
