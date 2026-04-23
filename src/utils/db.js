// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLsQH2hYzOmcke4BXyCc0cfUXZFwRTN8",
  authDomain: "mtm6404-contact-book-3310c.firebaseapp.com",
  projectId: "mtm6404-contact-book-3310c",
  storageBucket: "mtm6404-contact-book-3310c.firebasestorage.app",
  messagingSenderId: "72209342420",
  appId: "1:72209342420:web:2abf0cb47d114cd1eb0041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;