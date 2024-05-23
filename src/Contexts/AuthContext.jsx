import React, { createContext, useState, useContext, useEffect } from "react";
import defaultContacts from "../defaultContacts.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isVerified, setIsVerified] = useState(() => {
    const savedState = localStorage.getItem("isVerified");
    return savedState;
  });
  const [contacts, setContacts] = useState(defaultContacts);

  useEffect(() => {
    localStorage.setItem("isVerified", isVerified);
  }, [isVerified]);

  return (
    <AuthContext.Provider
      value={{
        activeLink,
        setActiveLink,
        isLoggedIn,
        setIsLoggedIn,
        isVerified,
        setIsVerified,
        contacts,
        setContacts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
