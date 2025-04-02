import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import Contact from "../components/rootComponents/Contact";

const PrivateRoute = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user?.email) {
    return <Contact />;
  }
  if (!user?.emil) {
    navigate("/login");
    setLoading(false);
  }
};

export default PrivateRoute;
