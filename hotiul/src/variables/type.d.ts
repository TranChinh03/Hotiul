export type TBooking = {
    ID: string,
    CustomerID: string,
    RoomID: string,
    CheckIn: Date | string,
    CheckOut: Date | string,
    isCanceled: boolean,
    PaymentStatus: string,
    Price: number
}

export type TCustomer = {
    ID: string,
    Name: string,
    CitizenID: string,
    Phone: string,
    Gender: 'Female' | 'Male',
    Booking: {ID: string}[],
}

export type TFee = {
    ID: string,
    Name: string,
    Details: {
        Name: string,
        Price: number
    }[]
}

export type TRefund = {
    ID: string, 
    CustomerID: string, 
    RoomID: string, 
    BookingID: string, 
    RefundStatus: 'Completed' | 'Incompleted' | 'Canceled'
}

export type TRoom = {
    ID: string,
    Name: string,
    Status: 'Available Room' | 'Confirm Checkin' | 'Fixing' | 'In Use' | 'Confirm Checkout' | 'Cleaning',
    TypeID: string,
    TypeName: string,
}

export type TRoomType = {
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

export type TService = {
    ID: string,
    Service: string,
    Price: number,
    Available: number,
}

export type TStaff = {
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