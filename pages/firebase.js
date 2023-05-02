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

const app = firebase.initializeApp({
  apiKey: "AIzaSyBwiV6u8kFeZX3h1m5ATQeda8HK-es0QvQ",
  authDomain: "react-firechat-b8b90.firebaseapp.com",
  databaseURL: "https://react-firechat-b8b90-default-rtdb.firebaseio.com",
  projectId: "react-firechat-b8b90",
  storageBucket: "react-firechat-b8b90.appspot.com",
  messagingSenderId: "302664401390",
  appId: "1:302664401390:web:17700304c78632d7b08eff"
});

export const storage = getStorage(app);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const database = getDatabase(app);