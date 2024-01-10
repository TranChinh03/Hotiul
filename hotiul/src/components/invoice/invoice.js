import React from 'react';
import styles from '../invoice/invoice.module.scss';
import { IC_closebutton } from '../../assets/icons';
import { Table } from 'antd';

const columns = [
	{
		title: () => <div className={styles.tableTitle}>Service</div>,
		dataIndex: 'service',
		width: '220px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Unit Price</div>,
		dataIndex: 'unitprice',
		width: '150px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Quantity</div>,
		dataIndex: 'quantity',
		width: '100px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Price</div>,
		dataIndex: 'price',
		width: '150px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
];

// for (let i = 0; i < 100; i++) {
// 	data.push({
// 		key: i,
// 		service: `Service ${i}`,
// 		unitprice: `Unit ${i + 5}`,
// 		quantity: `Quantity ${i + 2}`,
// 		price: `10000000 + ${i + 5}`,
// 	});
// }

function Invoice(props) {
	const rawData = props.bookingOfRoom.Service.map(x => {
		return ({
			ID: x.ID,
			Price: x.Price,
			Service: x.Service
		})
	})

	let idCounter = 1

	const data = Object.values(rawData.reduce((acc, curr) => {
		const key = JSON.stringify(curr);
		if (!acc[key]) {
		  acc[key] = {...curr, Quantity: 1, IntegralKey: idCounter};
		  idCounter++;
		} else {
		  acc[key].Quantity++;
		}
		return acc;
	  }, {})).map(x=> {return({
		key: x.IntegralKey,
		service: x.Service,
		unitprice: x.Price,
		quantity: x.Quantity,
		price: x.Price * x.Quantity,
	  })})
	


	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div style={{ width: '60px', height: '60px' }}></div>
					<div className={styles.headerTitle}>Invoice</div>
					<button onClick={props.setOpen}>
						<img
							src={IC_closebutton}
							alt="CloseButton"></img>
					</button>
				</div>
				<div className={styles.bookingInfo}>
					<div className={styles.title}>Booking Information</div>
					<div className={styles.cardContainer}>
						<div className={styles.card1}>
							<div className={styles.colTitle}>
								<div>Room</div>
								<div>Room Type</div>
								<div>People</div>
							</div>
							<div className={styles.colData}>
								<div>{props.bookingOfRoom.RoomID}</div>
								<div>{props.bookingOfRoom.RoomType.TypeName}</div>
								<div>{props.bookingOfRoom.RoomType.NumPerson}</div>
							</div>
						</div>
						<div className={styles.card2}>
							<div className={styles.colTitle}>
								<div>Customer</div>
								<div>Phone</div>
								<div>Citizen ID</div>
							</div>
							<div className={styles.colData}>
								<div>{props.customerOfRoom.Name}</div>
								<div>{props.customerOfRoom.Phone}</div>
								<div>{props.customerOfRoom.CitizenID}</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.serInfo}>
					<div
						className={styles.title}
						style={{ marginTop: '50px' }}>
						Service Information
					</div>
					<Table
						className={styles.serTable}
						columns={columns}
						dataSource={data}
						pagination={false}

					/>
					<div
						style={{
							flexDirection: 'row',
							display: 'flex',
							justifyContent: 'flex-end',
							marginTop: '20px',
							marginRight: '30px',
						}}>
						<div className={styles.totalText}>Total Price:</div>
						<div
							className={styles.totalText}
							style={{ marginLeft: '20px' }}>
							${props.bookingOfRoom.Price}
						</div>
					</div>
				</div>
				{/* <div className={styles.payInfo}>
					<div
						className={styles.title}
						style={{ marginTop: '50px' }}>
						Payment Information
					</div>
					<div className={styles.paymentCard}>
						<div className={styles.pay1}>
							<div style={{ color: '#023e8a' }}>Paid Money:</div>
							<div
								style={{
									padding: '5px',
									background: '#caf0f859',
									width: '55%',
									borderRadius: '10px',
									color: 'var(--2, #023e8a)',
									textAlign: 'center',
								}}>
								500.000
							</div>
						</div>
						<div className={styles.pay2}>
							<div style={{ color: '#fff' }}>Now Paid:</div>
							<div
								style={{
									padding: '5px',
									background: '#ffff',
									width: '55%',
									borderRadius: '10px',
									color: 'var(--3, #0077b6)',
									textAlign: 'center',
								}}>
								1.000.000
							</div>
						</div>
					</div>
				</div> */}
				<div className={styles.footer}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							marginTop: '20px',
							marginRight: '30px',
						}}>
						<div style={{ color: 'var(--3, #0077b6)' }}>Created by staff:</div>
						<div style={{ color: 'var(--3, #0077b6)', marginLeft: '20px', fontWeight: 'bold' }}>
							{JSON.parse(localStorage.getItem("currentUser")).Name}
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							marginTop: '50px',
							color: 'var(--3, #0077b6)',
							fontWeight: 'bold',
							textDecoration: 'underline',
						}}>
						Thank you for using our services!
					</div>
				</div>
			</div>
		</>
	);
}

export default Invoice;
