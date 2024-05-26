import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function EmergencyContactsForm() {
  const { handleNewContact } = useAuth();
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(), // simple unique ID for demo purposes
      name,
      relationship,
      phone,
      picture,
    };
    handleNewContact(newContact);
    setName("");
    setRelationship("");
    setPhone("");
    navigate("/emergencycontacts");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPicture(URL.createObjectURL(file));
    } else {
      setPicture(null);
    }
  };

  return (
    <div>
    <h2 className="flex justify-center mt-8 text-xl font-semibold text-[#DF3442]">Add a new Emergency contact</h2>
    <div className="flex justify-center items-center h-screen">
    
    <form onSubmit={handleSubmit} className="w-screen p-12">
    <div className=" mb-4">
    <label htmlFor="name" className="block font-semibold mb-1">Name</label>
    <input
    type="text"
    id="name"
    name="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="border border-[#DF3442] w-full md:w-1/2 rounded p-2"
    required
    />
    </div>
    <div className=" mb-4">
    <label htmlFor="relationship" className="block font-semibold mb-1">Relationship</label>
    <input
    type="text"
    id="relationship"
    name="relationship"
    value={relationship}
    onChange={(e) => setRelationship(e.target.value)}
    className="border border-[#DF3442] w-full md:w-1/2 rounded p-2"
    required
    />
    </div>
    <div className=" mb-4">
    <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
    <input
    type="text"
    id="phone"
    name="phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="border border-[#DF3442] w-full md:w-1/2 rounded p-2"
    required
    />
    </div>
    <div className=" mb-4">
    <label className="block font-semibold mb-1" htmlFor="picture">Contact Picture</label>
    <input
    type="file"
    id="picture"
    name="picture"
    onChange={handleFileChange}
    className="border border-[#DF3442] rounded p-8"
    required
    />
    </div>
    <button type="submit" className="btn btn-primary bg-[#DF3442] text-white border rounded-xl px-8 mt-2">
    Add Contact
    </button>
    </form>
    </div>
          
    </div>
  );
}

export default EmergencyContactsForm;
