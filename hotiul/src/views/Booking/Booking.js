import React, { useEffect, useState } from 'react';
import styles from './booking.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import { useTranslation } from 'react-i18next';
import { getData } from '../../controller/getData.ts';
import { convertStringToDate } from '../../utils/appUtils';
import { BookingInfo } from './bookingInformation.js';
import { Modal } from 'antd';

export const Booking = () => {
	const { t } = useTranslation();
	// search
	const [keywords, setKeywords] = useState('');
	const [data, setData] = useState([]);
	const [selectedBooking, setSelectedBooking] = useState(null);
	const column = [
		{ label: 'ID', accessor: 'Id' },
		{ label: t('customer.customerName'), accessor: 'Name' },
		{ label: t('roomType.room'), accessor: 'Room' },
		{ label: t('room.checkin'), accessor: 'Checkin' },
		{ label: t('room.checkout'), accessor: 'Checkout' },
		{ label: t('roomType.detail'), accessor: 'Detail' },
	];

	useEffect(() => {
		fetchBooking();
	}, []);
	const fetchBooking = async () => {
		getData('/BOOKING').then(listBooking => {
			console.log(listBooking);
			setData(
				listBooking.map((value, index) => {
					return {
						Id: value.ID,
						Name: value.CustomerID,
						Room: value.RoomID,
						Checkin: value.RoomType.Price,
						Checkout: value.Price,
						...value,
					};
				}),
			);
		});
	};
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
								val.name &&
								(val.name.toLowerCase().includes(keywords.toLowerCase()) ||
									val.id.toLowerCase().includes(keywords.toLowerCase()) ||
									val.room.toString().includes(keywords))
							)
								return (
									<tr
										className={styles.rowTbl}
										key={key}>
										{column.slice(0, -1).map(({ accessor }) => {
											const tData = val[accessor] ? val[accessor] : '——';
											return <td className={styles.col}>{tData}</td>;
										})}
										<td
											className={styles.col}
											onClick={() => setSelectedBooking(val)}>
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
			<Modal open={selectedBooking}>
				<BookingInfo booking={selectedBooking} />
			</Modal>
		</div>
	);
};
