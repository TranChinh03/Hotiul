import React, { useState } from 'react';
import styles from './fee.module.scss';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { addData, updateData } from '../../controller/addData.ts';
import { createID } from '../../utils/appUtils.js';
import Modal from 'antd/es/modal/Modal';
import FeeCard from '../../components/feeInformation/feeCard.js';

import {
	IC_backArrow,
	IC_navDetail,
	IC_nextArrow,
	IC_sort,
	IC_closebutton,
	IC_line,
} from '../../assets/icons';
import { Table } from 'antd';

const column = [
	{ label: 'ID', accessor: 'Id' },
	{ label: 'Bill', accessor: 'Name' },
	{ label: 'Date', accessor: 'Date' },
	{ label: 'Price', accessor: 'Price' },
	{ label: 'Detail', accessor: 'Detail' },
];

function FeeInformation(props) {
	const dataValue = props.data;

	const [detailValue, setDetailValue] = useState([]);

	console.log('dv', dataValue);

	const [isOpenFee, setIsOpenFee] = useState(false);

	function handleOpenFeeCard() {
		setIsOpenFee(true);
	}

	const [edit, setEdit] = useState({
		fee: '',
		detail: [],
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setEdit({
			...edit,
			[evt.target.name]: value,
		});
	}

	function handleSave() {
		const feeID = createID({ prefix: 'F' });
		try {
			const newData = {
				ID: feeID,
				Name: edit.fee,
				Detail: edit.detail,
			};
			console.log(newData);
			addData({ data: newData, table: 'FEE', id: feeID });
			setEdit({
				fee: '',
				detail: [],
			});
			props.setOpen(false);
			props.fetchData();
		} catch (err) {
			console.log('Error updating data', err);
			return;
		}
	}

	function handleSaveFeeCard(newData) {
		console.log('New data from FeeCard:', newData);
		// setDataValue(...dataValue, newData);
		//console.log('ra cai qq gi z', dataValue);
	}

	function handleCancel() {
		props.setOpen(false);
		setEdit({
			fee: '',
			price: '',
			date: '',
		});
	}

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState(dataValue ? Math.ceil(dataValue.length / 9) : 0);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerTitle}>Monthly Fee</div>
					<div className={styles.buttonContainer}>
						<button
							className={styles.button}
							style={{ backgroundColor: '#FF9A9A' }}>
							Delete
						</button>
						<button
							onClick={() => handleSave()}
							className={styles.button}
							style={{ backgroundColor: '#66EB8B' }}>
							Save
						</button>
						<button>
							<img
								onClick={props.closeEvt}
								src={IC_closebutton}
								alt="CloseButton"></img>
						</button>
					</div>
				</div>
				{dataValue ? (
					<div
						style={{
							fontSize: '25px',
							marginTop: '10px',
							color: 'var(--2, #023e8a)',
							fontWeight: 'normal',
						}}>
						{dataValue.fee}
					</div>
				) : (
					<div
						className={styles.info}
						style={{}}>
						<input
							className={styles.inputInfo}
							type="text"
							name="fee"
							value={edit.fee}
							onChange={e => handleChange(e)}
							required></input>
					</div>
				)}

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
						<tbody className="h-52">
							{dataValue ? (
								dataValue.detail.slice(pageIndex * 9 - 9, pageIndex * 9).map((val, key) => {
									return (
										<tr
											className={styles.rowTbl}
											key={key}>
											{column.slice(0, -1).map(({ accessor }) => {
												const tData = val[accessor] ? val[accessor] : '——';

												return <td className={styles.col}>{tData}</td>;
											})}
											<td className={styles.colDetail}>
												<button onClick={() => {}}>
													<div
														className={styles.tableInfo}
														onClick={props.clickDetail}>
														View Detail{' '}
														<img
															style={{ justifySelf: 'center', alignSelf: 'center' }}
															className="pl-2"
															src={IC_navDetail}
														/>
													</div>
												</button>
											</td>
										</tr>
									);
								})
							) : (
								<div>Chua co cai qq gi het</div>
							)}
						</tbody>
					</table>
				</div>
				<div className={styles.con1}>
					{dataValue ? (
						<>
							<p className=" text-mainColor pt-5">
								Showing <strong> 1 - {totalPage} </strong> results of{' '}
								<strong>{dataValue.length}</strong>
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
									Page <strong>{pageIndex}</strong>
								</p>
								<button
									onClick={() => {
										if (pageIndex < totalPage) setPageIndex(pageIndex + 1);
									}}
									className={styles.btnnav}>
									<img src={IC_nextArrow} />
								</button>
							</div>
						</>
					) : (
						<></>
					)}
				</div>
				<div
					style={{ justifyContent: 'end', marginTop: '20px' }}
					className="flex w-full items-start justify-between px-5">
					<ButtonAdd
						onClick={() => handleOpenFeeCard()}
						text={'Add Fee'}
					/>
				</div>
			</div>
			<Modal
				open={isOpenFee}
				width={'90%'}
				closeIcon={false}
				footer={false}
				style={{ backgroundColor: 'transparent' }}>
				<FeeCard
					fetchData={props.fetchData}
					closeEvt={() => setIsOpenFee(false)}
					handleSaveFeeCard={handleSaveFeeCard}></FeeCard>
			</Modal>
		</>
	);
}

export default FeeInformation;
