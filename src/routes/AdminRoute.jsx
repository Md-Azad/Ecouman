import { useNavigate } from "react-router";
import useRole from "../hooks/useRole";
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
  const [role, isLoading, isError] = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !role === "admin") {
      navigate("/login");
    }
  }, [role, isLoading, navigate]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>there is something wrong.</p>;
  }

  if (role === "admin") return children;
};

export default AdminRoute;
