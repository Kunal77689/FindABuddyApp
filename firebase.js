import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC499BNDT6mP8QbD-MQlyVLijKiR9jZRgQ",
  authDomain: "find-a-buddy-c02cb.firebaseapp.com",
  projectId: "find-a-buddy-c02cb",
  storageBucket: "find-a-buddy-c02cb.appspot.com",
  messagingSenderId: "66522869999",
  appId: "1:66522869999:web:d260a941a0e08a20252b1a",
  measurementId: "G-VW6HZMGJW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
