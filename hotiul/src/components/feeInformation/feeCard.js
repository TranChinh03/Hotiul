import React, { useState, useEffect } from 'react';
import styles from './fee.module.scss';
import { IC_closebutton } from '../../assets/icons';
import { createID } from '../../utils/appUtils.js';

function FeeCard(props) {
	const [state, setState] = useState({ ...props.detailValue });
	useEffect(() => {
		if (!props.detailValue?.Id) {
			console.log('ID', props.detailValue);
			setState(null);
			return;
		}
		console.log('ID', props.detailValue?.Id);
		setState({
			// Them cham hoi => Neu null ma yeu cau lay thong tin thi tra ve undefined
			ID: props.detailValue?.Id,
			Name: props.detailValue?.Name,
			Price: props.detailValue?.Price,
			Date: props.detailValue?.Date,
		});
	}, [props]);

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
		// Phan biet create && update => ID.exist()?
		console.log('state', state);
		if (state.ID) {
			const newData = {
				ID: state.ID,
				Name: state.Name ?? '',
				Price: Number(state.Price) ?? '',
				Date: state.Date ?? '',
			};
			props.handleSaveFeeCard(newData);
		} else {
			const feeID = createID({ prefix: 'DF' });
			try {
				const newData = {
					ID: feeID,
					Name: state.Name ?? '',
					Price: Number(state.Price) ?? '',
					Date: state.Date ?? '',
				};

				props.handleSaveFeeCard(newData); // Pass the new data to FeeInformation
				setState({ Name: '', Price: '', Date: '' });
				props.fetchData();
				props.closeEvt();
			} catch (err) {
				console.log('Error updating data', err);
				return;
			}
		}
	};
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
						<button
							onClick={() => {
								if (!props.detailValue?.Id) {
									setState({ Name: '', Price: '', Date: '' });
								}

								props.closeEvt();
							}}>
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
							name="Name"
							value={state?.Name}
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
							name="Price"
							value={state?.Price}
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
							name="Date"
							value={state?.Date}
							onChange={e => handleChange(e)}
							required></input>
					</div>
				</div>
			</div>
		</>
	);
}

export default FeeCard;
