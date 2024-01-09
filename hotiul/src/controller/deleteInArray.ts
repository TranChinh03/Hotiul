import {
  arrayRemove,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const DeleteService = async (id: string, idBooking: string) => {
  const docRef = doc(db, `BOOKING`, idBooking);
  console.log(docRef);
  //   await updateDoc(docRef, {
  //     Services: arrayRemove(id),
  //   });
};

export { DeleteService };
