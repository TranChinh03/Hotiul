import React, { useState, useEffect } from 'react';
import styles from './statistic.module.scss';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { IC_wallet, IC_wallet2 } from '../../assets/icons';
import { Select, Spin } from 'antd';
import { IMG_logo } from '../../assets/imgs';
import { LoadingOutlined } from '@ant-design/icons';
import { getData } from '../../controller/getData.ts';

export const Statistic = () => {
	const xLabels = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];
	// const [revenueData, setRevenueData] = useState([
	// 	600, 800, 700, 350, 140, 770, 346, 746, 550, 980, 990, 1220,
	// ]);

	const [isLoading, setIsLoading] = useState(true);
	const [todayCheckIn, setTodayCheckIn] = useState([]);
	const [todayCheckOut, setTodayCheckOut] = useState([]);
	const [newBooking, setNewBooking] = useState([]);
	const [bookingData, setBookingData] = useState([]);
	const [revenueThisMonth, setRevenueThisMonth] = useState(0);
	const [feeThisMonth, setFeeThisMonth] = useState(0);

	const [BOOKING, setBOOKING] = useState([]);
	const [FEE, setFEE] = useState([]);

	const [roomData, setRoomData] = useState([]);
	const [revenueData, setRevenueData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	const fetchData = async () => {
		await Promise.all([
			getData('/BOOKING').then(data => {
				setBOOKING(data);
				setTodayCheckIn(
					data.filter(x => x.CheckIn === localStorage.getItem('currentDate')).map(x => x.RoomID),
				);
				setTodayCheckOut(
					data.filter(x => x.CheckOut === localStorage.getItem('currentDate')).map(x => x.RoomID),
				);
				setNewBooking(
					data.filter(x => x.CreateAt === localStorage.getItem('currentDate')).map(x => x.RoomID),
				);
				const roomBookingThisMonth = data
					.filter(x => x.CreateAt.split('/')[1] === localStorage.getItem('currentMonth'))
					.map(x => x.RoomType.TypeName);
				const roomList = [...new Set(roomBookingThisMonth)];
				setBookingData(
					roomList.map(x => {
						return {
							label: x,
							value: roomBookingThisMonth.filter(y => y === x).length,
						};
					}),
				);
				const bookingThisMonth = data
					.filter(x => x.CheckOut.split('/')[1] === localStorage.getItem('currentMonth'))
					.map(x => x.Price);
				setRevenueThisMonth(
					bookingThisMonth.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
				);

				const newRevenueData = [];
				for (let i = 1; i <= 12; i++) {
					const bookings = data
						.filter(
							x =>
								parseInt(x.CheckOut.split('/')[1]) === i &&
								parseInt(x.CheckOut.split('/')[2]) === revenueYear,
						)
						.map(x => x.Price);
					const bookingfee = bookings.reduce(
						(accumulator, currentValue) => accumulator + currentValue,
						0,
					);
					newRevenueData.push(bookingfee);
				}
				setRevenueData(newRevenueData);
				setOverallRevenue(newRevenueData);
			}),

			getData('/ROOM').then(data => {
				const roomStatusMap = data.map(x => x.Status);
				setRoomData([
					{
						label: 'Available',
						value: roomStatusMap.filter(x => x === 'Available').length,
						color: '#49E17C',
					},
					{
						label: 'Confirm Checkin ',
						value: roomStatusMap.filter(x => x === 'Confirm Checkin').length,
						color: '#90F56C',
					},
					{
						label: 'In Use',
						value: roomStatusMap.filter(x => x === 'In Use').length,
						color: '#FF9C9C',
					},
					{
						label: 'Confirm Checkout',
						value: roomStatusMap.filter(x => x === 'Confirm Checkout').length,
						color: '#FF973F',
					},
					{
						label: 'Cleaning',
						value: roomStatusMap.filter(x => x === 'Cleaning'),
						color: '#F8DD4E',
					},
					{
						label: 'Fixing',
						value: roomStatusMap.filter(x => x === 'Fixing').length,
						color: '#88DDFF',
					},
				]);
			}),
			getData('/FEE').then(data => {
				setFEE(data);
				const findFee = data.find(
					x =>
						x.Year === parseInt(localStorage.getItem('currentYear')) &&
						x.Month === parseInt(localStorage.getItem('currentMonth')),
				).Details;
				setFeeThisMonth(
					findFee
						.map(x => x.Price)
						.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
				);
				const newFeeData = [];
				for (let i = 1; i <= 12; i++) {
					const findFee = data.find(x => x.Year === overallYear && x.Month === i).Details;
					const tempFee = findFee
						.map(x => x.Price)
						.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
					newFeeData.push(tempFee);
				}
				setOverallFee(newFeeData);
			}),
		]);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	//const xLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

	const [overallRevenue, setOverallRevenue] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	const [overallFee, setOverallFee] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	const [revenueYear, setRevenueYear] = useState(2023);
	const [overallYear, setOverallYear] = useState(2023);

	useEffect(() => {
		const newRevenueData = [];
		for (let i = 1; i <= 12; i++) {
			const bookings = BOOKING.filter(
				x =>
					parseInt(x.CheckOut.split('/')[1]) === i &&
					parseInt(x.CheckOut.split('/')[2]) === revenueYear,
			).map(x => x.Price);
			const bookingfee = bookings.reduce(
				(accumulator, currentValue) => accumulator + currentValue,
				0,
			);
			newRevenueData.push(bookingfee);
		}
		setRevenueData(newRevenueData);
	}, [revenueYear]);

	useEffect(() => {
		const newRevenueData = [];
		for (let i = 1; i <= 12; i++) {
			const bookings = BOOKING.filter(
				x =>
					parseInt(x.CheckOut.split('/')[1]) === i &&
					parseInt(x.CheckOut.split('/')[2]) === overallYear,
			).map(x => x.Price);
			const bookingfee = bookings.reduce(
				(accumulator, currentValue) => accumulator + currentValue,
				0,
			);
			newRevenueData.push(bookingfee);
		}
		setOverallRevenue(newRevenueData);

		const newFeeData = [];
		for (let i = 1; i <= 12; i++) {
			const findFee = FEE.find(x => x.Year === overallYear && x.Month === i)?.Details;
			var tempFee = 0;
			if (findFee) {
				tempFee = findFee
					.map(x => x.Price)
					.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
			}
			newFeeData.push(tempFee);
		}
		setOverallFee(newFeeData);
	}, [overallYear]);

	const pallete = [
		'#00FFFF',
		'#7FFFD4',
		'#0000FF',
		'#6495ED',
		'#00008B',
		'#00CED1',
		'#00BFFF',
		'#1E90FF',
		'#ADD8E6',
		'#E0FFFF',
		'#87CEFA',
		'#B0C4DE',
		'#0000CD',
	];

	return (
		<Spin
			spinning={isLoading}
			indicator={
				<div
					style={{
						transform: 'translate(-50%, -50%)',
						backgroundColor: '#909090',
						opacity: 0.8,
						width: '50%',
						height: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}>
					<img
						style={{ width: '50%' }}
						src={IMG_logo}
					/>
					<LoadingOutlined
						style={{ fontSize: 24 }}
						spin
					/>
				</div>
			}>
			<div className={styles.container}>
				<table className={styles.table}>
					<tbody>
						<tr>
							<td>
								<div className={styles.guestContainer}>
									<p className={styles.title}>Today guest</p>
									<div className={styles.guestDetails}>
										<div>
											<p>{todayCheckIn.length}</p>
											<p>Checkin</p>
											<div className={styles.scrollContainer}>
												{todayCheckIn.map(value => {
													return (
														<div
															style={{
																backgroundColor: '#CAF0F8',
																borderRadius: '10px',
																textAlign: 'center',
																margin: '5px 10px',
																height: '30px',
																fontSize: '16px',
																color: '#023E8A',
															}}
															className="checkInItem">
															{value}
														</div>
													);
												})}
											</div>
										</div>
										<div>
											<p style={{ color: '#FF5C00' }}>{todayCheckOut.length}</p>
											<p style={{ color: '#FF5C00' }}>Checkout</p>
											<div className={styles.scrollContainer}>
												{todayCheckOut.map(value => {
													return (
														<div
															style={{
																backgroundColor: '#FFD3BB',
																borderRadius: '10px',
																textAlign: 'center',
																margin: '5px 10px',
																height: '30px',
																fontSize: '16px',
																color: '#FF5C00',
															}}>
															{value}
														</div>
													);
												})}
											</div>
										</div>
										<div>
											<p style={{ color: '#0C7373' }}>{newBooking.length}</p>
											<p style={{ color: '#0C7373' }}>New Bookings</p>
											<div className={styles.scrollContainer}>
												{newBooking.map(value => {
													return (
														<div
															style={{
																backgroundColor: '#9AECEB',
																borderRadius: '10px',
																textAlign: 'center',
																margin: '5px 10px',
																height: '30px',
																fontSize: '16px',
																color: '#0C7373',
															}}
															className="checkInItem">
															{value}
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div style={{ width: '20vw' }}>
									<div className={styles.bookingContainer}>
										<p className={styles.title}>Bookings</p>
										<p
											style={{ padding: '0 15px', fontSize: '30px', fontWeight: 'normal' }}
											className={styles.title}>
											{bookingData.length}
										</p>
										<p
											style={{ padding: '0 15px', fontWeight: 'normal' }}
											className={styles.title}>
											this month
										</p>
										<div style={{ width: '20vw', height: '25vh' }}>
											<PieChart
												colors={pallete}
												series={[
													{
														innerRadius: 45,
														outerRadius: 70,
														data: bookingData,
														highlightScope: { faded: 'global', highlighted: 'item' },
														faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
													},
												]}
												slotProps={{
													legend: {
														direction: 'column',
														position: { vertical: 'top', horizontal: 'right' },
														padding: 0,
														labelStyle: {
															fontSize: 8,
															fill: 'blue',
														},
													},
												}}
											/>
										</div>
									</div>
									<div className={styles.revenueContainer}>
										<div
											style={{
												flex: 0.4,
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'center',
												alignItems: 'center',
											}}>
											<img src={IC_wallet} />
											<p style={{ fontSize: '16px', color: '#0077B6' }}>Revenue</p>
											<p style={{ fontSize: '14px', color: '#0077B6' }}>This month</p>
										</div>
										<div
											style={{
												flex: 0.6,
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'flex-end',
												alignItems: 'center',
											}}>
											<p style={{ fontSize: '40px', fontWeight: 'bold', color: '#0077B6' }}>
												${revenueThisMonth}
											</p>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div style={{ width: '20vw' }}>
									<div className={styles.statusContainer}>
										<p
											className={styles.title}
											style={{ color: '#0096C7' }}>
											Room Status
										</p>
										<p
											style={{
												padding: '0 15px',
												fontSize: '30px',
												fontWeight: 'normal',
												color: '#0096C7',
											}}
											className={styles.title}>
											{roomData.length}
										</p>
										<p
											style={{ padding: '0 15px', fontWeight: 'normal', color: '#0096C7' }}
											className={styles.title}>
											rooms
										</p>
										<div style={{ width: '20vw', height: '25vh' }}>
											<PieChart
												colors={pallete}
												series={[
													{
														innerRadius: 45,
														outerRadius: 70,
														data: roomData,
														highlightScope: { faded: 'global', highlighted: 'item' },
														faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
													},
												]}
												slotProps={{
													legend: {
														direction: 'column',
														position: { vertical: 'top', horizontal: 'right' },
														padding: 0,
														labelStyle: {
															fontSize: 8,
															fill: 'blue',
														},
													},
												}}
											/>
										</div>
									</div>
									<div className={styles.feeContainer}>
										<div
											style={{
												flex: 0.4,
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'center',
												alignItems: 'center',
											}}>
											<img src={IC_wallet2} />
											<p style={{ fontSize: '16px', color: '#FF973F' }}>Fee</p>
											<p style={{ fontSize: '14px', color: '#FF973F' }}>This month</p>
										</div>
										<div
											style={{
												flex: 0.6,
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'flex-end',
												alignItems: 'center',
											}}>
											<p style={{ fontSize: '40px', fontWeight: 'bold', color: '#FF973F' }}>
												${feeThisMonth}
											</p>
										</div>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div className={styles.revenueDiagram}>
									<div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
										<p className={styles.title}>Revenue dynamics</p>
										<Select
											type="text"
											bordered={false}
											name="revenueYear"
											value={revenueYear}
											style={{ width: '5vw', height: '50px' }}
											options={[{ value: 2023 }, { value: 2024 }]}
											onChange={e => setRevenueYear(e)}
										/>
									</div>
									<BarChart
										width={600}
										height={300}
										series={[
											{ data: revenueData, label: 'Revenue', id: 'revenue', color: '#00B4D8' },
										]}
										xAxis={[{ data: xLabels, scaleType: 'band' }]}
									/>
								</div>
							</td>
							<td colspan="2">
								<div className={styles.overallSales}>
									<div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
										<p className={styles.title}>Overall sales</p>
										<Select
											type="text"
											bordered={false}
											name="overallYear"
											value={overallYear}
											style={{ width: '5vw', height: '50px' }}
											options={[{ value: 2023 }, { value: 2024 }]}
											onChange={e => setOverallYear(e)}
										/>
									</div>
									<LineChart
										width={700}
										height={300}
										series={[
											{ data: overallRevenue, label: 'Revenue', color: '#00B4D8' },
											{ data: overallFee, label: 'Fee', color: '#FF973F' },
										]}
										xAxis={[{ scaleType: 'point', data: xLabels }]}
									/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Spin>
	);
};
