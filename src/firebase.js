import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// your web apps firebase-configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_NO51xmeA8o6P3FRTHvmdFxWvOFvQ2ws",
  authDomain: "todo-crud-2ca22.firebaseapp.com",
  projectId: "todo-crud-2ca22",
  storageBucket: "todo-crud-2ca22.appspot.com",
  messagingSenderId: "884885641599",
  appId: "1:884885641599:web:0e26b4cf1874a3e29ba24a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
