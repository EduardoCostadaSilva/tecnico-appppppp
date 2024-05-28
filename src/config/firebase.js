import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAK-Twe9ThWNgd73nNk7p263BcuwkdLKys",
  authDomain: "tec2024-ad7d4.firebaseapp.com",
  projectId: "tec2024-ad7d4",
  storageBucket: "tec2024-ad7d4.appspot.com",
  messagingSenderId: "268280765721",
  appId: "1:268280765721:web:30681b9384b1ece4a83988"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);