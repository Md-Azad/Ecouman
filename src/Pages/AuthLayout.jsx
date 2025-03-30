import { Outlet } from "react-router";
import AuthProvider from "../provider/AuthProvider";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default AuthLayout;
