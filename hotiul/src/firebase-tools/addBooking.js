import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const BOOKING =
	[
		{
			"ID": "B5121",
			"CustomerID": "C2194",
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
			"CheckIn": "08/01/2024",
			"CheckOut": "11/01/2024",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 250,
			"CreateAt": "07/01/2024",
			"Service": [
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				}
			]
		},
		{
			"ID": "B6901",
			"CustomerID": "C1222",
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
			"CheckIn": "05/01/2023",
			"CheckOut": "24/01/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 525,
			"CreateAt": "04/01/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				}
			]
		},
		{
			"ID": "B7648",
			"CustomerID": "C0740",
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
			"CheckIn": "10/01/2024",
			"CheckOut": "17/01/2024",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 350,
			"CreateAt": "08/09/2023",
			"Service": [
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				}
			]
		},
		{
			"ID": "B7112",
			"CustomerID": "C6546",
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
			"CheckIn": "01/01/2024",
			"CheckOut": "10/01/2024",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 325,
			"CreateAt": "22/04/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B5828",
			"CustomerID": "C8058",
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
			"CheckIn": "06/01/2024",
			"CheckOut": "12/01/2024",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 300,
			"CreateAt": "09/10/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B3215",
			"CustomerID": "C5538",
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
			"CheckIn": "20/11/2023",
			"CheckOut": "30/11/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 375,
			"CreateAt": "19/11/2023",
			"Service": [
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
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
				}
			]
		},
		{
			"ID": "B6105",
			"CustomerID": "C1580",
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
			"CheckIn": "21/01/2023",
			"CheckOut": "27/01/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 550,
			"CreateAt": "18/01/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				}
			]
		},
		{
			"ID": "B0622",
			"CustomerID": "C1129",
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
			"CheckIn": "08/06/2023",
			"CheckOut": "20/06/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "06/06/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
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
				}
			]
		},
		{
			"ID": "B2790",
			"CustomerID": "C8262",
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
			"CheckIn": "24/07/2023",
			"CheckOut": "09/08/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 400,
			"CreateAt": "22/07/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
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
			"CheckIn": "06/01/2024",
			"CheckOut": "10/01/2024",
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
		},
		{
			"ID": "B6185",
			"CustomerID": "C9671",
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
			"CheckIn": "03/10/2023",
			"CheckOut": "17/10/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 500,
			"CreateAt": "02/10/2023",
			"Service": [
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B2031",
			"CustomerID": "C4783",
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
			"CheckIn": "16/10/2023",
			"CheckOut": "20/10/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 425,
			"CreateAt": "13/10/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B9190",
			"CustomerID": "C9009",
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
			"CheckIn": "29/03/2023",
			"CheckOut": "16/04/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "26/03/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B9227",
			"CustomerID": "C6825",
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
			"CheckIn": "02/05/2023",
			"CheckOut": "21/05/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 675,
			"CreateAt": "30/04/2023",
			"Service": [
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				}
			]
		},
		{
			"ID": "B0995",
			"CustomerID": "C8262",
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
			"CheckIn": "14/04/2023",
			"CheckOut": "20/04/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 350,
			"CreateAt": "10/04/2023",
			"Service": [
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B1345",
			"CustomerID": "C3339",
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
			"CheckIn": "26/07/2023",
			"CheckOut": "01/08/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "25/07/2023",
			"Service": [
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
				}
			]
		},
		{
			"ID": "B5869",
			"CustomerID": "C1096",
			"RoomID": "R403",
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
			"CheckIn": "05/05/2023",
			"CheckOut": "12/05/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 525,
			"CreateAt": "04/05/2023",
			"Service": [
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B0023",
			"CustomerID": "C1222",
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
			"CheckIn": "06/01/2023",
			"CheckOut": "12/01/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 675,
			"CreateAt": "15/02/2023",
			"Service": [
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B4538",
			"CustomerID": "C6068",
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
			"CheckIn": "05/01/2024",
			"CheckOut": "18/01/2024",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 525,
			"CreateAt": "31/12/2023",
			"Service": [
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
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B4224",
			"CustomerID": "C3540",
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
			"CheckIn": "09/01/2023",
			"CheckOut": "13/01/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 1000,
			"CreateAt": "14/09/2023",
			"Service": [
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				}
			]
		},
		{
			"ID": "B7600",
			"CustomerID": "C3339",
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
			"CheckIn": "01/07/2023",
			"CheckOut": "04/07/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "30/06/2023",
			"Service": [
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
				}
			]
		},
		{
			"ID": "B8324",
			"CustomerID": "C1344",
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
			"CheckIn": "11/05/2023",
			"CheckOut": "16/05/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "07/05/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
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
				}
			]
		},
		{
			"ID": "B3449",
			"CustomerID": "C9671",
			"RoomID": "R603",
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
			"CheckIn": "12/12/2023",
			"CheckOut": "28/12/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "07/12/2023",
			"Service": [
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				}
			]
		},
		{
			"ID": "B1237",
			"CustomerID": "C1222",
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
			"CheckIn": "16/08/2023",
			"CheckOut": "25/08/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "11/08/2023",
			"Service": [
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				}
			]
		},
		{
			"ID": "B9613",
			"CustomerID": "C8970",
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
			"CheckIn": "25/02/2023",
			"CheckOut": "07/03/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 400,
			"CreateAt": "24/02/2023",
			"Service": [
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B2850",
			"CustomerID": "C3078",
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
			"CheckIn": "07/03/2023",
			"CheckOut": "21/03/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 425,
			"CreateAt": "03/03/2023",
			"Service": [
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
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				}
			]
		},
		{
			"ID": "B0598",
			"CustomerID": "C7226",
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
			"CheckIn": "03/12/2023",
			"CheckOut": "05/12/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 375,
			"CreateAt": "01/12/2023",
			"Service": [
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B6305",
			"CustomerID": "C1129",
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
			"CheckIn": "01/05/2023",
			"CheckOut": "20/05/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 400,
			"CreateAt": "29/04/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				}
			]
		},
		{
			"ID": "B4596",
			"CustomerID": "C2449",
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
			"CheckIn": "28/01/2023",
			"CheckOut": "07/02/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 625,
			"CreateAt": "26/01/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B4652",
			"CustomerID": "C0663",
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
			"CheckIn": "27/02/2023",
			"CheckOut": "01/03/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "26/02/2023",
			"Service": [
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B9965",
			"CustomerID": "C8970",
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
			"CheckIn": "17/05/2023",
			"CheckOut": "03/06/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 425,
			"CreateAt": "13/05/2023",
			"Service": [
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B5230",
			"CustomerID": "C9450",
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
			"CheckIn": "16/09/2023",
			"CheckOut": "03/10/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 500,
			"CreateAt": "13/09/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				}
			]
		},
		{
			"ID": "B6248",
			"CustomerID": "C6546",
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
			"CheckIn": "17/05/2023",
			"CheckOut": "23/05/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "15/05/2023",
			"Service": [
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B3310",
			"CustomerID": "C1129",
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
			"CheckIn": "08/08/2023",
			"CheckOut": "28/08/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 225,
			"CreateAt": "03/08/2023",
			"Service": [
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				}
			]
		},
		{
			"ID": "B1848",
			"CustomerID": "C5679",
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
			"CheckIn": "27/03/2023",
			"CheckOut": "06/04/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "22/03/2023",
			"Service": [
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B4399",
			"CustomerID": "C3078",
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
			"CheckIn": "04/03/2023",
			"CheckOut": "07/03/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 575,
			"CreateAt": "27/02/2023",
			"Service": [
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				}
			]
		},
		{
			"ID": "B7564",
			"CustomerID": "C4452",
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
			"CheckIn": "03/03/2023",
			"CheckOut": "18/03/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 300,
			"CreateAt": "01/03/2023",
			"Service": [
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				}
			]
		},
		{
			"ID": "B7115",
			"CustomerID": "C1096",
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
			"CheckIn": "12/06/2023",
			"CheckOut": "02/07/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 475,
			"CreateAt": "07/06/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B4658",
			"CustomerID": "C4888",
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
			"CheckIn": "06/11/2023",
			"CheckOut": "11/11/2023",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "01/11/2023",
			"Service": [
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				}
			]
		},
		{
			"ID": "B0522",
			"CustomerID": "C2194",
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
			"CheckIn": "18/09/2023",
			"CheckOut": "26/09/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "13/09/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				}
			]
		},
		{
			"ID": "B8949",
			"CustomerID": "C2194",
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
			"CheckIn": "09/01/2024",
			"CheckOut": "12/01/2024",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 1200,
			"CreateAt": "22/12/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				}
			]
		},
		{
			"ID": "B9886",
			"CustomerID": "C9477",
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
			"CheckIn": "17/11/2023",
			"CheckOut": "18/11/2023",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 500,
			"CreateAt": "16/11/2023",
			"Service": [
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B5176",
			"CustomerID": "C0330",
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
			"CheckIn": "07/01/2024",
			"CheckOut": "13/01/2024",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 1200,
			"CreateAt": "07/01/2024",
			"Service": [
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
		},
		{
			"ID": "B4376",
			"CustomerID": "C5538",
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
			"CheckIn": "02/03/2023",
			"CheckOut": "11/03/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 375,
			"CreateAt": "01/03/2023",
			"Service": [
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
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
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B8886",
			"CustomerID": "C8318",
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
			"CheckIn": "13/07/2023",
			"CheckOut": "30/07/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "12/07/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				}
			]
		},
		{
			"ID": "B9361",
			"CustomerID": "C8318",
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
			"CheckIn": "02/09/2023",
			"CheckOut": "07/09/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "30/08/2023",
			"Service": [
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
		},
		{
			"ID": "B5900",
			"CustomerID": "C0740",
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
			"CheckIn": "16/04/2023",
			"CheckOut": "23/04/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 325,
			"CreateAt": "11/04/2023",
			"Service": [
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
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
				}
			]
		},
		{
			"ID": "B9134",
			"CustomerID": "C2203",
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
			"CheckIn": "25/09/2023",
			"CheckOut": "28/09/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 225,
			"CreateAt": "23/09/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B2387",
			"CustomerID": "C4904",
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
			"CheckIn": "10/03/2023",
			"CheckOut": "14/03/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 225,
			"CreateAt": "07/03/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B9379",
			"CustomerID": "C8312",
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
			"CheckIn": "25/02/2023",
			"CheckOut": "09/03/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 525,
			"CreateAt": "23/02/2023",
			"Service": [
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B0331",
			"CustomerID": "C8100",
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
			"CheckIn": "07/04/2023",
			"CheckOut": "08/04/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 250,
			"CreateAt": "06/04/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				}
			]
		},
		{
			"ID": "B8435",
			"CustomerID": "C6825",
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
			"CheckIn": "28/07/2023",
			"CheckOut": "14/08/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 350,
			"CreateAt": "24/07/2023",
			"Service": [
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				}
			]
		},
		{
			"ID": "B6661",
			"CustomerID": "C8916",
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
			"CheckIn": "09/04/2023",
			"CheckOut": "19/04/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 475,
			"CreateAt": "07/04/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B6075",
			"CustomerID": "C2735",
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
			"CheckIn": "30/09/2023",
			"CheckOut": "08/10/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 575,
			"CreateAt": "26/09/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				}
			]
		},
		{
			"ID": "B8957",
			"CustomerID": "C0740",
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
			"CheckIn": "03/10/2023",
			"CheckOut": "07/10/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 275,
			"CreateAt": "01/10/2023",
			"Service": [
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				}
			]
		},
		{
			"ID": "B0272",
			"CustomerID": "C3078",
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
			"CheckIn": "15/07/2023",
			"CheckOut": "29/07/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 350,
			"CreateAt": "13/07/2023",
			"Service": [
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
				}
			]
		},
		{
			"ID": "B8203",
			"CustomerID": "C3960",
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
			"CheckIn": "14/12/2023",
			"CheckOut": "22/12/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 550,
			"CreateAt": "12/12/2023",
			"Service": [
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				}
			]
		},
		{
			"ID": "B1259",
			"CustomerID": "C8318",
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
			"CheckIn": "04/07/2023",
			"CheckOut": "15/07/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 300,
			"CreateAt": "29/06/2023",
			"Service": [
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
				}
			]
		},
		{
			"ID": "B7945",
			"CustomerID": "C2203",
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
			"CheckIn": "20/07/2023",
			"CheckOut": "27/07/2023",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 400,
			"CreateAt": "15/07/2023",
			"Service": [
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
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				}
			]
		},
		{
			"ID": "B6768",
			"CustomerID": "C5538",
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
			"CheckIn": "16/06/2023",
			"CheckOut": "21/06/2023",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 375,
			"CreateAt": "11/06/2023",
			"Service": [
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
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				}
			]
		},
		{
			"ID": "B2980",
			"CustomerID": "C6375",
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
			"CheckIn": "21/01/2023",
			"CheckOut": "04/02/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 575,
			"CreateAt": "20/01/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
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
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				}
			]
		},
		{
			"ID": "B0386",
			"CustomerID": "C4676",
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
			"CheckIn": "13/09/2023",
			"CheckOut": "25/09/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 225,
			"CreateAt": "11/09/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B2475",
			"CustomerID": "C0330",
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
			"CheckIn": "18/02/2023",
			"CheckOut": "04/03/2023",
			"isCanceled": true,
			"PaymentStatus": "Unpaid",
			"Price": 350,
			"CreateAt": "17/02/2023",
			"Service": [
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				}
			]
		},
		{
			"ID": "B1604",
			"CustomerID": "C5309",
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
			"CheckIn": "21/01/2023",
			"CheckOut": "30/01/2023",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 350,
			"CreateAt": "19/01/2023",
			"Service": [
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
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0001",
					"Service": "Pizza",
					"Price": 25,
					"Available": 979
				}
			]
		},
		{
			"ID": "B3729",
			"CustomerID": "C0330",
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
			"CheckIn": "08/10/2023",
			"CheckOut": "09/10/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 250,
			"CreateAt": "04/10/2023",
			"Service": [
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				}
			]
		},
		{
			"ID": "B1059",
			"CustomerID": "C2203",
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
			"CheckIn": "06/12/2023",
			"CheckOut": "11/12/2023",
			"isCanceled": false,
			"PaymentStatus": "Unpaid",
			"Price": 300,
			"CreateAt": "03/12/2023",
			"Service": [
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0010",
					"Service": "Juice",
					"Price": 25,
					"Available": 656
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				},
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				}
			]
		},
		{
			"ID": "B6663",
			"CustomerID": "C4676",
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
			"CheckIn": "08/01/2024",
			"CheckOut": "14/01/2024",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 225,
			"CreateAt": "25/10/2023",
			"Service": [
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B2168",
			"CustomerID": "C9009",
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
			"CheckIn": "05/06/2023",
			"CheckOut": "23/06/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 325,
			"CreateAt": "04/06/2023",
			"Service": [
				{
					"ID": "S0008",
					"Service": "Soda",
					"Price": 25,
					"Available": 346
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				},
				{
					"ID": "S0003",
					"Service": "Sushi",
					"Price": 25,
					"Available": 564
				},
				{
					"ID": "S0009",
					"Service": "Smoothie",
					"Price": 25,
					"Available": 286
				}
			]
		},
		{
			"ID": "B8644",
			"CustomerID": "C9671",
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
			"CheckIn": "30/08/2023",
			"CheckOut": "15/09/2023",
			"isCanceled": true,
			"PaymentStatus": "Paid",
			"Price": 400,
			"CreateAt": "25/08/2023",
			"Service": [
				{
					"ID": "S0006",
					"Service": "Coffee",
					"Price": 25,
					"Available": 554
				},
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0005",
					"Service": "Tacos",
					"Price": 25,
					"Available": 459
				},
				{
					"ID": "S0004",
					"Service": "Pasta",
					"Price": 25,
					"Available": 355
				}
			]
		},
		{
			"ID": "B1805",
			"CustomerID": "C4941",
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
			"CheckIn": "04/07/2023",
			"CheckOut": "11/07/2023",
			"isCanceled": false,
			"PaymentStatus": "Paid",
			"Price": 650,
			"CreateAt": "30/06/2023",
			"Service": [
				{
					"ID": "S0002",
					"Service": "Burger",
					"Price": 25,
					"Available": 283
				},
				{
					"ID": "S0007",
					"Service": "Tea",
					"Price": 25,
					"Available": 269
				}
			]
		}
	]

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