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
import { useCollapsed } from "./hooks/useCollapsed";
import Wallet from "./pages/wallet/Wallet";
import ReserveModal from "./components/ReserveModal/ReserveModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddFootballFieldType from "./pages/addFootballField/addFootballFieldType/addFootballFieldType";
import AddFootballField from "./pages/addFootballField/addFootballField";
import EditType from "./pages/fields/editType/editType";
import EditField from "./pages/fields/editField/editField";


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
                <Route path="/fields/edit/:id" element={<EditField />} />
                <Route path="/fields/editType/:id" element={<EditType />} />
                <Route path="/fields/add" element={<AddFootballField />} />
                <Route
                  path="/fields/add/:id"
                  element={<AddFootballFieldType />}
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
