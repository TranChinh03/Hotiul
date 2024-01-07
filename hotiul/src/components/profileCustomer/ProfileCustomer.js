import React, { useEffect, useState } from "react";
import styles from "./profilecustomer.module.scss";

import {
  IC_backArrow,
  IC_navDetail,
  IC_nextArrow,
  IC_sort,
  IC_closebutton,
  IC_line,
} from "../../assets/icons";
import { Table } from "antd";
import { getOne } from "../../controller/getOne.ts";
import { getData } from "../../controller/getData.ts";
// import { getData } from "../../controller/getData";

const column = [
  { label: "ID", accessor: "id" },
  { label: "RoomID", accessor: "room" },
  { label: "CheckIn", accessor: "checkin" },
  { label: "CheckOut", accessor: "checkout" },
  { label: "Detail", accessor: "detail" },
];

// const columns = [
// 	{
// 		title: () => <div className={styles.tableTitle}>ID</div>,
// 		dataIndex: 'id',
// 		width: '100px',
// 		render: text => <div className={styles.tableInfo}>{text}</div>,
// 	},
// 	{
// 		title: () => <div className={styles.tableTitle}>Room</div>,
// 		dataIndex: 'room',
// 		width: '200px',
// 		render: text => <div className={styles.tableInfo}>{text}</div>,
// 	},
// 	{
// 		title: () => <div className={styles.tableTitle}>Check-in</div>,
// 		dataIndex: 'checkin',
// 		width: '150px',
// 		render: text => <div className={styles.tableInfo}>{text}</div>,
// 	},
// 	{
// 		title: () => <div className={styles.tableTitle}>Check-out</div>,
// 		dataIndex: 'checkout',
// 		width: '150px',
// 		render: text => <div className={styles.tableInfo}>{text}</div>,
// 	},
// 	{
// 		title: () => <div className={styles.tableTitle}>Price</div>,
// 		dataIndex: 'price',
// 		width: '150px',
// 		render: text => <div className={styles.tableInfo}>{text}</div>,
// 	},
// 	{
// 		title: () => <div className={styles.tableTitle}>Detail >></div>,
// 		dataIndex: '',
// 		render: () => (
// 			<button onClick={() => {}}>
// 				<div className={styles.tableInfo}>View detail >></div>
// 			</button>
// 		),
// 	},
// ];
// const data = [];
// for (let i = 0; i < 100; i++) {
// 	data.push({
// 		key: i,
// 		id: i,
// 		room: `Room ${i}`,
// 		checkin: `Date ${i}`,
// 		checkout: `Date ${i + 1}`,
// 		price: `10000000`,
// 	});
// }

const ProfileCustomer = (props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [bookings, setBookings] = useState([]);
  const [totalPage, setTotalPage] = useState(Math.ceil(bookings.length / 9));
  const [action, setAction] = useState(true);
  const [state, setState] = useState({
    name: "",
    gender: "",
    phone: "",
    ctzId: "",
    booking: [],
  });

  console.log("props.data", props.data);

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

  function handleChange(evt) {
    const value = evt.target.value;
    setEdit({
      ...edit,
      [evt.target.name]: value,
    });
  }

  function handleSave() {
    assignInfo(state, edit);
    handleAction();
  }

  function handleCancel() {
    handleAction();
  }

  //get data customer

  const fetchData = async () => {
    await Promise.all([
      getOne("CUSTOMER", props.data).then((data) => {
        console.log("customer", data);

        //setCustomer(data);
        setState({
          name: data.Name,
          gender: data.Gender,
          phone: data.Phone,
          ctzId: data.CitizenID,
          booking: data.Booking,
        });

        // setBookings([]);
        // data.Booking.forEach((element) => {
        //   console.log("element", element);
        //   getOne("BOOKING", element.ID).then((bk) => {
        //     console.log(bk);
        //     setBookings((bookings) => [...bookings, bk]);
        //   });
        // });
      }),
    ]);
  };

  console.log("bookings", bookings);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>Customer Information</div>
          {!props.data ? (
            <>
              <div className={styles.buttonContainer}>
                <button
                  onClick={props.onClose}
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
          ) : action ? (
            <>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  style={{ backgroundColor: "#FF9A9A" }}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleAction()}
                  className={styles.button}
                  style={{ backgroundColor: "#66EB8B" }}
                >
                  Edit
                </button>
                <button onClick={props.onClose}>
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
                <button>
                  <img src={IC_closebutton} alt="CloseButton"></img>
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
                <div className={styles.info}>
                  <div className={styles.title}>Gender:</div>
                  <input
                    className={styles.inputInfo}
                    type="text"
                    name="gender"
                    value={edit.gender}
                    onChange={(e) => handleChange(e)}
                    required
                  ></input>
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
        {/* <Table
						title={() => <div className={styles.titleHistory}>Booking History</div>}
						columns={columns}
						dataSource={data}
						pagination={{
							pageSize: 3,
							style: { marginRight: '100px' },
						}}
						// scroll={{
						// 	y: 200,
						// }}
					/> */}
        <div className={styles.con2}>
          <table id="my-table" class={styles.tableData}>
            <thead>
              <tr className={styles.titleHistory}>BOOKING HISTORY</tr>
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
            <tbody className="h-96">
              {bookings
                .slice(pageIndex * 9 - 9, pageIndex * 9)
                .map((val, key) => {
                  return (
                    <tr className={styles.rowTbl} key={key}>
                      {column.slice(0, -1).map(({ accessor }) => {
                        const tData = val[accessor] ? val[accessor] : "——";
                        return <td className={styles.col}>{tData}</td>;
                      })}
                      <td className={styles.colDetail}>
                        <button onClick={() => {}}>
                          <div className={styles.tableInfo}>
                            View Detail{" "}
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
      </div>
    </>
  );
};

export default ProfileCustomer;
