import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmergencyContactsForm({ onNewContact }) {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(), // simple unique ID for demo purposes
      name,
      relationship,
      phone,
      picture,
    };
    onNewContact(newContact);
    setName("");
    setRelationship("");
    setPhone("");
    setPicture("");
    history("/"); // Navigate back to the main contacts page
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
    <label className="block font-semibold mb-1">Picture URL</label>
    <input
    type="image"
    alt="Add a picture"
    value={picture}
    onChange={(e) => setPicture(e.target.value)}
    className="border border-[#DF3442] rounded p-12"
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
