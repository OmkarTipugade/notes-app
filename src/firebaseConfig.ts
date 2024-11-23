// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCseDbvudKbIzkNL-MKvsywYYZGaYgwAgg",
  authDomain: "notes-3baaf.firebaseapp.com",
  projectId: "notes-3baaf",
  storageBucket: "notes-3baaf.firebasestorage.app",
  messagingSenderId: "1093213254757",
  appId: "1:1093213254757:web:32c01c094753bfa43b828c",
  measurementId: "G-CXM43P0FZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
