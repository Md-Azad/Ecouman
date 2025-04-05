import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useGetUserQuery } from "../features/user/userSlice";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, isSuccess } = useGetUserQuery(user?.email);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong.</p>;
  }
  if (isSuccess) {
    return [data?.role, isLoading];
  }
};

export default useRole;
