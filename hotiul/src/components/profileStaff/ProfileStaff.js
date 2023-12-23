import React, { useState } from 'react';
import styles from './profilestaff.module.scss';
import { IC_closebutton } from '../../assets/icons';

function ProfileStaff() {
	const [action, setAction] = useState(true);
	const [state, setState] = useState({
		name: '',
		gender: '',
		phone: '',
		ctzId: '',
		address: '',
		salary: '',
	});

	const [edit, setEdit] = useState({
		name: '',
		gender: '',
		phone: '',
		ctzId: '',
		address: '',
		salary: '',
	});

	function assignInfo(state, edit) {
		state.name = edit.name;
		state.gender = edit.gender;
		state.phone = edit.phone;
		state.ctzId = edit.ctzId;
		state.address = edit.address;
		state.salary = edit.salary;
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
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerTitle}>Staff Information</div>
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
				<div className={styles.infoContainer}>
					<div className={styles.avatarContainer}>
						<div className={styles.avatar}></div>
						<div></div>
					</div>
					<div className={styles.infoDetail}>
						<div className={styles.innfo}>
							<div style={{ flexDirection: 'row', display: 'flex' }}>
								<div className={styles.title}>ID: </div>
								<div
									className={styles.title}
									style={{ marginLeft: '10px' }}>
									23232
								</div>
							</div>
							{action ? (
								<>
									{state.name !== '' ? (
										<div
											style={{
												fontSize: '36px',
												fontStyle: 'normal',
												fontWeight: '700',
												textTransform: 'uppercase',
												color: '#023e8a',
												marginBottom: '20px',
											}}>
											{state.name}
										</div>
									) : (
										<div className={styles.valueInfo}>
											<text
												style={{
													fontSize: '36px',
													fontStyle: 'normal',
													fontWeight: '700',
													textTransform: 'uppercase',
													color: 'red',
												}}>
												Null
											</text>
										</div>
									)}
								</>
							) : (
								<>
									<div
										className={styles.info}
										style={{ marginTop: '20px', marginBottom: '10px' }}>
										<div className={styles.title}>Name:</div>
										<input
											className={styles.inputInfo}
											type="text"
											name="name"
											value={edit.name}
											onChange={e => handleChange(e)}
											required></input>
									</div>
								</>
							)}
						</div>
						{action ? (
							<>
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
								<div className={styles.info}>
									<div className={styles.title}>Address:</div>
									{state.address !== '' ? (
										<div className={styles.valueInfo}>{state.address}</div>
									) : (
										<div className={styles.valueInfo}>
											<text style={{ color: 'red' }}>Null</text>
										</div>
									)}
								</div>
								<div className={styles.info}>
									<div className={styles.title}>Salary:</div>
									{state.salary !== '' ? (
										<div className={styles.valueInfo}>{state.salary}</div>
									) : (
										<div className={styles.valueInfo}>
											<text style={{ color: 'red' }}>Null</text>
										</div>
									)}
								</div>
							</>
						) : (
							<>
								<div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Gender:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="gender"
										value={edit.gender}
										onChange={e => handleChange(e)}
										required></input>
								</div>
								<div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Citizen ID:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="ctzId"
										value={edit.ctzId}
										onChange={e => handleChange(e)}
										required></input>
								</div>
								<div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Phone:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="phone"
										value={edit.phone}
										onChange={e => handleChange(e)}
										required></input>
								</div>
								<div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Address:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="address"
										value={edit.address}
										onChange={e => handleChange(e)}
										required></input>
								</div>
								<div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Salary:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="salary"
										value={edit.salary}
										onChange={e => handleChange(e)}
										required></input>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileStaff;
