import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const ROOM_TYPE = [
	{
		ID: 'RT01',
		TypeName: 'Single Regular Room',
		NumPerson: 1,
		Amenities: [
			{
				Name: 'Dental Kit',
				Quantity: 1,
			},
			{
				Name: 'Comb',
				Quantity: 1,
			},
			{
				Name: 'Shampoo',
				Quantity: 1,
			},
			{
				Name: 'Bath Gel',
				Quantity: 1,
			},
			{
				Name: 'Sanitary Bag',
				Quantity: 2,
			},
			{
				Name: 'Slipper',
				Quantity: 1,
			},
			{
				Name: 'Towel',
				Quantity: 2,
			},
			{
				Name: 'Bed',
				Quantity: 1,
			},
			{
				Name: 'Television',
				Quantity: 1,
			},
			{
				Name: 'Water Heater',
				Quantity: 1,
			},
			{
				Name: 'Air Conditioner',
				Quantity: 1,
			},
		],
	},
	{
		ID: 'RT02',
		TypeName: 'Couple Regular Room',
		NumPerson: 2,
		Amenities: [
			{
				Name: 'Dental Kit',
				Quantity: 2,
			},
			{
				Name: 'Comb',
				Quantity: 2,
			},
			{
				Name: 'Shampoo',
				Quantity: 2,
			},
			{
				Name: 'Bath Gel',
				Quantity: 2,
			},
			{
				Name: 'Sanitary Bag',
				Quantity: 4,
			},
			{
				Name: 'Slipper',
				Quantity: 2,
			},
			{
				Name: 'Towel',
				Quantity: 4,
			},
			{
				Name: 'Bed',
				Quantity: 1,
			},
			{
				Name: 'Television',
				Quantity: 1,
			},
			{
				Name: 'Water Heater',
				Quantity: 1,
			},
			{
				Name: 'Air Conditioner',
				Quantity: 1,
			},
		],
	},
	{
		ID: 'RT03',
		TypeName: 'Single VIP Room',
		NumPerson: 1,
		Amenities: [
			{
				Name: 'Dental Kit',
				Quantity: 1,
			},
			{
				Name: 'Comb',
				Quantity: 1,
			},
			{
				Name: 'Shampoo',
				Quantity: 1,
			},
			{
				Name: 'Bath Gel',
				Quantity: 1,
			},
			{
				Name: 'Sanitary Bag',
				Quantity: 2,
			},
			{
				Name: 'Slipper',
				Quantity: 1,
			},
			{
				Name: 'Towel',
				Quantity: 2,
			},
			{
				Name: 'Bed',
				Quantity: 1,
			},
			{
				Name: 'Television',
				Quantity: 1,
			},
			{
				Name: 'Water Heater',
				Quantity: 1,
			},
			{
				Name: 'Air Conditioner',
				Quantity: 1,
			},
			{
				Name: 'Hair Dryer',
				Quantity: 1,
			},
			{
				Name: 'Refrigerator',
				Quantity: 1,
			},
		],
	},
	{
		ID: 'RT04',
		TypeName: 'Couple VIP Room',
		NumPerson: 2,
		Amenities: [
			{
				Name: 'Dental Kit',
				Quantity: 2,
			},
			{
				Name: 'Comb',
				Quantity: 2,
			},
			{
				Name: 'Shampoo',
				Quantity: 2,
			},
			{
				Name: 'Bath Gel',
				Quantity: 2,
			},
			{
				Name: 'Sanitary Bag',
				Quantity: 4,
			},
			{
				Name: 'Slipper',
				Quantity: 2,
			},
			{
				Name: 'Towel',
				Quantity: 4,
			},
			{
				Name: 'Bed',
				Quantity: 1,
			},
			{
				Name: 'Television',
				Quantity: 1,
			},
			{
				Name: 'Water Heater',
				Quantity: 1,
			},
			{
				Name: 'Air Conditioner',
				Quantity: 1,
			},
			{
				Name: 'Hair Dryer',
				Quantity: 1,
			},
			{
				Name: 'Refrigerator',
				Quantity: 1,
			},
		],
	},
	{
		ID: 'RT05',
		TypeName: 'Small Family Room',
		NumPerson: 4,
		Amenities: [
			{
				Name: 'Dental Kit',
				Quantity: 4,
			},
			{
				Name: 'Comb',
				Quantity: 4,
			},
			{
				Name: 'Shampoo',
				Quantity: 4,
			},
			{
				Name: 'Bath Gel',
				Quantity: 4,
			},
			{
				Name: 'Sanitary Bag',
				Quantity: 8,
			},
			{
				Name: 'Slipper',
				Quantity: 4,
			},
			{
				Name: 'Towel',
				Quantity: 8,
			},
			{
				Name: 'Bed',
				Quantity: 2,
			},
			{
				Name: 'Television',
				Quantity: 1,
			},
			{
				Name: 'Water Heater',
				Quantity: 1,
			},
			{
				Name: 'Air Conditioner',
				Quantity: 1,
			},
			{
				Name: 'Hair Dryer',
				Quantity: 1,
			},
			{
				Name: 'Refrigerator',
				Quantity: 1,
			},
		],
	},
];

export const addDbRoomType = async () => {
	ROOM_TYPE.map(async (b) => {
	  await setDoc(
		doc(
		  db,
		  "ROOM_TYPE",
		  b.ID
		),
		b
	  );
	});
  };