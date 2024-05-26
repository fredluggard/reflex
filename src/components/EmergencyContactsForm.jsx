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
    <form onSubmit={handleSubmit} className="mt-4">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <div>
        <label htmlFor="relationship">Relationship</label>
        <input
          type="text"
          id="relationship"
          name="relationship"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <div>
        <label htmlFor="picture">Contact Picture</label>
        <input
          type="file"
          id="picture"
          name="picture"
          onChange={handleFileChange}
          className="border p-1"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Add Contact
      </button>
    </form>
  );
}

export default EmergencyContactsForm;
