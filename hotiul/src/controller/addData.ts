import { setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { TBooking, TCustomer, TFee, TRefund, TRoom, TRoomType, TService, TStaff } from "../variables/type";

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

  data: any
};
const addData = async ({ data, table, id }: params) => {
  await setDoc(doc(db, `/${table}/`, id), data)
    .then(() => {
      console.log(">>>>>>>>>> Add Data >>>>>>>>>>");
    })
    .catch((e) => console.log(e));
};

const updateData = async ({ data, table, id }: params) => {
  //console.log("OKKK");
  await updateDoc(doc(db, `/${table}/`, id), data)
    .then(() => {
      console.log(">>>>>>>>>> Update Data >>>>>>>>>>");
    })
    .catch((e) => console.log(e));
};
export { addData, updateData };
