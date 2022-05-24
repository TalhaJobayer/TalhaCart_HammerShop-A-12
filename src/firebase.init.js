// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbG6_Fm1iR1RDiw9IH41rKineadwRLiJU",
  authDomain: "talhacart-d2e37.firebaseapp.com",
  projectId: "talhacart-d2e37",
  storageBucket: "talhacart-d2e37.appspot.com",
  messagingSenderId: "1082186901268",
  appId: "1:1082186901268:web:ad1a8445b1293172b20401",
  measurementId: "G-Y72FGB3WFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
