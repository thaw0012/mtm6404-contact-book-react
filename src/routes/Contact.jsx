import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import db from '../utils/db';

function Contact() {
  const { id } = useParams()
  const [contact, setContact] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const docRef = doc(db, 'contacts', id)
    getDoc(docRef).then(s => s.exists() && setContact(s.data()))
  }, [id])

  const deleteHandler = async () => {
    await deleteDoc(doc(db, 'contacts', id))
    navigate('/')
  }

  if (!contact) return <p>Loading...</p>

  return (
    <div className="details">
      <h2>{contact.first_name} {contact.last_name}</h2>
      <p>Email: {contact.email}</p>
      <button onClick={deleteHandler}>Delete Contact</button>
    </div>
  )
}

export default Contact

