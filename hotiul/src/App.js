import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideBar from "./components/sidebar";
import { Home } from "./views/Home/Home";
import { Room } from "./views/Room/Room";
import { Booking } from "./views/Booking/Booking";
import { Refund } from "./views/Refund/Refund";
import { Staff } from "./views/Staff/Staff";
import { Statistic } from "./views/Statistic/Statistic";
import { Customer } from "./views/Customer/Customer";
import { MonthlyFee } from "./views/MonthlyFee/MonthlyFee";
import { Services } from "./views/Services/Services";

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <div style={{marginLeft: "16.66667%"}}>
            <Routes>
              <Route path="/" exact={true} element={<Home/>} />
              <Route path="/room" element={<Room/>} />
              <Route path="/booking" element={<Booking/>} />
              <Route path="/refund" element={<Refund/>} />
              <Route path="/staff" element={<Staff/>} />
              <Route path="/statistic" element={<Statistic/>} />
              <Route path="/customer" element={<Customer/>} />
              <Route path="/monthlyfee" element={<MonthlyFee/>} />
              <Route path="/services" element={<Services/>} />
            </Routes>
        </div>
      </Router>

    </>
  )
}

export default App;
