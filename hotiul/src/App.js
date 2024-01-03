import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SideBar from './components/sidebar/sidebar';
import { Home } from './views/Home/Home';
import { Room } from './views/Room/Room';
import { Booking } from './views/Booking/Booking';
import { Refund } from './views/Refund/Refund';
import { Staff } from './views/Staff/Staff';
import { Statistic } from './views/Statistic/Statistic';
import { Customer } from './views/Customer/Customer';
import { MonthlyFee } from './views/MonthlyFee/MonthlyFee';
import { Services } from './views/Services/Services';
import { Header } from './components/header/header';
import { useEffect, useState } from 'react';
import ProfileCustomer from './components/profileCustomer/ProfileCustomer';
import ProfileStaff from './components/profileStaff/ProfileStaff';
import { Draft } from './views/Draft/Draft';
import LoginScreen from './views/Authentication/LoginScreen';
import RootRoutes from './routes/route/RootRoutes';

const App = () => {
  return (
    <RootRoutes/>
  )
}

export default App;
