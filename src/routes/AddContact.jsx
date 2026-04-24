import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import db from '../utils/db';

function AddContact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, 'contacts'), {
      first_name: firstName,
      last_name: lastName,
      email: email
    });
    navigate('/');
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="First Name" onChange={e => setFirstName(e.target.value)} required />
      <input placeholder="Last Name" onChange={e => setLastName(e.target.value)} required />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Save Contact</button>
    </form>
  )
}

export default AddContact;

