// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChvccpHnqMH8mS5he7ANFaE1wrkdkXB_k",
  authDomain: "serviceing-6e26a.firebaseapp.com",
  projectId: "serviceing-6e26a",
  storageBucket: "serviceing-6e26a.appspot.com",
  messagingSenderId: "22270440822",
  appId: "1:22270440822:web:5f85294d070532a78e3657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;