import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Booking from "../../img/Booking";
import Wallet from "../../img/Wallet";
import SoccerBall from "../../img/SoccerBall";
import Alt from "../../img/alt";
import Logout from "../Logout/Logout";
import { ImExit } from "react-icons/im";

export default function Playground({ collapsed, toggled, setToggled }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
            <svg
              className="w-[50px] h-[50px]"
              xmlns="http://www.w3.org/2000/svg"
              width="62.074"
              height="65.771"
              viewBox="0 0 62.074 65.771"
            >
              <g
                id="search_11_"
                data-name="search (11)"
                transform="translate(12.731 12.199)"
              >
                <rect
                  className="rect-primary-rect"
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  width="60"
                  height="60"
                  rx="30"
                  transform="translate(-10.657 -12.199)"
                  fill="#f73a0b"
                ></rect>
                <path
                  id="Path_2001"
                  data-name="Path 2001"
                  d="M32.7,5.18a17.687,17.687,0,0,0-25.8,24.176l-19.8,21.76a1.145,1.145,0,0,0,0,1.62,1.142,1.142,0,0,0,.81.336,1.142,1.142,0,0,0,.81-.336l19.8-21.76a17.687,17.687,0,0,0,29.357-13.29A17.57,17.57,0,0,0,32.7,5.18Zm-1.62,23.392A15.395,15.395,0,0,1,9.312,6.8,15.395,15.395,0,1,1,31.083,28.572Zm0,0"
                  transform="translate(1 0)"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="1"
                ></path>
                <path
                  id="Path_2002"
                  data-name="Path 2002"
                  d="M192.859,115.547a4.523,4.523,0,0,0,.7-2.415v-2.284a4.55,4.55,0,0,0-9.1,0v2.284a4.523,4.523,0,0,0,.7,2.415,4.954,4.954,0,0,0-3.708,4.788v1.623a2.4,2.4,0,0,0,2.4,2.4h10.323a2.4,2.4,0,0,0,2.4-2.4v-1.623a4.954,4.954,0,0,0-3.708-4.788Zm-6.114-4.7a2.259,2.259,0,0,1,4.518,0v2.284a2.259,2.259,0,1,1-4.518,0Zm7.53,11.111a.11.11,0,0,1-.11.11H183.843a.11.11,0,0,1-.11-.11v-1.623a2.656,2.656,0,0,1,2.653-2.653h5.237a2.656,2.656,0,0,1,2.653,2.653Zm0,0"
                  transform="translate(-168.591 -98.178)"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="1"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex-1 mb-5 ">
            <Menu
              menuItemStyles={{
                button: {
                  [`&.active`]: {
                    backgroundColor: "rgba(28, 28, 28, 0.05)",
                    color: "#f73a0b",
                    borderRight: "3px solid #f73a0b",
                  },
                },
              }}
              transitionDuration={1000}
            >
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal 
                }`}
                icon={<FaHome className=" w-[20px] h-[20px]" />}
                component={<NavLink to="/" />}
                onClick={() => setToggled(false)}
              >
                Главная
              </MenuItem>
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal }
                }`}
                icon={
                  <Booking
                    isActive={isActive("/calendary")}
                    className=" w-[20px] h-[20px]"
                  />
                }
                component={<NavLink to="/calendary" />}
                onClick={() => setToggled(false)}
              >
                Список брони
              </MenuItem>
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal
                }`}
                icon={
                  <Wallet
                    isActive={isActive("/wallet")}
                    className=" w-[20px] h-[20px]"
                  />
                }
                component={<NavLink to="/wallet" />}
                onClick={() => setToggled(false)}
              >
                Кошелек
              </MenuItem>
              <MenuItem
                className={`text-[18px] text-[#737B8B]  leading-5 font-normal 
                }`}
                icon={
                  <SoccerBall
                    isActive={isActive("/fields")}
                    className=" w-[20px] h-[20px]"
                  />
                }
                component={<NavLink to="/fields" />}
                onClick={() => setToggled(false)}
              >
                Футбольные поля
              </MenuItem>

              {isLogin == null ? (
                <MenuItem
                  className={`text-[18px] text-[#737B8B]  leading-5 font-normal `}
                  icon={
                    <Alt
                      isActive={isActive("/login")}
                      className="w-[20px] h-[20px]"
                    />
                  }
                  component={<NavLink to="/login" />}
                  onClick={() => setToggled(false)}
                >
                  Войти
                </MenuItem>
              ) : (
                <MenuItem
                  className={`text-[18px] text-[#737B8B]  leading-5 font-normal
                }`}
                  icon={
                    <ImExit
                      isActive={isActive("/сompanies")}
                      className=" w-[20px] h-[20px]"
                    />
                  }
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
