import React, { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { GoBell, GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { FaBars } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/slice/user.slice";
import Messages from "../Messages/Messages";
import Notification from "../Cards/notification/Notification";
import Setting from "../Cards/setting/Setting";

export default function Header({
  setCollapsed,
  collapsed,
  setToggled,
  toggled,
  setDarkMode,
  darkMode,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const [open, setOpen] = useState(false);
  const [openMessages, setOpenMessages] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <div>
      <div
        style={{
          width: "-webkit-fill-available",
          boxShadow: "5px 1px 10px -5px #000",
        }}
        class="fixed top-0 py-4 px-4 z-10 flex justify-between items-center bg-white dark:bg-[#212130]"
      >
        <div className="">
          <div className="flex items-center gap-4">
            <Link className="flex md:hidden" to="/">
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-6 w-auto"
                alt=""
              />
            </Link>
            <button
              className='hidden lg:flex'
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <FaArrowRightLong className="w-[24px] h-[24px] hover:scale-110 hover:fill-red transition-all dark:fill-[#b3b3b3] " />
              ) : (
                <FaBars className="w-[24px] h-[24px] hover:scale-110 hover:color-red transition-all dark:fill-[#b3b3b3]" />
              )}
            </button>
            <button
              className='flex lg:hidden'
              onClick={() => {
                setToggled(!toggled)
              }}
            >
              <FaBars className="w-[20px] h-[20px] dark:fill-[#b3b3b3]" />
            </button>
            <h4 className="hidden md:block dark:text-white text-black text-[16px] lg:text-lg font-bold">
              Dashboard
            </h4>
          </div>
        </div>
        <div className="flex items-center lg:gap-4 gap-3">
          {darkMode ? (
            <MdLightMode
              onClick={() => setDarkMode(!darkMode)}
              className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer  dark:fill-[#b3b3b3]"
            />
          ) : (
            <MdDarkMode
              onClick={() => setDarkMode(!darkMode)}
              className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer dark:fill-[#b3b3b3]"
            />
          )}
          <BiMessageDetail
            onClick={() => setOpen(true)}
            className=" dark:fill-[#b3b3b3]  lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer"
          />
          {open && <Messages />}
          <GoBell
            onClick={() => setOpenMessages(true)}
            className=" dark:fill-[#b3b3b3] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer"
          />
          {openMessages && (
            <div
              onClick={() => setOpenMessages(false)}
              className=" fixed top-[85px] right-[120px]  h-[440px] w-[290px]  bg-[#ffff] p-3 rounded-lg z-50"
            >
              <div className="overflow-y-scroll h-[380px] no-scrollbar">
                <div className="grid grid-rows-1 gap-y-3">
                  <Notification />
                  <Notification />
                  <Notification />
                  <Notification />
                  <Notification />
                  <Notification />
                  <Notification />
                </div>
              </div>
              <div className="block py-[13px] px-6 pb-0 text-primary text-center border-t ">
                <h3 className="text-[14px] text-[#f93a0b]">
                  See all notifications
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
