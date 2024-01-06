import {
    deleteDoc,
    doc,
    increment,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "../firebaseConfig";
  type params = {
    prefix: "B" | "C" | "F" | "RF" | "R" | "RT" | "S" | "SV"
  }; 
  
  const createID = ({ prefix }: params): string => {
    return `${prefix}${Math.floor(Math.random() * 100000)}`;
  };

export default {createID}

