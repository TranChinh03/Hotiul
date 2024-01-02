import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
type params = {
  id: string;
  table:
    | "Voucher"
    | "Partner"
    | "Group_Product"
    | "Product"
    | "Orders"
    | "Ware_House"
    | "Shelf";
};
const deleteData = async ({ id, table }: params) => {
  let userId = window.localStorage.getItem("USER_ID");
  await deleteDoc(doc(db, `${table}`, id));
};
export { deleteData };
