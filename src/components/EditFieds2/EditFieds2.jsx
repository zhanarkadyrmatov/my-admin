import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import ScheduleList from "../FroomList/ScheduleLIst/ScheduleLIst";

function EditFieds2() {
  const [selectedImages1, setSelectedImages1] = useState([]);
  const { fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields);
  const week = [
    {
      id: 1,
      title: "Понедельник",
    },
    {
      id: 2,
      title: "Вторник",
    },
    {
      id: 3,
      title: "Среда",
    },
    {
      id: 4,
      title: "Четверг",
    },
    {
      id: 5,
      title: "Пятница",
    },
    {
      id: 6,
      title: "Суббота",
    },
    {
      id: 7,
      title: "Воскресенье",
    },
  ];
  console.log(fieldsIdDetail);
  const [schedule, setSchedule] = useState();
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
      <div className="xl:grid-cols-2 mt-[10px] grid grid-cols-[1fr] gap-x-[20px] xl:px-[5px] px-[5px]">
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
          <div className="grid gap-y-[40px] rounded-[10px]">
            <div className="grid bg-white  rounded-[10px]">
              <div className="p-[20px] border-b border-gray-300">
                <h4>График работы</h4>
              </div>
              <ScheduleList setSchedule={setSchedule} />
            </div>
            <div className="bg-[#fff] rounded-[10px]">
              <div className="p-[20px] border-b border-gray-300">
                <h4>Галерея</h4>
              </div>
              <div className="p-[20px]">
                <div className="grid gap-[10px]">
                  <div className="w-full h-[140px] flex items-center justify-center bg-[#f0f0f0]">
                    <label htmlFor="upload" className="cursor-pointer">
                      <input
                        type="file"
                        id="upload"
                        multiple
                        className="hidden"
                      />
                    </label>
                  </div>
                  {selectedImages1?.length > 0 ? (
                    <div className="grid gap-[10px] grid-cols-3">
                      {selectedImages1.map((imageURL, index) => (
                        <img
                          className="w-full h-200 object-cover"
                          key={index}
                          src={imageURL}
                          alt={`Uploaded image ${index + 1}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="sm:grid-cols-[1fr_2fr] grid grid-cols-1 gap-x-[10px]">
                      <div className="w-full h-[320px] bg-[#D9D9D9]"></div>
                      <div className="grid gap-y-[10px]">
                        <div className="w-full h-[130px] bg-[#D9D9D9]"></div>
                        <div className="flex gap-x-[10px]">
                          <div className="w-full h-[180px] bg-[#D9D9D9]"></div>
                          <div className="w-full h-[180px] bg-[#D9D9D9]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="items-center gap-y-[10px] md:gap-x-[10px] grid md:grid-cols-2 grid-cols-1">
              <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
                Предыдущая
              </button>
              <button className="w-full p-[8px] rounded-[8px] bg-[#F0F0F0] text-base font-medium leading-5 text-center text-[#1c1c1c]">
                Далее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFieds2;
