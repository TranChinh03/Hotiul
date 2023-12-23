import React from 'react';
import styles from './profilecustomer.module.scss';
import { IC_closebutton, IC_line } from '../../assets/icons';
import { Table } from 'antd';

const columns = [
	{
		title: () => <div className={styles.tableTitle}>ID</div>,
		dataIndex: 'id',
		width: '150px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Room</div>,
		dataIndex: 'room',
		width: '250px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Check-in</div>,
		dataIndex: 'checkin',
		width: '150px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Check-out</div>,
		dataIndex: 'checkout',
		width: '150px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Price</div>,
		dataIndex: 'price',
		width: '200px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Detail >></div>,
		dataIndex: '',
		render: () => (
			<button onClick={() => {}}>
				<div className={styles.tableInfo}>View detail >></div>
			</button>
		),
	},
];
const data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		id: i,
		room: `Room ${i}`,
		checkin: `Date ${i}`,
		checkout: `Date ${i + 1}`,
		price: `10000000`,
	});
}

function ProfileCustomer() {
	return (
		<>
			<div style={{ backgroundColor: 'blue', height: '150%' }}>
				<div className={styles.container}>
					<div className={styles.header}>
						<div className={styles.headerTitle}>Customer Information</div>
						<div className={styles.buttonContainer}>
							<button
								className={styles.button}
								style={{ backgroundColor: '#FF9A9A' }}>
								Delete
							</button>
							<button
								className={styles.button}
								style={{ backgroundColor: '#66EB8B' }}>
								Save
							</button>
							<button>
								<img
									src={IC_closebutton}
									alt="CloseButton"></img>
							</button>
						</div>
					</div>
					<div className={styles.infoContainer}>
						<div className={styles.infoCol}>
							<div className={styles.info}>
								<div className={styles.title}>Name:</div>
								<input
									className={styles.inputInfo}
									type="text"></input>
							</div>
							<div className={styles.info}>
								<div className={styles.title}>Phone:</div>
								<input
									className={styles.inputInfo}
									type="text"></input>
							</div>
						</div>
						<img
							src={IC_line}
							alt="line"></img>
						<div className={styles.infoCol}>
							<div className={styles.info}>
								<div className={styles.title}>Gender:</div>
								<input
									className={styles.inputInfo}
									type="text"></input>
							</div>
							<div className={styles.info}>
								<div className={styles.title}>Citizen ID:</div>
								<input
									className={styles.inputInfo}
									type="text"></input>
							</div>
						</div>
					</div>
					<div className={styles.historyContainer}>
						<Table
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
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileCustomer;
