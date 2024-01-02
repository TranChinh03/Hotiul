import { Button } from "antd";
import React from "react";
import { addDbBooking } from "../../firebase-tools/addBooking";
import { addDbCustomer } from "../../firebase-tools/addCustomer";
import { addDbFee } from "../../firebase-tools/addFee";
import { addDbRoomType } from "../../firebase-tools/addRoomType";
import { addDbService } from "../../firebase-tools/addService";
import { addDbRoom } from "../../firebase-tools/addRoom";
import { addDbStaff } from "../../firebase-tools/addStaff";
import { addDbRefund } from "../../firebase-tools/addRefund";

export const Draft = () => {
    return (
        <>
            <Button onClick={addDbBooking}>Add Booking</Button>
            <Button onClick={addDbCustomer}>Add Customer</Button>
            <Button onClick={addDbFee}>Add Fee</Button>
            <Button onClick={addDbRoomType}>Add Room type</Button>
            <Button onClick={addDbService}>Add Service</Button>
            <Button onClick={addDbRoom}>Add Room</Button>
            <Button onClick={addDbStaff}>Add Staff</Button>
            <Button onClick={addDbRefund}>Add Refund</Button>
        </>
    )
}