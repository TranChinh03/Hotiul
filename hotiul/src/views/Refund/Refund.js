import React, { useEffect, useState } from "react";
import styles from "../Refund/refund.module.scss";
import Search from "../../components/search/search";
import ButtonAdd from "../../components/buttonAdd/buttonAdd";
import {
  IC_backArrow,
  IC_navDetail,
  IC_nextArrow,
  IC_sort,
} from "../../assets/icons";
import Combobox from "../../components/combobox/combobox";
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input, Spin, message } from 'antd';
import { IMG_logo } from "../../assets/imgs";
import { getData } from "../../controller/getData.ts";
import DetailRefund from "./DetailRefund.js";

export const Refund = () => {
  const items = [
    {
      label: (
        <button className="w-20" onClick={() => setItem(" - - All - -")}>
          All
        </button>
      ),
      key: "1",
    },
    {
      label: <button onClick={() => setItem("Complete")}>Complete</button>,
      key: "2",
    },
    {
      label: <button onClick={() => setItem("Incomplete")}>Incomplete</button>,
      key: "3",
    },
  ];
  const [item, setItem] = useState(" -- All --");
  const column = [
    { label: "ID", accessor: "ID" },
    { label: "Customer Name", accessor: "CustomerName" },
    { label: "Money", accessor: "RefundMoney" },
    { label: "Status", accessor: "RefundStatus" },
    { label: "Date", accessor: "RefundDate" },
    { label: "Detail", accessor: "detail" },
  ];
  // const data = [
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 19,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 12,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 17,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 17,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 12,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 19,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 17,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 12,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 19,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 17,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 12,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 19,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  //   {
  //     id: "001",
  //     name: "Anom",
  //     money: 19,
  //     status: "20/11/2023",
  //     date: "25/11/2023",
  //   },
  // ];

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchData = async () => {
    await Promise.all([
      getData('/REFUND').then(data => {
        setData(data.map(item => {
          return {
            ID: item.ID,
            BookingID: item.BookingID,
            CustomerName: item.CustomerName,
            CustomerID: item.CustomerID,
            RefundMoney: item.RefundMoney,
            RefundStatus: item.RefundStatus,
            RefundDate: item.RefundDate,
            RefundReason: item.RefundReason,
            BankName: item.BankName,
            BankAccount: item.BankAccount
          }
        }))
        setListRefundFilter(data);
      })
    ])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setTotalPage(Math.ceil(data.length / 9))
  }, [data])
  const [refundStatusFilter, setRefundStatusFilter] = useState();
  const [refundSearchKeyword, setRefundSearchKeyword] = useState('');
  const [listRefundFilter, setListRefundFilter] = useState(data);
  const handleRefundSearchKeyword = (event) => {
    setRefundSearchKeyword(event.target.value);
    setListRefundFilter(data.filter((item) => item.ID.toLowerCase().includes(event.target.value.toLowerCase()) || item.CustomerName.toLowerCase().includes(event.target.value.toLowerCase()) || item.RefundMoney.toString().includes(event.target.value) || item.RefundStatus.toLowerCase().includes(event.target.value.toLowerCase()) || item.RefundDate.includes(event.target.value)));
  }
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [selectedRefund, setSelectedRefund] = useState();
  const [isDetailModalDisplay, setIsDetailModalDisplay] = useState(false);
  const handleViewDetail = (refund) => {
    setIsDetailModalDisplay(true);
    setSelectedRefund(refund);
  }
  const closeDetailModal = () => {
    setIsDetailModalDisplay(false);
  }
  return (
    <Spin spinning={isLoading} indicator={
      <div style={{ transform: 'translate(-50%, -50%)', backgroundColor: "#909090", opacity: 0.8, width: "50%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <img style={{ width: "50%" }} src={IMG_logo} />
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      </div>
    }>
      <DetailRefund
        selectedRefund={selectedRefund}
        isDisplay={isDetailModalDisplay}
        onCloseModal={closeDetailModal} />
      <div className={styles.maincontainer}>
        <div className={styles.con1}>
          <Search value={refundSearchKeyword}
            onChange={handleRefundSearchKeyword} />
          {/* <Combobox value onChange={handleRefundStatusFilterChange} label={"Refund Status"} items={items} item={item} /> */}
          {/* <ButtonAdd text={"Add Refund"} /> */}
        </div>
        <div className={styles.con2}>
          <table id="my-table" class={styles.tableData}>
            <thead>
              <tr className={styles.tbHeading}>
                {column.map((headding) => {
                  return (
                    <th>
                      <div className="pl-5 pb-3 pt-5 flex justify-center w-full ">
                        <p> {headding.label}</p>
                        <img className="px-2" src={IC_sort} />
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="h-96">
              {listRefundFilter.slice(pageIndex * 9 - 9, pageIndex * 9).map((val, key) => {
                return (
                  <tr className={styles.rowTbl} key={key}>
                    {column.slice(0, -1).map(({ accessor }) => {
                      const tData = val[accessor] ? val[accessor] : "——";
                      return <td className={styles.col}>{tData}</td>;
                    })}
                    <td className={styles.col}
                      onClick={() => handleViewDetail(val)}>
                      <p>View Full Detail </p>
                      <img className="pl-2" src={IC_navDetail} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.con1}>
          <p className=" text-mainColor pt-5">
            Showing <strong> 1 - {totalPage} </strong> results of{" "}
            <strong>{data.length}</strong>
          </p>
          <div className="flex justify-around">
            <button
              onClick={() => {
                if (pageIndex > 1) setPageIndex(pageIndex - 1);
              }}
              className={styles.btnnav}
            >
              <img src={IC_backArrow} />
            </button>
            <p className="text-mainColor px-3">
              Page <strong>{pageIndex}</strong>
            </p>
            <button
              onClick={() => {
                if (pageIndex < totalPage) setPageIndex(pageIndex + 1);
              }}
              className={styles.btnnav}
            >
              <img src={IC_nextArrow} />
            </button>
          </div>
        </div>
      </div>
    </Spin>
  );
};
