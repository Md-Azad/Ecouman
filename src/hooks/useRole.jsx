import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useGetUserQuery } from "../features/user/userSlice";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetUserQuery(user?.email);

  return [data?.role, isLoading, isError];
};

export default useRole;
