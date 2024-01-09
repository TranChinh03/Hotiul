import React, { useEffect, useState } from "react";
import styles from "./bookingInformation.module.scss";
import { IC_Calendar, IC_closebutton, IC_delete } from "../../assets/icons";
import BtnAdd from "../profileCustomer/btnAdd";
import BtnSee from "../profileCustomer/btnSee";
import { DeleteService } from "../../controller/deleteInArray.ts";
export const BookingInfo = (props) => {
  const [pageIndex, setPageIndex] = useState(1);

  const column = [
    { label: "Service", accessor: "Service" },
    { label: "Unit Price", accessor: "Price" },
    { label: "Quantity", accessor: "Quantity" },
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
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(props.booking.Service);
  }, [props.booking]);

  function handleDelete(id, index, idBooking) {
    console.log("id", id);
    console.log("idex", index);
    console.log("idbk", idBooking);
    var temp = services;
    temp.splice(index, 1);

    try {
      DeleteService(id, idBooking);
    } catch (err) {
      console.log("Error delete data", err);
    }
    return temp;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.txtheader}>BOOKING INFORMATION</p>
        <div className="flex items-center">
          <button
            onClick={() => {
              // handleAction();
              props.onClose();
              props.onEdit();
            }}
            className={styles.button}
            style={{ backgroundColor: "#66EB8B" }}
          >
            Edit
          </button>
          <button
            className={styles.buttonClose}
            onClick={() => {
              props.onClose();
            }}
          >
            <img src={IC_closebutton} alt="CloseButton"></img>
          </button>
        </div>
      </div>

      <div className={styles.info}>
        {/* Room info */}
        <div className={styles.detailInfo}>
          <div className="flex justify-between">
            <p className={styles.title}>Room Type</p>
            <p className={styles.valueInfo}>Single Regular</p>
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>Room ID</p>
            <p className={styles.valueInfo}>{props.booking.RoomID}</p>
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>People</p>
            <p className={styles.valueInfo}>5</p>
          </div>
        </div>
        {/* Customer Info */}
        <div className={styles.detailInfo}>
          <div className="flex justify-between">
            <p className={styles.title}>Customer</p>
            <p className={styles.valueInfo}>{props.customer.Name}</p>
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>Citizen ID</p>
            <p className={styles.valueInfo}>{props.customer.CitizenID}</p>
          </div>
          <div className="flex justify-between">
            <p className={styles.title}>Phone</p>
            <p className={styles.valueInfo}>{props.customer.Phone}</p>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex justify-center w-full">
        <div className={styles.checkin}>
          <div className={styles.content}>
            <p className={styles.title}>Checkin</p>
            <div className="flex items-center">
              <p className={styles.valueInfo}>{props.booking.CheckIn}</p>
              <div className={styles.btnCalendar}>
                <img src={IC_Calendar} alt="Calendar" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.checkout}>
          <div className={styles.content}>
            <p className={styles.title}>Checkout</p>
            <div className="flex items-center">
              <p className={styles.valueInfo}>{props.booking.CheckOut}</p>
              <div className={styles.btnCalendar}>
                <img src={IC_Calendar} alt="Calendar" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fee}>
          <div className={styles.contentFee}>
            <p className={styles.titleFee}>Total Fee</p>
            <p className={styles.valueInfoFee}>{props.booking.Price} $</p>
          </div>
        </div>
      </div>

      {/* List service & button */}
      <div className="py-5 pl-5">
        <div className="ml-10 mb-5">
          <p className={styles.title}> Order service</p>
        </div>
        <div className="flex">
          <div className="w-full bg-white rounded-3xl shadow-lg ">
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
                        <button
                          onClick={() => {
                            setServices(
                              handleDelete(val.ID, key, props.booking.ID)
                            );
                          }}
                        >
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
          {/* <div className="w-3/12 flex flex-col pl-5 justify-around">
            <BtnAdd
              onClick={() => handleAddService("service")}
              text={"Add service"}
            />
            <BtnAdd
              onClick={() => handleAddService("clean")}
              text={"Add clean"}
            />
            <BtnAdd
              onClick={() => handleAddService("washing")}
              text={"Add washing"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
