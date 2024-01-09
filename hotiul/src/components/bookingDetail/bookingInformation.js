import React, { useState } from 'react';
import styles from './bookingInformation.module.scss';
import { IC_Calendar, IC_closebutton, IC_delete } from '../../assets/icons';
import BtnAdd from '../profileCustomer/btnAdd';
import BtnSee from '../profileCustomer/btnSee';
export const BookingInfo = props => {
	const [pageIndex, setPageIndex] = useState(1);

	const column = [
		{ label: 'Service', accessor: 'service' },
		{ label: 'Unit Price', accessor: 'unit' },
		{ label: 'Quantity', accessor: 'quantity' },
		{ label: 'Total Price', accessor: 'total' },
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
						<p className={styles.valueInfo}>{props.booking.ID}</p>
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
              <button className={styles.btnCalendar}>
                <img src={IC_Calendar} alt="Calendar" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.checkout}>
          <div className={styles.content}>
            <p className={styles.title}>Checkout</p>
            <div className="flex items-center">
              <p className={styles.valueInfo}>{props.booking.CheckOut}</p>
              <button className={styles.btnCalendar}>
                <img src={IC_Calendar} alt="Calendar" />
              </button>
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
					<div className="w-9/12 bg-white rounded-3xl shadow-lg ">
						<table
							id="my-table"
							class={styles.tableData}>
							<thead className="w-full">
								<tr className={styles.tbHeading}>
									{column.map(headding => {
										return (
											<th>
												<p> {headding.label}</p>
											</th>
										);
									})}
								</tr>
							</thead>
							<tbody className=" h-48">
								{servicesTest.map((val, key) => {
									return (
										<tr
											className={styles.rowTbl}
											key={key}>
											{column.map(({ accessor }) => {
												const tData = val[accessor] ? val[accessor] : '——';
												return <td className={styles.col}>{tData}</td>;
											})}
											<td className={styles.col}>
												<button onClick={() => {}}>
													<img
														style={{
															justifySelf: 'center',
															alignSelf: 'center',
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
						<BtnAdd text={'Add Service'} />
						<BtnAdd text={'Add Clean'} />
						<BtnAdd text={'Add Washing'} />
						<BtnSee text={'See Amentity'} />
					</div>
				</div>
			</div>
		</div>
	);
};
