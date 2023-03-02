// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgpok0xcA8Lbi0tJKl3wpojnoeRNJRPf4",
    authDomain: "auth-86fec.firebaseapp.com",
    projectId: "auth-86fec",
    storageBucket: "auth-86fec.appspot.com",
    messagingSenderId: "243401428482",
    appId: "1:243401428482:web:91808b41109b9f6219211b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
