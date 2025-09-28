// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxR4EIiz7pFyDXMasvu_g6hxDIwy8locI",
  authDomain: "the-silver-screen-07-35731.firebaseapp.com",
  projectId: "the-silver-screen-07-35731",
  storageBucket: "the-silver-screen-07-35731.firebasestorage.app",
  messagingSenderId: "1009812850283",
  appId: "1:1009812850283:web:b2e461538b9d311b01932e",
  measurementId: "G-VNYP13DDEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
