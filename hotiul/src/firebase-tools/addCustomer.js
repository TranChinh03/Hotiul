import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const CUSTOMER = [
  	{
  	  "ID": "C7503",
  	  "Name": "Le Wang",
  	  "CitizenID": "063143835857",
  	  "Phone": "0763225404",
  	  "Gender": "Female",
  	  "Booking": [
  		{
  		  "ID": "B9176",
  		  "CustomerID": "C7503",
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
  		  "CheckIn": "27/05/2023",
  		  "CheckOut": "11/06/2023",
  		  "isCanceled": true,
  		  "PaymentStatus": "Unpaid",
  		  "Price": 625,
  		  "CreateAt": "26/05/2023",
  		  "Service": [
  			{
  			  "ID": "S0002",
  			  "Service": "Burger",
  			  "Price": 25,
  			  "Available": 283
  			}
  		  ]
  		},
  		{
  		  "ID": "B7657",
  		  "CustomerID": "C7503",
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
  		  "CheckIn": "06/05/2023",
  		  "CheckOut": "16/05/2023",
  		  "isCanceled": false,
  		  "PaymentStatus": "Paid",
  		  "Price": 325,
  		  "CreateAt": "05/05/2023",
  		  "Service": [
  			{
  			  "ID": "S0008",
  			  "Service": "Soda",
  			  "Price": 25,
  			  "Available": 346
  			},
  			{
  			  "ID": "S0003",
  			  "Service": "Sushi",
  			  "Price": 25,
  			  "Available": 564
  			},
  			{
  			  "ID": "S0005",
  			  "Service": "Tacos",
  			  "Price": 25,
  			  "Available": 459
  			},
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
  			}
  		  ]
  		}
  	  ]
  	},
  // 	{
  // 	  "ID": "C9671",
  // 	  "Name": "Emily Lee",
  // 	  "CitizenID": "012179463171",
  // 	  "Phone": "0774606599",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6185",
  // 		  "CustomerID": "C9671",
  // 		  "RoomID": "R901",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "03/10/2023",
  // 		  "CheckOut": "17/10/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 500,
  // 		  "CreateAt": "02/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B3449",
  // 		  "CustomerID": "C9671",
  // 		  "RoomID": "R603",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "12/12/2023",
  // 		  "CheckOut": "28/12/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "07/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B8644",
  // 		  "CustomerID": "C9671",
  // 		  "RoomID": "R802",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "30/08/2023",
  // 		  "CheckOut": "15/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 400,
  // 		  "CreateAt": "25/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B3029",
  // 		  "CustomerID": "C9671",
  // 		  "RoomID": "R804",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "19/08/2023",
  // 		  "CheckOut": "04/09/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 325,
  // 		  "CreateAt": "16/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C2203",
  // 	  "Name": "Le Lee",
  // 	  "CitizenID": "056062346293",
  // 	  "Phone": "0953026273",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B9134",
  // 		  "CustomerID": "C2203",
  // 		  "RoomID": "R604",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "25/09/2023",
  // 		  "CheckOut": "28/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 225,
  // 		  "CreateAt": "23/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B7945",
  // 		  "CustomerID": "C2203",
  // 		  "RoomID": "R801",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "20/07/2023",
  // 		  "CheckOut": "27/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 400,
  // 		  "CreateAt": "15/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1059",
  // 		  "CustomerID": "C2203",
  // 		  "RoomID": "R601",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "06/12/2023",
  // 		  "CheckOut": "11/12/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 300,
  // 		  "CreateAt": "03/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C7226",
  // 	  "Name": "Alice Wang",
  // 	  "CitizenID": "057749600763",
  // 	  "Phone": "0633190082",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B0598",
  // 		  "CustomerID": "C7226",
  // 		  "RoomID": "R702",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "03/12/2023",
  // 		  "CheckOut": "05/12/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 375,
  // 		  "CreateAt": "01/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8916",
  // 	  "Name": "Le Brown",
  // 	  "CitizenID": "035302561835",
  // 	  "Phone": "0921877444",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6661",
  // 		  "CustomerID": "C8916",
  // 		  "RoomID": "R902",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "09/04/2023",
  // 		  "CheckOut": "19/04/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 475,
  // 		  "CreateAt": "07/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4466",
  // 	  "Name": "John Brown",
  // 	  "CitizenID": "017270101934",
  // 	  "Phone": "0419601852",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B0056",
  // 		  "CustomerID": "C4466",
  // 		  "RoomID": "R103",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "02/04/2023",
  // 		  "CheckOut": "21/04/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 250,
  // 		  "CreateAt": "01/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B4545",
  // 		  "CustomerID": "C4466",
  // 		  "RoomID": "R504",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "04/11/2023",
  // 		  "CheckOut": "22/11/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 675,
  // 		  "CreateAt": "01/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1912",
  // 		  "CustomerID": "C4466",
  // 		  "RoomID": "R604",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "11/10/2023",
  // 		  "CheckOut": "27/10/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 250,
  // 		  "CreateAt": "09/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8262",
  // 	  "Name": "Do Johnson",
  // 	  "CitizenID": "046337657556",
  // 	  "Phone": "0849055839",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B2790",
  // 		  "CustomerID": "C8262",
  // 		  "RoomID": "R303",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "24/07/2023",
  // 		  "CheckOut": "09/08/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 400,
  // 		  "CreateAt": "22/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0995",
  // 		  "CustomerID": "C8262",
  // 		  "RoomID": "R703",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "14/04/2023",
  // 		  "CheckOut": "20/04/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 350,
  // 		  "CreateAt": "10/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C6068",
  // 	  "Name": "Olivia Hoang",
  // 	  "CitizenID": "071211003904",
  // 	  "Phone": "0292329386",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4538",
  // 		  "CustomerID": "C6068",
  // 		  "RoomID": "R901",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "05/01/2024",
  // 		  "CheckOut": "18/01/2024",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 525,
  // 		  "CreateAt": "31/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C5538",
  // 	  "Name": "Sophia Johnson",
  // 	  "CitizenID": "012209533401",
  // 	  "Phone": "0975140263",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B3215",
  // 		  "CustomerID": "C5538",
  // 		  "RoomID": "R204",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "20/11/2023",
  // 		  "CheckOut": "30/11/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 375,
  // 		  "CreateAt": "19/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B4376",
  // 		  "CustomerID": "C5538",
  // 		  "RoomID": "R702",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "02/03/2023",
  // 		  "CheckOut": "11/03/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 375,
  // 		  "CreateAt": "01/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B6768",
  // 		  "CustomerID": "C5538",
  // 		  "RoomID": "R801",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "16/06/2023",
  // 		  "CheckOut": "21/06/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 375,
  // 		  "CreateAt": "11/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C2570",
  // 	  "Name": "Hoang Thu",
  // 	  "CitizenID": "061051881885",
  // 	  "Phone": "0394221852",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B9497",
  // 		  "CustomerID": "C2570",
  // 		  "RoomID": "R904",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "18/01/2023",
  // 		  "CheckOut": "23/01/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 575,
  // 		  "CreateAt": "14/01/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C0663",
  // 	  "Name": "Pham Thi",
  // 	  "CitizenID": "097426129079",
  // 	  "Phone": "0762479124",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4652",
  // 		  "CustomerID": "C0663",
  // 		  "RoomID": "R604",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "27/02/2023",
  // 		  "CheckOut": "01/03/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "26/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8312",
  // 	  "Name": "Daniel Wang",
  // 	  "CitizenID": "081572012528",
  // 	  "Phone": "0766597318",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B9379",
  // 		  "CustomerID": "C8312",
  // 		  "RoomID": "R902",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "25/02/2023",
  // 		  "CheckOut": "09/03/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 525,
  // 		  "CreateAt": "23/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C3339",
  // 	  "Name": "Vu Smith",
  // 	  "CitizenID": "028762585513",
  // 	  "Phone": "0569889138",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B1345",
  // 		  "CustomerID": "C3339",
  // 		  "RoomID": "R704",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "26/07/2023",
  // 		  "CheckOut": "01/08/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "25/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B7600",
  // 		  "CustomerID": "C3339",
  // 		  "RoomID": "R203",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "01/07/2023",
  // 		  "CheckOut": "04/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "30/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C3960",
  // 	  "Name": "Le Thu",
  // 	  "CitizenID": "024472255532",
  // 	  "Phone": "0771568017",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B8203",
  // 		  "CustomerID": "C3960",
  // 		  "RoomID": "R904",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "14/12/2023",
  // 		  "CheckOut": "22/12/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 550,
  // 		  "CreateAt": "12/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C2449",
  // 	  "Name": "Michael Johnson",
  // 	  "CitizenID": "095330727274",
  // 	  "Phone": "0767542731",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B8279",
  // 		  "CustomerID": "C2449",
  // 		  "RoomID": "R403",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "06/08/2023",
  // 		  "CheckOut": "07/08/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 525,
  // 		  "CreateAt": "04/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B4596",
  // 		  "CustomerID": "C2449",
  // 		  "RoomID": "R505",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "28/01/2023",
  // 		  "CheckOut": "07/02/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 625,
  // 		  "CreateAt": "26/01/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C1806",
  // 	  "Name": "Emily Van",
  // 	  "CitizenID": "026931742549",
  // 	  "Phone": "0826490133",
  // 	  "Gender": "Male",
  // 	  "Booking": []
  // 	},
  // 	{
  // 	  "ID": "C6546",
  // 	  "Name": "Le Johnson",
  // 	  "CitizenID": "019403280925",
  // 	  "Phone": "0472196407",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B7112",
  // 		  "CustomerID": "C6546",
  // 		  "RoomID": "R304",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "27/04/2023",
  // 		  "CheckOut": "11/05/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 325,
  // 		  "CreateAt": "22/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B6248",
  // 		  "CustomerID": "C6546",
  // 		  "RoomID": "R101",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "17/05/2023",
  // 		  "CheckOut": "23/05/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "15/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C3310",
  // 	  "Name": "David Brown",
  // 	  "CitizenID": "060450623270",
  // 	  "Phone": "0866320903",
  // 	  "Gender": "Female",
  // 	  "Booking": []
  // 	},
  // 	{
  // 	  "ID": "C1344",
  // 	  "Name": "Tran Johnson",
  // 	  "CitizenID": "054324455956",
  // 	  "Phone": "0528311259",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B8324",
  // 		  "CustomerID": "C1344",
  // 		  "RoomID": "R602",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "11/05/2023",
  // 		  "CheckOut": "16/05/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "07/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C3501",
  // 	  "Name": "David Wang",
  // 	  "CitizenID": "032704362624",
  // 	  "Phone": "0934334344",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B1357",
  // 		  "CustomerID": "C3501",
  // 		  "RoomID": "R904",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "10/09/2023",
  // 		  "CheckOut": "26/09/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 475,
  // 		  "CreateAt": "06/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4676",
  // 	  "Name": "Pham Garcia",
  // 	  "CitizenID": "037734285176",
  // 	  "Phone": "0227366447",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B0134",
  // 		  "CustomerID": "C4676",
  // 		  "RoomID": "R601",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "28/06/2023",
  // 		  "CheckOut": "01/07/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 250,
  // 		  "CreateAt": "26/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0386",
  // 		  "CustomerID": "C4676",
  // 		  "RoomID": "R104",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "13/09/2023",
  // 		  "CheckOut": "25/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 225,
  // 		  "CreateAt": "11/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B6663",
  // 		  "CustomerID": "C4676",
  // 		  "RoomID": "R102",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "27/10/2023",
  // 		  "CheckOut": "06/11/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 225,
  // 		  "CreateAt": "25/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C6825",
  // 	  "Name": "Le Brown",
  // 	  "CitizenID": "027086799424",
  // 	  "Phone": "0634966607",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4334",
  // 		  "CustomerID": "C6825",
  // 		  "RoomID": "R403",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "24/07/2023",
  // 		  "CheckOut": "03/08/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 575,
  // 		  "CreateAt": "23/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B9227",
  // 		  "CustomerID": "C6825",
  // 		  "RoomID": "R503",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "02/05/2023",
  // 		  "CheckOut": "21/05/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 675,
  // 		  "CreateAt": "30/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B8435",
  // 		  "CustomerID": "C6825",
  // 		  "RoomID": "R705",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "28/07/2023",
  // 		  "CheckOut": "14/08/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 350,
  // 		  "CreateAt": "24/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C6375",
  // 	  "Name": "Le Khanh",
  // 	  "CitizenID": "021682985014",
  // 	  "Phone": "0740799270",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B0814",
  // 		  "CustomerID": "C6375",
  // 		  "RoomID": "R305",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "29/06/2023",
  // 		  "CheckOut": "15/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 425,
  // 		  "CreateAt": "26/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B2980",
  // 		  "CustomerID": "C6375",
  // 		  "RoomID": "R402",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "21/01/2023",
  // 		  "CheckOut": "04/02/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 575,
  // 		  "CreateAt": "20/01/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4452",
  // 	  "Name": "Daniel Brown",
  // 	  "CitizenID": "013154952805",
  // 	  "Phone": "0299337486",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B7564",
  // 		  "CustomerID": "C4452",
  // 		  "RoomID": "R201",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "03/03/2023",
  // 		  "CheckOut": "18/03/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 300,
  // 		  "CreateAt": "01/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C9450",
  // 	  "Name": "John Brown",
  // 	  "CitizenID": "072965117867",
  // 	  "Phone": "0482525962",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5230",
  // 		  "CustomerID": "C9450",
  // 		  "RoomID": "R903",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "16/09/2023",
  // 		  "CheckOut": "03/10/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 500,
  // 		  "CreateAt": "13/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C5309",
  // 	  "Name": "Nguyen Smith",
  // 	  "CitizenID": "051019547746",
  // 	  "Phone": "0984961277",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B1604",
  // 		  "CustomerID": "C5309",
  // 		  "RoomID": "R201",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "21/01/2023",
  // 		  "CheckOut": "30/01/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 350,
  // 		  "CreateAt": "19/01/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C9009",
  // 	  "Name": "Michael Khanh",
  // 	  "CitizenID": "092289254828",
  // 	  "Phone": "0600221926",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B1877",
  // 		  "CustomerID": "C9009",
  // 		  "RoomID": "R205",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "07/08/2023",
  // 		  "CheckOut": "25/08/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 375,
  // 		  "CreateAt": "02/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B3967",
  // 		  "CustomerID": "C9009",
  // 		  "RoomID": "R904",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "25/09/2023",
  // 		  "CheckOut": "26/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 525,
  // 		  "CreateAt": "21/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B9190",
  // 		  "CustomerID": "C9009",
  // 		  "RoomID": "R105",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "29/03/2023",
  // 		  "CheckOut": "16/04/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "26/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B2168",
  // 		  "CustomerID": "C9009",
  // 		  "RoomID": "R601",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "05/06/2023",
  // 		  "CheckOut": "23/06/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 325,
  // 		  "CreateAt": "04/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8100",
  // 	  "Name": "Nguyen Khanh",
  // 	  "CitizenID": "053221773843",
  // 	  "Phone": "0657485913",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5593",
  // 		  "CustomerID": "C8100",
  // 		  "RoomID": "R401",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "20/07/2023",
  // 		  "CheckOut": "08/08/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 525,
  // 		  "CreateAt": "17/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0331",
  // 		  "CustomerID": "C8100",
  // 		  "RoomID": "R102",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "07/04/2023",
  // 		  "CheckOut": "08/04/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 250,
  // 		  "CreateAt": "06/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8058",
  // 	  "Name": "Le Nam",
  // 	  "CitizenID": "056478745629",
  // 	  "Phone": "0645674790",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5828",
  // 		  "CustomerID": "C8058",
  // 		  "RoomID": "R203",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "12/10/2023",
  // 		  "CheckOut": "30/10/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 300,
  // 		  "CreateAt": "09/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C1580",
  // 	  "Name": "Nguyen Van",
  // 	  "CitizenID": "016563938538",
  // 	  "Phone": "0173048876",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6105",
  // 		  "CustomerID": "C1580",
  // 		  "RoomID": "R902",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "21/01/2023",
  // 		  "CheckOut": "27/01/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 550,
  // 		  "CreateAt": "18/01/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8970",
  // 	  "Name": "Daniel Thi",
  // 	  "CitizenID": "033294717916",
  // 	  "Phone": "0860552725",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B9613",
  // 		  "CustomerID": "C8970",
  // 		  "RoomID": "R804",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "25/02/2023",
  // 		  "CheckOut": "07/03/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 400,
  // 		  "CreateAt": "24/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B9965",
  // 		  "CustomerID": "C8970",
  // 		  "RoomID": "R305",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "17/05/2023",
  // 		  "CheckOut": "03/06/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 425,
  // 		  "CreateAt": "13/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C1096",
  // 	  "Name": "Nguyen Tuan",
  // 	  "CitizenID": "061242658700",
  // 	  "Phone": "0835642569",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6108",
  // 		  "CustomerID": "C1096",
  // 		  "RoomID": "R401",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "28/06/2023",
  // 		  "CheckOut": "05/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 525,
  // 		  "CreateAt": "24/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B5869",
  // 		  "CustomerID": "C1096",
  // 		  "RoomID": "R403",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "05/05/2023",
  // 		  "CheckOut": "12/05/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 525,
  // 		  "CreateAt": "04/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B7115",
  // 		  "CustomerID": "C1096",
  // 		  "RoomID": "R405",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "12/06/2023",
  // 		  "CheckOut": "02/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 475,
  // 		  "CreateAt": "07/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C7063",
  // 	  "Name": "Tran Thi",
  // 	  "CitizenID": "045619624183",
  // 	  "Phone": "0670130157",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B7348",
  // 		  "CustomerID": "C7063",
  // 		  "RoomID": "R504",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "24/10/2023",
  // 		  "CheckOut": "30/10/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 700,
  // 		  "CreateAt": "21/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C3540",
  // 	  "Name": "Tran Smith",
  // 	  "CitizenID": "084330849445",
  // 	  "Phone": "0871524451",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4224",
  // 		  "CustomerID": "C3540",
  // 		  "RoomID": "R204",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "16/09/2023",
  // 		  "CheckOut": "18/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 275,
  // 		  "CreateAt": "14/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C0330",
  // 	  "Name": "Michael Johnson",
  // 	  "CitizenID": "069105536544",
  // 	  "Phone": "0641349272",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5176",
  // 		  "CustomerID": "C0330",
  // 		  "RoomID": "R602",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "10/04/2023",
  // 		  "CheckOut": "22/04/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 300,
  // 		  "CreateAt": "07/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B2475",
  // 		  "CustomerID": "C0330",
  // 		  "RoomID": "R705",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "18/02/2023",
  // 		  "CheckOut": "04/03/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 350,
  // 		  "CreateAt": "17/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B3729",
  // 		  "CustomerID": "C0330",
  // 		  "RoomID": "R103",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "08/10/2023",
  // 		  "CheckOut": "09/10/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 250,
  // 		  "CreateAt": "04/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C2194",
  // 	  "Name": "John Johnson",
  // 	  "CitizenID": "086058724038",
  // 	  "Phone": "0352423491",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5121",
  // 		  "CustomerID": "C2194",
  // 		  "RoomID": "R101",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "18/10/2023",
  // 		  "CheckOut": "06/11/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 250,
  // 		  "CreateAt": "13/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0522",
  // 		  "CustomerID": "C2194",
  // 		  "RoomID": "R103",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "18/09/2023",
  // 		  "CheckOut": "26/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "13/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B8949",
  // 		  "CustomerID": "C2194",
  // 		  "RoomID": "R802",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "25/12/2023",
  // 		  "CheckOut": "10/01/2024",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 350,
  // 		  "CreateAt": "22/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4888",
  // 	  "Name": "Emily Garcia",
  // 	  "CitizenID": "010157751570",
  // 	  "Phone": "0170546771",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4658",
  // 		  "CustomerID": "C4888",
  // 		  "RoomID": "R602",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "06/11/2023",
  // 		  "CheckOut": "11/11/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "01/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C5679",
  // 	  "Name": "Nguyen Thi",
  // 	  "CitizenID": "033222124969",
  // 	  "Phone": "0326470336",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B1165",
  // 		  "CustomerID": "C5679",
  // 		  "RoomID": "R305",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "04/05/2023",
  // 		  "CheckOut": "14/05/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 375,
  // 		  "CreateAt": "01/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1894",
  // 		  "CustomerID": "C5679",
  // 		  "RoomID": "R204",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "15/12/2023",
  // 		  "CheckOut": "28/12/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 375,
  // 		  "CreateAt": "13/12/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1848",
  // 		  "CustomerID": "C5679",
  // 		  "RoomID": "R201",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "27/03/2023",
  // 		  "CheckOut": "06/04/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "22/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C8318",
  // 	  "Name": "Hoang Thu",
  // 	  "CitizenID": "026196577069",
  // 	  "Phone": "0265638950",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4421",
  // 		  "CustomerID": "C8318",
  // 		  "RoomID": "R505",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "04/12/2023",
  // 		  "CheckOut": "14/12/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 675,
  // 		  "CreateAt": "29/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B8886",
  // 		  "CustomerID": "C8318",
  // 		  "RoomID": "R202",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "13/07/2023",
  // 		  "CheckOut": "30/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "12/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B9361",
  // 		  "CustomerID": "C8318",
  // 		  "RoomID": "R705",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "02/09/2023",
  // 		  "CheckOut": "07/09/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "30/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1259",
  // 		  "CustomerID": "C8318",
  // 		  "RoomID": "R702",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "04/07/2023",
  // 		  "CheckOut": "15/07/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "29/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C7958",
  // 	  "Name": "Pham Johnson",
  // 	  "CitizenID": "034657774143",
  // 	  "Phone": "0706360175",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5489",
  // 		  "CustomerID": "C7958",
  // 		  "RoomID": "R503",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "17/02/2023",
  // 		  "CheckOut": "20/02/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 675,
  // 		  "CreateAt": "13/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4904",
  // 	  "Name": "Le Thu",
  // 	  "CitizenID": "016202858815",
  // 	  "Phone": "0439164296",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B1482",
  // 		  "CustomerID": "C4904",
  // 		  "RoomID": "R101",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "13/08/2023",
  // 		  "CheckOut": "15/08/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 275,
  // 		  "CreateAt": "08/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B2387",
  // 		  "CustomerID": "C4904",
  // 		  "RoomID": "R105",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "10/03/2023",
  // 		  "CheckOut": "14/03/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 225,
  // 		  "CreateAt": "07/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B3249",
  // 		  "CustomerID": "C4904",
  // 		  "RoomID": "R904",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "24/06/2023",
  // 		  "CheckOut": "12/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 550,
  // 		  "CreateAt": "22/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C0740",
  // 	  "Name": "Nguyen Khanh",
  // 	  "CitizenID": "050913961410",
  // 	  "Phone": "0495190082",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4192",
  // 		  "CustomerID": "C0740",
  // 		  "RoomID": "R405",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "17/05/2023",
  // 		  "CheckOut": "19/05/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 475,
  // 		  "CreateAt": "13/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B7648",
  // 		  "CustomerID": "C0740",
  // 		  "RoomID": "R302",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "13/09/2023",
  // 		  "CheckOut": "27/09/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 350,
  // 		  "CreateAt": "08/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B5900",
  // 		  "CustomerID": "C0740",
  // 		  "RoomID": "R701",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "16/04/2023",
  // 		  "CheckOut": "23/04/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "11/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B8957",
  // 		  "CustomerID": "C0740",
  // 		  "RoomID": "R201",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "03/10/2023",
  // 		  "CheckOut": "07/10/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 275,
  // 		  "CreateAt": "01/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B2951",
  // 		  "CustomerID": "C0740",
  // 		  "RoomID": "R301",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "19/11/2023",
  // 		  "CheckOut": "07/12/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "16/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C9143",
  // 	  "Name": "Le Thi",
  // 	  "CitizenID": "042559253793",
  // 	  "Phone": "0303602072",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B4524",
  // 		  "CustomerID": "C9143",
  // 		  "RoomID": "R405",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "25/11/2023",
  // 		  "CheckOut": "28/11/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 500,
  // 		  "CreateAt": "22/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C2735",
  // 	  "Name": "John Khanh",
  // 	  "CitizenID": "054307042222",
  // 	  "Phone": "0499550210",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6075",
  // 		  "CustomerID": "C2735",
  // 		  "RoomID": "R405",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "30/09/2023",
  // 		  "CheckOut": "08/10/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 575,
  // 		  "CreateAt": "26/09/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C9477",
  // 	  "Name": "David Johnson",
  // 	  "CitizenID": "023305725938",
  // 	  "Phone": "0188514875",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B9886",
  // 		  "CustomerID": "C9477",
  // 		  "RoomID": "R401",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "17/11/2023",
  // 		  "CheckOut": "18/11/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 500,
  // 		  "CreateAt": "16/11/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4941",
  // 	  "Name": "Michael Johnson",
  // 	  "CitizenID": "089421737323",
  // 	  "Phone": "0964177980",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B2796",
  // 		  "CustomerID": "C4941",
  // 		  "RoomID": "R901",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "02/06/2023",
  // 		  "CheckOut": "06/06/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 500,
  // 		  "CreateAt": "28/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B8753",
  // 		  "CustomerID": "C4941",
  // 		  "RoomID": "R104",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "09/03/2023",
  // 		  "CheckOut": "11/03/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 275,
  // 		  "CreateAt": "04/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1805",
  // 		  "CustomerID": "C4941",
  // 		  "RoomID": "R503",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "04/07/2023",
  // 		  "CheckOut": "11/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 650,
  // 		  "CreateAt": "30/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C1129",
  // 	  "Name": "Tran Wang",
  // 	  "CitizenID": "088602848056",
  // 	  "Phone": "0775052203",
  // 	  "Gender": "Female",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B5318",
  // 		  "CustomerID": "C1129",
  // 		  "RoomID": "R202",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "17/07/2023",
  // 		  "CheckOut": "22/07/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 275,
  // 		  "CreateAt": "12/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0622",
  // 		  "CustomerID": "C1129",
  // 		  "RoomID": "R601",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "08/06/2023",
  // 		  "CheckOut": "20/06/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 300,
  // 		  "CreateAt": "06/06/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B6305",
  // 		  "CustomerID": "C1129",
  // 		  "RoomID": "R801",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "01/05/2023",
  // 		  "CheckOut": "20/05/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 400,
  // 		  "CreateAt": "29/04/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B3310",
  // 		  "CustomerID": "C1129",
  // 		  "RoomID": "R601",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "08/08/2023",
  // 		  "CheckOut": "28/08/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 225,
  // 		  "CreateAt": "03/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C1222",
  // 	  "Name": "John Brown",
  // 	  "CitizenID": "093452704036",
  // 	  "Phone": "0365072808",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6901",
  // 		  "CustomerID": "C1222",
  // 		  "RoomID": "R402",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "05/01/2023",
  // 		  "CheckOut": "24/01/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 525,
  // 		  "CreateAt": "04/01/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B4367",
  // 		  "CustomerID": "C1222",
  // 		  "RoomID": "R502",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "11/05/2023",
  // 		  "CheckOut": "24/05/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 650,
  // 		  "CreateAt": "06/05/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0023",
  // 		  "CustomerID": "C1222",
  // 		  "RoomID": "R502",
  // 		  "RoomType": {
  // 			"ID": "RT05",
  // 			"TypeName": "Small Family Room",
  // 			"NumPerson": 4,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 8
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 600
  // 		  },
  // 		  "CheckIn": "17/02/2023",
  // 		  "CheckOut": "02/03/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 675,
  // 		  "CreateAt": "15/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B1237",
  // 		  "CustomerID": "C1222",
  // 		  "RoomID": "R104",
  // 		  "RoomType": {
  // 			"ID": "RT01",
  // 			"TypeName": "Single Regular Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 200
  // 		  },
  // 		  "CheckIn": "16/08/2023",
  // 		  "CheckOut": "25/08/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 325,
  // 		  "CreateAt": "11/08/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C4783",
  // 	  "Name": "Nguyen Wang",
  // 	  "CitizenID": "088567585783",
  // 	  "Phone": "0969662181",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B6452",
  // 		  "CustomerID": "C4783",
  // 		  "RoomID": "R205",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "23/02/2023",
  // 		  "CheckOut": "14/03/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 375,
  // 		  "CreateAt": "18/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B2031",
  // 		  "CustomerID": "C4783",
  // 		  "RoomID": "R303",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "16/10/2023",
  // 		  "CheckOut": "20/10/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 425,
  // 		  "CreateAt": "13/10/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0004",
  // 			  "Service": "Pasta",
  // 			  "Price": 25,
  // 			  "Available": 355
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	},
  // 	{
  // 	  "ID": "C3078",
  // 	  "Name": "Le Garcia",
  // 	  "CitizenID": "012715954330",
  // 	  "Phone": "0603218781",
  // 	  "Gender": "Male",
  // 	  "Booking": [
  // 		{
  // 		  "ID": "B2850",
  // 		  "CustomerID": "C3078",
  // 		  "RoomID": "R301",
  // 		  "RoomType": {
  // 			"ID": "RT03",
  // 			"TypeName": "Single VIP Room",
  // 			"NumPerson": 1,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 300
  // 		  },
  // 		  "CheckIn": "07/03/2023",
  // 		  "CheckOut": "21/03/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 425,
  // 		  "CreateAt": "03/03/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0010",
  // 			  "Service": "Juice",
  // 			  "Price": 25,
  // 			  "Available": 656
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0001",
  // 			  "Service": "Pizza",
  // 			  "Price": 25,
  // 			  "Available": 979
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B4399",
  // 		  "CustomerID": "C3078",
  // 		  "RoomID": "R404",
  // 		  "RoomType": {
  // 			"ID": "RT04",
  // 			"TypeName": "Couple VIP Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Hair Dryer",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Refrigerator",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 450
  // 		  },
  // 		  "CheckIn": "04/03/2023",
  // 		  "CheckOut": "07/03/2023",
  // 		  "isCanceled": false,
  // 		  "PaymentStatus": "Paid",
  // 		  "Price": 575,
  // 		  "CreateAt": "27/02/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0007",
  // 			  "Service": "Tea",
  // 			  "Price": 25,
  // 			  "Available": 269
  // 			},
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0009",
  // 			  "Service": "Smoothie",
  // 			  "Price": 25,
  // 			  "Available": 286
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0008",
  // 			  "Service": "Soda",
  // 			  "Price": 25,
  // 			  "Available": 346
  // 			}
  // 		  ]
  // 		},
  // 		{
  // 		  "ID": "B0272",
  // 		  "CustomerID": "C3078",
  // 		  "RoomID": "R201",
  // 		  "RoomType": {
  // 			"ID": "RT02",
  // 			"TypeName": "Couple Regular Room",
  // 			"NumPerson": 2,
  // 			"Amenities": [
  // 			  {
  // 				"Name": "Dental Kit",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Comb",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Shampoo",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Bath Gel",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Sanitary Bag",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Slipper",
  // 				"Quantity": 2
  // 			  },
  // 			  {
  // 				"Name": "Towel",
  // 				"Quantity": 4
  // 			  },
  // 			  {
  // 				"Name": "Bed",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Television",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Water Heater",
  // 				"Quantity": 1
  // 			  },
  // 			  {
  // 				"Name": "Air Conditioner",
  // 				"Quantity": 1
  // 			  }
  // 			],
  // 			"Price": 250
  // 		  },
  // 		  "CheckIn": "15/07/2023",
  // 		  "CheckOut": "29/07/2023",
  // 		  "isCanceled": true,
  // 		  "PaymentStatus": "Unpaid",
  // 		  "Price": 350,
  // 		  "CreateAt": "13/07/2023",
  // 		  "Service": [
  // 			{
  // 			  "ID": "S0005",
  // 			  "Service": "Tacos",
  // 			  "Price": 25,
  // 			  "Available": 459
  // 			},
  // 			{
  // 			  "ID": "S0006",
  // 			  "Service": "Coffee",
  // 			  "Price": 25,
  // 			  "Available": 554
  // 			},
  // 			{
  // 			  "ID": "S0002",
  // 			  "Service": "Burger",
  // 			  "Price": 25,
  // 			  "Available": 283
  // 			},
  // 			{
  // 			  "ID": "S0003",
  // 			  "Service": "Sushi",
  // 			  "Price": 25,
  // 			  "Available": 564
  // 			}
  // 		  ]
  // 		}
  // 	  ]
  // 	}
];

export const addDbCustomer = async () => {
  CUSTOMER.map(async (b) => {
    await setDoc(doc(db, "CUSTOMER", b.ID), b);
  });
};
