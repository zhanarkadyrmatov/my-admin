import React, { useRef } from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RxTextAlignJustify } from "react-icons/rx";
const BalanceCard = () => {
  const [inputVALUE, setInputVALUE] = useState("");

  const dateInputRef = useRef(null);

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
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
          <IoCalendarClearOutline />{" "}
          {transaction.paymentSystem === "Онлайн"
            ? "Онлайн"
            : transaction.paymentSystem}
        </span>
      </td>
    </tr>
  );

  return (
    <div className=" grid gap-y-[30px] ">
      <div className="gap-y-[20px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[16px] w-full bg-[#fff] rounded-[15px] p-[18px]">
        <div className="flex items-center bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px] ">
          <RxTextAlignJustify />
          <select className="outline-none felx justify-between w-full bg-[#F7F8F9]">
            <option>Все операции</option>
            <option value="">Бронирование</option>
            <option value="">Бронирование</option>
            <option value="">Вывод</option>
          </select>
        </div>
        <div className="flex justify-between bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px] ">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-1">
              <IoCalendarClearOutline />
              <input
                ref={dateInputRef}
                type="date"
                className="h-[50px] bg-[#F7F8F9] flex items-center rounded-[10px]"
              />
              <h4>Все операции</h4>
            </div>
            <IoMdArrowDropdown onClick={handleButtonClick} size={30} />
          </div>
        </div>
        <div className="bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px] ">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-1">
              <IoCalendarClearOutline />
              <input
                ref={dateInputRef}
                type="date"
                className="h-[50px] bg-[#F7F8F9] flex items-center rounded-[10px]"
              />
              <h4>Все операции</h4>
            </div>
            <IoMdArrowDropdown onClick={handleButtonClick} size={30} />
          </div>
        </div>
        <button className="bg-[#7384E8]  w-full h-[50px] text-white rounded-md ">
          Поиск
        </button>
      </div>
      <div className="w-full overflow-x-auto">
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
