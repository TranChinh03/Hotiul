import React, { useState } from 'react';
import styles from './home.module.scss';
import ProfileCustomer from '../../components/profileCustomer/ProfileCustomer';

export const Home = () => {
	const [isShown, setIsShown] = useState(false);
	return (
		<div className={styles.container}>
			<button onClick={() => setIsShown(true)}>CLICK ME</button>
			{isShown && <ProfileCustomer></ProfileCustomer>}
		</div>
	);
};
