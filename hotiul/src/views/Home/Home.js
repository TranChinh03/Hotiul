import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from './home.module.scss';
import { StatisticBox } from '../../components/statisticBox/StatisticBox';
import {
	IC_CircleLogout,
	IC_CircleCheck,
	IC_CirclePerson,
	IC_CircleDollar,
	IC_circleDoor,
} from '../../assets/icons';
import { BarChart } from '@mui/x-charts/BarChart';
import { Calendar, Spin, theme } from 'antd';
import { IMG_logo, IM_VN_Flag } from '../../assets/imgs';
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { getData } from "../../controller/getData.ts";
import { useTranslation } from 'react-i18next';



export const Home = () => {
  const xLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const [revenueYear, setRevenueYear] = useState(2024)
  const [revenueData, setRevenueData] = useState([0])
  const [guest, setGuest] = useState(0)
  const [checkin, setCheckin] = useState(0)
  const [checkout, setCheckout] = useState(0)
  const [revenueToday, setRevenueToday] = useState(0)
  const [BOOKING, setBOOKING] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const { t } = useTranslation();


  const onChange = (value) => {
    const date = value.format('DD/MM/YYYY')
    const year = value.format('YYYY')
    console.log(year);
    if (year !== revenueYear) {
      setRevenueYear(year)
      const newRevenueData = [];
        for (let i = 1; i <= 12; i++) {
          const bookings = BOOKING.filter(x=> parseInt(x.CheckOut.split("/")[1]) === i && x.CheckOut.split("/")[2] === year).map(x=>x.Price)
          const bookingfee = bookings.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          newRevenueData.push(bookingfee)
        }
        setRevenueData(newRevenueData);
    }
    const numIn = BOOKING.filter(x=>x.CheckIn === date).length
    setCheckin(numIn)
    const numOut= BOOKING.filter(x=>x.CheckOut === date).length
    setCheckout(numOut)
    const personList = BOOKING.filter(x=>x.CheckIn === date).map(x=>x.RoomType.NumPerson)
    setGuest(personList.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    const revenueList = BOOKING.filter(x=>x.CheckOut === date).map(x=>x.RoomType.Price)
    setRevenueToday(revenueList.reduce((accumulator, currentValue) => accumulator + currentValue, 0))

    const act = BOOKING.filter(x => x.CheckIn === date || x.CheckOut === date).map(x=> {
      return ({
        RoomID: x.RoomID,
        Type: x.CheckIn === date ? "Confirm Checkin" : "Confirm Checkout"
      })
    })
    setActivities(act)
  };

  const fetchData = async () => {
    await Promise.all([
      getData('/BOOKING').then(data => {
        setBOOKING(data)
        const newRevenueData = [];
        for (let i = 1; i <= 12; i++) {
          const bookings = data.filter(x=> parseInt(x.CheckOut.split("/")[1]) === i && x.CheckOut.split("/")[2] === localStorage.getItem("currentYear")).map(x=>x.Price)
          const bookingfee = bookings.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          newRevenueData.push(bookingfee)
        }
        setRevenueData(newRevenueData);

        const numIn = data.filter(x=>x.CheckIn === localStorage.getItem("currentDate")).length
        setCheckin(numIn)
        const numOut= data.filter(x=>x.CheckOut === localStorage.getItem("currentDate")).length
        setCheckout(numOut)
        const personList = data.filter(x=>x.CheckIn === localStorage.getItem("currentDate")).map(x=>x.RoomType.NumPerson)
        setGuest(personList.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
        const revenueList = data.filter(x=>x.CheckOut === localStorage.getItem("currentDate")).map(x=>x.RoomType.Price)
        setRevenueToday(revenueList.reduce((accumulator, currentValue) => accumulator + currentValue, 0))

        const act = data.filter(x => x.CheckIn === localStorage.getItem("currentDate") || x.CheckOut === localStorage.getItem("currentDate")).map(x=> {
          return ({
            RoomID: x.RoomID,
            Type: x.CheckIn === localStorage.getItem("currentDate") ? "Confirm Checkin" : "Confirm Checkout"
          })
        })
        setActivities(act)
      })
    ])
    setIsLoading(false)
  }

  const [activities, setActivities] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	});
  const { token } = theme.useToken();
  const wrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    margin: "10px"
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
			<div className={styles.container}>
				<div className={styles.todayStatistic}>
					<p className={styles.homeText}></p>
					<div className={styles.statisticContainer}>
						<StatisticBox
							icon={IC_CircleCheck}
							title={t('home.checkin')}
							figure={checkin}
							unit={t('home.booking')}
							backgroundColor="#0077B6"
						/>
						<StatisticBox
							icon={IC_CircleLogout}
							title={t('home.checkout')}
							figure={checkout}
							unit={t('home.booking')}
							backgroundColor="#FF9C65"
						/>
						<StatisticBox
							icon={IC_CirclePerson}
							title={t('home.guest')}
							figure={guest}
							unit={t('home.guest')}
							backgroundColor="#68D8D6"
						/>
						<StatisticBox
							icon={IC_CircleDollar}
							title={t('revenue')}
							figure={revenueToday}
							unit="Dollars"
							backgroundColor="#F8DD4E"
						/>
					</div>
				</div>

				<div
					style={{ height: '400px', marginTop: '20px' }}
					class="flex">
					<div className={styles.todayActivities}>
						<p className={styles.homeText}>{t('home.todayStatistic')}</p>
						<div className={styles.scrollContainer}>
							{activities.map(value => {
								return (
									<div
										style={{
											backgroundColor: value.Type === 'Confirm Checkin' ? '#00B4D8' : '#FF7C0F',
											borderRadius: '10px',
											textAlign: 'center',
											margin: '5px 10px',
											height: '60px',
											fontSize: '16px',
											color: '#023E8A',
											display: 'flex',
										}}>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												margin: '5px',
												flex: 0.2,
											}}>
											<img src={IC_circleDoor} />
										</div>
										<div
											style={{
												display: 'flex',
												flex: 0.8,
												flexDirection: 'column',
												alignItems: 'flex-start',
												justifyContent: 'center',
											}}>
											<p
												style={{ color: 'white' }}
												className={styles.title}>
												{value.RoomID}
											</p>
											<p
												style={{ color: 'white' }}
												className={styles.title}>
												{value.Type}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className={styles.weekly}>
						<BarChart
							width={500}
							height={400}
							series={[{ data: revenueData, label: t('revenue'), id: 'revenue', color: '#00B4D8' }]}
							xAxis={[{ data: xLabels, scaleType: 'band' }]}
						/>
					</div>
					<div className={styles.calendar}>
						<div style={wrapperStyle}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DemoContainer components={['DateCalendar', 'DateCalendar']}>
									<DemoItem>
										<DateCalendar onChange={value => onChange(value)} />
									</DemoItem>
								</DemoContainer>
							</LocalizationProvider>
						</div>
					</div>
				</div>
			</div>
		</Spin>
	);
};
