
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPdORDDUl8WnBWVg694zBJDObskTKZRJw",
  authDomain: "web-iphone.firebaseapp.com",
  projectId: "web-iphone",
  storageBucket: "web-iphone.firebasestorage.app",
  messagingSenderId: "769322766713",
  appId: "1:769322766713:web:20faf96fb51e9519725fa8",
  measurementId: "G-S32ERZ0KBS"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app,auth}