import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Playground from "./components/Playground/Playground";
import Header from "./components/Header/Header";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    <div className="flex">
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
        />
        <div className="wrapper">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
