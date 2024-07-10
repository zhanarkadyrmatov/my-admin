import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

function EditFieds2() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-[20px]">
      <div
        className={
          "p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex justify-between items-center gap-[10px] "
        }
      >
        <div className="flex flex-wrap  items-center gap-[10px] w-full lg:w-auto">
          <button
            className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${
              active === 0 ? "opacity-100" : "opacity-70"
            }`}
          >
            Мини поле
          </button>
          <button
            className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${
              active === 1 ? "opacity-100" : "opacity-70"
            }`}
          >
            Стандарт
          </button>
          <button
            className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${
              active === 2 ? "opacity-100" : "opacity-70"
            }`}
          >
            Фут-Зал
          </button>
          <button
            className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${
              active === 3 ? "opacity-100" : "opacity-70"
            }`}
          >
            Описание
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <div>
          <div className="p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
            <h4 className="text-[16px] leading-[18px] font-bold">Описание</h4>
          </div>
          <div className="p-[20px] bg-white  flex flex-col gap-[20px]">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                Тип поляs
              </p>
              <div className="flex flex-wrap items-center gap-[10px]">
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <div className="px-[10px] py-[9px] border-[1px] border-[#2222221A] rounded-[6px]">
                      <span className="text-[14px] leading-[16px] text-[#222222] font-normal">
                        Крытое поле
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Дневная цена
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="Укажите цену"
                  />
                  <span className="text-[15px] leading-[17px] text-[#222222] font-normal">
                    Сом
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Ночная цена
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="Укажите цену"
                  />
                  <span className="text-[15px] leading-[17px] text-[#222222] font-normal">
                    Сом
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                Локация
              </p>
              <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                <input
                  className="w-full p-[8px]  outline-none  bg-transparent "
                  type="text"
                  placeholder="Добавить локацию"
                />
                <span className="text-[15px] leading-[17px] text-[#222222] font-normal">
                  Сом
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                Описание футбольного поля
              </p>
              <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                <textarea
                  rows={5}
                  className="w-full p-[8px]  outline-none  bg-transparent "
                  type="text"
                  placeholder="Добавить локацию"
                />
              </div>
            </div>
          </div>
          <div className="p-[20px] bg-white  border-[#2222220D] border-b-[2px]">
            <h4 className="text-[16px] leading-[18px] font-bold">Контакты</h4>
          </div>
          <div className="p-[20px] bg-white  flex flex-col gap-[20px]">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                ФИО владельца
              </p>
              <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                <input
                  className="w-full p-[8px]  outline-none  bg-transparent "
                  type="text"
                  placeholder="Укажите цену"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                ФИО администратора*
              </p>
              <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                <input
                  className="w-full p-[8px]  outline-none  bg-transparent "
                  type="text"
                  placeholder="Название"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  WhatsApp
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="+996 (000) 000 - 000"
                  />
                  <FiPlus className="w-[24px] h-[24px]" />
                </div>
                <div className="flex items-center justify-center">
                  <p className="w-min whitespace-nowrap text-[15px] leading-[17px] text-[#222222] font-normal px-[10px] py-[6.5px] border-[1px] border-[#2222221A] rounded-[8px]">
                    +996 (708) 777 - 777
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Оставить ссылку
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="+996 (000) 000 - 000"
                  />
                  <FiPlus className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Номер телефона
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="+996 (000) 000 - 000"
                  />
                  <FiPlus className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
            <h4 className="text-[16px] leading-[18px] font-bold">
              График работы
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFieds2;
