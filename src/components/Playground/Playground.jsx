import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import SoccerBall from "../../img/SoccerBall";
import Alt from "../../img/alt";
import Logout from "../Logout/Logout";
import { ImExit } from "react-icons/im";
import { FaWallet } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import Logo from '../../img/Traced Image.png';


export default function Playground({
  collapsed,
  toggled,
  setToggled,
  setTitle,
}) {

  const [logout, setLogout] = useState(false);
  const isLogin = localStorage.getItem("token");

  return (
    <>
      {logout && <Logout setLogout={setLogout} />}
      <Sidebar
        collapsed={collapsed}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="md"
        className="h-screen bg-white dark:bg-[#212130]"
      >
        <div className="flex flex-col justify-between h-full z-[999]">
          <div className="flex justify-center items-center py-3 px-4">
            <img className="w-[60%]" src={Logo} alt="" />
          </div>
          <div className="flex-1 mb-5 ">
            <Menu
              menuItemStyles={{
                button: {
                  [`&.active`]: {
                    backgroundColor: "rgba(28, 28, 28, 0.05)",
                    color: "green",
                    borderRight: "3px solid green",

                    svg: {
                      path: {
                        fill: "green",
                      }
                    },
                  },
                },
              }}
              transitionDuration={1000}
            >
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal 
                }`}
                icon={<FaHome className="w-[20px] h-[20px]" />}
                component={<NavLink to="/" />}
                onClick={() => {
                  setToggled(false);
                  setTitle("Главная");
                }}
              >
                Главная
              </MenuItem>
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal }
                }`}
                icon={<FaAddressCard className=" w-[20px] h-[20px]" />}
                component={<NavLink to="/booking" />}
                onClick={() => {
                  setToggled(false);
                  setTitle("Список брони");
                }}
              >
                Список брони
              </MenuItem>
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal
                }`}
                icon={<FaWallet className=" w-[20px] h-[20px]" />}
                component={<NavLink to="/wallet" />}
                onClick={() => {
                  setToggled(false);
                  setTitle("Кошелек");
                }}
              >
                Кошелек
              </MenuItem>
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal 
                }`}
                icon={<SoccerBall className=" w-[20px] h-[20px]" />}
                component={<NavLink to="/fields" />}
                onClick={() => {
                  setToggled(false);
                  setTitle("Футбольные поля");
                }}
              >
                Футбольные поля
              </MenuItem>

              {isLogin == null ? (
                <MenuItem
                  className={`text-[18px] text-[#737B8B]  leading-5 font-normal `}
                  icon={<Alt className="w-[20px] h-[20px]" />}
                  component={<NavLink to="/login" />}
                  onClick={() => setToggled(false)}
                >
                  Войти
                </MenuItem>
              ) : (
                <MenuItem
                  className={`text-[18px] text-[#737B8B]  leading-5 font-normal
                }`}
                  icon={<ImExit className=" w-[20px] h-[20px]" />}
                  onClick={() => {
                    setLogout(!logout);
                    setToggled(false);
                  }}
                >
                  Выйти
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
