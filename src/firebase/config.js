import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVAzhfRA62D1ra25RS42rYsdLRkWkn0Ig",
  authDomain: "fajneforum-5babd.firebaseapp.com",
  projectId: "fajneforum-5babd",
  storageBucket: "fajneforum-5babd.appspot.com",
  messagingSenderId: "484393280026",
  appId: "1:484393280026:web:fbfcf966e35ddbcce427a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);