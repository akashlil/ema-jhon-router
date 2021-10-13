import React, { createContext } from "react";
import useFirebaseAuth from "../components/Hock/useFirebase";

export const AuthContextProvider = createContext();
const AuthContext = ({ children }) => {
  const allFireBaseValue = useFirebaseAuth();
  return (
    <AuthContextProvider.Provider value={allFireBaseValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
