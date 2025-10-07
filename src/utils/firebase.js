// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYwVIV-MKSab9I1PZ1_fwbtxGPnWQ_lCM",
  authDomain: "netflixgpt-11ed4.firebaseapp.com",
  projectId: "netflixgpt-11ed4",
  storageBucket: "netflixgpt-11ed4.firebasestorage.app",
  messagingSenderId: "213194249799",
  appId: "1:213194249799:web:5119c6870679c9cf9c0362",
  measurementId: "G-4KGM1X4PXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();