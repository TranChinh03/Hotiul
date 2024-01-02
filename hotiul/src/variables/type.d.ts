declare type TBooking = {
    ID: string,
    CustomerID: string,
    RoomID: string,
    CheckIn: Date | string,
    CheckOut: Date | string,
    isCanceled: boolean,
    PaymentStatus: string,
    Price: number
}

declare type TCustomer = {
    ID: string,
    Name: string,
    CitizenID: string,
    Phone: string,
    Gender: 'Female' | 'Male',
    Booking: {ID: string}[],
}

declare type TFee = {
    ID: string,
    Name: string,
    Details: {
        Name: string,
        Price: number
    }[]
}

declare type TRefund = {
    ID: string, 
    CustomerID: string, 
    RoomID: string, 
    BookingID: string, 
    RefundStatus: 'Completed' | 'Incompleted' | 'Canceled'
}

declare type TRoom = {
    ID: string,
    Name: string,
    Status: 'Available Room' | 'Confirm Checkin' | 'Fixing' | 'In Use' | 'Confirm Checkout' | 'Cleaning',
    TypeID: string,
    TypeName: string,
}

declare type TRoomType = {
    ID: string,
    TypeID: 'RTSingleReg',
		TypeName: string,
		NumPerson: number,
		Amenities: 
			{
				Name: string,
				Quantity: number,
			}[]
}

declare type TService = {
    ID: string,
    Service: string,
    TotalPrice: number,
    Available: number,
}

declare type TStaff = {
    ID: string,
    Name: string,
    CitizenID: string,
    Phone: string,
    Gender: 'Female' | 'Male',
    Address: string,
    Salary: number,
    Username: string,
    Password: string,
    Role: 'Manager' | 'Staff',
}