import React, { useState, useEffect } from 'react';
import styles from './service.module.scss';
import { IC_closebutton } from '../../assets/icons';
import { createID } from '../../utils/appUtils.js';
import { addData, updateData } from '../../controller/addData.ts';

function AddService(props) {
	const [state, setState] = useState({ ...props.detailValue });
	useEffect(() => {
		if (!props.detailValue?.id) {
			console.log('ID', props.detailValue);
			setState(null);
			return;
		}
		console.log('ID', props.detailValue?.id);
		setState({
			// Them cham hoi => Neu null ma yeu cau lay thong tin thi tra ve undefined
			ID: props.detailValue?.id,
			Service: props.detailValue?.service,
			Price: props.detailValue?.price,
			Available: props.detailValue?.available,
		});
	}, [props]);

	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	}
	const handleSave = () => {
		console.log('state', state);
		if (state.ID) {
			const newData = {
				ID: state.ID,
				Service: state.Service ?? '',
				Price: Number(state.Price) ?? '',
				Available: Number(state.Available) ?? '',
			};
			updateData({ data: newData, table: 'SERVICE', id: state.ID });
			props.fetchData();
			props.closeEvt();
		} else {
			const serviceID = createID({ prefix: 'S' });
			try {
				const newData = {
					ID: serviceID,
					Service: state.Service ?? '',
					Price: Number(state.Price) ?? '',
					Available: Number(state.Available) ?? '',
				};
				addData({ data: newData, table: 'SERVICE', id: serviceID });
				setState({ Service: '', Price: '', Available: '' });
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
					<div className={styles.headerTitle}>Service</div>
					<div className={styles.buttonContainer}>
						<button
							onClick={() => {}}
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
								if (!props.detailValue?.Id) {
									setState({ Service: '', Price: '', Available: '' });
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
						<div className={styles.title}>Service:</div>
						<input
							className={styles.inputInfo}
							type="text"
							name="Service"
							value={state?.Service}
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
						<div className={styles.title}>Available:</div>
						<input
							className={styles.inputInfo}
							type="text"
							name="Available"
							value={state?.Available}
							onChange={e => handleChange(e)}
							required></input>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddService;
