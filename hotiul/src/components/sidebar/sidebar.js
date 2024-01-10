import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.scss';
import { IMG_logo } from '../../assets/imgs';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import {
	IC_booking,
	IC_customer,
	IC_dashboard,
	IC_fee,
	IC_logout,
	IC_refund,
	IC_room,
	IC_service,
	IC_staff,
	IC_statistic,
} from '../../assets/icons';
import { NAV_LINK } from '../../routes/components/NAV_LINK';

const SideBar = ({ handleChange }) => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const currentUser = localStorage.getItem('currentUser');
	const role = currentUser ? JSON.parse(currentUser).Role : '';

	const staffTab =
		role === 'Admin'
			? {
					tabname: 'Staff',
					tab: 'staff',
					displayName: t('sidebar.staff'),
					icon: IC_staff,
					nav: NAV_LINK.STAFF,
			  }
			: null;
	const initialTabs = [
		{
			tabname: 'Home',
			tab: 'home',
			displayName: t('sidebar.home'),
			icon: IC_dashboard,
			nav: NAV_LINK.DASHBOARD,
		},
		// {
		//   tabname: "Booking",
		//   tab: "booking",
		//   displayName: t('sidebar.booking'),
		//   icon: IC_booking,
		//   nav: NAV_LINK.BOOKING
		// },
		{
			tabname: 'Room',
			tab: 'room',
			displayName: t('sidebar.room'),
			icon: IC_room,
			nav: NAV_LINK.ROOM,
		},
		{
			tabname: 'Room Type',
			tab: 'roomtype',
			displayName: t('sidebar.roomtype'),
			icon: IC_room,
			nav: NAV_LINK.ROOMTYPE,
		},
		{
			tabname: 'Refund',
			tab: 'refund',
			displayName: t('sidebar.refund'),
			icon: IC_refund,
			nav: NAV_LINK.REFUND,
		},
		{
			tabname: 'Customer',
			tab: 'customer',
			displayName: t('sidebar.customer'),
			icon: IC_customer,
			nav: NAV_LINK.CUSTOMER,
		},
		{
			tabname: 'Monthly Fee',
			tab: 'monthlyFee',
			displayName: t('sidebar.monthlyFee'),
			icon: IC_fee,
			nav: NAV_LINK.MONTHLY_FEE,
		},
		{
			tabname: 'Services',
			tab: 'services',
			displayName: t('sidebar.service'),
			icon: IC_service,
			nav: NAV_LINK.SERVICES,
		},
		{
			tabname: 'Statistic',
			tab: 'statistic',
			displayName: t('sidebar.statistic'),
			icon: IC_statistic,
			nav: NAV_LINK.STATISTIC,
		},
	];

	const updateTabsLanguage = () => {
		const updatedTabs = initialTabs.map(tab => ({
			...tab,
			displayName: t(`sidebar.${tab.tab}`),
		}));

		if (staffTab) {
			staffTab.displayName = t('sidebar.staff');
			updatedTabs.splice(7, 0, staffTab);
		}

		setTabs(updatedTabs);
	};

	useEffect(() => {
		// Listen for language changes and update tabs accordingly
		updateTabsLanguage();
	}, [i18n.language]);

	const [tabs, setTabs] = useState(initialTabs);

	const createList = tabs.map(map => {
		return (
			<button
				className={styles.tabContainer}
				onClick={() => {
					handleChange(map.tab);
					navigate(map.nav);
					message.success('Change');
				}}
				autoFocus={map.tabname === 'Dashboard' ? true : false}>
				<div className={styles.contentTab}>
					<img
						className={styles.icon}
						src={map.icon}
					/>
					<p className={styles.tabName}>{map.displayName}</p>
				</div>
			</button>
		);
	});
	return (
		<div className={styles.container}>
			<img src={IMG_logo} />
			{createList}
			<button
				onClick={() => {
					localStorage.removeItem('currentUser');
					navigate(NAV_LINK.LOGIN);
					window.location.reload();
				}}
				className={styles.tabContainer}>
				<div className={styles.contentTab}>
					<img
						className={styles.icon}
						src={IC_logout}
					/>
					<p className={styles.tabName}>{t('sidebar.logout')}</p>
				</div>
			</button>
		</div>
	);
};

export default SideBar;
