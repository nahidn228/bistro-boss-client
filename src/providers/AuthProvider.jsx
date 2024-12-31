/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = {
    setUser,
    user,
    setLoading,
    loading,
    
  };
  return (
    <AuthContext.provider value={authInfo}>{children}</AuthContext.provider>
  );
};

export default AuthProvider;
