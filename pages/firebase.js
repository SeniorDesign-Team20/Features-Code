// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from "firebase/storage";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// firebase.initializeApp({
//     apiKey: "AIzaSyAgpok0xcA8Lbi0tJKl3wpojnoeRNJRPf4",
//     authDomain: "auth-86fec.firebaseapp.com",
//     projectId: "auth-86fec",
//     databaseURL: "https://react-firechat-b8b90-default-rtdb.firebaseio.com",
//     storageBucket: "auth-86fec.appspot.com",
//     messagingSenderId: "243401428482",
//     appId: "1:243401428482:web:91808b41109b9f6219211b"
//   });


// //Initialize Firebase
// export const storage = firebase.storage;
// export const auth = firebase.auth();
// export const db = firebase.firestore();

const app = firebase.initializeApp({
  apiKey: "AIzaSyAgpok0xcA8Lbi0tJKl3wpojnoeRNJRPf4",
  authDomain: "auth-86fec.firebaseapp.com",
  projectId: "auth-86fec",
  databaseURL: "https://auth-86fec-default-rtdb.firebaseio.com/",
  storageBucket: "auth-86fec.appspot.com",
  messagingSenderId: "243401428482",
  appId: "1:243401428482:web:91808b41109b9f6219211b"
});

export const storage = getStorage(app);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const database = getDatabase(app);

// const firebaseConfig = {
//     apiKey: "AIzaSyAgpok0xcA8Lbi0tJKl3wpojnoeRNJRPf4",
//     authDomain: "auth-86fec.firebaseapp.com",
//     projectId: "auth-86fec",
//     databaseURL: "https://react-firechat-b8b90-default-rtdb.firebaseio.com",
//     storageBucket: "auth-86fec.appspot.com",
//     messagingSenderId: "243401428482",
//     appId: "1:243401428482:web:91808b41109b9f6219211b"
//   };

// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app)
// export const auth = getAuth(app);
// export const db = app.firestore;