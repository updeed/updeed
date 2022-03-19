import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
