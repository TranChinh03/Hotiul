import React, { useEffect, useState } from 'react';
import styles from './addStaff.module.scss';
import { IC_closebutton } from '../../../assets/icons/index.js';
import { Select } from 'antd';
import { addData, updateData } from '../../../controller/addData.ts';
import { createID } from '../../../utils/appUtils.js';

function AddStaff(props) {

	const [edit, setEdit] = useState({
		name: '',
		gender: '',
		phone: '',
		ctzId: '',
		address: '',
		salary: '',
        username: '',
        password: '',
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setEdit({
			...edit,
			[evt.target.name]: value,
		});
	}

	function handleSave() {
        const staffID = createID({prefix: "S"})
		try {
            const newData = {
                    ID: staffID,
					Name: edit.name,
					CitizenID: edit.ctzId,
					Phone: edit.phone,
					Gender: edit.gender,
					Address: edit.address,
					Salary: Number(edit.salary),
					Username: edit.username,
					Password: edit.password
				}
				console.log(newData)
			addData({data: newData, table: "STAFF", id: staffID});
            setEdit({
                name: '',
                gender: '',
                phone: '',
                ctzId: '',
                address: '',
                salary: '',
                username: '',
                password: '',
            })
            props.setOpen(false);
            props.fetchData();
		}
		catch (err) { 
			console.log("Error updating data", err)
			return
		 }
	}

	function handleCancel() {
        props.setOpen(false)
        setEdit({
            name: '',
            gender: '',
            phone: '',
            ctzId: '',
            address: '',
            salary: '',
            username: '',
            password: '',
        })
	}
	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerTitle}>Add new staff</div>
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
									Add
								</button>
								<button
									onClick={() => {
										handleCancel();
									}}>
									<img
										src={IC_closebutton}
										alt="CloseButton"></img>
								</button>
							</div>
						</>
				</div>
				<div className={styles.infoContainer}>
					<div className={styles.avatarContainer}>
						<div className={styles.avatar}></div>
						<div></div>
					</div>
					<div className={styles.infoDetail}>
						<div className={styles.innfo}>
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
						</div>
							<>
								<div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Gender:</div>
									<Select
										type="text"
										name="gender"
										value={edit.gender}
										style={{ width: "20vw", height: "50px", padding: 0}}
										options={[{value: "Female"}, {value: "Male"}]}
										onChange={e => 		
											setEdit({
											...edit,
											gender: e,
										})}
									/>
									{/* <input
										className={styles.inputInfo}
										type="text"
										name="gender"
										value={edit.gender}
										onChange={e => handleChange(e)}
										required></input> */}
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
                                <div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Username:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="username"
										value={edit.username}
										onChange={e => handleChange(e)}
										required></input>
								</div>
                                <div
									className={styles.info}
									style={{ marginBottom: '10px' }}>
									<div className={styles.title}>Password:</div>
									<input
										className={styles.inputInfo}
										type="text"
										name="password"
										value={edit.password}
										onChange={e => handleChange(e)}
										required></input>
								</div>
							</>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddStaff;
