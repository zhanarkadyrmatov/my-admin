import React, { useState } from "react";
import Pie from "../../components/Cards/pie/Pie";
import AccordionI from "../../components/Cards/accordion/AccordionI";
import { BiSolidCameraPlus } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import img7 from "../../img/img7.svg";

export default function Football() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <div className="mt-[55px]">
        <div className=" grid-cols-[1fr] grid xl:grid-cols-[1fr_2fr] md: gap-[20px] ">
          <div className="h-[555px] rounded-[10px] bg-white">
            <div className="p-[20px] border-b border-solid border-opacity-10 border-black">
              <h4>Преимущества</h4>
            </div>
            <div className="px-[20px]">
              <Pie />
              <AccordionI />
              <Pie />
              <Pie />
              <Pie />
              <Pie />
              <AccordionI />
              <Pie />
              <Pie />
            </div>
          </div>
          <div className="bg-[#fff]">
            <div className="p-[20px] rounded-t-[10px] bg-white border-b-[1px] border-[#E8E8E8]">
              <h4 className="text-[16px] font-normal leading-[18px] text-[#222]">
                Информация
              </h4>
            </div>
            <div className="p-[20px] grid gap-y-[20px]">
              <div className="bg-white">
                <div className="grid grid-cols-3 gap-[10px] mb-[20px]">
                  <div className="flex flex-col gap-[10px] items-center">
                    <div
                      style={{
                        backgroundImage: `url(${img7})`,
                      }}
                      className="w-full h-[150px] bg-center bg-no-repeat bg-cover flex justify-center items-center  bg-gray-100 rounded shadow-md"
                    >
                      <BiSolidCameraPlus size={30} />
                    </div>
                    <p className="text-[13px] leading-[19px] font-normal text-[#222222]">
                      По умолчанию
                    </p>
                  </div>
                  <div className="grid justify-items-center">
                    <div className="w-full h-[150px]  flex flex-col items-center justify-center bg-gray-100 rounded shadow-md">
                      <label htmlFor="upload" className="cursor-pointer">
                        <BiSolidCameraPlus size={30} />
                        <input
                          type="file"
                          id="upload"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                    <div>По умолчанию</div>
                  </div>
                  <div className="grid justify-items-center">
                    <div className="w-full h-[150px]  flex flex-col items-center justify-center bg-gray-100 rounded shadow-md">
                      <label htmlFor="upload" className="cursor-pointer">
                        <BiSolidCameraPlus size={30} />
                        <input
                          type="file"
                          id="upload"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                    <div>По умолчанию</div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[5px]">
                  <p>Добавьте типы футбольных полей</p>
                  <select
                    className="bg-[#F0F0F0] p-[14px] text-[14px] leading-[16px] rounded-[10px] font-normal text-[#222222]"
                    name=""
                    id=""
                  >
                    <option
                      className="py-[10px] text-[14px] text-[#222222] "
                      value=""
                    >
                      Мини поле
                    </option>
                    <option value="">Мини поле</option>
                    <option value="">Мини поле</option>
                    <option value="">Мини поле</option>
                    <option value="">Мини поле</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-y-[8px]">
                <h4 className="text-base font-normal leading-normal text-left">
                  Название футбольного поля
                </h4>
                <div>
                  <input
                    className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[10px] w-full focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="El-Clasico"
                  />
                </div>
              </div>
              <div className="grid gap-y-[8px] ">
                <h4>Выберите тип футбольного поля</h4>
                <div className="grid grid-cols-2  gap-[10px]">
                  <button className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center ">
                    <h4 className="text-base font-normal leading-6 tracking-tight text-left" >Стадион</h4>
                    <input type="radio" className="w-[18px] h-[18px]" />
                  </button>
                  <button className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center ">
                    <h4 className="text-base font-normal leading-6 tracking-tight text-left">Стадион</h4>
                    <input type="radio" className="w-[18px] h-[18px]" />
                  </button>
                  <button className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center ">
                    <h4 className="text-base font-normal leading-6 tracking-tight text-left">Стадион</h4>
                    <input type="radio" className="w-[18px] h-[18px]" />
                  </button>
                  <button className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[8px] flex justify-between items-center ">
                    <h4 className="text-base font-normal leading-6 tracking-tight text-left">Стадион</h4>
                    <input type="radio" className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>
              <div className="grid gap-y-[8px] ">
                <h4>Добавьте типы футбольных полей</h4>
                <select
                  className="bg-[#F0F0F0] p-[14px] text-[14px] leading-[16px] rounded-[10px] font-normal text-[#222222]"
                  name=""
                  id=""
                >
                  <option
                    className="py-[10px] text-[14px] text-[#222222] "
                    value=""
                  >
                    Мини поле
                  </option>
                  <option value="">Мини поле</option>
                  <option value="">Мини поле</option>
                  <option value="">Мини поле</option>
                  <option value="">Мини поле</option>
                </select>
              </div>
              <div className="grid gap-[5px]">
                <div className="w-full bg-[#F0F0F0] py-[5px] px-[5px] rounded-[8px] flex justify-between items-center ">
                  <h4 className="font-size-[13px] font-weight-400 line-height-17-24 text-left pl-[10px] text[#222222] opacity-70">
                    Мини поле
                  </h4>
                  <div className="flex gap-[10px] items-center">
                    <MdKeyboardArrowDown size={25} />
                    <button className="p-[8px] rounded-lg bg-blue-500 text-white">
                      Добавить
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid  ">
                <select
                  className="bg-[#F0F0F0] p-[14px] text-[14px] leading-[16px] rounded-[10px] font-normal text-[#222222]"
                  name=""
                  id=""
                >
                  <option
                    className="py-[10px] text-[14px] text-[#222222] "
                    value=""
                  >
                    Мини поле
                  </option>
                  <option value="">Мини поле</option>
                  <option value="">Мини поле</option>
                  <option value="">Мини поле</option>
                  <option value="">Мини поле</option>
                </select>
              </div>

              <div className="flex gap-[10px] items-center">
                <button className="px-[10px] py-[6px] rounded-[6px] border border-solid border-gray-300 text-base font-normal leading-5 text-left">
                  Мини поле1
                </button>
                <button className="px-[10px] py-[6px] rounded-[6px] border border-solid border-gray-300 text-base font-normal leading-5 text-left">
                  Мини поле 2
                </button>
                <button className="px-[10px] py-[6px] rounded-[6px] border border-solid border-gray-300 text-base font-normal leading-5 text-left">
                  Фут-Зал
                </button>
              </div>
              <div className="p-[8px] rounded-[8px] bg-[#7384E8]">
                <NavLink to={"minifields"}>
                  <p className="text-base font-medium leading-5 text-center text-[#fff]">
                    Далее
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {dropdown && (
        <div className="realative">
          <div className="absolute z-999 right-[150px] bottom-[40px] w-[275px] h-[159px] bg-white shadow-md p-[15px] rounded-[14px] mx-[10px]">
            <div className="relative grid gap-[12px]">
              <div className="w-[246px] h-[36px] px-[17px] py-[5px] rounded-[5px] bg-[#F6F6F6]">
                <p className="text-base font-normal leading-7 text-left text-[#0E1422]">
                  Мини поле
                </p>
              </div>
              <div className="w-[246px] h-[36px] px-[17px] py-[5px] rounded-[5px] bg-[#F6F6F6]">
                <p className="text-base font-normal leading-7 text-left text-[#0E1422]">
                  Мини поле
                </p>
              </div>
              <div className="w-[246px] h-[36px] px-[17px] py-[5px] rounded-[5px] bg-[#F6F6F6]">
                <p className="text-base font-normal leading-7 text-left text-[#0E1422]">
                  Мини поле
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
