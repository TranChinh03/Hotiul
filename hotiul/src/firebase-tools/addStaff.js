import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const STAFF = [
	{
		ID: 'S01',
		Name: 'Quan ly 01',
		CitizenID: '011111111',
		Phone: '012121212',
		Gender: 'Female',
		Address: '11 ABC Street',
		Salary: 10000000,
		Username: 'quanly01',
		Password: 'quanly01mk',
		Role: 'Manager',
	},
	{
		ID: 'S02',
		Name: 'Nhan vien 02',
		CitizenID: '022222222',
		Phone: '02323232323',
		Gender: 'Male',
		Address: '12 ABC Street',
		Salary: 5000000,
		Username: 'nhanvien02',
		Password: 'nhanvien02mk',
		Role: 'Staff',
	},
	{
		ID: 'S03',
		Name: 'Nhan vien 03',
		CitizenID: '0333333333',
		Phone: '03434343434',
		Gender: 'Female',
		Address: '33 ABC Street',
		Salary: 5000000,
		Username: 'nhanvien03',
		Password: 'nhanvien03mk',
		Role: 'Staff',
	},
	{
		ID: 'S04',
		Name: 'Nhan vien 04',
		CitizenID: '0444444444',
		Phone: '04545454545',
		Gender: 'Male',
		Address: '44 ABC Street',
		Salary: 5000000,
		Username: 'nhanvien04',
		Password: 'nhanvien04mk',
		Role: 'Staff',
	},
];

export const addDbStaff = async () => {
	STAFF.map(async (b) => {
	  await setDoc(
		doc(
		  db,
		  "STAFF",
		  b.ID
		),
		b
	  );
	});
  };