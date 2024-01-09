import React, { useEffect, useState } from 'react';
import styles from './roomtype.module.scss';
import Search from '../../components/search/search';
import { IC_add, IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import { Spin } from 'antd';
import { IMG_logo } from '../../assets/imgs';
import { LoadingOutlined } from '@ant-design/icons';

import { getData } from '../../controller/getData.ts';
import AddRoomType from './AddRoomType.js';
import DetailRoomType from './DetailRoomType.js';
import { useTranslation } from 'react-i18next';

function RoomType(props) {
	const { t } = useTranslation();
	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: t('roomType.roomTypeName'), accessor: 'typename' },
		{ label: t('roomType.numberRoom'), accessor: 'numofroom' },
		{ label: t('roomType.numberPeople'), accessor: 'numperson' },
		{ label: t('roomType.detail'), accessor: 'detail' },
	];
	const [pageIndex, setPageIndex] = useState(1);
	const [row, setRow] = useState();
	const [totalPage, setTotalPage] = useState();

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchRoom();
	}, []);

	const [roomList, setRoomList] = useState([]);
	useEffect(() => {
		fetchData();
	}, [roomList]);
	useEffect(() => {
		setRow(data.length < 9 ? data.length : 9);
		setTotalPage(Math.ceil(data.length / row));
	}, [data, row]);
	const fetchRoom = async roomTypeId => {
		setRoomList(await getData('/ROOM'));
	};

	const fetchData = async () => {
		await Promise.all([
			getData('/ROOM_TYPE').then(data => {
				console.log(data);
				setData(
					data.map(item => {
						return {
							id: item.ID,
							typename: item.TypeName,
							numperson: item.NumPerson,
							price: item.Price,
							amenityList: item.Amenities,
							numofroom: roomList.filter(roomItem => roomItem.TypeID === item.ID).length,
						};
					}),
				);
			}),
		]);
		setIsLoading(false);
	};

	const [isAddModalDisplay, setIsAddModalDisplay] = useState(false);
	const displayAddModal = () => {
		setIsAddModalDisplay(true);
	};
	const closeAddModal = () => {
		setIsAddModalDisplay(false);
	};
	const [isDetailModalDisplay, setIsDetailModalDisplay] = useState(false);
	useEffect(() => {
		fetchData();
	}, [isAddModalDisplay, isDetailModalDisplay]);
	const [selectedRoomType, setSelectedRoomType] = useState();

	const displayDetailModal = () => {
		setIsDetailModalDisplay(true);
	};
	const closeDetailModal = () => {
		setIsDetailModalDisplay(false);
	};

	const handleViewDetail = data => {
		displayDetailModal();
		setSelectedRoomType(data);
		console.log(data);
	};
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
			<div className="relative">
				<AddRoomType
					isDisplay={isAddModalDisplay}
					onCloseModal={closeAddModal}
				/>
				<DetailRoomType
					selectedRoomType={selectedRoomType}
					isDisplay={isDetailModalDisplay}
					onCloseModal={closeDetailModal}
				/>
			</div>
			<div className={styles.maincontainer}>
				<div className={styles.con1}>
					<Search />
					<button
						className=""
						onClick={displayAddModal}>
						<div className="cursor-pointer px-5 bg-mainColor flex rounded-2xl items-center h-14">
							<img src={IC_add} />
							<div className="text-white font-bold text-base px-2 whitespace-nowrap">
								{t('button.addRoomType')}
							</div>
						</div>
					</button>
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
							{data.slice((pageIndex - 1) * row, pageIndex * row).map((val, key) => {
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
											onClick={() => handleViewDetail(val)}>
											<p>{t('roomType.viewDetail')}</p>
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
						{t('roomType.show')} <strong> 1 - {totalPage} </strong> {t('roomType.result')}{' '}
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
							{t('roomType.page')} <strong>{pageIndex}</strong>
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
}

export { RoomType };
