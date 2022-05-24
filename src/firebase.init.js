// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyCbG6_Fm1iR1RDiw9IH41rKineadwRLiJU",
  authDomain:process.env.REACT_USER_authDomain,
  projectId:process.env.REACT_USER_projectId,
  storageBucket:process.env.REACT_USER_storageBucket,
  messagingSenderId:process.env.REACT_USER_messagingSenderId, 
  appId:process.env.REACT_USER_appId,
  measurementId:process.env.REACT_USER_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
