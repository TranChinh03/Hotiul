import React, { useState } from 'react';
import styles from './fee.module.scss';
import { IC_closebutton } from '../../assets/icons';

function FeeCard() {
	const [action, setAction] = useState(true);
	const [state, setState] = useState({
		name: '',
		gender: '',
		phone: '',
	});

	const [edit, setEdit] = useState({
		name: '',
		gender: '',
		phone: '',
	});

	function assignInfo(state, edit) {
		state.name = edit.name;
		state.gender = edit.gender;
		state.phone = edit.phone;
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
					<div className={styles.headerTitle}>Fee</div>
					<div className={styles.buttonContainer}>
						<button
							className={styles.button}
							style={{ backgroundColor: '#FF9A9A' }}>
							Delete
						</button>
						<button
							onClick={() => {}}
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
