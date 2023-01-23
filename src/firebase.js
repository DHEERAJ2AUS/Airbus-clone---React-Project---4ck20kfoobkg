// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBoCwoAwvgtrMJgsWPgyBpUsXrV3CxS5U",
  authDomain: "airbus-ce825.firebaseapp.com",
  projectId: "airbus-ce825",
  storageBucket: "airbus-ce825.appspot.com",
  messagingSenderId: "524312709030",
  appId: "1:524312709030:web:9fb6d6731e0d26760c7167",
  measurementId: "G-1YZQ7D23RT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth , provider , db };
