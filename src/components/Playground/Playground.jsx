import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { IoMenuSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaWallet, FaHistory } from "react-icons/fa";
import { NavLink, Routes } from "react-router-dom";
import { MdNightlight } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { FaThLarge } from "react-icons/fa";

export default function Playground({
  collapsed,
  setCollapsed,
  toggled,
  setToggled,
}) {
  const menuItemStyles = {
    root: {
      fontSize: "15px",
      fontWeight: "bold",
      color: "#b6b7b9",
    },

    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? "#ffff" : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: "#b6b7b9",
      },
      "&:hover": {
        color: "green",
      },

      [`&.active`]: {
        backgroundColor: "#00000",
        color: "green",
      },
    },

    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
  return (
    <>
      <Sidebar
        collapsed={collapsed}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="md"
        className="h-screen shadow-md bg-white dark:bg-[#212130]"
      >
        <div className="flex flex-col justify-between h-full">
          <div
            className='flex justify-center items-center py-3 px-4'
          >
            <svg
              class="logo-abbr"
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
                  class="rect-primary-rect"
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
                  stroke-width="1"
                ></path>
                <path
                  id="Path_2002"
                  data-name="Path 2002"
                  d="M192.859,115.547a4.523,4.523,0,0,0,.7-2.415v-2.284a4.55,4.55,0,0,0-9.1,0v2.284a4.523,4.523,0,0,0,.7,2.415,4.954,4.954,0,0,0-3.708,4.788v1.623a2.4,2.4,0,0,0,2.4,2.4h10.323a2.4,2.4,0,0,0,2.4-2.4v-1.623a4.954,4.954,0,0,0-3.708-4.788Zm-6.114-4.7a2.259,2.259,0,0,1,4.518,0v2.284a2.259,2.259,0,1,1-4.518,0Zm7.53,11.111a.11.11,0,0,1-.11.11H183.843a.11.11,0,0,1-.11-.11v-1.623a2.656,2.656,0,0,1,2.653-2.653h5.237a2.656,2.656,0,0,1,2.653,2.653Zm0,0"
                  transform="translate(-168.591 -98.178)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
          </div>
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<MdDashboard />} component={<NavLink to="/" />}>
                Home
              </MenuItem>
              <MenuItem
                icon={<MdDashboard />}
                component={<NavLink to="/Dashboard" />}
              >
                DASHBOARD LIGHT
              </MenuItem>
              <MenuItem
                icon={<ImProfile />}
                component={<NavLink to="/profile" />}
              >
                PROFILE
              </MenuItem>
              <MenuItem
                icon={<CiCalendar />}
                component={<NavLink to="/calendary" />}
              >
                CALENDARY
              </MenuItem>
              <SubMenu label="Кошелек" icon={<FaWallet />}>
                <MenuItem component={<NavLink to="" />}>История</MenuItem>
                <MenuItem as={NavLink} to={""}>
                  Кнопка
                </MenuItem>
              </SubMenu>
              <MenuItem
                icon={<FaHistory />}
                component={<NavLink to="/history" />}
              >
                FOOTBALL FIELDS
              </MenuItem>
              <MenuItem
                icon={<RiLoginBoxLine />}
                component={<NavLink to="/login" />}
              >
                LOGIN
              </MenuItem>
              <MenuItem
                icon={<FaThLarge />}
                component={<NavLink to="/companies" />}
              >
                COMPANIES
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
