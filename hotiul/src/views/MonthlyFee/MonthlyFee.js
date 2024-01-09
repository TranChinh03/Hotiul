import React, { useEffect, useState } from 'react';
import styles from '../MonthlyFee/monthlyfee.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import { getData } from '../../controller/getData.ts';
import FeeInformation from '../../components/feeInformation/feeInformation.js';
import Modal from 'antd/es/modal/Modal';

export const MonthlyFee = () => {
	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: 'Monthly Fee', accessor: 'fee' },
		{ label: 'Total', accessor: 'total' },
		{ label: 'Detail', accessor: 'detail' },
	];

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const [data, setData] = useState([]);
	const [selectedData, setSelectedData] = useState(null);
	const [fullData, setFullData] = useState([]);

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isOpenFee, setIsOpenFee] = useState(false);

	const fetchData = async () => {
		await Promise.all([
			getData('/FEE').then(data => {
				setFullData(data);
				setData(
					data.map(item => {
						return {
							id: item.ID,
							fee: item.Name,
							total: item.Details.reduce((acc, curr) => acc + curr.Price, 0),
							detail: item.Details,
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
		setTotalPage(Math.ceil(data?.length / 9));
	}, [data]);

	return (
		<>
			<div className={styles.maincontainer}>
				<div className={styles.con1}>
					<Search />
					<ButtonAdd
						text={'Add Fee'}
						onClick={() => {
							setIsOpenModal(true);
							setSelectedData({ fee: '', total: '', detail: [] });
							console.log(selectedData);
						}}
					/>
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
													alt="ok"
												/>
											</div>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody className="h-52">
							{data.slice(pageIndex * 9 - 9, pageIndex * 9).map((val, key) => {
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
											onClick={() => {
												setIsOpenModal(true);
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
					<p className=" text-mainColor pt-5">
						Showing <strong> 1 - {totalPage} </strong> results of <strong>{data.length}</strong>
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
				</div>
			</div>
			<Modal
				open={isOpenModal}
				width={'90%'}
				closeIcon={false}
				footer={false}
				style={{ backgroundColor: 'transparent' }}>
				<FeeInformation
					data={selectedData}
					fetchData={() => fetchData()}
					//setOpen={() => setIsOpenModal(false)}
					closeEvt={() => {
						setSelectedData(null);
						setIsOpenModal(false);
					}}
					clickDetail={() => setIsOpenFee(true)}></FeeInformation>
			</Modal>
		</>
	);
};
