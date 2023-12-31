import React, { useEffect, useState } from 'react';
import styles from '../Booking/booking.module.scss';
import Search from '../../components/search/search';
import ButtonAdd from '../../components/buttonAdd/buttonAdd';
import { IC_backArrow, IC_navDetail, IC_nextArrow, IC_sort } from '../../assets/icons';
import Combobox from '../../components/combobox/combobox';
import { getData } from '../../controller/getData.ts';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { IMG_logo } from '../../assets/imgs';
import Modal from 'antd/es/modal/Modal';
import AddStaff from './component/addStaff.js';
import ProfileStaff from '../../components/profileStaff/ProfileStaff.js';
import { useTranslation } from 'react-i18next';

export const Staff = () => {
	const { t } = useTranslation();
  const [keywords, setKeywords] = useState('');
  const items = [
    {
      label: (
        <button className="w-20" onClick={() => {
          setItem(" - - All - -")
          setData(fullData.filter(x=>x.Role !== "Admin").map(item => {
            return {
              id: item.ID,
              name: item.Name,
              phone: item.Phone,
              gender: item.Gender
            }
          }))
        }}>
          All
        </button>
      ),
      key: "1",
    },
    {
      label: (
        <button className="w-20" onClick={() => {
          setItem("Male")
          setData(fullData.filter(x=>x.Role !== "Admin" && x.Gender === "Male").map(item => {
            return {
              id: item.ID,
              name: item.Name,
              phone: item.Phone,
              gender: item.Gender
            }
          }))
        }
          }>
          Male
        </button>
      ),
      key: "2",
    },
    {
      label: (
        <button className="w-20" onClick={() => {
          setItem("Female")
          setData(fullData.filter(x=>x.Role !== "Admin" && x.Gender === "Female").map(item => {
            return {
              id: item.ID,
              name: item.Name,
              phone: item.Phone,
              gender: item.Gender
            }
          }))
          }}>
          Female
        </button>
      ),
      key: "3",
    },
  ];
  const [item, setItem] = useState(" -- All --");
	const column = [
		{ label: 'ID', accessor: 'id' },
		{ label: t('staff.staffName'), accessor: 'name' },
		{ label: t('staff.phoneNumber'), accessor: 'phone' },
		{ label: t('staff.gender'), accessor: 'gender' },
		{ label: t('staff.detail'), accessor: 'detail' },
  ];

	const [isLoading, setIsLoading] = useState(true);
	const [fullData, setFullData] = useState([]);
	const [data, setData] = useState([]);
	const [selectedData, setSelectedData] = useState(null);

	const fetchData = async () => {
		await Promise.all([
			getData('/STAFF').then(data => {
				setFullData(data);
				setData(
					data
						.filter(x => x.Role !== 'Admin')
						.map(item => {
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
	}, []);

	useEffect(() => {
		setTotalPage(Math.ceil(data.length / 9));
	}, [data]);

  const onSearch = (e) => {
    setKeywords(e)
    setData(fullData.filter(x=>x.Role !== "Admin" && ( x.Name.toLowerCase().includes(e.toLowerCase()) || (x.Phone.includes(e)))).map(item => {
      return {
        id: item.ID,
        name: item.Name,
        phone: item.Phone,
        gender: item.Gender
      }
    }))
  }

  useEffect(() => {
    fetchData()
  }, [])

	const [isAddOpen, setIsAddOpen] = useState(false);
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const [pageIndex, setPageIndex] = useState(1);
	const [totalPage, setTotalPage] = useState(Math.ceil(data.length / 9));
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
						label={'Gender'}
						items={items}
						item={item}
					/>
					<ButtonAdd
						onClick={() => setIsAddOpen(true)}
						text={t('button.addStaff')}
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
												setIsDetailOpen(true);
												setSelectedData(fullData.find(x => x.ID === val.id));
											}}
											className={styles.col}>
											<p>{t('staff.viewDetail')}</p>
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
						{t('staff.show')} <strong> 1 - {totalPage} </strong> {t('staff.result')}{' '}
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
							{t('staff.page')} <strong>{pageIndex}</strong>
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
      
      <Modal centered={true} width="70%" closeIcon={null} open={isAddOpen} footer={null} onCancel={() => setIsAddOpen(false)}>
        <AddStaff setIsLoading={() => setIsLoading()} fullData={fullData} open={isAddOpen} setOpen={setIsAddOpen} fetchData={() => fetchData()}/>
      </Modal>
      <Modal centered={true} width="70%" closeIcon={null} open={isDetailOpen} footer={null} onCancel={() => setIsDetailOpen(false)}>
        <ProfileStaff setIsLoading={() => setIsLoading()} fullData={fullData} open={isDetailOpen} setOpen={setIsDetailOpen} data={selectedData} fetchData={() => fetchData()}/>
      </Modal>

    </Spin>
  );
};
