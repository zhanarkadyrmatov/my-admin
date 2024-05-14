import React from "react";
import Time from "../../components/Cards/time/Time";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePlusSm } from "react-icons/hi";
export default function MiniFields() {
  return (
    <div className="xl:grid-cols-2 mt-[50px] grid grid-cols-[1fr] gap-x-[20px] xl:px-[5px] px-[5px]">
      <div className="rounded-[10px] h-min bg-[#ffffff]">
        <div className="w-full border-b border-solid border-gray-200 p-[20px]">
          <h4>Описание</h4>
        </div>
        <div className="p-[20px] grid gap-y-[20px]">
          <div className="grid gap-y-[8px] ">
            <p>Тип поля</p>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] grid gap-[10px] ">
              <button className="rounded-[4px] border border-solid border-gray-200 ">
                Крытое поле
              </button>
              <button className="rounded-[4px] border border-solid border-gray-200 ">
                Крытое поле
              </button>
              <button className="rounded-[4px] border border-solid border-gray-200 ">
                Крытое поле
              </button>
              <button className="rounded-[4px] border border-solid border-gray-200 ">
                Крытое поле
              </button>
              <button className="rounded-[4px] border border-solid border-gray-200 ">
                <p>Крытое поле</p>
              </button>
            </div>
          </div>
          <div className="lg:grid-cols-[1fr_1fr] gap-x-[10px] grid grid-cols-1">
            <div className=" w-full grid gap-y-[8px]">
              <h5>Дневная цена</h5>
              <div className="flex justify-between p-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                <input
                  className="bg-[#F0F0F0]"
                  type="text"
                  placeholder="Укажите цену"
                />
                <p className=" text-base font-normal leading-6 tracking-tight text-left">
                  Сом
                </p>
              </div>
            </div>
            <div className=" w-full grid gap-y-[8px]">
              <h5>Ночная цена</h5>
              <div className="flex justify-between px-[14px]  py-[10px] bg-[#F0F0F0] border border-customColor rounded-[10px]">
                <input
                  className="bg-[#F0F0F0]"
                  type="text"
                  placeholder="Укажите цену"
                />
                <p className=" text-base font-normal leading-6 tracking-tight text-left">
                  Сом
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-y-[8px]">
            <h5>Локация</h5>
            <div className="flex justify-between items-center px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0] border border-customColor">
              <h5 className="font-size-[14px] font-normal leading-4 text-left text-[red]">
                Добавить локацию
              </h5>
              <CiLocationOn size={20} color="red" />
            </div>
          </div>
          <div className="grid gap-y-[8px]">
            <h5>Описание футбольного поля</h5>
            <textarea
              className="rounded-[10px] p-[10px] bg-[#f0f0f0] outline-none focus:border-[2px] focus:border-green-500"
              name=""
              id=""
              rows="5"
              placeholder="Напишите сюда..."
            ></textarea>
          </div>
        </div>
        <div className="grid ">
          <div className="p-[20px] border-b border-custom-border">
            <h4 className="text-[16px] font-medium leading-5 text-left">
              Контакты
            </h4>
          </div>
          <div className="p-[20px] grid gap-y-[20px] ">
            <div className="grid gap-y-[8px] ">
              <p className="text-base font-normal leading-4 tracking-tight text-left">
                ФИО владельца
              </p>
              <input
                className="px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0]"
                type="text"
                placeholder="Укажите цену"
              />
            </div>
            <div className="grid gap-y-[8px]">
              <p className="text-base font-normal leading-4 tracking-tight text-left">
                ФИО администратора*
              </p>
              <input
                className="px-[10px] py-[14px] rounded-[10px] bg-[#f0f0f0]"
                type="text"
                placeholder="El-Clasico"
              />
            </div>
            <div className="lg:grid-cols-[1fr_1fr] gap-[10px] grid grid-cols-1">
              <div className="grid gap-y-[8px]">
                <p className="text-base font-normal leading-4 text-left">
                  WhatsApp
                </p>
                <div className="flex item-center justify-between bg-[#f0f0f0] p-[10px] rounded-[10px]">
                  <input
                    className="bg-[#f0f0f0]"
                    type="nomer"
                    placeholder="+996 (000) 000 - 000"
                  />
                  <HiOutlinePlusSm size={25} />
                </div>
              </div>
              <div className="grid gap-y-[8px]">
                <p className="text-base font-normal leading-4 text-left">
                  WhatsApp
                </p>
                <div className="flex item-center justify-between bg-[#f0f0f0] p-[10px] rounded-[10px]">
                  <input
                    className="bg-[#f0f0f0]"
                    type="nomer"
                    placeholder="+996 (000) 000 - 000"
                  />
                  <HiOutlinePlusSm size={25} />
                </div>
              </div>
              <div className="grid gap-y-[8px] ">
                <p className="text-base font-normal leading-4 text-left">
                  WhatsApp
                </p>
                <div className="flex item-center justify-between bg-[#f0f0f0] p-[10px] rounded-[10px]">
                  <input
                    className="bg-[#f0f0f0]"
                    type="nomer"
                    placeholder="+996 (000) 000 - 000"
                  />
                  <HiOutlinePlusSm size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-y-[40px]">
        <div className="grid bg-white  ">
          <div className="p-[20px] border-b border-gray-300">
            <h4>График работы</h4>
          </div>
          <div className="p-[20px] grid gap-y-[8px] ">
            <Time />
            <Time />
            <Time />
            <Time />
            <Time />
            <Time />
            <Time />
          </div>
        </div>
        <div className=" bg-[#fff]">
          <div className="p-[20px]  border-b border-gray-300">
            <h4>Галерея</h4>
          </div>
          <div className="p-[20px]">
            <div className="grid gap-[10px]">
              <div className="w-full h-[140px] bg-[#f0f0f0]"></div>
              <div className=" sm:grid-cols-[1fr_2fr] grid grid-cols-1  gap-x-[10px]">
                <div className="w-full h-[320px] bg-[#D9D9D9]"></div>
                <div className="grid gap-y-[10px]">
                  <div className="w-full h-[130px] bg-[#D9D9D9]"></div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-full h-[180px] bg-[#D9D9D9]"></div>
                    <div className="w-full h-[180px] bg-[#D9D9D9]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center gap-y-[10px] md:gap-x-[10px] grid md:grid-cols-2 grid-cols-1  ">
          <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
            Предыдущая
          </button>
          <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}
