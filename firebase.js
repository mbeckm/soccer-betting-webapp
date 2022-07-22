// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU3ax95dOLXNm23X3m_uzvsL4HajJuKlM",
  authDomain: "soccer-betting-app-ead10.firebaseapp.com",
  projectId: "soccer-betting-app-ead10",
  storageBucket: "soccer-betting-app-ead10.appspot.com",
  messagingSenderId: "1003675292222",
  appId: "1:1003675292222:web:a10d1cd4a375b817f8376f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
