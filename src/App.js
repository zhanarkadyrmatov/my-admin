import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Playground from "./components/Playground/Playground";
import Header from "./components/Header/Header";

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
      <main className="relative ">
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          toggled={toggled}
          setToggled={setToggled}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        <div className="wrapper shadow-inner overflow-scroll bg-[#f5f5f5] dark:bg-[#212130]">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
