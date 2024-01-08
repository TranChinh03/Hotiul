import React, { useEffect, useState } from 'react';
import AvailableRoom from './AvailableRoom';
import InUseRoom from "./InUseRoom";
import ConfirmCheckinRoom from "./ConfirmCheckinRoom";
import ConfirmcheckoutRoom from "./ConfirmCheckoutRoom";
import FixingRoom from "./FixingRoom";
import NeedCleanRoom from "./NeedCleanRoom";
import { getData } from '../../controller/getData.ts';
import { convertStringToDate } from '../../utils/appUtils.js';
import RoomDetail from './RoomDetail.js';
function RoomItem(props) {
    const [roomStatus, setRoomStatus] = useState(props.roomStatus);
    const roomId = props.roomId;
    const roomType = props.roomType;
    useEffect(() => {
        fetchBooking();
    }, []);
    useEffect(() => { }, [])
    const [listBooking, setListBooking] = useState([]);
    const fetchBooking = async () => {
        await Promise.all([
            getData('/BOOKING').then(data => {
                setListBooking(data);
            })
        ])
    }
    const [isRoomDetailDisplay, setIsRoomDetailDisplay] = useState(false);
    const [bookingOfRoom, setBookingOfRoom] = useState();
    useEffect(() => { }, [bookingOfRoom])
    const handleClick = () => {
        setIsRoomDetailDisplay(true);
        const curentDate = new Date();
        const bookingOfSelectedRoom = listBooking.filter(item => convertStringToDate(item.CheckIn) <= curentDate && convertStringToDate(item.CheckOut) >= curentDate && item.RoomID === roomId);
        if (bookingOfSelectedRoom.length > 0) {
            setBookingOfRoom(bookingOfSelectedRoom[0]);
            console.log(bookingOfSelectedRoom);
        }
    };
    const handleCloseDetailModal = () => {
        setIsRoomDetailDisplay(false);
    }
    const handleUpdateStatus = (newStatus) => {
        setRoomStatus(newStatus)
    }
    // Render the appropriate component based on roomStatus
    const renderRoomComponent = () => {
        switch (roomStatus) {
            case 'Available':
                return <AvailableRoom roomId={roomId} roomType={roomType} />;
            case 'In Use':
                return <InUseRoom roomId={roomId} roomType={roomType} />;
            case 'Confirm Checkin':
                return <ConfirmCheckinRoom roomId={roomId} roomType={roomType} />;
            case 'Confirm Checkout':
                return <ConfirmcheckoutRoom roomId={roomId} roomType={roomType} />;
            case 'Fixing':
                return <FixingRoom roomId={roomId} roomType={roomType} />;
            case 'Cleaning':
                return <NeedCleanRoom roomId={roomId} roomType={roomType} />;
            default:
                // Handle the case where roomStatus is not recognized
                return null;
        }
    };
    console.log("Room status in RoomItem", roomStatus);
    return (
        <div>
            <RoomDetail
                updateStatus={handleUpdateStatus}
                bookingOfRoom={bookingOfRoom}
                roomId={roomId}
                roomType={roomType}
                roomStatus={roomStatus}
                onCloseModal={handleCloseDetailModal}
                isDisplay={isRoomDetailDisplay}
            />
            <div onClick={handleClick}>
                {renderRoomComponent()}
            </div>
        </div>
    );
}

export default RoomItem;