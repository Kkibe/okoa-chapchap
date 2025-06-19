import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import Options from './pages/options'
import Details from './pages/details'
import Summary from './pages/summary'
import Verify from './pages/verify'
import Success from './pages/success'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  useEffect(() => {
    const generateRandomPhone = () => {
      const prefix = '07';
      const middle = Math.floor(100 + Math.random() * 900); // 3 digits
      const end = Math.floor(10 + Math.random() * 90); // 2 digits
      return `${prefix}${middle}****${end}`;
    };

    const generateRandomAmount = () => {
      const min = 2500;
      const max = 50000;
      const amount = Math.floor(Math.random() * ((max - min) / 5 + 1)) * 5 + min;
      return amount;
    };

    const interval = setInterval(() => {
      const phone = generateRandomPhone();
      const amount = generateRandomAmount();
      toast(`📞 ${phone} just received Ksh${amount.toLocaleString()}`);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/details" element={<Details />} />
        <Route path="/options" element={<Options />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <ToastContainer draggable closeOnClick={true} />
    </div>
  )
}

export default App
