// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHsqVwbUqwLpKK28BiGB5w9JR0QQbV3Qg",
  authDomain: "shopsmall-4ea64.firebaseapp.com",
  projectId: "shopsmall-4ea64",
  storageBucket: "shopsmall-4ea64.appspot.com",
  messagingSenderId: "921676186714",
  appId: "1:921676186714:web:af64ee75b9b5d41f3a0463",
  measurementId: "G-MR3DD1G172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
