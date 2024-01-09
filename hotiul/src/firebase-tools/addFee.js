import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
const FEE = [
	{
		ID: 'F001',
		Name: 'Month 1 Fee',
		Year: 2023,
		Month: 1,
		Details: [
			{
				ID: 'DF028',
				Name: 'Water',
				Price: 5,
			},
			{
				ID: 'DF019',
				Name: 'Electricity',
				Price: 10,
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
				ID: 'DF007',
				Name: 'Water',
				Price: 9,
			},
			{
				ID: 'DF002',
				Name: 'Electricity',
				Price: 15,
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
				ID: 'DF011',
				Name: 'Water',
				Price: 6,
			},
			{
				ID: 'DF034',
				Name: 'Electricity',
				Price: 11,
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
				ID: 'DF017',
				Name: 'Water',
				Price: 7,
			},
			{
				ID: 'DF021',
				Name: 'Electricity',
				Price: 12,
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
				ID: 'DF001',
				Name: 'Water',
				Price: 12,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 28,
			},
		],
	},
	{
		ID: 'F006',
		Name: 'Month 6 Fee',
		Year: 2023,
		Month: 6,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 15,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 30,
			},
		],
	},
	{
		ID: 'F007',
		Name: 'Month 7 Fee',
		Year: 2023,
		Month: 7,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 12,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 27,
			},
		],
	},
	{
		ID: 'F008',
		Name: 'Month 8 Fee',
		Year: 2023,
		Month: 8,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 20,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 40,
			},
		],
	},
	{
		ID: 'F009',
		Name: 'Month 9 Fee',
		Year: 2023,
		Month: 9,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 10,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 20,
			},
		],
	},
	{
		ID: 'F010',
		Name: 'Month 10 Fee',
		Year: 2023,
		Month: 10,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 9,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 18,
			},
		],
	},
	{
		ID: 'F011',
		Name: 'Month 11 Fee',
		Year: 2023,
		Month: 11,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 15,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 25,
			},
		],
	},
	{
		ID: 'F012',
		Name: 'Month 12 Fee',
		Year: 2023,
		Month: 12,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 20,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 30,
			},
		],
	},
	{
		ID: 'F013',
		Name: 'Month 1 Fee',
		Year: 2024,
		Month: 1,
		Details: [
			{
				ID: 'DF001',
				Name: 'Water',
				Price: 10,
			},
			{
				ID: 'DF032',
				Name: 'Electricity',
				Price: 25,
			},
		],
	},
];

export const addDbFee = async () => {
	FEE.map(async b => {
		await setDoc(doc(db, 'FEE', b.ID), b);
	});
};
