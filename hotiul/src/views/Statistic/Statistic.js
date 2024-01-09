import React, {useState} from "react";
import styles from "./statistic.module.scss"
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { IC_wallet, IC_wallet2 } from "../../assets/icons";
import { Select } from "antd";

export const Statistic = () => {




  const xLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const [revenueData, setRevenueData] = useState([600, 800, 700, 350, 140, 770, 346, 746, 550, 980, 990, 1220])

  const [overallRevenue, setOverallRevenue] = useState([200, 300, 400, 300, 200, 250, 350, 770, 340, 210, 120, 100])
  const [overallFee, setOverallFee] = useState([600, 800, 700, 350, 140, 770, 346, 746, 550, 980, 990, 1220])

  const todayCheckIn = ["R101", "R102", "R103", "R104", "R101", "R102", "R103", "R104", "R101", "R102", "R103", "R104"]
  const todayCheckOut = ["R201", "R202", "R203"]
  const newBooking = ["R301", "R302", "R303", "R304"]

  const [revenueYear, setRevenueYear] = useState(2024)
  const [overallYear, setOverallYear] = useState(2024)

  const bookingData = [
    { label: 'Single Regular', value: 100 },
    { label: 'Single Vip ', value: 300 },
    { label: 'Couple Regular ', value: 100 },
    { label: 'Couple Vip ', value: 80 },
    { label: 'Small Family', value: 40 },
  ];
  
  const pallete = ["#00FFFF", "#7FFFD4", "#0000FF", "#6495ED", "#00008B", "#00CED1", "#00BFFF", "#1E90FF", "#ADD8E6", "#E0FFFF", "#87CEFA", "#B0C4DE", "#0000CD"]

  const roomData = [
    { label: 'Available', value: 100, color: "#49E17C" },
    { label: 'Confirm Checkin ', value: 300, color: "#90F56C" },
    { label: 'In Use', value: 100, color: "#FF9C9C" },
    { label: 'Confirm Checkout', value: 80, color: "#FF973F" },
    { label: 'Cleaning', value: 40, color: "#F8DD4E" },
    { label: 'Fixing', value: 40, color: "#88DDFF" },
  ]


  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <div className={styles.guestContainer}>
                <p className={styles.title}>Today guest</p>
                <div className={styles.guestDetails}>
                  <div>
                    <p>{todayCheckIn.length}</p>
                    <p>Checkin</p>
                    <div className={styles.scrollContainer}>
                      {todayCheckIn.map((value) => {
                        return (
                          <div style={{
                            backgroundColor: "#CAF0F8",
                            borderRadius: "10px",
                            textAlign: "center",
                            margin: "5px 10px",
                            height: "30px",
                            fontSize: "16px",
                            color: "#023E8A",
                          }} className="checkInItem">{value}</div>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <p style={{color: "#FF5C00"}}>{todayCheckOut.length}</p>
                    <p style={{color: "#FF5C00"}}>Checkout</p>
                    <div className={styles.scrollContainer}>
                      {todayCheckOut.map((value) => {
                        return (
                          <div style={{
                            backgroundColor: "#FFD3BB",
                            borderRadius: "10px",
                            textAlign: "center",
                            margin: "5px 10px",
                            height: "30px",
                            fontSize: "16px",
                            color: "#FF5C00",
                          }} className="checkInItem">{value}</div>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <p style={{color: "#0C7373"}}>{newBooking.length}</p>
                    <p style={{color: "#0C7373"}}>New Bookings</p>
                    <div className={styles.scrollContainer}>
                      {newBooking.map((value) => {
                        return (
                          <div style={{
                            backgroundColor: "#9AECEB",
                            borderRadius: "10px",
                            textAlign: "center",
                            margin: "5px 10px",
                            height: "30px",
                            fontSize: "16px",
                            color: "#0C7373",
                          }} className="checkInItem">{value}</div>
                        )
                      })}
                      </div>
                  </div>
                </div>
              </div>
            </td>
            <td >
              <div style={{width: "20vw"}}> 
              <div className={styles.bookingContainer}>
                <p className={styles.title}>Bookings</p>
                <p style={{padding: "0 15px", fontSize: "30px", fontWeight:"normal"}} className={styles.title}>65</p>
                <p style={{padding: "0 15px", fontWeight:"normal"}} className={styles.title}>this month</p>
                <div style={{width: "20vw", height: "25vh"}}>
                <PieChart
                colors={pallete}
                    series={[
                      {
                        innerRadius: 45,
                        outerRadius: 70,
                        data: bookingData,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      }
                    ]}
                    slotProps={{
                      legend: {       
                        direction: 'column',
                        position: { vertical: 'top', horizontal: 'right' },
                        padding: 0,
                        labelStyle: {
                          fontSize: 10,
                          fill: 'blue',
                        },
                    },
                    }}
                  />
                </div>
              </div>
              <div className={styles.revenueContainer}>
                <div style={{flex: 0.4, display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems: "center"}}>
                    <img src={IC_wallet}/>
                    <p style={{fontSize: "16px", color: "#0077B6"}}>Revenue</p>
                    <p style={{fontSize: "14px", color: "#0077B6"}}>This month</p>
                </div>
                <div style={{flex: 0.6, display: 'flex', flexDirection: 'column', justifyContent:"flex-end", alignItems: "center"}}>
                    <p style={{fontSize: "40px", fontWeight: "bold", color: "#0077B6"}}>$85000</p>
                </div>
              </div>
              </div>
            </td>
            <td>
              <div  style={{width: "20vw"}}>
              <div className={styles.statusContainer}>
              <p className={styles.title} style={{color: "#0096C7"}}>Room Status</p>
                <p style={{padding: "0 15px", fontSize: "30px", fontWeight:"normal", color: "#0096C7"}} className={styles.title}>50</p>
                <p style={{padding: "0 15px", fontWeight:"normal", color: "#0096C7"}} className={styles.title}>rooms</p>
                <div style={{width: "20vw", height: "25vh"}}>
                <PieChart
                colors={pallete}
                    series={[
                      {
                        innerRadius: 45,
                        outerRadius: 70,
                        data: roomData,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      }
                    ]}
                    slotProps={{
                      legend: {       
                        direction: 'column',
                        position: { vertical: 'top', horizontal: 'right' },
                        padding: 0,
                        labelStyle: {
                          fontSize: 10,
                          fill: 'blue',
                        },
                    },
                    }}
                  />
                  </div>
              </div>
              <div className={styles.feeContainer}>
                <div style={{flex: 0.4, display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems: "center"}}>
                      <img src={IC_wallet2}/>
                      <p style={{fontSize: "16px", color: "#FF973F"}}>Fee</p>
                      <p style={{fontSize: "14px", color: "#FF973F"}}>This month</p>
                  </div>
                  <div style={{flex: 0.6, display: 'flex', flexDirection: 'column', justifyContent:"flex-end", alignItems: "center"}}>
                      <p style={{fontSize: "40px", fontWeight: "bold", color: "#FF973F"}}>$85000</p>
                  </div>
              </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.revenueDiagram}>
                <div style={{width: "100%", display: "flex", justifyContent:"space-around"}}>
                  <p className={styles.title}>Revenue dynamics</p>
                  <Select
										type="text"
                    bordered={false}
										name="revenueYear"
										value={revenueYear}
										style={{ width: "5vw", height: "50px" }}
										options={[{ value: "2023" }, { value: "2024" }]}
										onChange={e => setRevenueYear(e)}
									/>
                </div>
                <BarChart
                  width={600}
                  height={300}
                  series={[
                    { data: revenueData, label: 'Revenue', id: 'revenue' },
                  ]}
                  xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
              </div>
            </td>
            <td colspan="2">
              <div className={styles.overallSales}>
              <div style={{width: "100%", display: "flex", justifyContent:"space-around"}}>
                  <p className={styles.title}>Overall sales</p>
                  <Select
										type="text"
                    bordered={false}
										name="overallYear"
										value={overallYear}
										style={{ width: "5vw", height: "50px"}}
										options={[{ value: "2023" }, { value: "2024" }]}
										onChange={e => setOverallYear(e)}
									/>
                </div>
                <LineChart
                  width={700}
                  height={300}
                  series={[
                    { data: overallRevenue, label: 'Revenue', color: "#00B4D8" },
                    { data: overallFee, label: 'Fee', color: "#FF973F" },
                  ]}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
