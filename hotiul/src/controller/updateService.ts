import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const UpdateService = async (id: string, available: Number) => {
  const docRef = doc(db, "SERVICE", id);
  await updateDoc(docRef, {
    Available: available,
  }).then(() => {
    console.log("Update service Successfully");
  });
};

export { UpdateService };
