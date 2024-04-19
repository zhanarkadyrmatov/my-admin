import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Playground from "./components/Playground/Playground";
import Header from "./components/Header/Header";
import HomePage from "./pages/homePage/homePage";
import Login from "./pages/login/page";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HistoryPage from "./pages/historyPage/historyPage";

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
        <div className="overflow-y-auto h-screen px-4 py-[35px] lg:py-[55px] xl:px-6 xl:py-[60px] bg-[#f5f5f5] dark:bg-[#17171e] w-[100%]">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendary" element={<DataPages />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
