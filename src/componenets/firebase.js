// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjIOLG7TWwPDMDt7f8LXwXDY-mCA34Wm4",
  authDomain: "netflix-gpt-5f2e9.firebaseapp.com",
  projectId: "netflix-gpt-5f2e9",
  storageBucket: "netflix-gpt-5f2e9.appspot.com",
  messagingSenderId: "731856951311",
  appId: "1:731856951311:web:be96725246357934f5eb7a",
  measurementId: "G-M6GG7Q71TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
