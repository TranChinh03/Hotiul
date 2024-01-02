// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACK1byUNHYBvi0aJRiHzmDbM4XHoCAB5A",
  authDomain: "hotiul.firebaseapp.com",
  projectId: "hotiul",
  storageBucket: "hotiul.appspot.com",
  messagingSenderId: "13250723084",
  appId: "1:13250723084:web:27908d4224d230113fdd29",
  measurementId: "G-36RW5PYSM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);