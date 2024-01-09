import React, { useEffect, useState } from "react";
import styles from "./profilecustomer.module.scss";

import {
  IC_backArrow,
  IC_navDetail,
  IC_nextArrow,
  IC_sort,
  IC_closebutton,
  IC_line,
  IC_add,
} from "../../assets/icons";
import { Modal, Select, Table, message } from "antd";
import { getOne } from "../../controller/getOne.ts";
import { getData } from "../../controller/getData.ts";
import { UpdateCustomer } from "../../controller/updateCustomer.ts";
import { createID } from "../../utils/appUtils.js";
import { addData } from "../../controller/addData.ts";
import { deleteData } from "../../controller/deleteData.ts";
import ButtonAdd from "../buttonAdd/buttonAdd.js";
import { BookingInfo } from "../bookingDetail/bookingInformation.js";
import { AeBooking } from "../bookingDetail/AeBooking.js";
// import { getData } from "../../controller/getData";

const column = [
  { label: "ID", accessor: "id" },
  { label: "RoomID", accessor: "room" },
  { label: "CheckIn", accessor: "checkin" },
  { label: "CheckOut", accessor: "checkout" },
  { label: "Detail", accessor: "detail" },
];

const ProfileCustomer = (props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [bookings, setBookings] = useState([]);
  const [totalPage, setTotalPage] = useState(Math.ceil(bookings?.length / 9));
  const [action, setAction] = useState(true);
  const [state, setState] = useState({});

  const [onDetail, setOnDetail] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [edit, setEdit] = useState({
    name: "",
    gender: "",
    phone: "",
    ctzId: "",
  });

  function assignInfo(state, edit) {
    state.name = edit.name;
    state.gender = edit.gender;
    state.phone = edit.phone;
    state.ctzId = edit.ctzId;
  }

  function handleAction() {
    assignInfo(edit, state);
    setAction(!action);
  }
  function handleDelete() {
    try {
      deleteData({ id: props.data.ID, table: "CUSTOMER" });
    } catch (err) {
      console.log("Error delete data", err);
    }
  }
  function handleChange(evt) {
    const value = evt.target.value;
    setEdit({
      ...edit,
      [evt.target.name]: value,
    });
  }

  function handleSave() {
    assignInfo(state, edit);
    UpdateCustomer(
      props.data.ID,
      state.ctzId,
      state.gender,
      state.name,
      state.phone
    );
    handleAction();
  }

  function handleCancel() {
    handleAction();
  }
  function handleAdd() {
    console.log("adding");
    const customerID = createID({ prefix: "C" });
    if (
      edit.ctzId === "" ||
      edit.gender === "" ||
      edit.phone === "" ||
      edit.name === ""
    ) {
      message.error("Please enter customer information");
      return;
    }
    try {
      const newData = {
        ID: customerID,
        Name: edit.name,
        CitizenID: edit.ctzId,
        Phone: edit.phone,
        Gender: edit.gender,
        Booking: [],
      };
      console.log(newData);
      addData({ data: newData, table: "CUSTOMER", id: customerID });
      setEdit({
        name: "",
        gender: "",
        phone: "",
        ctzId: "",
      });
      props.onClose();
    } catch (err) {
      console.log("Error adding data", err);
      return;
    }
  }

  //get data customer
  useEffect(() => {
    setState({
      name: props.data?.Name ?? "",
      gender: props.data?.Gender ?? "",
      phone: props.data?.Phone ?? "",
      ctzId: props.data?.CitizenID ?? "",
    });
    if (props.data)
      setBookings(
        props.data.Booking.map((value) => {
          return {
            id: value.ID,
            room: value.RoomID,
            checkin: value.CheckIn,
            checkout: value.CheckOut,
          };
        })
      );
  }, [props.data]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>Customer Information</div>
          {!props.data ? (
            <>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => {
                    props.onClose();
                    setBookings([]);
                  }}
                  className={styles.button}
                  style={{ backgroundColor: "#FF9A9A" }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleAdd();
                  }}
                  className={styles.button}
                  style={{ backgroundColor: "#66EB8B" }}
                >
                  Save
                </button>
              </div>
            </>
          ) : action ? (
            <>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => {
                    handleDelete();
                    props.onClose();
                    setBookings([]);
                  }}
                  className={styles.button}
                  style={{ backgroundColor: "#FF9A9A" }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleAction();
                  }}
                  className={styles.button}
                  style={{ backgroundColor: "#66EB8B" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    props.onClose();
                    setBookings([]);
                  }}
                >
                  <img src={IC_closebutton} alt="CloseButton"></img>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => handleCancel()}
                  className={styles.button}
                  style={{ backgroundColor: "#FF9A9A" }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSave()}
                  className={styles.button}
                  style={{ backgroundColor: "#66EB8B" }}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
        {action && props.data ? (
          <>
            <div className={styles.infoContainer}>
              <div className={styles.infoCol}>
                <div className={styles.info}>
                  <div className={styles.title}>Name:</div>
                  {state.name !== "" ? (
                    <div className={styles.valueInfo}>{state.name}</div>
                  ) : (
                    <div className={styles.valueInfo}>
                      <text style={{ color: "red" }}>Null</text>
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>Phone:</div>
                  {state.phone !== "" ? (
                    <div className={styles.valueInfo}>{state.phone}</div>
                  ) : (
                    <div className={styles.valueInfo}>
                      <text style={{ color: "red" }}>Null</text>
                    </div>
                  )}
                </div>
              </div>
              <img src={IC_line} alt="line"></img>
              <div className={styles.infoCol}>
                <div className={styles.info}>
                  <div className={styles.title}>Gender:</div>
                  {state.gender !== "" ? (
                    <div className={styles.valueInfo}>{state.gender}</div>
                  ) : (
                    <div className={styles.valueInfo}>
                      <text style={{ color: "red" }}>Null</text>
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>Citizen ID:</div>
                  {state.ctzId !== "" ? (
                    <div className={styles.valueInfo}>{state.ctzId}</div>
                  ) : (
                    <div className={styles.valueInfo}>
                      <text style={{ color: "red" }}>Null</text>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.infoContainer}>
              <div className={styles.infoCol}>
                <div className={styles.info}>
                  <div className={styles.title}>Name:</div>
                  <input
                    className={styles.inputInfo}
                    type="text"
                    name="name"
                    value={edit.name}
                    onChange={(e) => handleChange(e)}
                    required
                  ></input>
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>Phone:</div>
                  <input
                    className={styles.inputInfo}
                    type="text"
                    name="phone"
                    value={edit.phone}
                    onChange={(e) => handleChange(e)}
                    required
                  ></input>
                </div>
              </div>
              <img src={IC_line} alt="line"></img>
              <div className={styles.infoCol}>
                <div className={styles.info} style={{ marginBottom: "10px" }}>
                  <div className={styles.title}>Gender:</div>
                  <Select
                    type="text"
                    name="gender"
                    value={edit.gender}
                    style={{
                      width: "20vw",
                      height: "40px",
                      marginLeft: "10px",
                    }}
                    options={[{ value: "Female" }, { value: "Male" }]}
                    onChange={(e) =>
                      setEdit({
                        ...edit,
                        gender: e,
                      })
                    }
                  />
                  {/* <input
										className={styles.inputInfo}
										type="text"
										name="gender"
										value={edit.gender}
										onChange={e => handleChange(e)}
										required></input> */}
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>Citizen ID:</div>
                  <input
                    className={styles.inputInfo}
                    type="text"
                    name="ctzId"
                    value={edit.ctzId}
                    onChange={(e) => handleChange(e)}
                    required
                  ></input>
                </div>
              </div>
            </div>
          </>
        )}

        <div className={styles.con2}>
          <table id="my-table" class={styles.tableData}>
            <thead className="w-full">
              <tr>
                <td className={styles.titleHistory}>BOOKING HISTORY</td>
                <td colSpan={3} />
                <td className=" justify-end flex">
                  <button
                    className={styles.btn}
                    onClick={() => {
                      setSelectedBooking(null);
                      console.log(props.data);
                      setOnEdit(true);
                    }}
                  >
                    <img src={IC_add} />
                    <p className={styles.text}>Add Booking</p>
                  </button>
                </td>
              </tr>

              <tr className={styles.tbHeading}>
                {column.map((headding) => {
                  return (
                    <th>
                      <div className="pl-5 pb-3 pt-5 flex justify-center w-full ">
                        <p> {headding.label}</p>
                        <img alt="" className="px-2" src={IC_sort} />
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className=" h-48">
              {bookings
                .slice(pageIndex * 9 - 9, pageIndex * 9)
                .map((val, key) => {
                  return (
                    <tr className={styles.rowTbl} key={key}>
                      {column.slice(0, -1).map(({ accessor }) => {
                        const tData = val[accessor] ? val[accessor] : "——";
                        return <td className={styles.col}>{tData}</td>;
                      })}
                      <td className={styles.col}>
                        <button
                          onClick={() => {
                            setOnDetail(true);
                            setSelectedBooking(
                              props.data.Booking.find((x) => x.ID === val.id)
                            );
                            console.log("seleted", selectedBooking);
                          }}
                        >
                          <div className={styles.tableInfo}>
                            View detail
                            <img
                              style={{
                                justifySelf: "center",
                                alignSelf: "center",
                              }}
                              className="pl-2"
                              src={IC_navDetail}
                            />
                          </div>
                        </button>
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
            <strong>{bookings.length}</strong>
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
        <Modal
          centered={true}
          width="75%"
          closeIcon={null}
          open={onDetail}
          footer={null}
          onCancel={() => {
            setOnDetail(false);
            setOnEdit(false);
          }}
        >
          <BookingInfo
            onEdit={() => setOnEdit(true)}
            onClose={() => setOnDetail(false)}
            customer={props.data}
            booking={selectedBooking}
          />
        </Modal>
        <Modal
          centered={true}
          width="75%"
          closeIcon={null}
          open={onEdit}
          footer={null}
          onCancel={() => {
            setOnDetail(false);
            setOnEdit(false);
          }}
        >
          <AeBooking
            onEdit={() => setOnDetail(true)}
            onClose={() => setOnEdit(false)}
            customer={props.data}
            booking={selectedBooking}
          />
        </Modal>
      </div>
    </>
  );
};

export default ProfileCustomer;
