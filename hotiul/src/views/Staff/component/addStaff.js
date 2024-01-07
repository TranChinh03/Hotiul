import React, { useEffect, useRef, useState } from 'react';
import styles from './addStaff.module.scss';
import { IC_closebutton } from '../../../assets/icons/index.js';
import { Button, Select, message } from 'antd';
import { addData, updateData } from '../../../controller/addData.ts';
import { createID } from '../../../utils/appUtils.js';
import { IM_Camera } from '../../../assets/imgs/index.js';
import { useTranslation } from "react-i18next"
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
  } from "firebase/storage";
import { storage } from "../../../firebaseConfig.js";


function AddStaff(props) {


	const { t } = useTranslation();
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedImageFile, setSelectedImageFile] = useState(null);
	const fileInputRef = useRef(null);


	const handleImageSelected = (event) => {
		if (event.target.files && event.target.files[0]) {
		  setSelectedImageFile(event.target.files[0]);
		  setSelectedImage(URL.createObjectURL(event.target.files[0]));
		}
	  };	  

	const [edit, setEdit] = useState({
		name: '',
		gender: '',
		phone: '',
		ctzId: '',
		address: '',
		salary: '',
		username: '',
		password: '',
		image: '',
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setEdit({
			...edit,
			[evt.target.name]: value,
		});
	}


	async function handleSave() {
		if (edit.name === "" || edit.ctzId === "" || edit.phone === "" || edit.gender === ""){
			message.error("Please fill full information!")
			return
		}
		const staffID = createID({ prefix: "S" })
		if (props.fullData.findIndex(x => x.CitizenID === edit.ctzId || x.Phone === edit.phone) !== -1)
		{
			message.error("User Existed!")
			return
		}

		try {
			
			var imageLink = "";
			const storageRef = ref(
				storage,
				`Images/Staff/${staffID}`
			  );
			  if (selectedImageFile !== null) {
				const snapshot = await uploadBytes(storageRef, selectedImageFile);
				imageLink = await getDownloadURL(snapshot.ref)
			}

			const newData = {
				ID: staffID,
				Name: edit.name,
				CitizenID: edit.ctzId,
				Phone: edit.phone,
				Gender: edit.gender,
				Address: edit.address,
				Salary: Number(edit.salary),
				Username: edit.username,
				Password: edit.password,

				Role: "Staff",
				Image: imageLink,
			}
			console.log(newData)
			addData({ data: newData, table: "STAFF", id: staffID });
			message.success("Add new user successfully!")

			setEdit({
				name: '',
				gender: '',
				phone: '',
				ctzId: '',
				address: '',
				salary: '',
				username: '',
				password: '',

				image: '',
			})
			setSelectedImage(null)
			setSelectedImageFile(null)

			props.setOpen(false);
			props.fetchData();
		} catch (err) {
			console.log('Error updating data', err);
			return;
		}
	}

	function handleCancel() {
		props.setOpen(false);
		setEdit({
			name: '',
			gender: '',
			phone: '',
			ctzId: '',
			address: '',
			salary: '',
			username: '',
			password: '',

			image: ''
		})
		setSelectedImage(null)
		setSelectedImageFile(null)

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
						<div className="px-2 mt-2 col-span-3 inline-block">
						<div
							onClick={() => fileInputRef.current.click()}
							style={{
							padding: "5px",
							border: "1px solid gray",
							borderRadius: "10px",
							width: "fit-content",
							}}
							className="cursor-pointer m-auto"
						>
							{selectedImage ? (
								<img
								src={selectedImage}
								alt="Selected"
								style={{ width: "100%", maxHeight: "200px" }}
								/>
							) : (
							<img src={IM_Camera}/>
							)}
							<input
							type="file"
							accept="image/*"
							ref={fileInputRef}
							style={{ display: "none" }}
							onChange={handleImageSelected}
							/>
						</div>
						{selectedImage ? (
							<Button
							onClick={() => {
								setSelectedImage(null)
								setSelectedImageFile(null)
							}}
							style={{ margin: "10px auto" }}
						>{t("button.deleteImg")}</Button>) : null
						}  
						</div>
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
									style={{ width: '20vw', height: '50px', padding: 0 }}
									options={[{ value: 'Female' }, { value: 'Male' }]}
									onChange={e =>
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
