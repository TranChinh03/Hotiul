import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import styles from "./home.module.scss";
import { StatisticBox } from "../../components/statisticBox/StatisticBox";
import { IC_CircleLogout, IC_CircleCheck, IC_CirclePerson, IC_CircleDollar, IC_circleDoor } from "../../assets/icons"
import { BarChart } from '@mui/x-charts/BarChart';
import { Calendar, Spin, theme } from 'antd';
import {IMG_logo, IM_VN_Flag} from "../../assets/imgs"
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const onChange = (value) => {
  console.log(value.format('DD-MM-YYYY'));
};



export const Home = () => {
  const xLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const [revenueData, setRevenueData] = useState([600, 800, 700, 350, 140, 770, 346, 746, 550, 980, 990, 1220])

  const [activities, setActivities] = useState([
    {
      RoomID: "R0101",
      Type: "Confirm Checkin"
    },
    {
      RoomID: "R0102",
      Type: "Confirm Checkout"
    },
    {
      RoomID: "R0102",
      Type: "Confirm Checkout"
    },
    {
      RoomID: "R0102",
      Type: "Confirm Checkout"
    },
    {
      RoomID: "R0101",
      Type: "Confirm Checkin"
    },
    {
      RoomID: "R0101",
      Type: "Confirm Checkin"
    },
    {
      RoomID: "R0101",
      Type: "Confirm Checkin"
    },
  ])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  const [isLoading, setIsLoading] = useState(true);

  const { token } = theme.useToken();
  const wrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    margin: "10px"
  };
  return (
    <Spin spinning={isLoading} indicator={
    <div style={{transform: 'translate(-50%, -50%)', backgroundColor:"#909090", opacity:0.8, width: "50%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <img style={{width: "50%"}} src={IMG_logo}/>
      <LoadingOutlined style={{ fontSize: 24 }} spin />
    </div>
  }>
      <div className={styles.container}>
        <div className={styles.todayStatistic}>
          <p className={styles.homeText}>Today's statistics</p>
          <div className={styles.statisticContainer}>
            <StatisticBox icon={ IC_CircleCheck } title="Check-in" figure="10" unit="Bookings" backgroundColor="#0077B6"/>
            <StatisticBox icon={ IC_CircleLogout } title="Check-out" figure="10" unit="Bookings" backgroundColor="#FF9C65"/>
            <StatisticBox icon={ IC_CirclePerson } title="Guest" figure="55" unit="Guests" backgroundColor="#68D8D6"/>
            <StatisticBox icon={ IC_CircleDollar } title="Revenue" figure="2000" unit="Dollars" backgroundColor="#F8DD4E"/>
          </div>
        </div>

        <div style={{height: "400px", marginTop: "20px"}} class="flex">
          <div className={styles.todayActivities}>
            <p className={styles.homeText}>Today's activities</p>
            <div className={styles.scrollContainer}>
                      {activities.map((value) => {
                        return (
                          <div style={{
                            backgroundColor: value.Type === "Confirm Checkin" ? "#00B4D8" : "#FF7C0F",
                            borderRadius: "10px",
                            textAlign: "center",
                            margin: "5px 10px",
                            height: "60px",
                            fontSize: "16px",
                            color: "#023E8A",
                            display: "flex"
                          }}>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "5px", flex: 0.2}}>
                              <img src={IC_circleDoor}/>
                            </div>
                            <div style={{display: "flex", flex: 0.8, flexDirection: "column", alignItems: "flex-start", justifyContent:"center"}}>
                              <p style={{color: "white"}} className={styles.title}>{value.RoomID}</p>
                              <p style={{color: "white"}} className={styles.title}>{value.Type}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
          </div>
          <div className={styles.weekly}>
            <BarChart
                    width={500}
                    height={400}
                    series={[
                      { data: revenueData, label: 'Revenue', id: 'revenue', color: '#00B4D8' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                  />
          </div>
          <div className={styles.calendar}>
            <div style={wrapperStyle}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem>
                  <DateCalendar onChange={(value) => onChange(value)}/>
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
