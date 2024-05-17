import React from "react";
import { GoPlus } from "react-icons/go";
import Ellipse from "../../img/Ellipse.svg";
import Ellipse2 from "../../img/Ellipse2.svg";
import { IoIosArrowDown } from "react-icons/io";
import Acards from "../../components/Cards/arbitrCards/Acards";
export const BalanceCard = () => {
  return (
    <div className="mt-20 mx-[30px] ">
      <div className="flex justify-between ">
        <div className="flex gap-x-[43px] items-center bg-[#222222] text-white p-4 rounded-lg h-min">
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
          <div>
            <button className="relative inset-0 mt-[-40px] flex gap-x-[8px] py-[10px] px-[16px] bg-custom-gradient items-center text-white rounded-lg text-lg z-[200]">
              <p
                className="text-base font-normal text-left"
                style={{ lineHeight: "18.38px" }}
              >
                Пополнить баланс
              </p>
              <GoPlus className="w-[20px] h-[20px]" />
            </button>
            <img
              className="absolute z-[100] top-[90px] left-[190px] transform rotate-[170deg] "
              src={Ellipse}
              alt=""
            />
            <img
              className="absolute top-[80px] left-[230px]"
              src={Ellipse2}
              а
              alt=""
            />
          </div>
        </div>
        <div className="w-[718px] h-[818px] bg-[#fff] rounded-[10px]">
          <div className="h-[58px] p-[20px] bg-[#fff] border-b border-gray-500">
            <h4 className="text-base font-medium leading-4 text-left">
              История платежей
            </h4>
          </div>
          <div className="flex gap-[10px] h-[60px] px-[20px] ">
            <div className="grid w-full">
              <h4>От:</h4>
              <div className="flex items-center">
                <input
                  className="w-full h-[40px] p-[2px] rounded-lg"
                  placeholder="Дата:"
                  type="date"
                />
                <IoIosArrowDown size={30} />
              </div>
            </div>
            <div className="grid w-full">
              <h4>До:</h4>
              <div className="flex items-center">
                <input
                  className="w-full h-[40px] p-[2px] rounded-lg"
                  placeholder="Дата:"
                  type="date"
                />
                <IoIosArrowDown size={30} />
              </div>
            </div>
          </div>
          <div className="p-[20px] h-[694px] bg-[#fff]">
            <div className="grid gap-y-[10px]">
              <h4 className="text-base font-medium leading-4 text-left">
                Сегодня
              </h4>
              <div className="grid gap-y-[10px] ">
                <Acards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
