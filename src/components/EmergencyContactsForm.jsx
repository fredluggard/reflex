import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EmergencyContactsForm({ onNewContact }) {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(), // simple unique ID for demo purposes
      name,
      relationship,
      phone,
      picture
    };
    onNewContact(newContact);
    setName('');
    setRelationship('');
    setPhone('');
    setPicture('');
    history.push('/'); // Navigate back to the main contacts page
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <div>
        <label>Relationship</label>
        <input
          type="text"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <div>
        <label>Picture URL</label>
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          className="border p-1"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Add Contact</button>
    </form>
  );
}

export default EmergencyContactsForm;
