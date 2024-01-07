import React, { useState } from 'react';
import styles from './fee.module.scss';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';

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
	console.log('dv', dataValue);

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState(Math.ceil(dataValue.length / 9));

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
							onClick={() => {}}
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
					style={{
						fontSize: '25px',
						marginTop: '10px',
						color: 'var(--2, #023e8a)',
						fontWeight: 'normal',
					}}>
					{dataValue.fee}
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
						<tbody className="h-52">
							{dataValue.detail.slice(pageIndex * 9 - 9, pageIndex * 9).map((val, key) => {
								return (
									<tr
										className={styles.rowTbl}
										key={key}>
										{column.slice(0, -1).map(({ accessor }) => {
											const tData = val[accessor] ? val[accessor] : '——';
											console.log('ttt', tData);
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
							})}
						</tbody>
					</table>
				</div>
				<div className={styles.con1}>
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
				</div>
				<div
					style={{ justifyContent: 'end', marginTop: '20px' }}
					className="flex w-full items-start justify-between px-5">
					<ButtonAdd text={'Add Fee'} />
				</div>
			</div>
		</>
	);
}

export default FeeInformation;
