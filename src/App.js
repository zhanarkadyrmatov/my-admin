import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Playground from "./components/Playground/Playground";
import Header from "./components/Header/Header";
import HomePage from "./pages/homePage/homePage";
import Login from "./pages/login/page";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HistoryPage from "./pages/historyPage/historyPage";
import Profil from './pages/profil/profil';
import DataPages from './pages/DataPages/DataPages';
import CartPages from "./pages/cartPages/CartPages";
import Footer from "./components/Footer/Footer";
import ArmorHistory from "./pages/armorHistory/ArmorHistory";
import Payment from "./pages/historyPayment/Payment"; 

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`flex ${darkMode && 'dark'} `}>
      <Playground
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        toggled={toggled}
        setToggled={setToggled}
      />
      <main className="relative w-full">
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          toggled={toggled}
          setToggled={setToggled}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />

        <div className="overflow-y-auto h-screen  bg-[#f5f5f5] dark:bg-[#17171e] w-[100%]">
          <div className="px-4 py-[35px] lg:py-[55px] xl:px-6 xl:py-[60px]">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/calendary" element={<DataPages />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/armor" element={<ArmorHistory/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/companies" element={<CartPages />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
