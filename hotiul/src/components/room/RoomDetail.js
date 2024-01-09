import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { Button } from 'antd';
import { updateData } from '../../controller/addData.ts';
import { getData } from '../../controller/getData.ts';
import { convertStringToDate, formatDateToDDMMYYYY } from '../../utils/appUtils.js';
const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
};
function RoomDetail(props) {
    const handleCloseDetailModal = () => {
        props.onCloseModal();
    }
    // handle Update Room
    const handleConfirmCheckin = () => {
        const roomData = {
            Status: "In Use",
        }
        console.log("update", roomData);
        updateData({ data: roomData, table: "ROOM", id: props.roomId });
        handleCloseDetailModal();
        props.updateStatus("In Use");
    }

    const handleConfirmCheckout = () => {
        const roomData = {
            Status: "Cleaning",
        }
        console.log("update", roomData);
        updateData({ data: roomData, table: "ROOM", id: props.roomId });
        handleCloseDetailModal();
        props.updateStatus("Cleaning");

    }
    const handleCompleteCleaning = () => {
        const roomData = {
            Status: "Available",
        }
        console.log("update", roomData);
        updateData({ data: roomData, table: "ROOM", id: props.roomId });
        handleCloseDetailModal();
        props.updateStatus("Available");

    }
    const handleCompleteFixing = () => {
        const roomData = {
            Status: "Available",
        }
        console.log("update", roomData);
        updateData({ data: roomData, table: "ROOM", id: props.roomId });
        handleCloseDetailModal();
        props.updateStatus("Available");
    }
    const handleReturnSoon = async () => {
        // update booking
        // find booking for that room
        //      CheckIn < currentDate
        //      CheckOut > currentDate
        //      RoomId = props.roomId
        // update booking
        //      CheckOut = currentDate
        const listBooking = await getData("/BOOKING");
        const currentDate = new Date();
        const bookingOfRoom = listBooking.find((item) => (item.RoomID == props.roomId && convertStringToDate(item.CheckIn) < currentDate && convertStringToDate(item.CheckOut) > currentDate));
        console.log("booking of room", bookingOfRoom);
        updateData({ data: { CheckOut: formatDateToDDMMYYYY(currentDate) }, table: "BOOKING", id: bookingOfRoom.ID });
        updateData({ data: { Status: "Cleaning" }, table: "ROOM", id: props.roomId });
        handleCloseDetailModal();
        props.updateStatus("Cleaning");
    }
    const handleFixing = () => {
        const roomData = {
            Status: "Fixing",
        }
        console.log("update", roomData);
        updateData({ data: roomData, table: "ROOM", id: props.roomId });
        handleCloseDetailModal();
        props.updateStatus("Fixing");
    }
    const [customerOfRoom, setCustomerOfRoom] = useState();
    const [bookingOfRoom, setBookingOfRoom] = useState();
    useEffect(() => {
        if (props.roomStatus == 'In Use' || props.roomStatus == 'Confirm Checkin' || props.roomStatus == 'Confirm Checkout') {
            fetchCustomerAndBookingForRoom();
        }
    }, []);
    const fetchCustomerAndBookingForRoom = async () => {
        const listBooking = await getData("/BOOKING");
        const currentDate = new Date();
        const bookingOfRoom = listBooking.find((item) => (item.RoomID == props.roomId && convertStringToDate(item.CheckIn) < currentDate && convertStringToDate(item.CheckOut) > currentDate));
        if (bookingOfRoom) {
            console.log('bookingOfRoom', bookingOfRoom);
        }
    }
    return (
        <div>
            <Modal
                open={props.isDisplay}
                onClose={handleCloseDetailModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className="pb-10">
                    <div
                        className="text-[28px] text-center font-bold mt-4 mb-4"
                        style={{
                            color: "#023E8A",
                            fontFamily: "Inter",
                        }}>{props.roomId}</div>
                    <div className='flex flex-row mx-12'>
                        {(props.roomStatus === 'In Use' || props.roomStatus === 'Confirm Checkin' || props.roomStatus === 'Confirm Checkout')
                            && <div div
                                className='flex-1 rounded-xl w-max p-4'
                                style={{
                                    color: "#023E8A",
                                    boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.15)"
                                }}>
                                <div className='mt-2'>
                                    <div className='inline font-semibold'>Customer ID:</div>
                                    <div className='inline'>{ }</div>
                                </div>
                                <div className='mt-2'>
                                    <div className='inline font-semibold'>Customer name:</div>
                                    <div className='inline'>{ }</div>
                                </div>
                                <div className='mt-2'>
                                    <div className='inline font-semibold'>Customer phone:</div>
                                    <div className='inline'>{ }</div>
                                </div>
                            </div>
                        }
                        <div className='flex-1 rounded-xl w-max p-4 ml-4 text-center align-middle'
                            style={{
                                color: "#023E8A",
                                boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.15)",
                                display: "flex",           // Thêm display: flex
                                alignItems: "center",
                                justifyContent: "center"     // Thêm align-items: center
                            }}>
                            {props.roomStatus}
                        </div>

                    </div>
                    <div className=''>
                        {
                            props.roomStatus === 'Available'
                            &&
                            <button className="flex float-right"
                                onClick={handleFixing}>
                                <div

                                    style={{
                                        backgroundColor: "#88DDFF"
                                    }}
                                    className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-12 mt-4 mr-8">
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Need Fixing</div>
                                </div>
                            </button>
                        }
                        {props.roomStatus === 'Confirm Checkout'
                            &&
                            <button className="flex float-right"
                                onClick={handleConfirmCheckout}>
                                <div

                                    style={{
                                        backgroundColor: "#FA923B"
                                    }}
                                    className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-12 mt-4 mr-8">
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Check-out</div>
                                </div>
                            </button>}
                        {props.roomStatus === 'Confirm Checkin'
                            && <button className="flex float-right"
                                onClick={handleConfirmCheckin}>
                                <div

                                    style={{
                                        backgroundColor: "#00B4D8"
                                    }}
                                    className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-12 mt-4 mr-8">
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Check-in</div>
                                </div>
                            </button>}
                        {props.roomStatus === 'Cleaning'
                            && <button className="flex float-right"
                                onClick={handleCompleteCleaning}>
                                <div

                                    style={{
                                        backgroundColor: "#49E17C"
                                    }}
                                    className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-12 mt-4 mr-8">
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Complete Cleaning</div>
                                </div>
                            </button>}
                        {props.roomStatus === 'Fixing'
                            && <button className="flex float-right"
                                onClick={handleCompleteFixing}>
                                <div
                                    style={{
                                        backgroundColor: "#49E17C"
                                    }}
                                    className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-12 mt-4 mr-8">
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Complete Fixing</div>
                                </div>
                            </button>}
                        {props.roomStatus === 'In Use'
                            && <button className="flex float-right"
                                onClick={handleReturnSoon}>
                                <div

                                    style={{
                                        backgroundColor: "#D3B505"
                                    }}
                                    className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-12 mt-4 mr-8">
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Return soon</div>
                                </div>
                            </button>}
                    </div>
                </Box>
            </Modal>
        </div >
    );
}

export default RoomDetail;