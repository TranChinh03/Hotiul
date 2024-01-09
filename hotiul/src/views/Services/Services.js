import React, { useEffect, useState } from 'react';
import styles from '../Services/service.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input, Spin, message } from 'antd';
import { IMG_logo } from '../../assets/imgs';
import { addData, updateData } from '../../controller/addData.ts';
import { deleteData } from '../../controller/deleteData.ts';
import { createID } from '../../utils/appUtils.js';
import Modal from 'antd/es/modal/Modal';
import AddService from '../../components/service/AddService.js';

import { IC_backArrow, IC_delete, IC_edit, IC_nextArrow, IC_sort } from '../../assets/icons';
import Combobox from '../../components/combobox/combobox';
import { getData } from '../../controller/getData.ts';

import { useTranslation } from 'react-i18next';

export const Services = () => {
	const { t } = useTranslation();
	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: t('service.service'), accessor: 'service' },
		{ label: t('service.price'), accessor: 'price' },
		{ label: t('service.available'), accessor: 'available' },
		{ label: t('service.detail'), accessor: 'detail' },
	];

	const [selectedData, setSelectedData] = useState(null);

	const [pageIndex, setPageIndex] = useState(1);
	const [row, setRow] = useState();
	const [totalPage, setTotalPage] = useState();

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	const [isOpen, setIsOpen] = useState(false);

	const fetchData = async () => {
		await Promise.all([
			getData('/SERVICE').then(data => {
				console.log(data);
				setData(
					data.map(item => {
						return {
							id: item.ID,
							service: item.Service,
							price: item.Price,
							available: item.Available,
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
		setRow(data.length < 9 ? data.length : 9);
		setTotalPage(Math.ceil(data.length / row));
	}, [data, row]);

	function handleClose() {
		setIsOpen(false);
		setSelectedData(null);
	}

	async function handleDelete(value) {
		try {
			await deleteData({ id: value.id, table: 'SERVICE' });
			// Update the state after successful deletion
			const newData = data.filter(item => item.id !== value.id);
			setData(newData);
			message.success('Record deleted successfully.');
		} catch (err) {
			console.log('Error deleting data', err);
			message.error('Error deleting record.');
		}
	}

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
					<ButtonAdd
						onClick={() => {
							setSelectedData({ service: '', price: '', available: '' });
							setIsOpen(true);
						}}
						text={'Add Service'}
					/>
				</div>
				<div className={styles.con2}>
					<table
						id="my-table"
						class={styles.tableData}>
						<thead>
							<tr className={styles.tbHeading}>
								{column.slice(0, -1).map(headding => {
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
						<tbody className="h-52">
							{data.slice((pageIndex - 1) * row, pageIndex * row).map((val, key) => {
								return (
									<tr
										className={styles.rowTbl}
										key={key}>
										{column.slice(0, -1).map(({ accessor }) => {
											const tData = val[accessor] ? val[accessor] : '——';
											return <td className={styles.col}>{tData}</td>;
										})}
										<td className={styles.col}>
											<img
												onClick={() => {
													setIsOpen(true);
													setSelectedData(val);
													console.log('gi day', val);
												}}
												className="pr-5"
												src={IC_edit}
												alt="update"
											/>
											<img
												onClick={() => {
													handleDelete(val);
												}}
												className="pl-2"
												src={IC_delete}
												alt="delete"
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
						{t('service.show')} <strong> 1 - {totalPage} </strong> {t('service.result')}{' '}
						<strong>{data.length}</strong>
					</p>
					<div className="flex justify-around">
						<button
							onClick={() => {
								if (pageIndex > 1) setPageIndex(pageIndex - 1);
							}}
							className={styles.btnnav}>
							<img
								src={IC_backArrow}
								alt="a"
							/>
						</button>
						<p className="text-mainColor px-3">
							{t('service.page')} <strong>{pageIndex}</strong>
						</p>
						<button
							onClick={() => {
								if (pageIndex < totalPage) setPageIndex(pageIndex + 1);
							}}
							className={styles.btnnav}>
							<img
								src={IC_nextArrow}
								alt="a"
							/>
						</button>
					</div>
				</div>
			</div>
			<Modal
				open={isOpen}
				width={'90%'}
				closeIcon={false}
				footer={false}
				style={{ backgroundColor: 'transparent' }}>
				<AddService
					detailValue={selectedData}
					fetchData={fetchData}
					closeEvt={handleClose}></AddService>
			</Modal>
		</Spin>
	);
};
