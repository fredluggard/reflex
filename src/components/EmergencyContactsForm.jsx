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
        <label>Picture URL</label>
        <input
          type="image"
          alt="Add a picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
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
