import React, { useState } from 'react';
import styles from './profilecustomer.module.scss';
import { IC_closebutton, IC_line } from '../../assets/icons';
import { Table } from 'antd';

const columns = [
	{
		title: () => <div className={styles.tableTitle}>ID</div>,
		dataIndex: 'id',
		width: '100px',
		render: text => <div className={styles.tableInfo}>{text}</div>,
	},
	{
		title: () => <div className={styles.tableTitle}>Room</div>,
		dataIndex: 'room',
		width: '200px',
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
		width: '150px',
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
	const [action, setAction] = useState(true);
	const [state, setState] = useState({
		name: '',
		gender: '',
		phone: '',
		ctzId: '',
	});

	const [edit, setEdit] = useState({
		name: '',
		gender: '',
		phone: '',
		ctzId: '',
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

	return (
		<>
			<div style={{ backgroundColor: 'blue' }}>
				<div className={styles.container}>
					<div className={styles.header}>
						<div className={styles.headerTitle}>Customer Information</div>
						{action ? (
							<>
								<div className={styles.buttonContainer}>
									<button
										className={styles.button}
										style={{ backgroundColor: '#FF9A9A' }}>
										Delete
									</button>
									<button
										onClick={() => handleAction()}
										className={styles.button}
										style={{ backgroundColor: '#66EB8B' }}>
										Edit
									</button>
									<button>
										<img
											src={IC_closebutton}
											alt="CloseButton"></img>
									</button>
								</div>
							</>
						) : (
							<>
								<div className={styles.buttonContainer}>
									<button
										onClick={() => handleCancel()}
										className={styles.button}
										style={{ backgroundColor: '#FF9A9A' }}>
										Cancel
									</button>
									<button
										onClick={() => handleSave()}
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
							</>
						)}
					</div>
					{action ? (
						<>
							<div className={styles.infoContainer}>
								<div className={styles.infoCol}>
									<div className={styles.info}>
										<div className={styles.title}>Name:</div>
										{state.name !== '' ? (
											<div className={styles.valueInfo}>{state.name}</div>
										) : (
											<div className={styles.valueInfo}>
												<text style={{ color: 'red' }}>Null</text>
											</div>
										)}
									</div>
									<div className={styles.info}>
										<div className={styles.title}>Phone:</div>
										{state.phone !== '' ? (
											<div className={styles.valueInfo}>{state.phone}</div>
										) : (
											<div className={styles.valueInfo}>
												<text style={{ color: 'red' }}>Null</text>
											</div>
										)}
									</div>
								</div>
								<img
									src={IC_line}
									alt="line"></img>
								<div className={styles.infoCol}>
									<div className={styles.info}>
										<div className={styles.title}>Gender:</div>
										{state.gender !== '' ? (
											<div className={styles.valueInfo}>{state.gender}</div>
										) : (
											<div className={styles.valueInfo}>
												<text style={{ color: 'red' }}>Null</text>
											</div>
										)}
									</div>
									<div className={styles.info}>
										<div className={styles.title}>Citizen ID:</div>
										{state.ctzId !== '' ? (
											<div className={styles.valueInfo}>{state.ctzId}</div>
										) : (
											<div className={styles.valueInfo}>
												<text style={{ color: 'red' }}>Null</text>
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
											onChange={e => handleChange(e)}
											required></input>
									</div>
									<div className={styles.info}>
										<div className={styles.title}>Phone:</div>
										<input
											className={styles.inputInfo}
											type="text"
											name="phone"
											value={edit.phone}
											onChange={e => handleChange(e)}
											required></input>
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
											type="text"
											name="gender"
											value={edit.gender}
											onChange={e => handleChange(e)}
											required></input>
									</div>
									<div className={styles.info}>
										<div className={styles.title}>Citizen ID:</div>
										<input
											className={styles.inputInfo}
											type="text"
											name="ctzId"
											value={edit.ctzId}
											onChange={e => handleChange(e)}
											required></input>
									</div>
								</div>
							</div>
						</>
					)}

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
