import { useContext } from "react";
import { AuthContextProvider } from "./AuthContext";

const useAuth = () => {
  return useContext(AuthContextProvider);
};

export default useAuth;
