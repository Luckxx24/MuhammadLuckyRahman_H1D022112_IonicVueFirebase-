// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB8am4nQJZG7BzAnSHDD0wmo2ZpfpaRTlI",
    authDomain: "vue-firebase-81a2d.firebaseapp.com",
    projectId: "vue-firebase-81a2d",
    storageBucket: "vue-firebase-81a2d.firebasestorage.app",
    messagingSenderId: "127125380906",
    appId: "1:127125380906:web:bfcf19e110896b0beac853",
    measurementId: "G-22KXC7CKH4"
  };
  

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);


export { auth, googleProvider,db };
