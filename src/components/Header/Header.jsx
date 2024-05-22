import React, { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { GoBell, GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { FaBars } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/slice/user.slice";
import Messages from "../Messages/Messages";
import Notification from "../Cards/notification/Notification";
import Setting from "../Cards/setting/Setting";
import blockimage from "../../img/blockimage.svg";
import edit from "../../img/edit.svg";
import { NavLink } from "react-router-dom";
import trash from "../../img/trash.svg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Header({
  setCollapsed,
  collapsed,
  setToggled,
  toggled,
  setDarkMode,
  darkMode,
  item, setFieldDelete, fieldDelete
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const [open, setOpen] = useState(false);
  const [openMessages, setOpenMessages] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);


  const handleOpenModal = () => {
    setCollapsed(true);
    setOpenSetting(!openSetting);
  }

  return (
    <>
      <div>
        <div
          style={{
            width: "-webkit-fill-available",
            boxShadow: "5px 1px 10px -5px #000",
          }}
          class="fixed top-0 px-3 py-[14px] md:py-4 md:px-4 z-10 flex justify-between items-center bg-white dark:bg-[#212130]"
        >
          <div className="">
            <div className="flex items-center gap-2 lg:gap-5">
              <Link className="flex md:hidden" to="/">
                <img
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-6 w-auto"
                  alt=""
                />
              </Link>
              <button
                className="hidden lg:flex"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <FaArrowRightLong className="w-[24px] h-[24px] hover:scale-110 hover:fill-red transition-all dark:fill-[#b3b3b3] " />
                ) : (
                  <FaBars className="w-[24px] h-[24px] hover:scale-110 hover:color-red transition-all dark:fill-[#b3b3b3]" />
                )}
              </button>
              <button
                className="flex lg:hidden"
                onClick={() => {
                  setToggled(!toggled);
                }}
              >
                <FaBars className="w-[20px] h-[20px] dark:fill-[#b3b3b3]" />
              </button>
              <h4 className="hidden md:block dark:text-white text-black text-[16px] lg:text-lg font-bold">
                Dashboard
              </h4>
            </div>
          </div>
          <div className="flex items-center lg:gap-5 gap-3">
            <button
              onClick={() => handleOpenModal()}
              className="flex items-center gap-2 px-3 py-2  bg-[#1C1C1C0D] rounded-[8px] duration-300 hover:bg-[#b3b1b1] "
            >
              <span className="font-normal hidden sm:block  text-[14px] leading-[20px] text-[#1C1C1C]">
                Забронировать поле
              </span>
              <FaPlus className="w-[20px] h-[20px]" />
            </button>
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
            <GoBell className=" dark:fill-[#b3b3b3] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] cursor-pointer" />
          </div>
        </div>
      </div>
      {openSetting && (
        <div onClick={() => handleOpenModal(false)} className="fixed z-[9999] bg-[#D9D9D94D] w-full h-full flex justify-center items-center">
          <div oncl className="p-[20px] rounded-[15px] bg-[#fff] flex justify-start ml-auto mr-auto">
            <div className="grid gap-y-[20px]">
              <h4 className="text-[20px] font-semibold text-left lh-[24_2">Выберите поле</h4>
              <div style={{ gridTemplateColumns: "repeat(3, 1fr)" }} className="grid grid-cols-3 gap-[20px] w-[100%]">
                {[1, 2, 3, 4, 5, 7].map(item => (
                  <div key={item.id}>
                    <div className="w-[100%] relative shadow-lg top-0 left-0 right-0 rounded-[15px]">
                      <div className="w-[100%]">
                        <div className="w-[100%]">
                          <div className="absolute top-[12px] right-[12px] flex items-center gap-[10px]">
                            <div className="w-[36px] h-[36px] cursor-pointer bg-[#fff] backdrop-blur-sm rounded-full flex justify-center items-center bg-opacity-30 duration-300 hover:scale-105">
                              <img className="w-[20px] h-[20px]" src={edit} alt="Edit" />
                            </div>
                            <div onClick={() => setFieldDelete(!fieldDelete)} className="w-[36px] h-[36px] cursor-pointer bg-[#fff] backdrop-blur-sm rounded-full flex justify-center items-center bg-opacity-30 duration-300 hover:scale-105">
                              <img className="w-[20px] h-[20px]" src={trash} alt="Delete" />
                            </div>
                            <div className="w-[36px] h-[36px] cursor-pointer bg-[#fff] backdrop-blur-sm rounded-full flex justify-center items-center bg-opacity-30 duration-300 hover:scale-105">
                              <FaPlus className="w-[20px] h-[20px] fill-white" />
                            </div>
                          </div>
                          <NavLink className="w-[100%]" to={`/fields/${item.id}`}>
                            <img className="w-[100%] h-[160px] object-cover rounded-t-[15px]" src={item.main_foto || blockimage} alt={item.name} />
                          </NavLink>
                          <div className="absolute top-[115px] left-0 z-10 bg-[#FFF] py-[6px] pl-[14px] pr-[20px] rounded-r-[6px] backdrop-blur-sm bg-opacity-30">
                            <h4 className="text-[14px] leading-[16px] font-[500] text-[#fff]">
                              {item.min_price} сом / час
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="px-[14px] py-[10px]">
                        <div className="flex flex-col gap-[10px]">
                          <div className="">
                            <h4 className="text-[16px] leading-[19px] font-[500] text-[#222222]">
                              {item.name}
                            </h4>
                            <p className="text-[#222222] text-[12px] leading-[16px] font-[500] opacity-70">
                              Спортивный комплекс
                            </p>
                          </div>
                          <div className="flex justify-start items-center gap-[10px]">
                            {item.advantages?.map((el, index) => (
                              <img key={index} className="w-[20px] h-[20px]" src={el.icon} alt="" />
                            ))}
                          </div>
                          <div className="flex justify-start items-center gap-1">
                            <p className="text-[#222222] text-[14px] leading-[16px] font-[500]">
                              {item.avg_rating} ({item.rating_num})
                            </p>
                            <Stack spacing={1}>
                              <Rating
                                name="half-rating-read"
                                defaultValue={item.avg_rating}
                                precision={0.5}
                                readOnly
                              />
                            </Stack>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}