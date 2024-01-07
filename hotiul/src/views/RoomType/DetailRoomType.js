import React, { useEffect, useState } from "react";
import styles from "./roomtype.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Input, InputNumber } from 'antd';
import { formatCurrency, removeCommas } from '../../utils/appUtils.js';
import { updateData } from '../../controller/addData.ts';
import { deleteData } from '../../controller/deleteData.ts';
import { MdDelete } from "react-icons/md";
import { FaDoorOpen, FaUser } from "react-icons/fa";
import { IC_add } from "../../assets/icons/index.js";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getData } from "../../controller/getData.ts";
import ConfirmDialog from "../../components/confirmdialog/ConfirmDialog.js";
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
function DetailRoomType(props) {
    const handleClose = () => {
        props.onCloseModal();
    };
    // Create Modal
    const amenityColumn = [
        { label: 'Amenity name', accessor: 'Name' },
        { label: 'Quantity', accessor: 'Quantity' }];
    const [amenityList, setAmenityList] = useState(props.selectedRoomType?.amenityList);
    const [roomTypeName, setRoomTypeName] = useState();
    const [roomTypePrice, setRoomTypePrice] = useState(1);
    const [roomTypePeople, setRoomTypePeople] = useState(1);
    useEffect(() => {
        setAmenityList(props.selectedRoomType?.amenityList)
        setRoomTypeName(props.selectedRoomType?.typename);
        setRoomTypePrice(props.selectedRoomType?.price);
        setRoomTypePeople(props.selectedRoomType?.numperson);

    }, [props.selectedRoomType])
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
    const [isUpdate, setIsUpdate] = useState(false);
    const handleUpdateRoomType = () => {
        const roomTypeData = {
            Amenities: amenityList,
            ID: props.selectedRoomType?.id,
            TypeName: roomTypeName,
            Price: roomTypePrice,
            NumPerson: roomTypePeople,
        }
        console.log("update", roomTypeData);
        updateData({ data: roomTypeData, table: "ROOM_TYPE", id: props.selectedRoomType?.id });
        handleCloseDetailModal();
    }
    const [roomList, setRoomList] = useState([]);
    useEffect(() => {
        fetchRoom();
    }, []);
    const fetchRoom = async (roomTypeId) => {
        setRoomList(await getData('/ROOM'));
    }
    const validateDelete = () => {
        const listRoomTypeIdHasRoom = roomList.map((item) => (item.TypeID));
        console.log(listRoomTypeIdHasRoom);
        if (listRoomTypeIdHasRoom.includes(props.selectedRoomType.id)) {
            return false;
        }
        else {
            return true;
        }
    }
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };
    const handleDelete = () => {
        if (validateDelete()) {
            setConfirmDialogOpen(true);
        }
        else {
            setSnackbarMessage("Cannot delete this room type");
            setOpenSnackbar(true);
        }
    }
    const handleCloseDetailModal = () => {
        setIsUpdate(false);
        setOpenSnackbar(false);
        props.onCloseModal();
    }
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const handleConfirmDelete = () => {
        deleteData({ id: props.selectedRoomType.id, table: "ROOM_TYPE" });
        setConfirmDialogOpen(false);
        handleCloseDetailModal();
        alert("Delete room type successfully");
    };
    const handleCancelDelete = () => {
        // Đóng Confirm Dialog khi người dùng hủy bỏ
        setConfirmDialogOpen(false);
    };
    return (
        <div>
            <Modal
                open={props.isDisplay}
                onClose={handleCloseDetailModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ConfirmDialog
                        open={confirmDialogOpen}
                        title={'Confirm Delete'}
                        content={`Do you want to delete this room type?`}
                        onClose={handleCancelDelete}
                        onConfirm={handleConfirmDelete}
                    />
                    <Snackbar
                        className='!z-50'
                        open={openSnackbar}
                        autoHideDuration={6000} // Thời gian hiển thị (milliseconds)
                        onClose={handleCloseSnackbar}
                    >
                        <MuiAlert onClose={handleCloseSnackbar}
                            severity="error"
                            elevation={6}
                            variant="filled">
                            {snackbarMessage}
                        </MuiAlert>
                    </Snackbar>
                    <div className="flex flex-row justify-between">
                        {isUpdate && <div className="text-[34px] ml-6">
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
                            ||
                            <div className="text-[34px] font-bold mt-6 ml-6"
                                style={{
                                    color: "#023E8A"
                                }}>{props.selectedRoomType && props.selectedRoomType.typename}</div>
                        }
                        <div className="flex flex-row">
                            {!isUpdate
                                &&
                                <button className="mr-4" onClick={() => setIsUpdate(true)}>
                                    <img src='./editicon.svg' />
                                </button>
                            }
                            <button onClick={handleDelete}>
                                <div className="bg-red-500 text-white p-4 rounded-bl-xl">
                                    <MdDelete className="ml-2" size={30} />
                                    <div className="inline text-xs ml-1 pr-4">Delete</div>
                                </div>
                            </button>
                            <div
                                style={{
                                    backgroundColor: "#023E8A",
                                }}
                                className="text-white p-4 rounded-bl-xl rounded-tr-2xl -ml-4">
                                {isUpdate &&
                                    <Input
                                        value={formatCurrency(roomTypePrice)}
                                        onChange={handleRoomTypePriceChange}
                                        style={{
                                            backgroundColor: "#023E8A",
                                            color: "#F8DD4E",
                                            fontSize: "24px",
                                            width: "120px",
                                            fontWeight: "700"
                                        }}
                                        placeholder="Price"
                                        className="py-0 -mt-1 placeholder:text-neutral-500"
                                        size="large"
                                    />
                                    ||
                                    <div className="px-4 font-bold text-yellow-400 text-2xl">
                                        {props.selectedRoomType && formatCurrency(props.selectedRoomType.price)}
                                    </div>
                                }
                                <div className="text-right text-sm text-yellow-400 ">$/ night</div>
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
                                            {amenityList?.map((val, index) => {
                                                return (
                                                    <tr className={styles.rowTbl} key={index}>
                                                        {amenityColumn.map(({ accessor }) => {
                                                            return (
                                                                <td className={styles.col} key={accessor}>
                                                                    {accessor === 'Quantity' && isUpdate ? (
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
                                    <div className="text-3xl font-bold text-white text-center">10/20</div>
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
                                    {
                                        isUpdate &&
                                        <div className="text-3xl font-bold text-white text-center">
                                            <InputNumber
                                                min={1}
                                                value={roomTypePeople}
                                                onChange={handleRoomTypePeopleChange}
                                                style={{
                                                    backgroundColor: "#90E0EF",
                                                    width: "60px",
                                                    color: "#FFFFFF",
                                                    fontSize: "20px"
                                                }}
                                                className="!text-white"
                                            />
                                        </div>
                                        ||
                                        <div className="text-3xl font-bold text-white text-center">{props.selectedRoomType && props.selectedRoomType.numperson}</div>
                                    }
                                    <div className="text-sm font-light text-white text-center">Person<br />per room</div>
                                </div>
                            </div>
                            <button>
                                <div className="mt-4 cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-14">
                                    <img src={IC_add} />
                                    <div className="text-white font-bold text-base px-2 whitespace-nowrap">Add Room</div>
                                </div>
                            </button>
                            <div className="mt-8 flex float-right absolute bottom-0 right-0">
                                <Button
                                    onClick={handleCloseDetailModal}
                                    style={{
                                        backgroundColor: "#FF9A9A",
                                        borderRadius: "20px"
                                    }}
                                    className="!ml-2 w-24 !text-white !py-2 !px-4 !font-semibold !text-md !normal-case btn-save">Close</Button>

                                {
                                    isUpdate &&
                                    <Button
                                        style={{
                                            backgroundColor: "#66EB8B",
                                            borderRadius: "20px"
                                        }}
                                        onClick={handleUpdateRoomType}
                                        className="!ml-2 w-24 !text-white !py-2 !px-4 !font-semibold !text-md !normal-case btn-save">Save</Button>
                                }
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}

export default DetailRoomType;