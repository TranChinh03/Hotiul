import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const REFUND = [
	{ ID: 'RF001', CustomerID: 'C0330', CustomerName: 'Nguyen Khach Mot', RoomID: 'R404', BookingID: 'B0023', RefundStatus: 'Completed', RefundMoney: 675, RefundDate: '05/01/2024', RefundReason: 'Hotel is out of room', BankName: 'ACB', BankAccount: '123321' },
	{ ID: 'RF002', CustomerID: 'C0663', CustomerName: 'Tran Khach Hai', RoomID: 'R801', BookingID: 'B0056', RefundStatus: 'Incompleted', RefundMoney: 250, RefundDate: '07/01/2024', RefundReason: 'Customer cancel', BankName: 'VCB', BankAccount: '8515231' },
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