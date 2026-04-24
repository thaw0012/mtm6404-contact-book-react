import { useState, useEffect } from 'react';
import db from './utils/db';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './App.css';

const App = () => {

  // create state variable
  const [contacts, setContacts] = useState([]);

  //create a function to fetch the data from firestore
  const fetchContacts = async () => {
    const docSnapshot = await getDocs(collection(db, "contacts"));
    const data = docSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setContacts(data);
  }

  //when the page loads, this will run once
  useEffect(() => {
    
    fetchContacts();
    
  }, []);

  return (
    <>
      <h1>MTM6404 Contact Book</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              {(contact.first_name || contact.firstName)} {(contact.last_name || contact.lastName)}
            </Link>
          </li>
        ))}
    </ul>
    <button>
      <Link to="/add">Add Contact</Link>
    </button>
    </>
  );
}

export default App;

