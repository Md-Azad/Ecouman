import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../../provider/AuthProvider";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navLinks = (
    <>
      <li className="text-2xl font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-2xl font-bold">
        <NavLink to="/dashboard/admin/overview">OverView</NavLink>
      </li>
      <li className="text-2xl font-bold">
        <NavLink to="/dashboard/admin/manageusers">Manage users</NavLink>
      </li>
      <li className="text-2xl font-bold">
        <NavLink to="/dashboard/admin/events">Event Management</NavLink>
      </li>
      <li className="text-2xl font-bold">
        <NavLink to="/dashboard/admin/donations">Donations</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-400 md:px-12 sticky top-0 z-50 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <h1 className="md:text-3xl font-bold">Ecouman</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[1rem] px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="btn bg-purple-700 hover:bg-purple-500 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
