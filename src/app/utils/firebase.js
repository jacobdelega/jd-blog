// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-app-bc41d.firebaseapp.com",
  projectId: "blog-app-bc41d",
  storageBucket: "blog-app-bc41d.appspot.com",
  messagingSenderId: "289934245068",
  appId: "1:289934245068:web:0a8d426b94c3fa24e89669",
  measurementId: "G-PHR1M8Q6BS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
