import { useRef, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import { GoPlus } from "react-icons/go";
import Ellipse from "../../img/Ellipse.svg";
import Ellipse2 from "../../img/Ellipse2.svg";
import BalanceCard from "./BalanceCard";
export default function Wallet() {
  const [inputVALUE, setInputVALUE] = useState("");

  const dateInputRef = useRef(null);

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <>
      <div className="mt-[100px] mx-[20px]  ">
        <div className="mb-[20px]">
          <h4>Кошелек</h4>
        </div>
        <div className="md:grid flex justify-between items-end ">
          <div className="w-[500px] sm:flex justify-between items-center  bg-[#222222] text-white p-4 rounded-lg grid gap-y-[50px] relative">
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
          <button className="relative flex gap-x-[8px] py-[10px] px-[16px] bg-[#E5E5E5] items-center text-white rounded-lg text-lg">
            <p
              className="text-base font-normal text-left text-[#1C1C1C]"
              style={{ lineHeight: "18.38px" }}
            >
              Вывод средств
            </p>
          </button>
        </div>
        {/* <div className="grid gap-y-[20px] mt-[20px]">
          <h4>История платежей</h4>
          <BalanceCard />
        </div> */}
      </div>
    </>
  );
}
