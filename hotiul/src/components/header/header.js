import styles from './header.module.scss';

export const Header = ({ selected }) => {
	const text = [
		{
			id: 'home',
			main: 'Welcome to Hotel Management, Name!',
			sub: 'A quick data overview of the hotel.',
		},
		{
			id: 'booking',
			main: 'Booking Management',
			sub: 'Manage Check-in, check-out and Booking Status',
		},
		{
			id: 'room',
			main: 'Room Management',
			sub: 'Manage Room Status and Room Type',
		},
		{
			id: 'refund',
			main: 'Refund Management',
			sub: 'Manage Check-in, check-out and Booking Status',
		},
		{
			id: 'customer',
			main: 'Customer Management',
			sub: 'Manage customer information',
		},
		{
			id: 'monthlyFee',
			main: 'Monthly Fee Management',
			sub: 'Manage Monthly Fee Information',
		},
		{
			id: 'services',
			main: 'Services Management',
			sub: 'Manage Services Information',
		},
		{
			id: 'staff',
			main: 'Staff Management',
			sub: 'Manage Staff Information',
		},
		{
			id: 'statistic',
			main: 'Statistic',
			sub: 'Revenue and Booking Reports',
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.contentContainer}>
				<p className={styles.main}>{text.find(x => x.id === selected).main}</p>
				<p className={styles.sub}>{text.find(x => x.id === selected).sub}</p>
			</div>
			<div className={styles.infoContainer}></div>
		</div>
	);
};
