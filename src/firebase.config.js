// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDePtpahU2ZisnlDKebRWdB7Y0w5eHLAIA",
  authDomain: "food-create-dcbed.firebaseapp.com",
  projectId: "food-create-dcbed",
  storageBucket: "food-create-dcbed.firebasestorage.app",
  messagingSenderId: "363367831952",
  appId: "1:363367831952:web:3ae98c267b36662b25fb15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);