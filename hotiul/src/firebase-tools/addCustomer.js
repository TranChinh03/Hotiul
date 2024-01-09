import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const CUSTOMER = [
	{
	  "ID": "C5025",
	  "Name": "Daniel Tuan",
	  "CitizenID": "072715010368",
	  "Phone": "0450375239",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B5467",
		  "CustomerID": "C5025",
		  "RoomID": "R702",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "15/08/2023",
		  "CheckOut": "04/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 275,
		  "CreateAt": "14/08/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3608",
		  "CustomerID": "C5025",
		  "RoomID": "R203",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "25/11/2023",
		  "CheckOut": "09/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 325,
		  "CreateAt": "21/11/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C7514",
	  "Name": "Emily Brown",
	  "CitizenID": "011854623531",
	  "Phone": "0811452550",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B3406",
		  "CustomerID": "C7514",
		  "RoomID": "R303",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "30/11/2023",
		  "CheckOut": "03/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "25/11/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B1885",
		  "CustomerID": "C7514",
		  "RoomID": "R504",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "26/09/2023",
		  "CheckOut": "23/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 675,
		  "CreateAt": "21/09/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8570",
		  "CustomerID": "C7514",
		  "RoomID": "R804",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "23/06/2023",
		  "CheckOut": "08/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 400,
		  "CreateAt": "19/06/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B0691",
		  "CustomerID": "C7514",
		  "RoomID": "R804",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "03/07/2023",
		  "CheckOut": "25/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "01/07/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3628",
		  "CustomerID": "C7514",
		  "RoomID": "R105",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "11/12/2023",
		  "CheckOut": "26/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 250,
		  "CreateAt": "06/12/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3013",
		  "CustomerID": "C7514",
		  "RoomID": "R604",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "11/08/2023",
		  "CheckOut": "31/10/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "09/08/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C0515",
	  "Name": "Daniel Thi",
	  "CitizenID": "096263226665",
	  "Phone": "0707288789",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B7818",
		  "CustomerID": "C0515",
		  "RoomID": "R803",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "08/03/2023",
		  "CheckOut": "05/05/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 425,
		  "CreateAt": "07/03/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6892",
		  "CustomerID": "C0515",
		  "RoomID": "R301",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "09/07/2023",
		  "CheckOut": "13/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 350,
		  "CreateAt": "04/07/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B5848",
		  "CustomerID": "C0515",
		  "RoomID": "R602",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "01/01/2024",
		  "CheckOut": "07/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "27/12/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C9136",
	  "Name": "Tran Thu",
	  "CitizenID": "039661079076",
	  "Phone": "0927665637",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B1375",
		  "CustomerID": "C9136",
		  "RoomID": "R901",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "30/12/2023",
		  "CheckOut": "05/01/2024",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 550,
		  "CreateAt": "26/12/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B5486",
		  "CustomerID": "C9136",
		  "RoomID": "R604",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "05/06/2023",
		  "CheckOut": "17/09/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "04/06/2023",
		  "Service": [
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C3285",
	  "Name": "Tran Smith",
	  "CitizenID": "050100613520",
	  "Phone": "0751355972",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B0681",
		  "CustomerID": "C3285",
		  "RoomID": "R405",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "16/04/2023",
		  "CheckOut": "15/06/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 500,
		  "CreateAt": "13/04/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6588",
		  "CustomerID": "C3285",
		  "RoomID": "R904",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "03/10/2023",
		  "CheckOut": "14/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 550,
		  "CreateAt": "02/10/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2306",
		  "CustomerID": "C3285",
		  "RoomID": "R804",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "15/04/2023",
		  "CheckOut": "10/07/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 400,
		  "CreateAt": "14/04/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C7960",
	  "Name": "Tran Brown",
	  "CitizenID": "028113917747",
	  "Phone": "0591084599",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B1087",
		  "CustomerID": "C7960",
		  "RoomID": "R505",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "02/01/2023",
		  "CheckOut": "30/09/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 625,
		  "CreateAt": "28/12/2022",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8115",
		  "CustomerID": "C7960",
		  "RoomID": "R305",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "14/10/2023",
		  "CheckOut": "22/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 400,
		  "CreateAt": "12/10/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B9697",
		  "CustomerID": "C7960",
		  "RoomID": "R902",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "24/09/2023",
		  "CheckOut": "03/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 525,
		  "CreateAt": "23/09/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3871",
		  "CustomerID": "C7960",
		  "RoomID": "R704",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "27/11/2023",
		  "CheckOut": "27/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 300,
		  "CreateAt": "22/11/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7945",
		  "CustomerID": "C7960",
		  "RoomID": "R401",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "04/10/2023",
		  "CheckOut": "04/10/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 550,
		  "CreateAt": "01/10/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3263",
		  "CustomerID": "C7960",
		  "RoomID": "R903",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "24/09/2023",
		  "CheckOut": "27/11/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 550,
		  "CreateAt": "19/09/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4350",
		  "CustomerID": "C7960",
		  "RoomID": "R101",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "06/07/2023",
		  "CheckOut": "24/09/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 300,
		  "CreateAt": "05/07/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B5244",
		  "CustomerID": "C7960",
		  "RoomID": "R303",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "04/07/2023",
		  "CheckOut": "10/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "29/06/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6592",
		  "CustomerID": "C7960",
		  "RoomID": "R501",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "14/03/2023",
		  "CheckOut": "09/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 675,
		  "CreateAt": "13/03/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B1071",
		  "CustomerID": "C7960",
		  "RoomID": "R605",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "10/05/2023",
		  "CheckOut": "13/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 225,
		  "CreateAt": "06/05/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C3666",
	  "Name": "Nguyen Brown",
	  "CitizenID": "080929847509",
	  "Phone": "0841521073",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B3125",
		  "CustomerID": "C3666",
		  "RoomID": "R505",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "15/09/2023",
		  "CheckOut": "06/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 725,
		  "CreateAt": "14/09/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3742",
		  "CustomerID": "C3666",
		  "RoomID": "R305",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "01/08/2023",
		  "CheckOut": "15/09/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 425,
		  "CreateAt": "27/07/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7373",
		  "CustomerID": "C3666",
		  "RoomID": "R404",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "09/03/2023",
		  "CheckOut": "08/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 475,
		  "CreateAt": "06/03/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7621",
		  "CustomerID": "C3666",
		  "RoomID": "R302",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "14/05/2023",
		  "CheckOut": "19/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "13/05/2023",
		  "Service": [
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4241",
		  "CustomerID": "C3666",
		  "RoomID": "R104",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "21/05/2023",
		  "CheckOut": "05/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 225,
		  "CreateAt": "20/05/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2871",
		  "CustomerID": "C3666",
		  "RoomID": "R304",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "25/07/2023",
		  "CheckOut": "11/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 425,
		  "CreateAt": "23/07/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2402",
		  "CustomerID": "C3666",
		  "RoomID": "R701",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "13/09/2023",
		  "CheckOut": "26/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 300,
		  "CreateAt": "11/09/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6451",
		  "CustomerID": "C3666",
		  "RoomID": "R201",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "28/04/2023",
		  "CheckOut": "02/01/2024",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "25/04/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8610",
		  "CustomerID": "C3666",
		  "RoomID": "R302",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "31/05/2023",
		  "CheckOut": "16/11/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 425,
		  "CreateAt": "29/05/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B9273",
		  "CustomerID": "C3666",
		  "RoomID": "R203",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "20/01/2023",
		  "CheckOut": "02/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 350,
		  "CreateAt": "18/01/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C1517",
	  "Name": "John Johnson",
	  "CitizenID": "037125129278",
	  "Phone": "0202636326",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B5441",
		  "CustomerID": "C1517",
		  "RoomID": "R902",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "18/09/2023",
		  "CheckOut": "30/09/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 500,
		  "CreateAt": "13/09/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4260",
		  "CustomerID": "C1517",
		  "RoomID": "R103",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "11/09/2023",
		  "CheckOut": "17/10/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "09/09/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4466",
		  "CustomerID": "C1517",
		  "RoomID": "R705",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "02/01/2023",
		  "CheckOut": "04/10/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 275,
		  "CreateAt": "30/12/2022",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B5149",
		  "CustomerID": "C1517",
		  "RoomID": "R203",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "01/04/2023",
		  "CheckOut": "21/11/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "28/03/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2663",
		  "CustomerID": "C1517",
		  "RoomID": "R204",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "20/03/2023",
		  "CheckOut": "11/11/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "19/03/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C7575",
	  "Name": "Do Kim",
	  "CitizenID": "077180872185",
	  "Phone": "0542959243",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B2210",
		  "CustomerID": "C7575",
		  "RoomID": "R605",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "23/09/2023",
		  "CheckOut": "14/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 225,
		  "CreateAt": "21/09/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3422",
		  "CustomerID": "C7575",
		  "RoomID": "R302",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "18/06/2023",
		  "CheckOut": "30/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 425,
		  "CreateAt": "17/06/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4468",
		  "CustomerID": "C7575",
		  "RoomID": "R803",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "09/04/2023",
		  "CheckOut": "19/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "08/04/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4264",
		  "CustomerID": "C7575",
		  "RoomID": "R501",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "23/03/2023",
		  "CheckOut": "11/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 675,
		  "CreateAt": "18/03/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8709",
		  "CustomerID": "C7575",
		  "RoomID": "R202",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "06/12/2023",
		  "CheckOut": "11/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 300,
		  "CreateAt": "01/12/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7298",
		  "CustomerID": "C7575",
		  "RoomID": "R305",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "09/07/2023",
		  "CheckOut": "12/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "08/07/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C2825",
	  "Name": "John Johnson",
	  "CitizenID": "031898994511",
	  "Phone": "0642063964",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B3836",
		  "CustomerID": "C2825",
		  "RoomID": "R801",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "26/10/2023",
		  "CheckOut": "29/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 325,
		  "CreateAt": "23/10/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B0594",
		  "CustomerID": "C2825",
		  "RoomID": "R702",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "26/07/2023",
		  "CheckOut": "15/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "21/07/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B1612",
		  "CustomerID": "C2825",
		  "RoomID": "R505",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "15/10/2023",
		  "CheckOut": "30/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 625,
		  "CreateAt": "13/10/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7654",
		  "CustomerID": "C2825",
		  "RoomID": "R405",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "30/07/2023",
		  "CheckOut": "16/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 500,
		  "CreateAt": "29/07/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B0570",
		  "CustomerID": "C2825",
		  "RoomID": "R502",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "07/01/2023",
		  "CheckOut": "25/09/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 625,
		  "CreateAt": "05/01/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C9432",
	  "Name": "Pham Johnson",
	  "CitizenID": "034447014401",
	  "Phone": "0167044682",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B7294",
		  "CustomerID": "C9432",
		  "RoomID": "R604",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "19/04/2023",
		  "CheckOut": "06/10/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 300,
		  "CreateAt": "17/04/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7789",
		  "CustomerID": "C9432",
		  "RoomID": "R101",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "25/05/2023",
		  "CheckOut": "06/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 300,
		  "CreateAt": "21/05/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3396",
		  "CustomerID": "C9432",
		  "RoomID": "R905",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "18/05/2023",
		  "CheckOut": "18/06/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 525,
		  "CreateAt": "16/05/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3408",
		  "CustomerID": "C9432",
		  "RoomID": "R401",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "03/05/2023",
		  "CheckOut": "04/09/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 550,
		  "CreateAt": "02/05/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4141",
		  "CustomerID": "C9432",
		  "RoomID": "R402",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "08/04/2023",
		  "CheckOut": "26/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 500,
		  "CreateAt": "04/04/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C7577",
	  "Name": "Nguyen Thi",
	  "CitizenID": "051277950774",
	  "Phone": "0331976689",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B0546",
		  "CustomerID": "C7577",
		  "RoomID": "R605",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "20/07/2023",
		  "CheckOut": "25/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 225,
		  "CreateAt": "17/07/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2459",
		  "CustomerID": "C7577",
		  "RoomID": "R705",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "22/02/2023",
		  "CheckOut": "12/04/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "20/02/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C3972",
	  "Name": "Do Hoang",
	  "CitizenID": "079285370302",
	  "Phone": "0312958877",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B2605",
		  "CustomerID": "C3972",
		  "RoomID": "R605",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "09/01/2023",
		  "CheckOut": "19/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 300,
		  "CreateAt": "07/01/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7391",
		  "CustomerID": "C3972",
		  "RoomID": "R104",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "09/09/2023",
		  "CheckOut": "23/10/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "08/09/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2413",
		  "CustomerID": "C3972",
		  "RoomID": "R202",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "20/10/2023",
		  "CheckOut": "28/10/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "15/10/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7614",
		  "CustomerID": "C3972",
		  "RoomID": "R104",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "23/10/2023",
		  "CheckOut": "11/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 250,
		  "CreateAt": "18/10/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7289",
		  "CustomerID": "C3972",
		  "RoomID": "R301",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "03/10/2023",
		  "CheckOut": "15/11/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 350,
		  "CreateAt": "30/09/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6627",
		  "CustomerID": "C3972",
		  "RoomID": "R803",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "05/08/2023",
		  "CheckOut": "20/09/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "02/08/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C1405",
	  "Name": "Nguyen Nam",
	  "CitizenID": "044540771608",
	  "Phone": "0845388832",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B8861",
		  "CustomerID": "C1405",
		  "RoomID": "R601",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "30/06/2023",
		  "CheckOut": "15/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 250,
		  "CreateAt": "25/06/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B0702",
		  "CustomerID": "C1405",
		  "RoomID": "R203",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "10/12/2023",
		  "CheckOut": "08/01/2024",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 350,
		  "CreateAt": "09/12/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8930",
		  "CustomerID": "C1405",
		  "RoomID": "R802",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "20/09/2023",
		  "CheckOut": "07/10/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "17/09/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4929",
		  "CustomerID": "C1405",
		  "RoomID": "R704",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "26/09/2023",
		  "CheckOut": "26/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 275,
		  "CreateAt": "25/09/2023",
		  "Service": [
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C2305",
	  "Name": "Emily Wang",
	  "CitizenID": "069304386373",
	  "Phone": "0418295891",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B2199",
		  "CustomerID": "C2305",
		  "RoomID": "R203",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "16/05/2023",
		  "CheckOut": "29/10/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "13/05/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B5922",
		  "CustomerID": "C2305",
		  "RoomID": "R302",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "15/06/2023",
		  "CheckOut": "15/07/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "11/06/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6810",
		  "CustomerID": "C2305",
		  "RoomID": "R303",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "15/05/2023",
		  "CheckOut": "30/07/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 350,
		  "CreateAt": "13/05/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B9602",
		  "CustomerID": "C2305",
		  "RoomID": "R205",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "22/12/2023",
		  "CheckOut": "09/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 375,
		  "CreateAt": "18/12/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2581",
		  "CustomerID": "C2305",
		  "RoomID": "R103",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "13/06/2023",
		  "CheckOut": "03/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 300,
		  "CreateAt": "08/06/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C4764",
	  "Name": "Hoang Hoang",
	  "CitizenID": "063020569734",
	  "Phone": "0231424386",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B9655",
		  "CustomerID": "C4764",
		  "RoomID": "R503",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "14/06/2023",
		  "CheckOut": "01/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 625,
		  "CreateAt": "13/06/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B0245",
		  "CustomerID": "C4764",
		  "RoomID": "R901",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "25/05/2023",
		  "CheckOut": "13/06/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 550,
		  "CreateAt": "21/05/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B3673",
		  "CustomerID": "C4764",
		  "RoomID": "R602",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "07/06/2023",
		  "CheckOut": "10/06/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 225,
		  "CreateAt": "03/06/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B9420",
		  "CustomerID": "C4764",
		  "RoomID": "R904",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "10/06/2023",
		  "CheckOut": "28/11/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 575,
		  "CreateAt": "07/06/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C6447",
	  "Name": "John Brown",
	  "CitizenID": "050619120884",
	  "Phone": "0575543700",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B4408",
		  "CustomerID": "C6447",
		  "RoomID": "R803",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "26/12/2023",
		  "CheckOut": "01/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 425,
		  "CreateAt": "21/12/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8516",
		  "CustomerID": "C6447",
		  "RoomID": "R702",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "01/05/2023",
		  "CheckOut": "16/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "29/04/2023",
		  "Service": [
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B2051",
		  "CustomerID": "C6447",
		  "RoomID": "R204",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "07/06/2023",
		  "CheckOut": "21/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "05/06/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8426",
		  "CustomerID": "C6447",
		  "RoomID": "R203",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "20/04/2023",
		  "CheckOut": "25/10/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 300,
		  "CreateAt": "18/04/2023",
		  "Service": [
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B1297",
		  "CustomerID": "C6447",
		  "RoomID": "R201",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "15/01/2023",
		  "CheckOut": "23/10/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "14/01/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8296",
		  "CustomerID": "C6447",
		  "RoomID": "R104",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "30/10/2023",
		  "CheckOut": "03/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 250,
		  "CreateAt": "25/10/2023",
		  "Service": [
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C9144",
	  "Name": "John Van",
	  "CitizenID": "049998715369",
	  "Phone": "0200920759",
	  "Gender": "Male",
	  "Booking": [
		{
		  "ID": "B4244",
		  "CustomerID": "C9144",
		  "RoomID": "R301",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "28/11/2023",
		  "CheckOut": "08/01/2024",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 425,
		  "CreateAt": "26/11/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B5502",
		  "CustomerID": "C9144",
		  "RoomID": "R204",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "21/11/2023",
		  "CheckOut": "12/12/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 300,
		  "CreateAt": "17/11/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8765",
		  "CustomerID": "C9144",
		  "RoomID": "R702",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "20/02/2023",
		  "CheckOut": "01/01/2024",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "18/02/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C4446",
	  "Name": "Emily Hoang",
	  "CitizenID": "087045248902",
	  "Phone": "0406399995",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B0328",
		  "CustomerID": "C4446",
		  "RoomID": "R803",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "01/10/2023",
		  "CheckOut": "18/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 425,
		  "CreateAt": "27/09/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7624",
		  "CustomerID": "C4446",
		  "RoomID": "R804",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "12/07/2023",
		  "CheckOut": "29/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 375,
		  "CreateAt": "08/07/2023",
		  "Service": [
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B1738",
		  "CustomerID": "C4446",
		  "RoomID": "R704",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "10/12/2023",
		  "CheckOut": "26/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 300,
		  "CreateAt": "08/12/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B9677",
		  "CustomerID": "C4446",
		  "RoomID": "R703",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "11/05/2023",
		  "CheckOut": "28/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 325,
		  "CreateAt": "07/05/2023",
		  "Service": [
			{
			  "ID": "S0006",
			  "Service": "Coffee",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6282",
		  "CustomerID": "C4446",
		  "RoomID": "R205",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "13/05/2023",
		  "CheckOut": "06/08/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 375,
		  "CreateAt": "09/05/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B7420",
		  "CustomerID": "C4446",
		  "RoomID": "R502",
		  "RoomType": {
			"ID": "RT05",
			"TypeName": "Small Family Room",
			"NumPerson": 4,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 4
			  },
			  {
				"Name": "Comb",
				"Quantity": 4
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 4
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 4
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 8
			  },
			  {
				"Name": "Slipper",
				"Quantity": 4
			  },
			  {
				"Name": "Towel",
				"Quantity": 8
			  },
			  {
				"Name": "Bed",
				"Quantity": 2
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 600
		  },
		  "CheckIn": "12/11/2023",
		  "CheckOut": "24/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 725,
		  "CreateAt": "10/11/2023",
		  "Service": [
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			}
		  ]
		}
	  ]
	},
	{
	  "ID": "C1865",
	  "Name": "Alice Brown",
	  "CitizenID": "060424954828",
	  "Phone": "0366255806",
	  "Gender": "Female",
	  "Booking": [
		{
		  "ID": "B4501",
		  "CustomerID": "C1865",
		  "RoomID": "R101",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "06/02/2023",
		  "CheckOut": "20/09/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 300,
		  "CreateAt": "02/02/2023",
		  "Service": [
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6427",
		  "CustomerID": "C1865",
		  "RoomID": "R305",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "11/09/2023",
		  "CheckOut": "21/11/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Unpaid",
		  "Price": 400,
		  "CreateAt": "09/09/2023",
		  "Service": [
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0010",
			  "Service": "Juice",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B6341",
		  "CustomerID": "C1865",
		  "RoomID": "R102",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "07/12/2023",
		  "CheckOut": "17/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 325,
		  "CreateAt": "05/12/2023",
		  "Service": [
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B9840",
		  "CustomerID": "C1865",
		  "RoomID": "R104",
		  "RoomType": {
			"ID": "RT01",
			"TypeName": "Single Regular Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 200
		  },
		  "CheckIn": "12/08/2023",
		  "CheckOut": "01/09/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 275,
		  "CreateAt": "10/08/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4845",
		  "CustomerID": "C1865",
		  "RoomID": "R305",
		  "RoomType": {
			"ID": "RT03",
			"TypeName": "Single VIP Room",
			"NumPerson": 1,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 1
			  },
			  {
				"Name": "Comb",
				"Quantity": 1
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 1
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 1
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 2
			  },
			  {
				"Name": "Slipper",
				"Quantity": 1
			  },
			  {
				"Name": "Towel",
				"Quantity": 2
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 300
		  },
		  "CheckIn": "31/07/2023",
		  "CheckOut": "24/08/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Unpaid",
		  "Price": 425,
		  "CreateAt": "28/07/2023",
		  "Service": [
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B8313",
		  "CustomerID": "C1865",
		  "RoomID": "R703",
		  "RoomType": {
			"ID": "RT02",
			"TypeName": "Couple Regular Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  }
			],
			"Price": 250
		  },
		  "CheckIn": "13/02/2023",
		  "CheckOut": "10/09/2023",
		  "isCanceled": true,
		  "PaymentStatus": "Paid",
		  "Price": 350,
		  "CreateAt": "08/02/2023",
		  "Service": [
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0007",
			  "Service": "Tea",
			  "Price": 25
			},
			{
			  "ID": "S0004",
			  "Service": "Pasta",
			  "Price": 25
			},
			{
			  "ID": "S0002",
			  "Service": "Burger",
			  "Price": 25
			}
		  ]
		},
		{
		  "ID": "B4725",
		  "CustomerID": "C1865",
		  "RoomID": "R404",
		  "RoomType": {
			"ID": "RT04",
			"TypeName": "Couple VIP Room",
			"NumPerson": 2,
			"Amenities": [
			  {
				"Name": "Dental Kit",
				"Quantity": 2
			  },
			  {
				"Name": "Comb",
				"Quantity": 2
			  },
			  {
				"Name": "Shampoo",
				"Quantity": 2
			  },
			  {
				"Name": "Bath Gel",
				"Quantity": 2
			  },
			  {
				"Name": "Sanitary Bag",
				"Quantity": 4
			  },
			  {
				"Name": "Slipper",
				"Quantity": 2
			  },
			  {
				"Name": "Towel",
				"Quantity": 4
			  },
			  {
				"Name": "Bed",
				"Quantity": 1
			  },
			  {
				"Name": "Television",
				"Quantity": 1
			  },
			  {
				"Name": "Water Heater",
				"Quantity": 1
			  },
			  {
				"Name": "Air Conditioner",
				"Quantity": 1
			  },
			  {
				"Name": "Hair Dryer",
				"Quantity": 1
			  },
			  {
				"Name": "Refrigerator",
				"Quantity": 1
			  }
			],
			"Price": 450
		  },
		  "CheckIn": "01/04/2023",
		  "CheckOut": "03/12/2023",
		  "isCanceled": false,
		  "PaymentStatus": "Paid",
		  "Price": 575,
		  "CreateAt": "28/03/2023",
		  "Service": [
			{
			  "ID": "S0001",
			  "Service": "Pizza",
			  "Price": 25
			},
			{
			  "ID": "S0008",
			  "Service": "Soda",
			  "Price": 25
			},
			{
			  "ID": "S0005",
			  "Service": "Tacos",
			  "Price": 25
			},
			{
			  "ID": "S0003",
			  "Service": "Sushi",
			  "Price": 25
			},
			{
			  "ID": "S0009",
			  "Service": "Smoothie",
			  "Price": 25
			}
		  ]
		}
	  ]
	}
  ]

export const addDbCustomer = async () => {
	CUSTOMER.map(async (b) => {
	  await setDoc(
		doc(
		  db,
		  "CUSTOMER",
		  b.ID
		),
		b
	  );
	});
  };