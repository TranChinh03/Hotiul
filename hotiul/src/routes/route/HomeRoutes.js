import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from '../../components/sidebar/sidebar';
import { Home } from '../../views/Home/Home';
import { Room } from '../../views/Room/Room';
import { Booking } from '../../views/Booking/Booking';
import { Refund } from '../../views/Refund/Refund';
import { Staff } from '../../views/Staff/Staff';
import { Statistic } from '../../views/Statistic/Statistic';
import { Customer } from '../../views/Customer/Customer';
import { MonthlyFee } from '../../views/MonthlyFee/MonthlyFee';
import { Services } from '../../views/Services/Services';
import { Header } from '../../components/header/header';
import { useState } from 'react';
import { Draft } from '../../views/Draft/Draft';
import { RoomType } from '../../views/RoomType/RoomType';
function HomeRoutes() {
  const [currentTab, setCurrentTab] = useState('home');
  return (
    <>
      <SideBar handleChange={setCurrentTab} />
      <div style={{ marginLeft: "16.66667%" }}>
        <div class="h-1/5">
          <Header selected={currentTab} />
        </div>
        <div class="h-4/5">
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="/roomtype" element={<RoomType />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/monthlyfee" element={<MonthlyFee />} />
            <Route path="/services" element={<Services />} />
            <Route path="/draft" element={<Draft />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomeRoutes;
