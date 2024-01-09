import React, { useEffect, useState } from "react";
import styles from "./refund.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Input, Select } from 'antd';
import { formatCurrency } from '../../utils/appUtils.js';
import { deleteData } from '../../controller/deleteData.ts';
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getData } from "../../controller/getData.ts";
import { updateData } from "../../controller/addData.ts";
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
function DetailRefund(props) {
    const [selectedRefund, setSelectedRefund] = useState();
    const [selectedRefundBooking, setSelectedRefundBooking] = useState();
    const [selectedRefundCustomer, setSelectedRefundCustomer] = useState();
    const [selectedRefundReason, setSelectedRefundReason] = useState();
    const [selectedRefundBankName, setSelectedRefundBankName] = useState();
    const [selectedRefundBankAccount, setSelectedRefundBankAccount] = useState();
    const [selectedRefundStatus, setSelectedRefundStatus] = useState();

    const handleRefundReasonChange = (event) => {
        setSelectedRefundReason(event.target.value);
    }
    const handleBankNameChange = (event) => {
        setSelectedRefundBankName(event.target.value);
    }
    const handleBankAccountChange = (event) => {
        setSelectedRefundBankAccount(event.target.value);
    }
    const handleRefundStatusChange = (value) => {
        setSelectedRefundStatus(value);
    }
    useEffect(() => {
        setSelectedRefund(props.selectedRefund);
        setSelectedRefundReason(props.selectedRefund?.RefundReason);
        setSelectedRefundBankName(props.selectedRefund?.BankName);
        setSelectedRefundBankAccount(props.selectedRefund?.BankAccount);
        setSelectedRefundStatus(props.selectedRefund?.RefundStatus);
        if (props.selectedRefund?.BookingID) {
            fetchCustomerOfRefund();
            fetchBookingOfRefund();
        }
    }, [props.selectedRefund]);
    useEffect(() => { }, [selectedRefundBooking, selectedRefundCustomer, selectedRefundReason, selectedRefundBankName, selectedRefundBankAccount]);
    const fetchBookingOfRefund = async () => {
        const listBooking = await getData('/BOOKING');
        const booking = listBooking.find(item => item.ID === props.selectedRefund?.BookingID)
        setSelectedRefundBooking(booking);
        const listCustomer = await getData('/CUSTOMER');
        const customer = listCustomer.find(item => item.ID === props.selectedRefund?.CustomerID);
        setSelectedRefundCustomer(customer);
    }
    const fetchCustomerOfRefund = async () => {

    }
    const handleCloseDetailModal = () => {
        props.onCloseModal();
    }
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };
    const validateDelete = () => {

    }
    const handleDelete = () => {
        if (validateDelete()) {
            setConfirmDialogOpen(true);
        }
        else {
            setSnackbarMessage("Cannot delete this room type");
            setOpenSnackbar(true);
        }
    }
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const handleConfirmDelete = () => {
        deleteData({ id: props.selectedRefund.ID, table: "REFUND" });
        setConfirmDialogOpen(false);
        handleCloseDetailModal();
        alert("Delete room type successfully");
    };
    const handleCancelDelete = () => {
        // Đóng Confirm Dialog khi người dùng hủy bỏ
        setConfirmDialogOpen(false);
    };
    const [isUpdate, setIsUpdate] = useState(true);
    const handleUpdateRefund = () => {
        const data = {
            RefundReason: selectedRefundReason,
            BankName: selectedRefundBankName,
            BankAccount: selectedRefundBankAccount,
            RefundStatus: selectedRefundStatus
        }
        updateData({ data: { data }, table: "REFUND", id: selectedRefund.ID });
        handleCloseDetailModal();
        alert("Update Refund Successfully!");
    }
    return (
        <div>
            <Modal
                style={{ zIndex: 1000 }}
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
                    <div className="mx-8 my-4">
                        <div className="flex flex-row justify-between">
                            <div className="text-[34px] font-bold"
                                style={{
                                    color: '#023E8A'
                                }}>REFUND DETAIL</div>
                            <div className="flex float-right mt-2 mb-2">
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
                                        onClick={handleUpdateRefund}
                                        className="!ml-2 w-24 !text-white !py-2 !px-4 !font-semibold !text-md !normal-case btn-save">Save</Button>
                                }
                            </div>
                        </div>
                        <div className="text-xl font-bold"
                            style={{
                                color: "#023E8A"
                            }}>Booking Information</div>
                        <div className="flex flex-row ml-2">
                            <div className="flex-1 flex flex-row text-md font-medium"
                                style={{
                                    color: "#023E8A"
                                }}>
                                <div className="flex flex-col w-36 gap-8 mt-2">
                                    <div className="mt-2">Customer name:</div>
                                    <div>Phone number:</div>
                                    <div>Booking status:</div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4 mt-2">
                                    <Input
                                        value={selectedRefund?.CustomerName}
                                        readOnly
                                        className="border-blue my-0 font-medium" size="large" />
                                    <Input
                                        readOnly
                                        value={selectedRefundCustomer?.Phone}
                                        className="border-blue my-0"
                                        size="large" />
                                    <Input
                                        readOnly
                                        value={selectedRefundBooking?.PaymentStatus}
                                        className="border-blue my-0"
                                        size="large" />
                                </div>
                            </div>
                            <div className="flex-1 border-l border-blue-500 pl-4 ml-8 flex flex-row text-md font-medium"
                                style={{
                                    color: "#023E8A"
                                }}>
                                <div className="flex flex-col w-36 gap-8 mt-2 ml-4">
                                    <div className="mt-2">Paid money:</div>
                                    <div>Room ID:</div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4 mt-2">
                                    <Input
                                        value={formatCurrency(selectedRefundBooking?.Price)}
                                        readOnly
                                        className="border-blue my-0"
                                        size="large" />
                                    <Input
                                        readOnly
                                        value={selectedRefundBooking?.RoomID}
                                        className="border-blue my-0" size="large" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-blue-500 mx-32 mt-8"></div>
                        <div className="text-xl font-bold mt-4"
                            style={{
                                color: "#023E8A"
                            }}>Refund Information</div>
                        <div className="flex flex-row ml-2">
                            <div className="flex-1 flex flex-row text-md font-medium"
                                style={{
                                    color: "#023E8A"
                                }}>
                                <div className="flex flex-col w-36 gap-8 mt-2">
                                    <div className="mt-2">Refund Reason:</div>
                                    <div>Bank Name:</div>
                                    <div>Bank Account:</div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4 mt-2">
                                    <Input
                                        onChange={handleRefundReasonChange}
                                        value={selectedRefundReason}
                                        className="border-blue my-0" size="large" />
                                    <Input
                                        onChange={handleBankNameChange}
                                        value={selectedRefundBankName}
                                        className="border-blue my-0" size="large" />
                                    <Input
                                        onChange={handleBankAccountChange}
                                        value={selectedRefundBankAccount}
                                        className="border-blue my-0" size="large" />
                                </div>
                            </div>
                            <div className="flex-1 border-l border-blue-500 pl-4 ml-8 mb-10 flex flex-row text-md font-medium"
                                style={{
                                    color: "#023E8A"
                                }}>
                                <div className="flex flex-col w-36 gap-8 mt-2 ml-4">
                                    <div className="mt-2">Refund date:</div>
                                    <div>Refund money:</div>
                                    <div>Refund status:</div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4 mt-2">
                                    <Input
                                        readOnly
                                        value={props.selectedRefund?.RefundDate}
                                        className="border-blue my-0" size="large" />
                                    <Input
                                        readOnly
                                        value={formatCurrency(props.selectedRefund?.RefundMoney)}
                                        className="border-blue my-0" size="large" />
                                    <Select
                                        onChange={handleRefundStatusChange}
                                        style={{ zIndex: 1001 }}
                                        value={selectedRefundStatus}
                                        className="border-blue my-0 z-index-10" size="large"
                                        options={[
                                            {
                                                value: "Complete",
                                                label: "Complete"
                                            },
                                            {
                                                value: "Incomplete",
                                                label: "Incomplete"
                                            }
                                        ]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default DetailRefund;