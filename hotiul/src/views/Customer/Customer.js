import React, { useEffect, useState } from 'react';
import styles from '../Booking/booking.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import Combobox from '../../components/combobox/combobox';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Select, Spin, message } from 'antd';
import { IMG_logo } from '../../assets/imgs';
import { getData } from '../../controller/getData.ts';
import ProfileCustomer from '../../components/profileCustomer/ProfileCustomer.js';
import { useTranslation } from 'react-i18next';

export const Customer = () => {
	//search and filter
	const { t } = useTranslation();
	const [keywords, setKeywords] = useState('');
	const [gender, setGender] = useState(t('customer.all'));

	//show add customer
	const [isShowed, setIsShowed] = useState(false);

	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const items = [
		{
			label: (
				<button
					className="w-20"
					onClick={() => setItem(' - - All - -')}>
					{t('customer.all')}
				</button>
			),
			key: '1',
		},
		{
			label: (
				<button
					className="w-20"
					onClick={() => setItem(t('customer.male'))}>
					{t('customer.male')}
				</button>
			),
			key: '2',
		},
		{
			label: (
				<button
					className="w-20"
					onClick={() => setItem(t('customer.female'))}>
					{t('customer.female')}
				</button>
			),
			key: '3',
		},
	];
	const [item, setItem] = useState(' -- All --');
	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: t('customer.customerName'), accessor: 'name' },
		{ label: t('customer.phoneNumber'), accessor: 'phone' },
		{ label: t('customer.gender'), accessor: 'gender' },
		{ label: t('customer.detail'), accessor: 'detail' },
	];
	const dataTest = [
		{
			id: '001',
			name: 'Anom',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '002',
			name: 'Annie',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '003',
			name: 'Khun',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '004',
			name: 'John',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '005',
			name: 'Christina',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '006',
			name: 'Liming',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '007',
			name: 'Heart',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '008',
			name: 'Tin',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '009',
			name: 'Gun',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '001',
			name: 'Anom',
			phone: '01234567',
			gender: 'Male',
		},
		{
			id: '001',
			name: 'Anom',
			phone: '01234567',
			gender: 'Male',
		},
	];

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState();

	const [isLoading, setIsLoading] = useState(false);
	const [fullData, setFullData] = useState([]);
	const [data, setData] = useState([]);

	const fetchData = async () => {
		await Promise.all([
			getData('/CUSTOMER').then(customer => {
				setFullData(customer);
				setData(
					customer.map(item => {
						return {
							id: item.ID,
							name: item.Name,
							phone: item.Phone,
							gender: item.Gender,
						};
					}),
				);
			}),
		]);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	});

	useEffect(() => {
		setTotalPage(Math.ceil(data.length / 9));
	}, [data]);

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
					<Search onChange={e => setKeywords(e.target.value)} />
					{/* <Combobox
            label={"Gender"}
            items={items}
            item={item}
            onChange={(e) => setGender(e.target.value)}
          /> */}
					<Select
						type="text"
						name="gender"
						value={gender}
						style={{
							width: '20vw',
							height: '40px',
							marginLeft: '10px',
						}}
						options={[
							{ value: t('customer.all') },
							{ value: t('customer.male') },
							{ value: t('customer.female') },
						]}
						onChange={e => setGender(e)}
					/>
					<ButtonAdd
						onClick={() => setIsShowed(true)}
						text={t('button.addCustomer')}
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
									(val.name.toLowerCase().includes(keywords.toLowerCase()) ||
										val.id.toLowerCase().includes(keywords.toLowerCase()) ||
										val.phone.includes(keywords)) &&
									(val.gender.includes(gender) || gender === t('customer.all'))
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
												onClick={() => {
													setSelectedCustomer(fullData.find(x => x.ID === val.id));
													setIsShowed(true);
												}}
												className={styles.col}>
												<p>{t('customer.viewDetail')}</p>
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
						{t('customer.show')} <strong> 1 - {totalPage} </strong> {t('customer.result')}{' '}
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
							{t('customer.page')} <strong>{pageIndex}</strong>
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
			{/* {isShowed ? (
        <div className={styles.dialog}>
          <div className={styles.condialog}>
            <ProfileCustomer
              data={selectedCustomer}
              onClose={() => {
                setIsShowed(false);
                setSelectedCustomer(null);
              }}
            />
          </div>
        </div>
      ) : null} */}
			<Modal
				centered={true}
				width="75%"
				closeIcon={null}
				open={isShowed}
				footer={null}
				onCancel={() => setIsShowed(false)}>
				<ProfileCustomer
					data={selectedCustomer}
					onClose={() => {
						setIsShowed(false);
						setSelectedCustomer(null);
					}}
				/>
			</Modal>
		</Spin>
	);
};
