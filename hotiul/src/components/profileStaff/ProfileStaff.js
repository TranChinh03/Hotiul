import React, { useEffect, useState, useRef } from 'react';
import styles from './profilestaff.module.scss';
import { IC_CircleCheck, IC_closebutton } from '../../assets/icons/index.js';
import { Select, message } from 'antd';
import { addData, updateData } from '../../controller/addData.ts';
import { deleteData } from '../../controller/deleteData.ts';
import { useTranslation } from "react-i18next"
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
  } from "firebase/storage";
import { storage } from "../../firebaseConfig.js";
import { IM_Camera } from '../../assets/imgs/index.js';
import { FaRegUserCircle } from "react-icons/fa";

function ProfileStaff(props) {
	const [action, setAction] = useState(true);
	const [state, setState] = useState({});
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

	useEffect(() => {
		setState({
			name: props.data.Name,
			gender: props.data.Gender,
			phone: props.data.Phone,
			ctzId: props.data.CitizenID,
			address: props.data.Address,
			salary: props.data.Salary
		})
		console.log("props.data:", props.data)
	}, [props.data])

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

	function handleDelete() {
		try {
			deleteData({ id: props.data.ID, table: "STAFF" })
		}
		catch (err) {
			console.log("Error delete data", err)
		}
		props.setOpen(false)
		props.fetchData()
	}

	async function handleSave() {
		if (edit.name === "" || edit.ctzId === "" || edit.phone === "" || edit.gender === ""){
			message.error("Please fill full information!")
			return
		}
		try {
			const newData = {
				Name: edit.name,
				CitizenID: edit.ctzId,
				Phone: edit.phone,
				Gender: edit.gender,
				Address: edit.address,
				Salary: Number(edit.salary),
			}
			if (selectedImage) {
				if (selectedImageFile !== null) {
					if (props.data.Image !== "") {
						const refimg = ref(storage, props.data.Image);
						deleteObject(refimg).then(() => {
							console.log("Image deleted")
						}).catch((error) => {
							console.log("No image existed")
						})
					}
					var imageLink = "";
					const storageRef = ref(
						storage,
						`Images/Staff/${props.data.ID}`
					);
					const snapshot = await uploadBytes(storageRef, selectedImageFile);
					imageLink = await getDownloadURL(snapshot.ref)
					newData.Image = imageLink
				}
			}

				console.log(newData)
			updateData({data: newData, table: "STAFF", id: props.data.ID});
		}
		catch (err) {
			console.log("Error updating data", err)
			return
		 }
		message.success("Edit staff successfully!")
		assignInfo(state, edit);
		handleAction();
		setSelectedImage(null)
		setSelectedImageFile(null)
		props.setOpen(false)
		props.fetchData()
	}

	function handleCancel() {
		handleAction();
		setSelectedImage(null)
		setSelectedImageFile(null)
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
									onClick={() => handleDelete()}
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
								<button
									onClick={() => {
										props.setOpen(false)
									}}
								>
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
								<button
									onClick={() => {
										props.setOpen(false)
										handleAction()
										setSelectedImage(null)
										setSelectedImageFile(null)
									}}>
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
							{action ? (
								        <div className="px-2 mt-2 col-span-3 inline-block w-full">
											<div
											style={{
												padding: "5px",
												border: "1px solid gray",
												borderRadius: "10px",
												width: "fit-content",
											}}
											className="m-auto"
											>
											{selectedImage || props.data.Image !== "" ? (
												<img
													src={selectedImage ? selectedImage : props.data.Image}
													alt="Selected"
													style={{ width: "100%", maxHeight: "200px" }}
												/>
											) : (
												<FaRegUserCircle size={150}/>
											)}
											</div>
										</div>
							) : (
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
											{selectedImage || props.data.Image !== "" ? (
												<img
													src={selectedImage ? selectedImage : props.data.Image}
													alt="Selected"
													style={{ width: "100%", maxHeight: "200px" }}
												/>
											) : (
												<img src={IM_Camera} />
											)}
											<input
												type="file"
												accept="image/*"
												ref={fileInputRef}
												style={{ display: "none" }}
												onChange={handleImageSelected}
											/>
											</div>
										</div>
							)}
						
					</div>
					<div className={styles.infoDetail}>
						<div className={styles.innfo}>
							<div style={{ flexDirection: 'row', display: 'flex' }}>
								<div className={styles.title}>ID: </div>
								<div
									className={styles.title}
									style={{ marginLeft: '10px' }}>
									{props.data.ID}
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
												marginLeft: '20px'
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
									<Select
										type="text"
										name="gender"
										value={edit.gender}
										style={{ width: "20vw", height: "50px", padding: 0 }}
										options={[{ value: "Female" }, { value: "Male" }]}
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
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileStaff;
