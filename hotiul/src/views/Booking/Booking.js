import React, { useEffect, useState } from 'react';
import styles from './booking.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import { useTranslation } from 'react-i18next';
import { getData } from '../../controller/getData.ts';
import { convertStringToDate } from '../../utils/appUtils';

export const Booking = () => {
	const { t } = useTranslation();
	// search
	const [keywords, setKeywords] = useState('');

	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: t('customer.customerName'), accessor: 'name' },
		{ label: t('roomType.room'), accessor: 'room' },
		{ label: t('room.checkin'), accessor: 'checkin' },
		{ label: t('room.checkout'), accessor: 'checkout' },
		{ label: t('roomType.detail'), accessor: 'detail' },
	];
	const data = [
		{
			id: '001',
			name: 'Anom',
			room: 19,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '002',
			name: 'Hello',
			room: 12,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Hi',
			room: 17,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Anom',
			room: 19,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '002',
			name: 'Hello',
			room: 12,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Hi',
			room: 17,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Anom',
			room: 19,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '002',
			name: 'Hello',
			room: 12,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Hi',
			room: 17,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Anom',
			room: 19,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '002',
			name: 'Hello',
			room: 12,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Hi',
			room: 17,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
		{
			id: '001',
			name: 'Hi',
			room: 17,
			checkin: '20/11/2023',
			checkout: '25/11/2023',
		},
	];
	useEffect(() => {
		fetchInUseBooking();
	}, [])
	const fetchInUseBooking = async () => {
		const listBooking = await getData('/BOOKING');
		const currentDate = new Date();
		const checkInUse = listBooking.filter((item) => convertStringToDate(item.CheckIn) < currentDate && convertStringToDate(item.CheckOut) > currentDate);
		const roomInUse = checkInUse.map((item) => (item.RoomID));
		console.log(roomInUse);
	}
	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState(Math.ceil(data.length / 9));
	return (
		<div className={styles.maincontainer}>
			<div className={styles.con1}>
				<Search onChange={e => setKeywords(e.target.value)} />{' '}
				<ButtonAdd text={t('button.addRefund')} />
			</div>
			<div className={styles.con2}>
				<table
					id="my-table"
					class={styles.tableData}>
					<thead>
						<tr className={styles.tbHeading}>
							{column.map(headding => {
								return (
									<th>
										<div className="pl-5 pb-3 pt-5 flex justify-center w-full ">
											<p> {headding.label}</p>
											<img
												alt=""
												className="px-2"
												src={IC_sort}
											/>
										</div>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody className="h-96">
						{data.slice(pageIndex * 9 - 9, pageIndex * 9).map((val, key) => {
							if (
								val.name.toLowerCase().includes(keywords.toLowerCase()) ||
								val.id.toLowerCase().includes(keywords.toLowerCase()) ||
								val.room.toString().includes(keywords)
							)
								return (
									<tr
										className={styles.rowTbl}
										key={key}>
										{column.slice(0, -1).map(({ accessor }) => {
											const tData = val[accessor] ? val[accessor] : '——';
											return <td className={styles.col}>{tData}</td>;
										})}
										<td className={styles.col}>
											<p>{t('booking.viewDetail')}</p>
											<img
												className="pl-2"
												src={IC_navDetail}
											/>
										</td>
									</tr>
								);
						})}
					</tbody>
				</table>
			</div>
			<div className={styles.con1}>
				<p className=" text-mainColor pt-5">
					{t('booking.show')} <strong> 1 - {totalPage} </strong> {t('booking.result')}{' '}
					<strong>{data.length}</strong>
				</p>
				<div className="flex justify-around">
					<button
						onClick={() => {
							if (pageIndex > 1) setPageIndex(pageIndex - 1);
						}}
						className={styles.btnnav}>
						<img src={IC_backArrow} />
					</button>
					<p className="text-mainColor px-3">
						{t('booking.page')} <strong>{pageIndex}</strong>
					</p>
					<button
						onClick={() => {
							if (pageIndex < totalPage) setPageIndex(pageIndex + 1);
						}}
						className={styles.btnnav}>
						<img src={IC_nextArrow} />
					</button>
				</div>
			</div>
		</div>
	);
};
