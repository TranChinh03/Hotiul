import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const getOne = async (table: string, id: string, order?: string) => {
  const docRef = doc(db, table, id);
  const data = await getDoc(docRef);
  return data.data();
};

export { getOne };
