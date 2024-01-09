import React, { useState, useEffect } from 'react';
import styles from './fee.module.scss';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { addData, updateData } from '../../controller/addData.ts';
import { deleteData } from '../../controller/deleteData.ts';
import { createID } from '../../utils/appUtils.js';
import Modal from 'antd/es/modal/Modal';
import FeeCard from '../../components/feeInformation/feeCard.js';
import * as ReactDOM from 'react-dom';
import {
	IC_backArrow,
	IC_navDetail,
	IC_nextArrow,
	IC_sort,
	IC_closebutton,
	IC_line,
} from '../../assets/icons';
import { Button, Table } from 'antd';

const column = [
	{ label: 'ID', accessor: 'Id' },
	{ label: 'Bill', accessor: 'Name' },
	{ label: 'Date', accessor: 'Date' },
	{ label: 'Price', accessor: 'Price' },
	{ label: 'Detail', accessor: 'Detail' },
];

function FeeInformation(props) {
	//feecard
	const [selectedData, setSelectedData] = useState(null);

	//month
	const [selectedMonth, setSelectedMonth] = useState(Number);
	const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	const handleMonthChange = event => {
		const value = event.target.value;
		setSelectedMonth(value);
		setDataValue({
			...dataValue,
			month: value,
		});
	};

	//year
	const [selectedYear, setSelectedYear] = useState(Number);
	const years = [2023, 2024];

	const handleYearChange = event => {
		const value = event.target.value;
		setSelectedYear(value);
		setDataValue({
			...dataValue,
			year: value,
		});
	};

	//const dataValue = props.data;
	const [dataValue, setDataValue] = useState(props.data);
	const [tableData, setTableData] = useState([]);
	console.log('dv', dataValue);

	useEffect(() => {
		setDataValue(props.data);
		// Update tableData when dataValue changes
		if (!props.data) {
			setTableData([]);
			return;
		}
		if (props.data.detail) {
			const newTableData = props.data.detail.map(item => ({
				Id: item?.ID,
				Name: item?.Name,
				Date: item?.Date,
				Price: item?.Price,
			}));
			setTableData(newTableData);
		}
	}, [props.data]);

	useEffect(() => {
		UpdateTable();
	}, [dataValue]);

	function UpdateTable() {
		if (dataValue.detail) {
			const newTableData = dataValue.detail.map(item => ({
				Id: item?.ID,
				Name: item?.Name,
				Date: item?.Date,
				Price: item?.Price,
			}));
			setTableData(newTableData);
		} else setTableData([]);
	}
	const [edit, setEdit] = useState({
		fee: '',
		detail: [],
	});

	function handleChange(evt) {
		const value = evt.target.value;
		setDataValue({
			...dataValue,
			fee: value,
		});
		setEdit({ ...edit, fee: dataValue.fee });
	}
	function handleSave() {
		const feeID = createID({ prefix: 'F' });
		try {
			const newData = {
				ID: feeID,
				Name: edit.fee,
				Details: dataValue.detail,
				Month: Number(selectedMonth),
				Year: Number(selectedYear),
			};
			if (dataValue && dataValue.id) {
				updateData({
					data: {
						Name: dataValue.fee,
						Details: dataValue.detail,
						Month: dataValue.month,
						Year: dataValue.year,
					},
					table: 'FEE',
					id: dataValue.id,
				});
			} else {
				addData({ data: newData, table: 'FEE', id: feeID });
				setEdit({
					fee: '',
					detail: [],
				});
			}
			props.fetchData();
			props.closeEvt();
		} catch (err) {
			console.log('Error updating data', err);
			return;
		}
	}

	function handleSaveFeeCard(newData) {
		console.log('New data from FeeCard:', newData);
		handleClose();
		const result = [];
		var flag = false;
		if (dataValue.detail.length == 0) result.push(newData);
		else
			dataValue.detail.forEach(element => {
				element.Name = element.Name ?? '';
				element.Price = element.Price ?? '';
				element.Date = element.Date ?? '';
				if (element.ID != newData.ID) result.push(element);
				else {
					result.push(newData);
					flag = true;
				}
			});

		if (!flag) result.push(newData);
		setDataValue({ ...dataValue, detail: result });
		UpdateTable();
	}

	const handleDelete = () => {
		try {
			if (dataValue && dataValue.id) {
				deleteData({ id: dataValue.id, table: 'FEE' });
				props.fetchData();
				props.closeEvt();
			} else {
				console.error('Invalid data or data ID');
			}
		} catch (err) {
			console.log('Error delete data', err);
		}
	};

	const handleDeleteFeeCard = deletedId => {
		const updatedDetail = dataValue.detail.filter(item => item.ID !== deletedId);
		setDataValue({
			...dataValue,
			detail: updatedDetail,
		});
		UpdateTable();
	};

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState(
		dataValue ? Math.ceil(dataValue.detail?.length ?? 0 / 9) : 0,
	);
	function handleClose() {
		setSelectedData(null);
	}
	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.headerTitle}>Monthly Fee</div>
					<div className={styles.buttonContainer}>
						<button
							onClick={() => handleDelete()}
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

				<div
					className={styles.infooo}
					style={{ width: '100%' }}>
					<input
						className={styles.inputInfo}
						type="text"
						name="fee"
						value={dataValue.fee}
						onChange={e => handleChange(e)}
						required></input>
					<select
						//className={styles.inputInfo}
						style={{
							width: '100px',
							height: 'max-content',
							padding: '8px',
							paddingLeft: '20px',
							paddingRight: '20px',
							borderRadius: '10px',
							backgroundColor: '#caf0f859',
							justifyItems: 'center',
							textAlign: 'center',
							border: '1px',
							borderColor: 'var(--2, #023e8a)',
							fontSize: '18px',
							color: 'var(--2, #023e8a)',
							marginLeft: '20px',
						}}
						id="monthSelector"
						value={dataValue.month}
						onChange={e => handleMonthChange(e)}>
						<option value="">- M -</option>
						{months.map((month, index) => (
							<option
								style={{
									width: '100px',
									height: 'max-content',
									padding: '8px',
									paddingLeft: '20px',
									paddingRight: '20px',
									borderRadius: '10px',
									backgroundColor: '#caf0f859',
									//justifyItems: 'center',
									//textAlign: 'center',
									fontSize: '18px',
									color: 'var(--2, #023e8a)',
								}}
								key={index}
								value={month}>
								{month}
							</option>
						))}
					</select>
					<select
						//className={styles.inputInfo}
						style={{
							width: '100px',
							height: 'max-content',
							padding: '8px',
							paddingLeft: '20px',
							paddingRight: '20px',
							borderRadius: '10px',
							backgroundColor: '#caf0f859',
							justifyItems: 'center',
							textAlign: 'center',
							border: '1px',
							borderColor: 'var(--2, #023e8a)',
							fontSize: '18px',
							color: 'var(--2, #023e8a)',
							marginLeft: '20px',
						}}
						id="yearSelector"
						value={dataValue.year}
						onChange={e => handleYearChange(e)}>
						<option value="">- Y -</option>
						{years.map((year, index) => (
							<option
								style={{
									width: '100px',
									height: 'max-content',
									padding: '8px',
									paddingLeft: '20px',
									paddingRight: '20px',
									borderRadius: '10px',
									backgroundColor: '#caf0f859',
									//justifyItems: 'center',
									//textAlign: 'center',
									fontSize: '18px',
									color: 'var(--2, #023e8a)',
								}}
								key={index}
								value={year}>
								{year}
							</option>
						))}
					</select>
				</div>
				{/* )} */}
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
							{tableData.map((val, key) => {
								return (
									<tr
										className={styles.rowTbl}
										key={key}>
										{column.slice(0, -1).map(({ accessor }) => {
											const tData = val[accessor];
											return (
												<td
													className={styles.col}
													key={accessor}>
													{tData}
												</td>
											);
										})}
										<td
											className={styles.col}
											onClick={() => {
												setSelectedData(val);
											}}>
											View Full Detail{' '}
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
					{dataValue ? (
						<>
							<p className=" text-mainColor pt-5">
								Showing <strong> 1 - {totalPage} </strong> results of{' '}
								<strong>{dataValue.detail?.length ?? 0}</strong>
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
						onClick={() => {
							setSelectedData({ name: '', price: '' });
						}}
						text={'Add Fee'}
					/>
				</div>
			</div>
			{tableData.map((value, index) => {
				return (
					<Modal
						key={index}
						open={selectedData?.Id == value.Id}
						width={'90%'}
						closeIcon={false}
						footer={false}
						style={{ backgroundColor: 'transparent' }}>
						<FeeCard
							detailValue={selectedData}
							fetchData={props.fetchData}
							closeEvt={handleClose}
							handleSaveFeeCard={handleSaveFeeCard}
							handleDeleteFeeCard={handleDeleteFeeCard}></FeeCard>
					</Modal>
				);
			})}
			<Modal
				open={selectedData && selectedData.Id == undefined}
				width={'90%'}
				closeIcon={false}
				footer={false}
				style={{ backgroundColor: 'transparent' }}>
				<FeeCard
					detailValue={selectedData}
					fetchData={props.fetchData}
					closeEvt={handleClose}
					handleSaveFeeCard={handleSaveFeeCard}></FeeCard>
			</Modal>
		</>
	);
}

export default FeeInformation;
