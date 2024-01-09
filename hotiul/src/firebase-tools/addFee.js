import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const FEE = [
	{
		ID: 'F001',
		Name: 'Month 1 Fee',
		Year: 2023,
		Month: 1,
		Details: [
			{
				Name: 'Water',
				Price: 100000,
			},
			{
				Name: 'Electricity',
				Price: 200000,
			},
		],
	},
	{
		ID: 'F002',
		Name: 'Month 2 Fee',
		Year: 2023,
		Month: 2,
		Details: [
			{
				Name: 'Water',
				Price: 185000,
			},
			{
				Name: 'Electricity',
				Price: 245000,
			},
		],
	},
	{
		ID: 'F003',
		Name: 'Month 3 Fee',
		Year: 2023,
		Month: 3,
		Details: [
			{
				Name: 'Water',
				Price: 115000,
			},
			{
				Name: 'Electricity',
				Price: 210000,
			},
		],
	},
	{
		ID: 'F004',
		Name: 'Month 4 Fee',
		Year: 2023,
		Month: 4,
		Details: [
			{
				Name: 'Water',
				Price: 135000,
			},
			{
				Name: 'Electricity',
				Price: 220000,
			},
		],
	},
	{
		ID: 'F005',
		Name: 'Month 5 Fee',
		Year: 2023,
		Month: 5,
		Details: [
			{
				Name: 'Water',
				Price: 250000,
			},
			{
				Name: 'Electricity',
				Price: 180000,
			},
		],
	},
];

export const addDbFee = async () => {
	FEE.map(async (b) => {
	  await setDoc(
		doc(
		  db,
		  "FEE",
		  b.ID
		),
		b
	  );
	});
  };