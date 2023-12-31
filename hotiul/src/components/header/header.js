import styles from './header.module.scss';
import { Modal, Select } from 'antd';
import { IM_EN_Flag, IM_VN_Flag } from '../../assets/imgs';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import ProfileStaff from '../profileStaff/ProfileStaff';
import { getData } from '../../controller/getData.ts';

export const Header = ({ selected }) => {
	const user = JSON.parse(localStorage.getItem('currentUser'));
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState(localStorage.language);
	const { t, i18n } = useTranslation();
	const options = [
		{ image: IM_VN_Flag, title: 'VI' },
		{ image: IM_EN_Flag, title: 'EN' },
	];

	const updateUser = async () => {
		await Promise.all([
			getData('/STAFF').then(data => {
				const idx = data.findIndex(value => value.ID === user.ID);
				if (idx !== -1) {
					console.log('idx', idx);
					localStorage.setItem('currentUser', JSON.stringify(data[idx]));
					// navigation(NAV_LINK.DASHBOARD)
					window.location.reload();
				}
			}),
		]);
	};

	const { Option } = Select;
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
			id: 'roomtype',
			main: 'Room Type Management',
			sub: 'Manage Room Type',
		},
		{
			id: 'refund',
			main: 'Refund Management',
			sub: 'Manage Refund',
		},
		{
			id: 'customer',
			main: 'Customer Management',
			sub: 'Manage Customer Information',
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
			<div className={styles.infoContainer}>
				<Select
					style={{ width: '150px', marginRight: '20px' }}
					placeholder="Choose Language"
					value={language}
					onChange={e => {
						setLanguage(e);
						i18n.changeLanguage(e);
						localStorage.setItem('language', e);
					}}>
					{options.map((option, index) => (
						<Option
							key={index}
							value={option.title}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '100%',
								}}>
								<div>{option.title}</div>
								<img
									src={option.image}
									alt="Flag"
									style={{ width: '30px', height: '20px' }}
								/>
							</div>
						</Option>
					))}
				</Select>
				<div
					onClick={() => setIsOpen(true)}
					className={styles.profileContainer}>
					<div className={styles.title}>
						<div className={styles.name}>{user.Name}</div>
						<div className={styles.role}>{user.Role}</div>
					</div>
					<div className={styles.avaContainer}>
						{user.Image ? (
							<img
								src={user.Image}
								alt="Avatar"
							/>
						) : (
							<FaRegUserCircle size={44} />
						)}
					</div>
				</div>
			</div>
			<Modal
				centered={true}
				width="80%"
				closeIcon={null}
				open={isOpen}
				footer={null}>
				<ProfileStaff
					open={isOpen}
					setOpen={setIsOpen}
					data={user}
					fetchData={() => updateUser()}
				/>
			</Modal>
		</div>
	);
};
