import React, { useEffect, useState } from "react";
import styles from "./roomtype.module.scss";
import Search from "../../components/search/search";
import ButtonAdd from "../../components/buttonAdd/buttonAdd";
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
import { Spin } from 'antd';
import { IMG_logo } from "../../assets/imgs";
import { LoadingOutlined } from '@ant-design/icons';

import { getData } from "../../controller/getData.ts";
import { Button } from "@mui/material";
const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Spin spinning={isLoading} indicator={
            <div style={{ transform: 'translate(-50%, -50%)', backgroundColor: "#909090", opacity: 0.8, width: "50%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <img style={{ width: "50%" }} src={IMG_logo} />
                <LoadingOutlined style={{ fontSize: 24 }} spin />
            </div>
        }>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
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
                                {column.slice(0, -1).map((headding) => {
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
                                                <img className="pr-5" src={IC_edit} />
                                                <img className="pl-2" src={IC_delete} />
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