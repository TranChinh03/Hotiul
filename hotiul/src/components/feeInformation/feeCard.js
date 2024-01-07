import React, { useState, useEffect } from 'react';
import styles from './fee.module.scss';
import { IC_closebutton } from '../../assets/icons';
import { createID } from '../../utils/appUtils.js';

function FeeCard(props) {
	const [detailValue, setDetailValue] = useState(props.detailValue);
	const [state, setState] = useState({});
	const [action, setAction] = useState(true);

	console.log('detail value', props.detailValue);

	useEffect(() => {
		setState({
			name: props.detailValue.Name || '',
			price: props.detailValue.Price || '',
			date: props.detailValue.Date || '',
		});
	}, [props.detailValue]);

	const [edit, setEdit] = useState({
		name: '',
		price: '',
		date: '',
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	}

	const handleSave = () => {
		const feeID = createID({ prefix: 'DF' });
		try {
			const newData = {
				ID: feeID,
				Name: edit.name,
				Price: Number(edit.price),
				Date: edit.date,
			};
			if (detailValue && detailValue.Id) {
				assignInfo(state, edit);
			} else {
				setEdit({
					name: '',
					price: '',
					date: '',
				});
				props.handleSaveFeeCard(newData); // Pass the new data to FeeInformation
				assignInfo(edit, state);
			}

			props.fetchData();
			props.closeEvt();
		} catch (err) {
			console.log('Error updating data', err);
			return;
		}

		//handleAction();
	};

	// function handleAction() {
	//
	// 	setAction(!action);
	// }

	function handleCancel() {
		props.setOpen(false);
		setEdit({
			name: '',
			price: '',
			date: '',
		});
	}

	function assignInfo(state, edit) {
		state.name = edit.name;
		state.price = edit.price;
		state.date = edit.date;
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
							value={state.name}
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
							value={state.price}
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
							value={state.date}
							onChange={e => handleChange(e)}
							required></input>
					</div>
				</div>
			</div>
		</>
	);
}

export default FeeCard;
