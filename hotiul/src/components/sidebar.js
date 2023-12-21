import React from "react";
import styles from "./sidebar.module.scss";
import { IMG_logo } from "../assets/imgs";
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
  const tabs = [
    {
      tabname: "Dashboard",
      icon: IC_dashboard,
    },
    {
      tabname: "Booking",
      icon: IC_booking,
    },
    {
      tabname: "Room",
      icon: IC_room,
    },
    {
      tabname: "Refund",
      icon: IC_refund,
    },
    {
      tabname: "Customer",
      icon: IC_customer,
    },
    {
      tabname: "Monthly Fee",
      icon: IC_fee,
    },
    {
      tabname: "Services",
      icon: IC_service,
    },
    {
      tabname: "Staff",
      icon: IC_staff,
    },
    {
      tabname: "Statistic",
      icon: IC_statistic,
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
        autoFocus={map.tabname === "Dashboard" ? true : false}
      >
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
