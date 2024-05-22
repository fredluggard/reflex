import React, { useState, useEffect } from 'react';
import Settings from '../components/Settings';
import axios from 'axios';
import UserDetails from '../components/UserDetails';
import EmergencyContactsList from '../components/EmergencyContactsList';

const defaultContacts = [
  {
    id: '1',
    name: 'Julia Brown',
    relationship: 'Mom',
    phone: '08055589823',
    picture: '/images/julia-brown.png'
  },
  {
    id: '2',
    name: 'David Brown',
    relationship: 'Dad',
    phone: '09011358982',
    picture: '/images/david-brown.png'
  },
  {
    id: '3',
    name: 'Rose Brown',
    relationship: 'Sister',
    phone: '07045129901',
    picture: '/images/rose-brown.png'
  },
  {
    id: '4',
    name: 'Joe Brown',
    relationship: 'Brother',
    phone: '08199540177',
    picture: '/images/joe-brown.png'
  }
];

const defaultUser = {
  name: 'Not Available',
  bloodtype: 'Not Available',
  genotype: 'Not Available',
};

function EmergencyContacts() {
  const [user, setUser] = useState(defaultUser);
  const [contacts, setContacts] = useState(defaultContacts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          setLoading(false); // No user ID found, use default user
          return;
        }

        const userResponse = await axios.get(`https://reflex1-3.onrender.com/api/users/${userId}`);
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
      <div className='px-4'>
        <div className='px-6 pb-8 md:hidden'>
            <img src="/images/Back-arrow.png" alt="" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:mx-16 md:my-8 text-xs md:text-base">
            <div className='hidden md:flex'>
                <Settings />
            </div>  
            <div className="md:bg-[#F5F5F5] rounded md:px-4 md:pt-4 md:pb-24 md:w-[70%]">
                <UserDetails user={user} />
                <EmergencyContactsList contacts={contacts} onNewContact={handleNewContact} />
            </div>
        </div>
        <div className='flex justify-end px-4 py-2 text-lg border-t-2 md:hidden'>
            <button>Cancel</button>
        </div>
      </div>
  );
}

export default EmergencyContacts;
