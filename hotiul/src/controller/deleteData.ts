import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
type params = {
  id: string;
  table:
    | "BOOKING"
    | "CUSTOMER"
    | "FEE"
    | "REFUND"
    | "ROOM"
    | "ROOM_TYPE"
    | "SERVICE"
    | "STAFF";
};
const deleteData = async ({ id, table }: params) => {
  let userId = window.localStorage.getItem("USER_ID");
  await deleteDoc(doc(db, `${table}`, id));
};
export { deleteData };
