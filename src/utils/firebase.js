// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-d4688.firebaseapp.com",
  projectId: "blogapp-d4688",
  storageBucket: "blogapp-d4688.appspot.com",
  messagingSenderId: "509649499569",
  appId: "1:509649499569:web:0321401bb6e1667f297990"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);