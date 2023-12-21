import React from "react";
import styles from "./home.module.scss";
import SideBar from "../components/sidebar";

export const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content} />
    </div>
  );
};
