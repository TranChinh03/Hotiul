import React, { useEffect, useState } from 'react';
import styles from '../Booking/booking.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import Combobox from '../../components/combobox/combobox';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input, Spin, message } from 'antd';
import { IMG_logo } from '../../assets/imgs';
import { getData } from '../../controller/getData.ts';
import { useTranslation } from 'react-i18next';

export const Refund = () => {
	const { t } = useTranslation();
	const items = [
		{
			label: (
				<button
					className="w-20"
					onClick={() => setItem(t('refund.all'))}>
					{t('refund.all')}
				</button>
			),
			key: '1',
		},
		{
			label: <button onClick={() => setItem(t('refund.complete'))}>{t('refund.complete')}</button>,
			key: '2',
		},
		{
			label: (
				<button onClick={() => setItem(t('refund.incomplete'))}>{t('refund.incomplete')}</button>
			),
			key: '3',
		},
	];
	const [item, setItem] = useState('--' + t('refund.all') + '');
	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: t('refund.customerName'), accessor: 'name' },
		{ label: t('refund.money'), accessor: 'money' },
		{ label: t('refund.status'), accessor: 'status' },
		{ label: t('refund.date'), accessor: 'date' },
		{ label: t('refund.detail'), accessor: 'detail' },
	];
	// const data = [
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 19,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 12,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 17,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 17,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 12,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 19,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 17,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 12,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 19,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 17,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 12,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 19,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	//   {
	//     id: "001",
	//     name: "Anom",
	//     money: 19,
	//     status: "20/11/2023",
	//     date: "25/11/2023",
	//   },
	// ];

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	const fetchData = async () => {
		await Promise.all([
			getData('/REFUND').then(data => {
				setData(
					data.map(item => {
						return {
							id: item.ID,
							name: item.Name,
							money: item.Money,
							status: item.RefundStatus,
							date: item.date,
						};
					}),
				);
			}),
		]);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setTotalPage(Math.ceil(data.length / 9));
	}, [data]);

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState();
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
			<div className={styles.maincontainer}>
				<div className={styles.con1}>
					<Search />
					<Combobox
						label={t('refund.refundStatus')}
						items={items}
						item={item}
					/>
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
								return (
									<tr
										className={styles.rowTbl}
										key={key}>
										{column.slice(0, -1).map(({ accessor }) => {
											const tData = val[accessor] ? val[accessor] : '——';
											return <td className={styles.col}>{tData}</td>;
										})}
										<td className={styles.col}>
											<p>{t('refund.viewDetail')}</p>
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
						{t('refund.show')} <strong> 1 - {totalPage} </strong> {t('refund.result')}{' '}
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
							{t('refund.page')} <strong>{pageIndex}</strong>
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
		</Spin>
	);
};
