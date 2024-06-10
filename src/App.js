import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Playground from "./components/Playground/Playground";
import Header from "./components/Header/Header";
import Login from "./pages/login/page";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Profil from "./pages/profil/profil";
import DataPages from "./pages/DataPages/DataPages";
import HistoryPage from "./pages/historyPage/historyPage";
import ArmorHistory from "./pages/armorHistory/ArmorHistory";
import Payment from "./pages/historyPayment/Payment";
import Fields from "./pages/fields/fields";
import FieldsId from "./pages/fields/fieldsId/fieldsId";
import Reserve from "./pages/reserve/reserve";
import MiniFields from "./pages/miniFelds/MiniFields";
import EditFieds from "./pages/editFields/editFieds";
import Addfootball from "./pages/football/Addfootball";
import FiledFoot from "./components/FiledFoot/FiledFoot";
import { useCollapsed } from "./hooks/useCollapsed";
import Wallet from "./pages/wallet/Wallet";
import ReserveModal from "./components/ReserveModal/ReserveModal";
function App({ open }) {
  const [collapsed, setCollapsed] = useCollapsed();
  const [toggled, setToggled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [reserve, setReserve] = useState(false);

  return (
    <>
      {reserve && <ReserveModal />}
      <div className={`flex`}>
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
            onclick={() => setOpenSetting(!openSetting)}
          />
          <div className="overflow-y-auto h-screen  bg-[#f5f5f5] dark:bg-[#17171e] w-[100%]">
            <div className="">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/calendary" element={<DataPages />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/armor" element={<ArmorHistory />} />
                <Route path="/login" element={<Login />} />
                <Route path="/fields" element={<Fields />} />
                <Route path="/editFields" element={<EditFieds />} />
                <Route path="//fields/football" element={<Addfootball />} />
                <Route path="//fields/minifields" element={<MiniFields />} />
                <Route path="/fields/:id" element={<FieldsId />} />
                <Route path="/reserve" element={<Reserve />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
