import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import styles from "./home.module.scss";
import { StatisticBox } from "../../components/statisticBox/StatisticBox";
import { IC_CircleLogout, IC_CircleCheck, IC_CirclePerson, IC_CircleDollar } from "../../assets/icons"
import { Calendar, Spin, theme } from 'antd';
import BarChart from "../../components/charts/BarChart";
import {IMG_logo, IM_VN_Flag} from "../../assets/imgs"
import { LoadingOutlined } from '@ant-design/icons';

const onChange = (value) => {
  console.log(value.format('YYYY-MM-DD'));
};

Chart.register(CategoryScale);


export const Home = () => {

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
            
          </div>
          <div className={styles.weekly}>
            <BarChart/>
          </div>
          <div className={styles.calendar}>
            <div style={wrapperStyle}>
              <Calendar className={styles.customCalendar} fullscreen={false} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );

};
