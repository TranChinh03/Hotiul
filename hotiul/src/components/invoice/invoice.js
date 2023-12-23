import React from 'react';
import styles from '../invoice/invoice.module.scss';
import { IC_closebutton } from '../../assets/icons';

function Invoice() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<button>
						<img
							src={IC_closebutton}
							alt="CloseButton"></img>
					</button>
					<div className={styles.headerTitle}>Invoice</div>
					<button>
						<img
							src={IC_closebutton}
							alt="CloseButton"></img>
					</button>
				</div>
				<div className={styles.bookingInfo}></div>
				<div className={styles.serInfo}></div>
				<div className={styles.payInfo}></div>
				<div className={styles.footer}></div>
			</div>
		</>
	);
}

export default Invoice;
