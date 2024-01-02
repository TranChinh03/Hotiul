import { setDoc, doc, updateDoc } from "firebase/firestore";
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

  data:
      TBooking
    | TCustomer
    | TFee
    | TRefund
    | TRoom
    | TRoomType
    | TService
    | TStaff;
};
const addData = async ({ data, table, id }: params) => {
  let userId = window.localStorage.getItem("USER_ID");
  await setDoc(doc(db, `${table}`, id), data)
    .then(() => {
      console.log(">>>>>>>>>> Add Data >>>>>>>>>>");
    })
    .catch((e) => console.log(e));
};

const updateData = async ({ data, table, id }: params) => {
  let userId = window.localStorage.getItem("USER_ID");
  //console.log("OKKK");
  await updateDoc(doc(db, `${table}`, id), data)
    .then(() => {
      console.log(">>>>>>>>>> Update Data >>>>>>>>>>");
    })
    .catch((e) => console.log(e));
};
export { addData, updateData };
