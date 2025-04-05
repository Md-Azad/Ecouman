import { useNavigate } from "react-router";
import useRole from "../hooks/useRole";
import { useEffect, useState } from "react";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(role);

  useEffect(() => {
    if (role) {
      setUserRole(role);
    }
  }, [role, isLoading, navigate]);
  if (isLoading) {
    return <p>loading.... </p>;
  }

  if (userRole === "admin") return children;

  return null;
};

export default AdminRoute;
