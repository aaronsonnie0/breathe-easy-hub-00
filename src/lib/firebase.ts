
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7SqlIrlRMvRWxenuDq2CyMnlMXH74d9Q",
  authDomain: "aptic-c9903.firebaseapp.com",
  projectId: "aptic-c9903",
  storageBucket: "aptic-c9903.appspot.com", // Fixed the storage bucket URL
  messagingSenderId: "1018840082099",
  appId: "1:1018840082099:web:705ba13df2b8b3fa3172c6",
  measurementId: "G-KDJDDQMP5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
