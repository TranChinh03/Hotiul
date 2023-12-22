import React from "react";
import styles from "./sidebar.module.scss";
import { IMG_logo } from "../assets/imgs";
import {useNavigate} from 'react-router-dom';
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
} from "../assets/icons";

const SideBar = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      tabname: "Dashboard",
      icon: IC_dashboard,
      nav: '/'
    },
    {
      tabname: "Booking",
      icon: IC_booking,
      nav: '/booking'
    },
    {
      tabname: "Room",
      icon: IC_room,
      nav: '/room'
    },
    {
      tabname: "Refund",
      icon: IC_refund,
      nav: '/refund'
    },
    {
      tabname: "Customer",
      icon: IC_customer,
      nav: '/customer'
    },
    {
      tabname: "Monthly Fee",
      icon: IC_fee,
      nav: '/monthlyfee'
    },
    {
      tabname: "Services",
      icon: IC_service,
      nav: '/services'
    },
    {
      tabname: "Staff",
      icon: IC_staff,
      nav: '/staff'
    },
    {
      tabname: "Statistic",
      icon: IC_statistic,
      nav: '/statistic'
    },
    {
      tabname: "Logout",
      icon: IC_logout,
    },
  ];

  const createList = tabs.map((map) => {
    return (
        <button
          className={styles.tabContainer}
          onClick={() => navigate(map.nav)}
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
    </div>
  );
};

export default SideBar;
