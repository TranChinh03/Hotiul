import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const SERVICE = [
	{
		ID: 'S01',
		Service: 'Noodles',
		TotalPrice: 1000000,
		Available: 50,
	},
	{
		ID: 'S02',
		Service: 'Beer',
		TotalPrice: 1000000,
		Available: 50,
	},
	{
		ID: 'S03',
		Service: 'Coca-cola',
		TotalPrice: 1000000,
		Available: 50,
	},
];

export const addDbService = async () => {
	SERVICE.map(async (b) => {
	  await setDoc(
		doc(
		  db,
		  "SERVICE",
		  b.ID
		),
		b
	  );
	});
  };