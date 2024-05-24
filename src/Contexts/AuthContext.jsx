import React, { createContext, useState, useContext, useEffect } from "react";
import defaultContacts from "../defaultContacts.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeMap, setActiveMap] = useState("All");
  const [activeLink, setActiveLink] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
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
        activeMap,
        setActiveMap,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
