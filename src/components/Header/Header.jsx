import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { GoBell, GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { FaBars } from "react-icons/fa6";

export default function Header({
  setCollapsed,
  collapsed,
  setToggled,
  toggled,
  setDarkMode,
  darkMode,
}) {
  return (
    <div>
      <div style={{
        width: "-webkit-fill-available",
      }} class="fixed top-0 py-3 px-4 z-10 flex justify-between items-center bg-white dark:bg-[#212130] shadow-md">
        <div className=''>
          <div className='flex items-center gap-4'>
            <Link className="flex md:hidden" to="/">
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-6 w-auto" alt="" />
            </Link>
            <button
              className='hidden md:flex'
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <FaArrowRightLong className='w-[24px] h-[24px] hover:scale-110 hover:fill-red transition-all dark:fill-[#b3b3b3] ' />
              ) : (
                <FaBars className='w-[24px] h-[24px] hover:scale-110 hover:color-red transition-all dark:fill-[#b3b3b3]' />
              )}
            </button>
            <button
              className='flex md:hidden'
              onClick={() => {
                console.log(toggled)
                setToggled(!toggled)
              }}
            >
              <FaBars className='w-[20px] h-[20px] dark:fill-[#b3b3b3]' />
            </button>
            <h4 className="hidden md:block dark:text-white text-black text-[16px] lg:text-lg font-bold">Dashboard</h4>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4 bg-[#f5f5f5] p-2 rounded-[8px] focus-within:border-[#f5f5f5] border-[1px] py-2  px-4 dark:bg-black dark:border-black dark:text-white">
            <input type="text" placeholder="Search" className="bg-transparent outline-none" />
            <IoIosSearch className="w-[24px] h-[24px] cursor-pointer" />
          </div>
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] bg-[#f5f5f5] cursor-pointer dark:bg-[#318e86] dark:hover:bg-[#113a36] hover:bg-[#a8a5a5] transition-all">
            <GoPlus className="w-[24px] h-[24px] dark:fill-white " />
          </div>
        </div>
        <div className='flex items-center lg:gap-4 gap-3'>
          {darkMode ? <MdLightMode onClick={() => setDarkMode(!darkMode)} className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer" />
            :
            <MdDarkMode onClick={() => setDarkMode(!darkMode)} className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer dark:fill-[#b3b3b3]" />
          }
          <BiMessageDetail className=" dark:fill-[#b3b3b3]  lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer" />
          <GoBell className=" dark:fill-[#b3b3b3] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer" />
          <SlSettings className="dark:fill-[#b3b3b3] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer" />
          <Link to="/">
            <img className="lg:w-[50px] w-[35px] lg:h-[50px] h-[35px] rounded-[10px] cursor-pointer object-cover " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </Link>
        </div>
      </div>
    </div >
  );
}
