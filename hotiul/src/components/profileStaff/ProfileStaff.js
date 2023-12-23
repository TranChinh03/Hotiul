import React from 'react';
import styles from './profilestaff.module.scss';
import { IC_closebutton, IC_line } from '../../assets/icons';
import { Table } from 'antd';

function ProfileStaff() {
	return (
		<>
			<div style={{ backgroundColor: 'blue' }}>
				<div className={styles.container}>
					<div className={styles.header}>
						<div className={styles.headerTitle}>Staff Information</div>
						<div className={styles.buttonContainer}>
							<button
								className={styles.button}
								style={{ backgroundColor: '#FF9A9A' }}>
								Delete
							</button>
							<button
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
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileStaff;
