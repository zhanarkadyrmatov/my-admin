import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { walletget } from "../../store/slice/wallet-slice";

const BalanceCard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.wallet);

  const [filters, setFilters] = useState({
    operationType: "all",
    dateFrom: "",
    dateTo: "",
  });

  const dateInputRef1 = useRef(null);
  const dateInputRef2 = useRef(null);

  // Выполняем запрос с фильтрами при изменении состояния
  useEffect(() => {
    dispatch(walletget(filters));
  }, [dispatch, filters]);

  // Обновление фильтров при изменении даты или типа операции
  const handleOperationTypeChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      operationType: e.target.value,
    }));
  };

  const handleDateFromChange = (e) => {
    const date = e.target.value;
    setFilters((prev) => ({
      ...prev,
      dateFrom: date,
    }));
  };

  const handleDateToChange = (e) => {
    const date = e.target.value;
    setFilters((prev) => ({
      ...prev,
      dateTo: date,
    }));
  };

  // Открытие календаря
  const handleDatePickerClick = (ref) => {
    ref.current && ref.current.showPicker();
  };

  // Форматирование даты и времени
  const formatDate = (dateStr, options) => {
    const date = new Date(dateStr);
    return date.toLocaleString("ru-RU", options);
  };

  const handleSearch = () => {
    dispatch(walletget(filters));
  };

  const renderTransaction = (transaction, index) => (
    <tr key={transaction.id || index}>
      <td className="px-6 py-[4px] whitespace-nowrap">{transaction.type}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          {formatDate(transaction.create_date, {
            day: "numeric",
            month: "long",
          })}
        </div>
        <div className="text-gray-500 text-sm">
          {formatDate(transaction.create_date, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap ${
          transaction.football_field_cost < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {transaction.football_field_cost} сом
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{transaction.created_by}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {transaction.payment_type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="flex items-center gap-x-[5px] px-2 py-1 rounded">
          <IoCalendarClearOutline />
          {transaction.payment_type}
        </span>
      </td>
    </tr>
  );

  return (
    <div className="grid gap-y-[30px] rounded-[15px]">
      <div className="gap-y-[20px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[16px] w-full rounded-[15px] bg-white p-[18px]">
        <div className="flex items-center bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px]">
          <select
            className="outline-none w-full bg-[#F7F8F9]"
            onChange={handleOperationTypeChange}
            value={filters.operationType}
          >
            <option value="all">Все операции</option>
            <option value="booking">Бронирование</option>
            <option value="withdrawal">Вывод</option>
          </select>
        </div>
        <div
          className="relative flex justify-between bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px]"
          onClick={() => handleDatePickerClick(dateInputRef1)}
        >
          <div className="flex items-center space-x-1">
            <IoCalendarClearOutline
              className={`${
                filters.dateFrom ? "text-black" : "text-[#B8C0CC]"
              }`}
            />
            <input
              ref={dateInputRef1}
              type="date"
              value={filters.dateFrom}
              onChange={handleDateFromChange}
              className="h-[50px] bg-[#F7F8F9] rounded-[10px]"
            />
            <h4
              className={`${
                filters.dateFrom ? "text-black" : "text-[#B8C0CC]"
              }`}
            >
              {filters.dateFrom || "Период с"}
            </h4>
          </div>
          <IoMdArrowDropdown
            size={30}
            className="mt-[10px]"
          />
        </div>
        <div
          className="flex justify-between bg-[#F7F8F9] rounded-[10px] w-full h-[50px] px-[10px]"
          onClick={() => handleDatePickerClick(dateInputRef2)}
        >
          <div className="flex items-center space-x-1">
            <IoCalendarClearOutline
              className={`${filters.dateTo ? "text-black" : "text-[#B8C0CC]"}`}
            />
            <input
              ref={dateInputRef2}
              type="date"
              value={filters.dateTo}
              onChange={handleDateToChange}
              className="h-[50px] bg-[#F7F8F9] rounded-[10px]"
            />
            <h4
              className={`${filters.dateTo ? "text-black" : "text-[#B8C0CC]"}`}
            >
              {filters.dateTo || "Период до"}
            </h4>
          </div>
          <IoMdArrowDropdown size={30} className="mt-[10px]"/>
        </div>
        <button
          onClick={handleSearch}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold h-[50px] px-[10px] rounded-[10px] inline-flex gap-x-[8px] justify-center items-center"
        >
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1663 14.6667L13.833 13.3334"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Загрузка...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-red-500">
                  Ошибка: {error}
                </td>
              </tr>
            ) : data?.length ? (
              data.map((transaction, index) =>
                renderTransaction(transaction, index)
              )
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Нет данных
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceCard;
