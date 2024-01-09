import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const SERVICE = [
	{
	  "ID": "S0001",
	  "Service": "Pizza",
	  "Price": 25,
	  "Available": 979
	},
	{
	  "ID": "S0002",
	  "Service": "Burger",
	  "Price": 25,
	  "Available": 283
	},
	{
	  "ID": "S0003",
	  "Service": "Sushi",
	  "Price": 25,
	  "Available": 564
	},
	{
	  "ID": "S0004",
	  "Service": "Pasta",
	  "Price": 25,
	  "Available": 355
	},
	{
	  "ID": "S0005",
	  "Service": "Tacos",
	  "Price": 25,
	  "Available": 459
	},
	{
	  "ID": "S0006",
	  "Service": "Coffee",
	  "Price": 25,
	  "Available": 554
	},
	{
	  "ID": "S0007",
	  "Service": "Tea",
	  "Price": 25,
	  "Available": 269
	},
	{
	  "ID": "S0008",
	  "Service": "Soda",
	  "Price": 25,
	  "Available": 346
	},
	{
	  "ID": "S0009",
	  "Service": "Smoothie",
	  "Price": 25,
	  "Available": 286
	},
	{
	  "ID": "S0010",
	  "Service": "Juice",
	  "Price": 25,
	  "Available": 656
	}
  ]

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