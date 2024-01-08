import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const BOOKING = [
	{
		ID: 'B001',
		CustomerID: 'C01',
		RoomID: 'R101',
		CheckIn: '01/01/2024',
		CheckOut: '03/01/2024',
		isCanceled: false,
		PaymentStatus: 'Paid Fully',
		Price: 1000000,
	},
	{
		ID: 'B002',
		CustomerID: 'C02',
		RoomID: 'R804',
		CheckIn: '02/02/2024',
		CheckOut: '05/02/2024',
		isCanceled: false,
		PaymentStatus: '80%',
		Price: 2000000,
	},
	{
		ID: 'B003',
		CustomerID: 'C01',
		RoomID: 'R404',
		CheckIn: '12/01/2024',
		CheckOut: '15/01/2024',
		isCanceled: true,
		PaymentStatus: '50%',
		Price: 8000000,
	},
	{
		ID: 'B004',
		CustomerID: 'C01',
		RoomID: 'R101',
		CheckIn: '06/01/2024',
		CheckOut: '10/01/2024',
		isCanceled: false,
		PaymentStatus: 'Paid Fully',
		Price: 2500000,
	},
	{
		ID: 'B005',
		CustomerID: 'C02',
		RoomID: 'R602',
		CheckIn: '13/04/2024',
		CheckOut: '15/04/2024',
		isCanceled: false,
		PaymentStatus: '80%',
		Price: 1800000,
	},
	{
		ID: 'B006',
		CustomerID: 'C01',
		RoomID: 'R101',
		CheckIn: '01/06/2024',
		CheckOut: '06/06/2024',
		isCanceled: false,
		PaymentStatus: 'Paid Fully',
		Price: 3200000,
	},
	{
		ID: 'B007',
		CustomerID: 'C02',
		RoomID: 'R202',
		CheckIn: '04/05/2024',
		CheckOut: '09/05/2024',
		isCanceled: false,
		PaymentStatus: 'Paid Fully',
		Price: 5000000,
	},
	{
		ID: 'B008',
		CustomerID: 'C02',
		RoomID: 'R801',
		CheckIn: '07/07/2024',
		CheckOut: '12/07/2024',
		isCanceled: true,
		PaymentStatus: '50%',
		Price: 2400000,
	},
	{
		ID: 'B009',
		CustomerID: 'C01',
		RoomID: 'R902',
		CheckIn: '08/10/2024',
		CheckOut: '10/10/2024',
		isCanceled: false,
		PaymentStatus: 'Paid Fully',
		Price: 5000000,
	},
];

export const addDbBooking = async () => {
	BOOKING.map(async (b) => {
		await setDoc(
			doc(
				db,
				"BOOKING",
				b.ID
			),
			b
		);
	});
};