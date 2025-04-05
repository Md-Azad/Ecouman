import { Outlet } from "react-router";
import AdminNavbar from "./Admin/AdminNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>

      <Outlet />
      <h1>Footer will be here.....</h1>
    </div>
  );
};

export default DashboardLayout;
