import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoPlus } from "react-icons/go";
import Ellipse from "../../img/Ellipse.svg";
import Ellipse2 from "../../img/Ellipse2.svg";

export default function Wallet() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mt-[100px] mx-[20px] ">
      <div className="flex justify-between items-end">
        <div className="w-[500px] sm:flex justify-between items-center h-min bg-[#222222] text-white p-4 rounded-lg grid gap-y-[50px] relative">
          <div>
            <p
              className="text-base font-normal leading-tight text-left opacity-70 text-[#FFFFFF]"
              style={{ lineHeight: "18.38px" }}
            >
              У вас на балансе
            </p>
            <h1
              className="mt-1 text-2xl font-medium text-left"
              style={{ lineHeight: "36.77px" }}
            >
              15 000 сом
            </h1>
          </div>
          <img
            className="absolute z-[100] left-[290px] top-[19px] transform rotate-[180deg] "
            src={Ellipse}
            alt=""
          />
          <img
            className="absolute top-[-3px] left-[377px]"
            src={Ellipse2}
            а
            alt=""
          />
        </div>
        <button className="mt-[-40px] relative flex gap-x-[8px] py-[10px] px-[16px] bg-[#E5E5E5] items-center text-white rounded-lg text-lg z-[200]">
          <p
            className="text-base font-normal text-left text-[#1C1C1C]"
            style={{ lineHeight: "18.38px" }}
          >
            Вывод средств
          </p>
        </button>
      </div>
      <div className="mt-[40px]">
        <h4 className="text-base font-semibold leading-5 text-left text-[#1C1C1C]">
          История платежей
        </h4>
        <div className="grid gap-y-[20px]">
          <div className="mt-[20px] h-[86px] bg-white shadow-custom rounded-[15px] flex gap-x-[16px] items-center px-[18px]">
            <div className="w-[80%] h-[50px] bg-[#F7F8F9] flex items-center px-[24px] rounded-[10px]">
              <div className="flex items-center w-[70%] justify-between">
                <p className="text-custom font-normal leading-custom text-[#323A46]">
                  Все операции
                </p>
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className="w-full h-[50px] bg-[#F7F8F9] flex items-center px-[24px] rounded-[10px]">
              <div className="flex w-[80%] items-center justify-between">
                <div className="flex items-center gap-x-[4px]">
                  <IoCalendarOutline color="#B8C0CC" />
                  <p className="text-custom font-normal leading-custom text-left text-[#B8C0CC  ]">
                    Период с
                  </p>
                </div>
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className="w-full h-[50px] bg-[#F7F8F9] flex items-center px-[24px] rounded-[10px]">
              <div className="flex w-[80%] items-center justify-between">
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="bg-[#F7F8F9] text-[#3a3a3a] opacity-50"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            d="M40.04 22v20h-32V22"
                          ></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  }
                />
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.82432 10.5067L9.03432 13.7167L10.9943 15.6867C11.8243 16.5167 13.1743 16.5167 14.0043 15.6867L19.1843 10.5067C19.8643 9.82671 19.3743 8.66671 18.4243 8.66671L12.8143 8.6667L6.58432 8.6667C5.62432 8.6667 5.14432 9.8267 5.82432 10.5067Z"
                    fill="#323A46"
                  />
                </svg>
              </div>
            </div>
            <button className="flex w-full justify-center items-center gap-x-[3px] py-[12px] px-[28px] bg-[#7384E8] rounded-[10px]">
              <CiSearch size={20} color="#fff" />
              <p className="text-custom font-semibold leading-custom text-left text-[#fff]">
                Поиск
              </p>
            </button>
          </div>
          <div className="w-full h-[325px] bg-[#fff] rounded-[15px]">
            <div className="px-[20px] py-[20px] h-[62px]">
              <ul className="grid grid-cols-[auto_auto_auto_auto_auto_auto]">
                <li className="text-[18px] font-[400] text-[#1C1C1C] opacity-[0.5] ">
                  Тип операции
                </li>
                <li className="text-[18px] font-[400] text-[#1C1C1C] opacity-[0.5] text-start">
                  Дата
                </li>
                <li className="text-[18px] font-[400] text-[#1C1C1C] opacity-[0.5] text-end">
                  Приход
                </li>
                <li className="text-[18px] font-[400] text-[#1C1C1C] opacity-[0.5] text-end">
                  Пользователь
                </li>
                <li className="text-[18px] font-[400] text-[#1C1C1C] opacity-[0.5] text-end">
                  Футбольное поле
                </li>
                <li className="text-[18px] font-[400] text-[#1C1C1C] opacity-[0.5] text-end">
                  Платеж.система
                </li>
              </ul>
            </div>
            <hr />
            <div className="px-[20px] py-[20px] h-[62px]">
              <ul className="flex justify-between items-center">
                <li>Бронирование</li>
                <div className="grid">
                  <li className="text-[17px] font-[400] text-left">
                    10 Октября
                  </li>
                  <p className="text-[17px] font-[400] text-left text-[#1c1c1c] opacity-[0.5]">
                    20:37
                  </p>
                </div>
                <li className="text-[#DF2323] text-base font-normal my-custom-line-height tracking-tight text-right">
                  -2 587 сом
                </li>
                <div className="grid">
                  <li className="text-base font-normal text-left">
                    ataialanov
                  </li>
                  <p className="text-sm font-normal text-left text-[#1C1C1C] opacity-[0.5]">
                    Существующий
                  </p>
                </div>
                <div className="grid p-0">
                  <li className="text-base font-normal text-left p-0">
                    El-Clasico
                  </li>
                  <p className="text-sm font-normal leading-tight tracking-tight text-left text-[#1C1C1C] opacity-[0.5] p-0">
                    Спортивный комплекс
                  </p>
                </div>
                <div className="flex gap-x-[8px] ">
                  <IoCalendarClearOutline size={20} />
                  <p>Онлайн</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
