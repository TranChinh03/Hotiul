import React, { useEffect, useState } from "react";
import styles from "./roomtype.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Input, InputNumber } from 'antd';
import { createID, formatCurrency, removeCommas } from '../../utils/appUtils.js';
import { addData, updateData } from '../../controller/addData.ts';
import { MdDelete } from "react-icons/md";
import { FaDoorOpen, FaUser } from "react-icons/fa";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Button } from "@mui/material";
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
};
function AddRoomType(props) {
    const handleClose = () => {
        props.onCloseModal();
    };
    // Create Modal
    const defaulAmenityList = [
        { Name: 'Dental kit', Quantity: 1 },
        { Name: 'Comb', Quantity: 1 },
        { Name: 'Shampoo', Quantity: 1 },
        { Name: 'Bath Gel', Quantity: 1 },
        { Name: 'Sanitary Bag', Quantity: 1 },
        { Name: 'Slipper', Quantity: 1 },
        { Name: 'Bed', Quantity: 1 },
        { Name: 'Water Heater', Quantity: 1 },
        { Name: 'Air Conditioner', Quantity: 1 }
    ];
    const amenityColumn = [
        { label: 'Amenity name', accessor: 'Name' },
        { label: 'Quantity', accessor: 'Quantity' }];
    const [amenityList, setAmenityList] = useState(defaulAmenityList);
    const [roomTypeName, setRoomTypeName] = useState();
    const [roomTypePrice, setRoomTypePrice] = useState(1);
    const [roomTypePeople, setRoomTypePeople] = useState(1);
    const handleQuantityChange = (index, newValue) => {
        setAmenityList((prevAmenityList) => {
            const updatedAmenities = [...prevAmenityList];
            updatedAmenities[index].Quantity = newValue;
            return updatedAmenities;
        });
    };
    const handleRoomTypeNameChange = (event) => {
        setRoomTypeName(event.target.value);
    }
    const handleRoomTypePriceChange = (event) => {
        if (isNaN(removeCommas(event.target.value))) {
        }
        else {
            setRoomTypePrice(removeCommas(event.target.value));
        }
    }

    const handleRoomTypePeopleChange = (value) => {
        setRoomTypePeople(value);
    }
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };
    const handleAddNewRoomType = () => {
        const roomTypeId = createID({ prefix: 'RT' });
        const roomTypeData = {
            Amenities: amenityList,
            ID: roomTypeId,
            TypeName: roomTypeName,
            Price: roomTypePrice,
            NumPerson: roomTypePeople,
        }
        addData({ data: roomTypeData, table: "ROOM_TYPE", id: roomTypeId });
        props.onCloseModal();
        setSnackbarMessage("Add new room type successfully");
        setOpenSnackbar(true);
        handleCloseAddModal();
    }
    const clearInput = () => {
        setAmenityList(defaulAmenityList);
        setRoomTypeName(null);
        setRoomTypePrice(1);
        setRoomTypePeople(1);
    }
    const handleCloseAddModal = () => {
        props.onCloseModal();
        clearInput();
    }
    return (
        <div>
            <Snackbar
                className='!z-50'
                open={openSnackbar}
                autoHideDuration={6000} // Thời gian hiển thị (milliseconds)
                onClose={handleCloseSnackbar}
            >
                <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
            <Modal
                open={props.isDisplay}
                onClose={handleCloseAddModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex flex-row justify-between">
                        <div className="text-[34px] ml-6">
                            <Input
                                value={roomTypeName}
                                onChange={handleRoomTypeNameChange}
                                className="text-[34px] font-bold mt-4"
                                style={{
                                    color: "#023E8A",
                                    fontFamily: "Inter"
                                }}
                                size="large"
                                placeholder="Enter room type name" />
                        </div>
                        <div className="flex flex-row">
                            <div
                                style={{
                                    backgroundColor: "#023E8A",
                                }}
                                className="text-white p-4 rounded-bl-xl rounded-tr-2xl -ml-4">
                                <div>
                                    <Input
                                        value={formatCurrency(roomTypePrice)}
                                        onChange={handleRoomTypePriceChange}
                                        style={{
                                            backgroundColor: "#023E8A",
                                            color: "#F8DD4E",
                                            fontSize: "24px",
                                            width: "150px",
                                            fontWeight: "700"
                                        }}
                                        placeholder="Price"
                                        className="py-1 placeholder:text-neutral-500"
                                        size="large"
                                    />
                                </div>
                                <div
                                    style={{
                                        color: "#F8DD4E"
                                    }}
                                    className="text-right text-sm">$/ night</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between p-4 mb-4 ml-4">
                        <div className={styles.container}>
                            <div class="overflow-hidden h-[350px] mt-4">
                                <div class="overflow-y-auto h-full">
                                    <table id="my-table" className={styles.tableData}>
                                        <thead>
                                            <tr className={styles.tbHeading}>
                                                {amenityColumn.map((headding) => {
                                                    return (
                                                        <th>
                                                            <div className="pl-5 pb-3 pt-5 flex justify-center w-full ">
                                                                <p> {headding.label}</p>
                                                            </div>
                                                        </th>
                                                    );
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody className="h-max">
                                            {amenityList.map((val, index) => {
                                                return (
                                                    <tr className={styles.rowTbl} key={index}>
                                                        {amenityColumn.map(({ accessor }) => {
                                                            return (
                                                                <td className={styles.col} key={accessor}>
                                                                    {accessor === 'Quantity' ? (
                                                                        <InputNumber
                                                                            size="large"
                                                                            min={0}
                                                                            style={{
                                                                                width: '80px'
                                                                            }}
                                                                            value={val[accessor]}
                                                                            onChange={(value) => handleQuantityChange(index, value)}
                                                                        />
                                                                    ) : (
                                                                        val[accessor]
                                                                    )}
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 relative">
                            <div className="grid grid-cols-2 gap-8">
                                <div
                                    style={{
                                        backgroundColor: "#7BF59D",
                                    }}
                                    className="px-6 py-3 h-32 w-36 rounded-2xl relative drop-shadow-md shadow-lg">
                                    <div className="flex justify-center text-white">
                                        <FaDoorOpen size={25} />
                                    </div>
                                    <div className="text-3xl font-bold text-white text-center">0/0</div>
                                    <div className="text-sm font-light text-white text-center">Available<br />Room</div>
                                </div>
                                <div
                                    style={{
                                        backgroundColor: "#90E0EF",
                                    }}
                                    className="px-6 py-3 h-32 w-36  rounded-2xl relative drop-shadow-md shadow-lg">
                                    <div className="flex justify-center text-white">
                                        <FaUser className="mt-0.5" size={25} />
                                    </div>
                                    <div className="text-3xl font-bold text-white text-center">
                                        <InputNumber
                                            min={1}
                                            value={roomTypePeople}
                                            onChange={handleRoomTypePeopleChange}
                                            style={{
                                                backgroundColor: "#90E0EF",
                                                width: "60px",
                                                color: "#FFFFFF"
                                            }}
                                            className="!text-white"
                                        />
                                    </div>
                                    <div className="text-sm font-light text-white text-center">Person<br />per room</div>
                                </div>
                            </div>
                            <div className="mt-8 flex float-right absolute bottom-0 right-0">
                                <Button
                                    onClick={handleCloseAddModal}
                                    style={{
                                        backgroundColor: "#FF9A9A",
                                        borderRadius: "20px"
                                    }}
                                    className="!ml-2 w-24 !text-white !py-2 !px-4 !font-semibold !text-md !normal-case btn-save">Close</Button>
                                <Button
                                    style={{
                                        backgroundColor: "#66EB8B",
                                        borderRadius: "20px"
                                    }}
                                    onClick={handleAddNewRoomType}
                                    className="!ml-2 w-24 !text-white !py-2 !px-4 !font-semibold !text-md !normal-case btn-save">Save</Button>
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div >
    );
}

export default AddRoomType;