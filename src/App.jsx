import { Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./Pages/Home/RootLayout";
import Home from "./Pages/Home/Home";
import Contact from "./components/rootComponents/Contact";
import Login from "./components/authComponents/Login";
import Signup from "./components/authComponents/Signup";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import AdminHome from "./Pages/Dashboard/Admin/AdminHome";
import Overview from "./components/adminComponents/Overview";
import ManageUsers from "./components/adminComponents/ManageUsers";
import EvenManagement from "./components/adminComponents/EvenManagement";
import Donations from "./components/adminComponents/Donations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route
        path="/dashboard/admin"
        element={
          <AdminRoute>
            {" "}
            <DashboardLayout></DashboardLayout>{" "}
          </AdminRoute>
        }
      >
        <Route index element={<AdminHome />}></Route>
        <Route path="/dashboard/admin/overview" element={<Overview />}></Route>
        <Route
          path="/dashboard/admin/manageusers"
          element={<ManageUsers />}
        ></Route>
        <Route
          path="/dashboard/admin/events"
          element={<EvenManagement />}
        ></Route>
        <Route
          path="/dashboard/admin/donations"
          element={<Donations />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
