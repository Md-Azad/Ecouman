// routes/RoleBasedRoute.js
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useRole from "../hooks/useRole";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const [role, isLoading] = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!role || !allowedRoles.includes(role))) {
      navigate("/login");
    }
  }, [role, isLoading, navigate, allowedRoles]);

  if (isLoading) return <p>Loading...</p>;
  if (allowedRoles.includes(role)) return children;

  return null;
};

export default RoleBasedRoute;
