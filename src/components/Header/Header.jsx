import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { GoBell, GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoMenuSharp, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header({
  setCollapsed,
  collapsed,
  setToggled,
  toggled,
}) {
  return (
    <div>
      <div style={{
        width: "-webkit-fill-available",
      }} class="fixed top-0 py-3 px-4 flex justify-between items-center bg-white shadow-md">
        <div className=''>
          <div className='flex items-center gap-4'>
            <button
              className='hidden md:flex'
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <FaArrowRightLong className='w-5 h-5 hover:scale-110 hover:fill-red transition-all' />
              ) : (
                <HiOutlineMenuAlt2 className='w-5 h-5 hover:scale-110 hover:color-red transition-all' />
              )}
            </button>
            <button
              className='flex md:hidden'
              onClick={() => {
                console.log(toggled)
                setToggled(!toggled)
              }}
            >
              <HiOutlineMenuAlt2 className='w-5 h-5' />
            </button>
            <h4 className="text-lg font-bold">Dashboard</h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-[#f5f5f5] p-2 rounded-[10px] focus-within:outline-[#f5f5f5]">
            <input type="text" placeholder="Search" className="bg-transparent outline-none" />
            <IoIosSearch className="w-[24px] h-[24px] cursor-pointer" />
          </div>
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-[#f5f5f5] cursor-pointer">
            <GoPlus className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <BiMessageDetail className="w-[24px] h-[24px] cursor-pointer" />
          <GoBell className="w-[24px] h-[24px] cursor-pointer" />
          <IoSettingsOutline className="w-[24px] h-[24px] cursor-pointer" />
          <Link to="/">
            <img className="w-[50px] h-[50px] rounded-[10px] cursor-pointer object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </Link>

        </div>
      </div>
    </div >
  );
}
