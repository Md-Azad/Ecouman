import { useDeleteUserMutation } from "../../features/user/userSlice";

const UserTable = ({ user, index }) => {
  const [deleteUser] = useDeleteUserMutation();
  const handleMakeDonor = (email) => {
    console.log(email);
  };
  const handleUserDelete = (email) => {
    // console.log(email);
    deleteUser(email);
  };
  return (
    <tbody>
      {}
      <tr>
        <th>{index + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
          <button
            disabled={user?.role === "admin"}
            className="btn bg-green-400 text-white"
          >
            Make Admin
          </button>
        </td>
        <td>
          <button
            onClick={() => handleMakeDonor(user?.email)}
            disabled={user?.role === "donor"}
            className="btn bg-yellow-400 text-white"
          >
            Make Donor
          </button>
        </td>
        <td>
          <button
            disabled={user?.role === "volunteer"}
            className="btn bg-yellow-400 text-white"
          >
            Make Vulunteer
          </button>
        </td>
        <td className="text-left">
          <button className="btn bg-gray-400 text-white">Edit</button>
          <button
            onClick={() => handleUserDelete(user?.email)}
            className="btn bg-red-400 text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserTable;
