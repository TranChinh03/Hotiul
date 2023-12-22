import React from "react";
import styles from "./sidebar.module.scss";
import { IMG_logo } from "../../assets/imgs";
import {useNavigate} from 'react-router-dom';
import { message } from 'antd'
import {
  IC_booking,
  IC_customer,
  IC_dashboard,
  IC_fee,
  IC_logout,
  IC_refund,
  IC_room,
  IC_service,
  IC_staff,
  IC_statistic,
} from "../../assets/icons";

const SideBar = ({handleChange}) => {
  const navigate = useNavigate();
  const tabs = [
    {
      tabname: "Home",
      tab: "home",
      icon: IC_dashboard,
      nav: '/'
    },
    {
      tabname: "Booking",
      tab: "booking",
      icon: IC_booking,
      nav: '/booking'
    },
    {
      tabname: "Room",
      tab: "room",
      icon: IC_room,
      nav: '/room'
    },
    {
      tabname: "Refund",
      tab: "refund",
      icon: IC_refund,
      nav: '/refund'
    },
    {
      tabname: "Customer",
      tab: "customer",
      icon: IC_customer,
      nav: '/customer'
    },
    {
      tabname: "Monthly Fee",
      tab: "monthlyFee",
      icon: IC_fee,
      nav: '/monthlyfee'
    },
    {
      tabname: "Services",
      tab: "services",
      icon: IC_service,
      nav: '/services'
    },
    {
      tabname: "Staff",
      tab: "staff",
      icon: IC_staff,
      nav: '/staff'
    },
    {
      tabname: "Statistic",
      tab: "statistic",
      icon: IC_statistic,
      nav: '/statistic'
    },
  ];

  const createList = tabs.map((map) => {
    return (
        <button
          className={styles.tabContainer}
          onClick={() => 
            {
              handleChange(map.tab)
              navigate(map.nav)
              message.success("Change")
            }}
          autoFocus={map.tabname === "Dashboard" ? true : false}>
          <div className={styles.contentTab}>
            <img className={styles.icon} src={map.icon} />
            <p className={styles.tabName}>{map.tabname}</p>
          </div>
        </button>
    );
  });
  return (
    <div className={styles.container}>
      <img src={IMG_logo} />
      {createList}
      <button className={styles.tabContainer}>
        <div className={styles.contentTab}>
              <img className={styles.icon} src={IC_logout} />
              <p className={styles.tabName}>Log Out</p>
        </div>
      </button>
    </div>
  );
};

export default SideBar;
