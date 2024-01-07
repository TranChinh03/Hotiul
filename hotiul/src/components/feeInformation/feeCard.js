import React, { useState } from 'react';
import styles from './fee.module.scss';
import { IC_closebutton } from '../../assets/icons';
import { createID } from '../../utils/appUtils.js';

function FeeCard(props) {
	const detailValue = props.detailValue;

	const [edit, setEdit] = useState({
		name: '',
		price: '',
		date: '',
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setEdit({
			...edit,
			[evt.target.name]: value,
		});
	}

	const handleSave = () => {
		const feeID = createID({ prefix: 'DF' });
		try {
			const newData = {
				ID: feeID,
				Name: edit.name,
				Price: edit.price,
				Date: edit.date,
			};
			console.log(newData);
			props.handleSaveFeeCard(newData); // Pass the new data to FeeInformation
			setEdit({
				name: '',
				price: '',
				date: '',
			});
			props.fetchData();
			props.closeEvt();
		} catch (err) {
			console.log('Error updating data', err);
			return;
		}
	};

	function handleCancel() {
		props.setOpen(false);
		setEdit({
			name: '',
			price: '',
			date: '',
		});
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerTitle}>Fee</div>
					<div className={styles.buttonContainer}>
						<button
							className={styles.button}
							style={{ backgroundColor: '#FF9A9A' }}>
							Delete
						</button>
						<button
							onClick={() => handleSave()}
							className={styles.button}
							style={{ backgroundColor: '#66EB8B' }}>
							Save
						</button>
						<button onClick={props.closeEvt}>
							<img
								src={IC_closebutton}
								alt="CloseButton"></img>
						</button>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginTop: '40px',
					}}>
					<div
						className={styles.info}
						style={{ marginBottom: '10px' }}>
						<div className={styles.title}>Name:</div>
						<input
							className={styles.inputInfo}
							type="text"
							name="name"
							value={edit.name}
							onChange={e => handleChange(e)}
							required></input>
					</div>
					<div
						className={styles.info}
						style={{ marginBottom: '10px' }}>
						<div className={styles.title}>Price:</div>
						<input
							className={styles.inputInfo}
							type="text"
							name="price"
							value={edit.price}
							onChange={e => handleChange(e)}
							required></input>
					</div>
					<div
						className={styles.info}
						style={{ marginBottom: '10px' }}>
						<div className={styles.title}>Date:</div>
						<input
							className={styles.inputInfo}
							type="date"
							name="date"
							value={edit.date}
							onChange={e => handleChange(e)}
							required></input>
					</div>
				</div>
			</div>
		</>
	);
}

export default FeeCard;
