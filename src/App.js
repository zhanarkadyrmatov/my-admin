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
        <div className="overflow-y-auto h-screen px-4 py-[35px] lg:py-[55px] xl:px-6 xl:py-[60px] bg-[#f5f5f5] dark:bg-[#212130]">
          <Routes>
            <Route path="/" element={<div>
              <h1 className='text-3xl mt-9'>Home Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a itaque dicta eos ipsa maiores architecto quidem laborum quisquam! Cum impedit suscipit itaque, dolorum doloremque iusto tenetur repudiandae obcaecati voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quisquam quo quod hic labore minus facere sequi assumenda aliquid possimus fugiat in veritatis culpa sed voluptates magnam reiciendis, saepe repudiandae?</h1>
            </div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
