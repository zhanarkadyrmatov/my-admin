import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Playground from "./components/Playground/Playground";
import Header from "./components/Header/Header";
import Login from "./pages/login/page";
import Home from "./pages/home/home";
import Booking from "./pages/booking/booking";
import Fields from "./pages/fields/fields";
import FieldsId from "./pages/fields/fieldsId/fieldsId";
import Reserve from "./pages/reserve/reserve";
import Addfootball from "./pages/football/Addfootball";
import { useCollapsed } from "./hooks/useCollapsed";
import Wallet from "./pages/wallet/Wallet";
import ReserveModal from "./components/ReserveModal/ReserveModal";
import FootballCreate from "./pages/football/Pages/Page2/footballCreate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditFied from "./pages/fields/editFied/editFied";
import EditType from "./pages/fields/editType/editType";

function App({ open }) {
  const [collapsed, setCollapsed] = useCollapsed();
  const [toggled, setToggled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [reserve, setReserve] = useState(false);
  const [title, setTitle] = useState("Главная");

  return (
    <>
      <ToastContainer
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {reserve && <ReserveModal setReserve={setReserve} />}
      <div className={`flex`}>
        <Playground
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          toggled={toggled}
          setToggled={setToggled}
          setTitle={setTitle}
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
            setReserve={setReserve}
            reserve={reserve}
            title={title}
          />
          <div className="overflow-y-auto h-screen  bg-[#f5f5f5] dark:bg-[#17171e] w-[100%]">
            <div className="">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/login" element={<Login />} />
                <Route path="/fields" element={<Fields />} />
                <Route path="/fields/edit/:id" element={<EditFied />} />
                <Route path="/fields/editType/:id" element={<EditType />} />
                <Route path="/fields/football" element={<Addfootball />} />
                <Route
                  path="/fields/football/:id"
                  element={<FootballCreate />}
                />
                <Route path="/fields/:id" element={<FieldsId />} />
                <Route path="/reserve/:id" element={<Reserve />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
