import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const REFUND = [
	{ ID: 'RF001', CustomerID: 'C01', CustomerName: 'Nguyen Khach Mot', RoomID: 'R404', BookingID: 'B003', RefundStatus: 'Completed', RefundMoney: 4000, RefundDate: '05/01/2024', RefundReason: 'Hotel is out of room', BankName: 'ACB', BankAccount: '123321' },
	{ ID: 'RF002', CustomerID: 'C02', CustomerName: 'Tran Khach Hai', RoomID: 'R801', BookingID: 'B008', RefundStatus: 'Incompleted', RefundMoney: 2400, RefundDate: '07/01/2024', RefundReason: 'Customer cancel', BankName: 'VCB', BankAccount: '8515231' },
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