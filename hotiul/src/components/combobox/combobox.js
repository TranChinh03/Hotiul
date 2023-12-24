import React, { useState } from "react";
import { DownOutlined, FastForwardOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./combobox.module.scss";

const Combobox = (props) => {
  const items = props.items;
  const item = props.item;
  return (
    <div>
      <p className={styles.label}>{props.label}</p>
      <Space size="large" direction="vertical" className=" w-20">
        <Dropdown.Button
          size="large"
          className=" w-20"
          icon={<DownOutlined />}
          menu={{
            items,
          }}
        >
          {item}
        </Dropdown.Button>
      </Space>
    </div>
  );
};
export default Combobox;
