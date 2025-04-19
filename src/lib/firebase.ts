
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZ8XhGlJiuT1Kzit-i0qW35zwVS9kbNAk",
  authDomain: "astreva-d577a.firebaseapp.com",
  projectId: "astreva-d577a",
  storageBucket: "astreva-d577a.firebasestorage.app",
  messagingSenderId: "318306789812",
  appId: "1:318306789812:web:97cc23e44c24836e3c2ae1",
  measurementId: "G-EP6TJYTLJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);

// Get Auth instance
export const auth = getAuth(app);

export default app;
