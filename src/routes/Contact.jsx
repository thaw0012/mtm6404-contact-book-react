import { useState, useEffect } from "react";
import db from '../utils/db';
import { doc, getDocs } from "firebase/firestore";
import {useParams} from "react-router-dom";

export const Contact = () => {

    //set up a state variable for contact
    const [contact, setContact] = useState({});

    //id from the route params
    const {id} = useParams();

    //create a function to fetch contact
    const fetchContactById = async (contactId) => {
        const docRef = doc(db, "contacts", contactId);
        const docSnapshot = await getDoc(docRef);

        //check if the doc exists in firestore
        if (docSnapshot.exists()) {
            setContact({
                id: docSnapshot.id,
                ...docSnapshot.data()
            });
        } else {
            alert('Contact does not exist in our records! Please provide a valid contact id');
            return null;
        }
    }

    useEffect(() => {
        fetchContactById(id);
    }, [id]);

    // console.log(contact);

    return (
        //Contact View
        <>
            <h1>{`${contact.firstName} ${contact.lastName} `}</h1>
            <p>Email: {contact.email} </p>
        </>
    );
}

export default Contact;