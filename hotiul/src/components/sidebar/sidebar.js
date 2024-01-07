import React from "react";
import styles from "./sidebar.module.scss";
import { IMG_logo } from "../../assets/imgs";
import { useNavigate } from 'react-router-dom';
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
import { NAV_LINK } from "../../routes/components/NAV_LINK";

const SideBar = ({ handleChange }) => {
  const navigate = useNavigate();
  const tabs = [
    {
      tabname: "Home",
      tab: "home",
      icon: IC_dashboard,
      nav: NAV_LINK.DASHBOARD
    },
    {
      tabname: "Booking",
      tab: "booking",
      icon: IC_booking,
      nav: NAV_LINK.BOOKING
    },
    {
      tabname: "Room",
      tab: "room",
      icon: IC_room,
      nav: NAV_LINK.ROOM
    },
    {
      tabname: "Room Type",
      tab: "roomtype",
      icon: IC_room,
      nav: NAV_LINK.ROOMTYPE
    },
    {
      tabname: "Refund",
      tab: "refund",
      icon: IC_refund,
      nav: NAV_LINK.REFUND
    },
    {
      tabname: "Customer",
      tab: "customer",
      icon: IC_customer,
      nav: NAV_LINK.CUSTOMER
    },
    {
      tabname: "Monthly Fee",
      tab: "monthlyFee",
      icon: IC_fee,
      nav: NAV_LINK.MONTHLY_FEE
    },
    {
      tabname: "Services",
      tab: "services",
      icon: IC_service,
      nav: NAV_LINK.SERVICES
    },
    {
      tabname: "Staff",
      tab: "staff",
      icon: IC_staff,
      nav: NAV_LINK.STAFF
    },
    {
      tabname: "Statistic",
      tab: "statistic",
      icon: IC_statistic,
      nav: NAV_LINK.STATISTIC
    },
  ];

  const createList = tabs.map((map) => {
    return (
      <button
        className={styles.tabContainer}
        onClick={() => {
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
      <button onClick={() => {
        localStorage.removeItem("currentUser")
        navigate(NAV_LINK.LOGIN)
        window.location.reload()
      }} className={styles.tabContainer}>
        <div className={styles.contentTab}>
          <img className={styles.icon} src={IC_logout} />
          <p className={styles.tabName}>Log Out</p>
        </div>
      </button>
    </div>
  );
};

export default SideBar;
