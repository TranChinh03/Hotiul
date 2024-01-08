// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Hotiul 1
// const firebaseConfig = {
//   apiKey: "AIzaSyACK1byUNHYBvi0aJRiHzmDbM4XHoCAB5A",
//   authDomain: "hotiul.firebaseapp.com",
//   projectId: "hotiul",
//   storageBucket: "hotiul.appspot.com",
//   messagingSenderId: "13250723084",
//   appId: "1:13250723084:web:27908d4224d230113fdd29",
//   measurementId: "G-36RW5PYSM7",
// };

// Hotiul 2
// const firebaseConfig = {
//   apiKey: "AIzaSyBnqcFDMddroMdne3qVmdF6BTMzYeRUUNo",
//   authDomain: "hotiul2.firebaseapp.com",
//   projectId: "hotiul2",
//   storageBucket: "hotiul2.appspot.com",
//   messagingSenderId: "14324845591",
//   appId: "1:14324845591:web:1258441a1cafbdcde0e052",
//   measurementId: "G-V9FBMQMK08",
// };

//Hotiul 3
const firebaseConfig = {
  apiKey: "AIzaSyDQLfSxe8XmDoOukdsdkG3m198UfmCpVrc",
  authDomain: "hotiul3.firebaseapp.com",
  projectId: "hotiul3",
  storageBucket: "hotiul3.appspot.com",
  messagingSenderId: "442975610624",
  appId: "1:442975610624:web:cf92301da2d0f42abc35e5",
  measurementId: "G-EXMZDDRZFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
