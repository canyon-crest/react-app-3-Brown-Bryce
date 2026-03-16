// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdpsdA5fUTGdYZkatokLcR36-n3U180kI",
    authDomain: "harefirsebase.firebaseapp.com",
    projectId: "harefirsebase",
    storageBucket: "harefirsebase.firebasestorage.app",
    messagingSenderId: "522671160281",
    appId: "1:522671160281:web:fe05ff48c3cacd1b6477c8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
