import React, { useState, useEffect } from "react";
import Settings from "../components/Settings";
import axios from "axios";
import UserDetails from "../components/UserDetails";
import EmergencyContactsList from "../components/EmergencyContactsList";
import { useAuth } from "../Contexts/AuthContext";
import NavBar from "../components/NavBar";

const defaultUser = {
  name: "Not Available",
  bloodtype: "Not Available",
  genotype: "Not Available",
};

function EmergencyContacts() {
  const { contacts, setContacts } = useAuth();
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setLoading(false); // No user ID found, use default user
          return;
        }

        const userResponse = await axios.get(
          `https://reflex1-3.onrender.com/api/users/${userId}`
        );
        setUser(userResponse.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="px-4">
      <nav>
        <NavBar />
      </nav>
      <div className="px-6 pb-8 md:hidden">
        <img src="/images/Back-arrow.png" alt="" />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:mx-16 md:my-8 text-xs md:text-base">
        <div className="hidden md:flex">
          <Settings />
        </div>
        <div className="md:bg-[#F5F5F5] rounded md:px-4 md:pt-4 md:pb-24 md:w-[70%]">
          <UserDetails user={user} />
          <EmergencyContactsList
            contacts={contacts}
            onNewContact={handleNewContact}
          />
        </div>
      </div>
      <div className="flex justify-end px-4 py-2 text-lg border-t-2 md:hidden">
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default EmergencyContacts;
