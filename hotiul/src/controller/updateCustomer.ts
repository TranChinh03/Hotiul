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

const UpdateCustomer = async (
  id: string,
  ctzID: string,
  gender: string,
  name: string,
  phone: string
) => {
  const docRef = doc(db, "CUSTOMER", id);
  await updateDoc(docRef, {
    CitizenID: ctzID,
    Gender: gender,
    Name: name,
    Phone: phone,
  });
};

export { UpdateCustomer };
