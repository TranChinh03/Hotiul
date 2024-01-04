import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const SERVICE = [
	{
		ID: 'S01',
		Service: 'Noodles',
		Price: 1000000,
		Available: 50,
	},
	{
		ID: 'S02',
		Service: 'Beer',
		Price: 1000000,
		Available: 50,
	},
	{
		ID: 'S03',
		Service: 'Coca-cola',
		Price: 1000000,
		Available: 50,
	},
	{
		ID: 'S04',
		Service: 'Pepsi',
		Price: 1000000,
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