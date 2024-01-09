import React, { useEffect, useState } from "react";
import styles from "./bookingInformation.module.scss";
import { IC_Calendar, IC_closebutton, IC_delete } from "../../assets/icons";
import BtnAdd from "../profileCustomer/btnAdd";
import BtnSee from "../profileCustomer/btnSee";
import { DatePicker, Select, message } from "antd";
import { getData } from "../../controller/getData.ts";
import dayjs from "dayjs";
import { addData } from "../../controller/addData.ts";
import { createID } from "../../utils/appUtils.js";

export const AeBooking = (props) => {
  const today = new Date().toLocaleDateString("en-GB");
  const [isEdit, seIsEdit] = useState(props.booking ? true : false);
  var [roomTypes, setRoomTypes] = useState([]);
  var [fullData, setFullData] = useState([]);
  const [roomList, setRoomList] = useState([]);

  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);

  //value
  const [roomtype, setRoomType] = useState("");
  const [roomID, setRoomID] = useState("");
  const [people, setPeople] = useState("");

  //calendar
  const [openCheckin, setOpenCheckin] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const dateFormat = "DD/MM/YYYY";

  const [checkin, setCheckin] = useState(
    props.booking?.CheckIn ?? dayjs(today, dateFormat)
  );
  const [checkout, setCheckout] = useState(
    props.booking?.CheckOut ?? dayjs(today, dateFormat)
  );
  const [price, setPrice] = useState(props.booking?.Total ?? "");

  const [customer, setCustomer] = useState("");
  const [ctzID, setCtzID] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setID] = useState("");
  const column = [
    { label: "Service", accessor: "service" },
    { label: "Unit Price", accessor: "unit" },
    { label: "Quantity", accessor: "quantity" },
    { label: "Total Price", accessor: "total" },
  ];

  const servicesTest = [
    {
      service: "Coca",
      unit: "2$",
      quantity: "5",
      total: "10$",
    },
    {
      service: "Pepsi",
      unit: "2$",
      quantity: "5",
      total: "10$",
    },
    {
      service: "7Up",
      unit: "2$",
      quantity: "5",
      total: "10$",
    },
  ];
  const fetchData = async () => {
    await Promise.all([
      getData("/ROOM_TYPE").then((roomtype) => {
        setFullData(roomtype);
        setRoomTypes(
          roomtype.map((item) => {
            return {
              value: item.TypeName,
            };
          })
        );
      }),
    ]);
    await Promise.all([
      getData("/BOOKING").then((data) => {
        setBookings(data);
      }),
    ]);
  };

  useEffect(() => {
    fetchData();
  });

  useEffect(() => {
    setCustomer(props.customer.Name);
    setCtzID(props.customer.CitizenID);
    setPhone(props.customer.Phone);
    setID(props.customer.ID);
  }, [props.customer]);

  function convertToDate(dateString) {
    //  Convert a "dd/MM/yyyy" string into a Date object
    let d = dateString.split("/");
    let dat = new Date(d[1] + "/" + d[0] + "/" + d[2]);
    return dat;
  }

  function handleAdd() {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    console.log("adding");
    const bookingID = createID({ prefix: "B" });
    if (ctzID === "" || phone === "" || customer === "") {
      message.error("Please enter customer information");
      return;
    }
    if (roomtype === "" || roomID === "") {
      message.error("Please enter booking information");
      return;
    }
    try {
      const newData = {
        ID: bookingID,
        CustomerName: customer,
        CustomerID: props.customer.ID,
        CitizenID: ctzID,
        Phone: phone,
        Service: [],
        RoomID: roomID,
        CheckIn: checkin.format("MM/DD/YYYY").toString(),
        CheckOut: checkout.format("MM/DD/YYYY").toString(),
        isCancel: false,
        PaymentStatus: "Unpaid",
        Price: price,
        CreateAt: new Date(today).toLocaleDateString("en-GB", options),
        RoomType: {
          TypeName: roomtype,
          NumPerson: people,
        },
      };
      console.log(newData);
      addData({ data: newData, table: "BOOKING", id: bookingID });
      //props.onClose();
    } catch (err) {
      console.log("Error adding data", err);
      return;
    }
  }

  function checkDate() {
    var tempCin = checkin.format("MM/DD/YYYY").toString();
    var tempCout = checkout.format("MM/DD/YYYY").toString();
    console.log(new Date(tempCin));
    console.log(new Date(tempCout));
    if (new Date(tempCin) > new Date(tempCout)) return false;
    return true;
  }

  function checkAvailable(e) {
    var temp = [];
    fullData.map((item) => {
      console.log("bk", bookings);
      if (item.TypeName === e) {
        setPeople(item.NumPerson);
        var tempCin = checkin.format("MM/DD/YYYY").toString();
        var tempCout = checkout.format("MM/DD/YYYY").toString();

        item.Rooms.forEach((element) => {
          bookings.forEach((bk) => {
            if (bk.RoomID === element) {
              console.log("exist", element);
              if (
                (new Date(tempCin) <= convertToDate(bk.CheckIn) &&
                  convertToDate(bk.CheckIn) <= new Date(tempCout)) ||
                (new Date(tempCin) <= convertToDate(bk.CheckOut) &&
                  convertToDate(bk.CheckOut) <= new Date(tempCout))
              ) {
                temp.push(element);
                console.log(
                  new Date(tempCin),
                  convertToDate(bk.CheckIn),
                  new Date(tempCout),

                  convertToDate(bk.CheckOut)
                );
              }
            }
          });
        });
        console.log(temp);
        var list = item.Rooms.filter((x) => !temp.includes(x));
        setRoomList(
          list.map((item) => {
            return {
              value: item,
            };
          })
        );
      }
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {isEdit ? (
          <p className={styles.txtheader}>BOOKING INFORMATION</p>
        ) : (
          <p className={styles.txtheader}>ADD BOOKING</p>
        )}
        <div className="flex items-center">
          <button
            onClick={() => {
              // handleAction();
              props.onClose();
              //props.onEdit();
            }}
            className={styles.button}
            style={{ backgroundColor: "#FF9A9A" }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleAdd();
              //props.onClose();
              //props.onEdit();
            }}
            className={styles.button}
            style={{ backgroundColor: "#66EB8B" }}
          >
            Save
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex justify-center w-full">
        <div className={styles.checkin}>
          <div className={styles.content}>
            <p className={styles.title}>Checkin</p>

            <DatePicker
              format={dateFormat}
              open={openCheckin}
              onClick={() => setOpenCheckin(!openCheckin)}
              label="Controlled picker"
              value={checkin}
              onChange={(newValue) => {
                setCheckin(newValue);
                if (!checkDate())
                  message.error("Please pick check out day after checkin date");

                checkAvailable(roomtype);
              }}
            />
            <button
              className={styles.btnCalendar}
              onClick={() => {
                setOpenCheckin(!openCheckin);
              }}
            >
              <img src={IC_Calendar} alt="Calendar" />
            </button>
          </div>
        </div>
        <div className={styles.checkout}>
          <div className={styles.content}>
            <p className={styles.title}>Checkout</p>
            <div className="flex items-center">
              <DatePicker
                open={openCheckout}
                format={dateFormat}
                onClick={() => setOpenCheckout(!openCheckout)}
                label="Controlled picker"
                value={checkout}
                onChange={(newValue) => {
                  setCheckout(newValue);
                  if (!checkDate())
                    message.error(
                      "Please pick check out day after check in date"
                    );
                  checkAvailable(roomtype);
                }}
              />
              <button
                className={styles.btnCalendar}
                onClick={() => setOpenCheckout(!openCheckout)}
              >
                <img src={IC_Calendar} alt="Calendar" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.fee}>
          <div className={styles.contentFee}>
            <p className={styles.titleFee}>Total Fee</p>
            <p className={styles.valueInfoFee}>{price} $</p>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        {/* Room info */}
        <div className={styles.detailInfo}>
          <div className="flex justify-between">
            <p className={styles.title}>Room Type</p>
            <Select
              type="text"
              name="gender"
              value={roomtype}
              style={{
                width: "20vw",
                height: "40px",
                marginLeft: "10px",
              }}
              options={roomTypes}
              onChange={(e) => {
                setRoomID("");
                setRoomType(e);
                setRoomList([]);

                fullData.map((element) => {
                  if (element.TypeName === e) setPrice(element.Price);
                });
                checkAvailable(e);
              }}
            />
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>Room ID</p>
            <Select
              type="text"
              name="gender"
              value={roomID}
              style={{
                width: "20vw",
                height: "40px",
                marginLeft: "10px",
              }}
              options={roomList}
              onChange={(e) => setRoomID(e)}
            />
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>People</p>
            <p className={styles.valueInfo}>{people}</p>
          </div>
        </div>
        {/* Customer Info */}
        <div className={styles.detailInfo}>
          <div className="flex justify-between">
            <p className={styles.title}>Customer</p>
            <input
              className={styles.inputInfo}
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>Citizen ID</p>
            <input
              className={styles.inputInfo}
              value={ctzID}
              onChange={(e) => setCtzID(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>Phone</p>
            <input
              className={styles.inputInfo}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* List service & button */}
      <div className="py-5 pl-5">
        <div className="ml-10 mb-5">
          <p className={styles.title}> Oder service</p>
        </div>
        <div className="flex">
          <div className="w-9/12 bg-white rounded-3xl shadow-lg ">
            <table id="my-table" class={styles.tableData}>
              <thead className="w-full">
                <tr className={styles.tbHeading}>
                  {column.map((headding) => {
                    return (
                      <th>
                        <p> {headding.label}</p>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className=" h-48">
                {services.map((val, key) => {
                  return (
                    <tr className={styles.rowTbl} key={key}>
                      {column.map(({ accessor }) => {
                        const tData = val[accessor] ? val[accessor] : "——";
                        return <td className={styles.col}>{tData}</td>;
                      })}
                      <td className={styles.col}>
                        <button onClick={() => {}}>
                          <img
                            style={{
                              justifySelf: "center",
                              alignSelf: "center",
                            }}
                            className="pl-2"
                            src={IC_delete}
                            alt="delete"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-3/12 flex flex-col pl-5 justify-around">
            <BtnAdd text={"Add service"} />
            <BtnAdd text={"Add clean"} />
            <BtnAdd text={"Add washign"} />
            <BtnSee text={"See amentity"} />
          </div>
        </div>
      </div>
    </div>
  );
};
