import React from 'react';
import styles from './buttonAdd.module.scss';
import { IC_add } from '../../assets/icons';

const ButtonAdd = props => {
	return (
		<div
			className={styles.container}
			onClick={props.onClick}>
			<img src={IC_add} />
			<p className={styles.text}>{props.text}</p>
		</div>
	);
};

export default ButtonAdd;
