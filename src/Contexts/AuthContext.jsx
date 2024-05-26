import React, { createContext, useState, useContext, useEffect } from "react";
import defaultContacts from "../defaultContacts.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeMap, setActiveMap] = useState("All");
  const [activeLink, setActiveLink] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [activeOption, setActiveOption] = useState("Accountpreference");
  const [contacts, setContacts] = useState(defaultContacts);
  const initialFormState = {
    firstname: "",
    lastname: "",
    location: "",
  };
  const handleNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const options = [
    "First Aid",
    "Fire Safety",
    "Road Safety",
    "Substance Abuse",
    "Domestic Violence",
    "Emergency Contacts",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [userData, setUserData] = useState(initialFormState);
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
        userData,
        setUserData,
        initialFormState,
        activeOption,
        setActiveOption,
        handleNewContact,
        selectedOption,
        setSelectedOption,
        options,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
