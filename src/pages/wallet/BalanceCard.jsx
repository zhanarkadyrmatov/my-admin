import React, { useRef } from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RxTextAlignJustify } from "react-icons/rx";
const BalanceCard = () => {
  const [inputVALUE, setInputVALUE] = useState("");
  const [testValue, setTestValue] = useState(null);
  const [open, setOpen] = useState(null);

  const dateInputRef = useRef(null);
  const dateInputRef2 = useRef(null);

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };
  const handleButtonClick2 = () => {
    if (dateInputRef2.current) {
      dateInputRef2.current.showPicker();
    }
  };
  const transactions = [
    {
      type: "Бронирование",
      date: "10 Октября 20:37",
      amount: -2587,
      user: "ataialanov (Существующий)",
      field: "El-Clasico (Спортивный комплекс)",
      paymentSystem: "онлайн",
    },
    {
      type: "Бронирование",
      date: "10 Октября 20:37",
      amount: 2587,
      user: "Атай Аланов (Новый)",
      field: "El-Clasico (Спортивный комплекс)",
      paymentSystem: "FreedomPay",
    },
    {
      type: "Вывод",
      date: "10 Октября 20:37",
      amount: 20587,
      user: "-",
      field: "-",
      paymentSystem: "FreedomPay",
    },
  ];

  const renderTransaction = (transaction) => (
    <tr key={transaction.type + transaction.date}>
      <td className="px-6 py-[4px] whitespace-nowrap">{transaction.type}</td>
      <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-${
          transaction.amount < 0 ? "red-500" : "green-500"
        }`}
      >
        {transaction.amount} сом
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{transaction.user}</td>
      <td className="px-6 py-4 whitespace-nowrap">{transaction.field}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="flex items-center gap-x-[5px] px-2 py-1 rounded">
          <IoCalendarClearOutline />
          {transaction.paymentSystem === "Онлайн"
            ? "Онлайн"
            : transaction.paymentSystem}
        </span>
      </td>
    </tr>
  );

  return (
    <div className=" grid gap-y-[30px] rounded-[15px]">
      <div className="gap-y-[20px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[16px] w-full rounded-[15px] bg-[#fff]  p-[18px]">
        <div className="flex items-center bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px] ">
          <RxTextAlignJustify />
          <select className="outline-none flex justify-between w-full bg-[#F7F8F9]">
            <option>Все операции</option>
            <option>Бронирование</option>
            <option>Бронирование</option>
            <option>Вывод</option>
          </select>
        </div>
        <div className="flex justify-between bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px] ">
          <div
            className="flex items-center justify-between w-full"
            onClick={handleButtonClick}
          >
            <div className="flex items-center space-x-1">
              <IoCalendarClearOutline className="text-[#B8C0CC]" />
              <input
                ref={dateInputRef}
                type="date"
                onChange={(e) => setTestValue(e.target.value)}
                className="h-[50px] bg-[#F7F8F9] flex items-center rounded-[10px]"
              />
              <h4 className="text-[#B8C0CC]">
                {testValue !== null ? testValue : "Все операции"}
              </h4>
            </div>
            <IoMdArrowDropdown size={30} />
          </div>
        </div>
        <div className="bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px] ">
          <div
            className="flex items-center justify-between w-full"
            onClick={handleButtonClick2}
          >
            <div className="flex items-center space-x-1">
              <IoCalendarClearOutline className="text-[#B8C0CC]" />
              <input
                ref={dateInputRef2}
                type="date"
                onChange={(e) => setOpen(e.target.value)}
                className="h-[50px] bg-[#F7F8F9] flex items-center rounded-[10px]"
              />
              <h4 className="text-[#B8C0CC]">
                {open !== null ? open : "Все операции"}
              </h4>
            </div>
            <IoMdArrowDropdown size={30} />
          </div>
        </div>
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold h-[50px] px-[10px] rounded-[10px] inline-flex gap-x-[8px] justify-center items-center">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16634 14C11.6641 14 14.4997 11.1645 14.4997 7.66671C14.4997 4.1689 11.6641 1.33337 8.16634 1.33337C4.66854 1.33337 1.83301 4.1689 1.83301 7.66671C1.83301 11.1645 4.66854 14 8.16634 14Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.1663 14.6667L13.833 13.3334"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Поиск
        </button>
      </div>
      <div className="w-full overflow-x-auto rounded-[15px]">
        <table className="min-w-full bg-white rounded-[15px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Тип операции
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дата
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Приход
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Пользователь
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Футбольное поле
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Платеж.система
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map(renderTransaction)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceCard;
