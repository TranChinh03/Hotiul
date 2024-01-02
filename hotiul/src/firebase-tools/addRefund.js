import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const REFUND = [
	{ ID: 'RF001', CustomerID: 'C01', RoomID: 'R404', BookingID: 'B003', RefundStatus: 'Completed' },
	{ ID: 'RF002', CustomerID: 'C02', RoomID: 'R801', BookingID: 'B008', RefundStatus: 'Incompleted' },
];

export const addDbRefund = async () => {
	REFUND.map(async (b) => {
	  await setDoc(
		doc(
		  db,
		  "REFUND",
		  b.ID
		),
		b
	  );
	});
  };