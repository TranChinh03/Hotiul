import React, { useEffect, useState } from "react";
import styles from "./roomtype.module.scss";
import Search from "../../components/search/search";
import {
    IC_add,
    IC_backArrow,
    IC_navDetail,
    IC_delete,
    IC_edit,
    IC_nextArrow,
    IC_sort,
} from "../../assets/icons";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputNumber, Spin } from 'antd';
import { IMG_logo } from "../../assets/imgs";
import { LoadingOutlined } from '@ant-design/icons';

import { getData } from "../../controller/getData.ts";
import { Button, TextField } from "@mui/material";
import Input from "antd/es/input/Input";
const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

function RoomType(props) {
    const column = [
        { label: "ID", accessor: "id" },
        { label: "Room Type Name", accessor: "typename" },
        { label: "Number of room", accessor: "numofroom" },
        { label: "Number of people", accessor: "numperson" },
        { label: "Detail", accessor: "detail" },
    ];
    const [pageIndex, setPageIndex] = useState(1);
    const [row, setRow] = useState();
    const [totalPage, setTotalPage] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        fetchRoom();
    }, []);

    const [roomList, setRoomList] = useState([]);
    useEffect(() => {
        fetchData();
    }, [roomList])
    useEffect(() => {
        setRow(data.length < 9 ? data.length : 9);
        setTotalPage(Math.ceil(data.length / row))
    }, [data, row])
    const fetchRoom = async (roomTypeId) => {
        setRoomList(await getData('/ROOM'));
    }

    const fetchData = async () => {
        await Promise.all([
            getData('/ROOM_TYPE').then(data => {
                console.log(data);
                setData((data.map(item => {
                    return {
                        id: item.ID,
                        typename: item.TypeName,
                        numperson: item.NumPerson,
                        numofroom: roomList.filter(roomItem => roomItem.TypeId === item.TypeId).length,
                    };
                })));
            })
        ]);
        setIsLoading(false);
    }

    // Create Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const amenityColumn = [
        { label: 'Amenity name', accessor: 'amenityname' },
        { label: 'Quantity', accessor: 'quantity' }];
    const [amenityList, setAmenityList] = useState([
        { amenityname: 'Dental kit', quantity: 1 },
        { amenityname: 'Comb', quantity: 1 },
        { amenityname: 'Shampoo', quantity: 1 },
        { amenityname: 'Bath Gel', quantity: 1 },
        { amenityname: 'Sanitary Bag', quantity: 1 },
        { amenityname: 'Slipper', quantity: 1 },
        { amenityname: 'Bed', quantity: 1 },
        { amenityname: 'Water Heater', quantity: 1 },
        { amenityname: 'Air Conditioner', quantity: 1 }
    ]);
    const [roomTypeName, setRoomTypeName] = useState();
    const [roomTypePrice, setRoomTypePrice] = useState(1);
    const [roomTypePeople, setRoomTypePeople] = useState(1);
    const handleQuantityChange = (index, newValue) => {
        setAmenityList((prevAmenityList) => {
            const updatedAmenities = [...prevAmenityList];
            updatedAmenities[index].quantity = newValue;
            return updatedAmenities;
        });
    };
    const handleRoomTypeNameChange = (event) => {
        setRoomTypeName(event.target.value);
    }
    const handleRoomTypePriceChange = (value) => {
        setRoomTypePrice(value);
    }

    const handleRoomTypePeopleChange = (value) => {
        setRoomTypePeople(value);
    }
    const handleAddNewRoomType = () => {
        const roomTypeData = {
            Amenities: amenityList,
            TypeName: roomTypeName,
            Price: roomTypePrice,
            NumPerson: roomTypePeople,
        }
        console.log("roomTypeData", roomTypeData);
    }
    return (
        <Spin spinning={isLoading} indicator={
            <div style={{ transform: 'translate(-50%, -50%)', backgroundColor: "#909090", opacity: 0.8, width: "50%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <img style={{ width: "50%" }} src={IMG_logo} />
                <LoadingOutlined style={{ fontSize: 24 }} spin />
            </div>
        }>
            <div className="relative">

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="text-xl font-bold text-center modal-heading">Add New Room Type</div>
                        <div className="mx-20 mt-4">
                            <label style={{
                                color: '#023E8A'
                            }} className="font-semibold text-sm">Room type name: </label>
                            <Input
                                value={roomTypeName}
                                onChange={handleRoomTypeNameChange}
                                className="mt-1 placeholder-gray rounded-lg text-lg p-3 px-4"
                                size="large"
                                placeholder="Room type name" />
                        </div>
                        <div className="flex justify-between mx-20">
                            <div className="mt-4">
                                <label style={{
                                    color: '#023E8A'
                                }} className="font-semibold text-sm">Room type price: </label>
                                <InputNumber
                                    onChange={handleRoomTypePriceChange}
                                    value={roomTypePrice}
                                    min={1}
                                    className="mt-1 w-60 placeholder-gray rounded-lg text-lg p-2"
                                    size="large"
                                    placeholder="Room price" />
                            </div>
                            <div className="mt-4">
                                <label style={{
                                    color: '#023E8A'
                                }} className="font-semibold text-sm">People: </label>
                                <InputNumber
                                    onChange={handleRoomTypePeopleChange}
                                    value={roomTypePeople}
                                    className="mt-1 w-32 placeholder-gray rounded-lg text-lg p-2"
                                    size="large"
                                    placeholder="People"
                                    min={1}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-row">

                        </div>
                        <div class="overflow-hidden h-[400px] mt-4">
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
                                                                {accessor === 'quantity' ? (
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
                        <div className="mt-4 flex float-right">
                            <Button
                                onClick={handleClose}
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
                    </Box>
                </Modal>
            </div>
            <div className={styles.maincontainer}>
                <div className={styles.con1}>
                    <Search />
                    <button className="" onClick={handleOpen}>
                        <div className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-14">
                            <img src={IC_add} />
                            <div className="text-white font-bold text-base px-2 whitespace-nowrap">Add Room Type</div>
                        </div>
                    </button>
                </div>
                <div className={styles.con2}>
                    <table id="my-table" class={styles.tableData}>
                        <thead>
                            <tr className={styles.tbHeading}>
                                {column.map((headding) => {
                                    return (
                                        <th>
                                            <div className="pl-5 pb-3 pt-5 flex justify-center w-full ">
                                                <p> {headding.label}</p>
                                                <img className="px-2" src={IC_sort} />
                                            </div>
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody className="h-96">
                            {data
                                .slice((pageIndex - 1) * row, pageIndex * row)
                                .map((val, key) => {
                                    return (
                                        <tr className={styles.rowTbl} key={key}>
                                            {column.slice(0, -1).map(({ accessor }) => {
                                                const tData = val[accessor] ? val[accessor] : "——";
                                                return <td className={styles.col}>{tData}</td>;
                                            })}
                                            <td className={styles.colDetail}>
                                                View Full Detail <img className="pl-2" src={IC_navDetail} />
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
                <div className={styles.con1}>
                    <p className=" text-mainColor pt-5">
                        Showing <strong> 1 - {totalPage} </strong> results of{" "}
                        <strong>{data.length}</strong>
                    </p>
                    <div className="flex justify-around">
                        <button
                            onClick={() => {
                                if (pageIndex > 1) setPageIndex(pageIndex - 1);
                            }}
                            className={styles.btnnav}
                        >
                            <img src={IC_backArrow} />
                        </button>
                        <p className="text-mainColor px-3">
                            Page <strong>{pageIndex}</strong>
                        </p>
                        <button
                            onClick={() => {
                                if (pageIndex < totalPage) setPageIndex(pageIndex + 1);
                            }}
                            className={styles.btnnav}
                        >
                            <img src={IC_nextArrow} />
                        </button>
                    </div>
                </div>
            </div>
        </Spin >
    );
}

export { RoomType };