import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineCheck } from "react-icons/md";
import Camera from "../../img/camera-plus.svg";
import { FaCheck } from "react-icons/fa6";

function Fieds1({ page, setPage }) {
  const [accordion, setAccordion] = useState(false);
  const [select, setSelect] = useState(false);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-x-[20px]">
      <div className="">
        <div className="p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
          <h4 className="text-[16px] leading-[18px] font-bold">Преимущества</h4>
        </div>
        <div className="p-[20px] bg-white rounded-b-[12px]">
          <div className="flex flex-col gap-[10px]">
            {[1, 2, 3, 4, 5].map((res, i) => {
              return (
                <div
                  className={`flex justify-start gap-[8px] ${res === 2 ? "items-start" : "items-center"
                    }`}
                >
                  <input
                    type="checkbox"
                    className="w-[24px] h-[24px] border-[1px] border-[#2222221A] rounded-[4px]"
                  />
                  <div className="flex flex-col gap-0 w-full">
                    <label className="text-[15px] leading-[17px] text-[#222222] font-normal">
                      Мяч
                    </label>
                    {res === 2 && (
                      <div className="flex flex-col gap-2 duration-300">
                        <div
                          onClick={() => setAccordion(!accordion)}
                          className="flex items-center justify-between gap-[8px] cursor-pointer "
                        >
                          <span className="text-[13px] leading-[13px] text-[#222222] font-normal opacity-70">
                            Выберите
                          </span>
                          <HiOutlineChevronDown
                            className={`duration-300 ${accordion ? "rotate-180" : "rotate-0"
                              }`}
                          />
                        </div>
                        {accordion && (
                          <div className="flex flex-col gap-[8px] duration-300">
                            {[1, 2, 3, 4, 5].map((res, i) => {
                              return (
                                <div className="flex items-center gap-[8px]">
                                  <input type="radio" />
                                  <label
                                    htmlFor=""
                                    className="text-[15px] leading-[17px] text-[#222222] font-normal"
                                  >
                                    1 кабина
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
          <h4 className="text-[16px] leading-[18px] font-bold">Информация</h4>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="p-[15px] md:p-[20px] bg-white rounded-b-[12px]">
            <div className="flex flex-col gap-[20px]">
              <div className="grid grid-cols-2  md:grid-cols-3 gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <div
                    style={{
                      backgroundImage:
                        "url(https://s3-alpha-sig.figma.com/img/696a/d53f/f12d7954e04dc1366cf76d70a5e06d46?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3O6ugDoMHiC0OYuHKIJov0Fc711R3yniaCD8HOT94sOaZPZYJhG5vkKkeJURD0b~MxoJWh7O7mqtNhhFk~qO3JPl8hGEkECLXOj4F6DIJ3~r7yg8lgVP8ikEbYXkTYUOKjEZHt-WIhhK5JzXyuOUJCx24LbfksBNX1ZGDfZqqDAod1rBgNLy2Cb75WAvJ186X2W62S~K3rAKzNqgnlHA8sYoVOq9AU704ELMpD8wi4as3L~2ErTaC-3suXfHGfjRMEWgWsoDnZ5uAyhKP-QA9poqusGT5ZemH17aMTAO8z-RX13-foFvj-hbItPrvAViIAsHhkWY9myqyKRJZkWxw__)",
                    }}
                    className="w-full h-[100px]  md:h-[130px] flex justify-center items-center rounded-[10px] bg-no-repeat bg-cover bg-center"
                  >
                    <MdOutlineCheck className="w-[32px] h-[32px] text-white" />
                  </div>
                  <p className="text-[12px] md:text-[13px] leading-[15px] text-[#222222] font-[500] text-center">
                    По умолчанию
                  </p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="w-full h-[100px]  md:h-[130px] flex justify-center items-center rounded-[10px] cursor-pointer bg-[#F0F0F0] hover:bg-[#D9D9D9] duration-300">
                    <input type="file" name="" id="" hidden />
                    <img src={Camera} alt="" />
                  </div>
                  <p className="text-[12px] md:text-[13px] leading-[15px] text-[#222222] font-[500] text-center px-1">
                    Коснитесь, чтобы загрузить обложку
                  </p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="w-full h-[100px]  md:h-[130px] flex justify-center items-center rounded-[10px] cursor-pointer bg-[#F0F0F0] hover:bg-[#D9D9D9] duration-300">
                    <input type="file" name="" id="" hidden />
                    <img src={Camera} alt="" />
                  </div>
                  <p className="text-[12px] md:text-[13px] leading-[15px] text-[#222222] font-[500] text-center px-1">
                    Коснитесь, чтобы загрузить фото карточки
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Название футбольного поля
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="Название"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Выберите тип футбольного поля
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                  {[1, 2, 3, 4].map((item) => {
                    return (
                      <div className="py-[12px] px-[14px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] justify-between">
                        <span className="text-[15px] leading-[17px] text-[#222222] font-normal ">
                          Спортивные комплексы
                        </span>
                        <input type="radio" name="radio" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Название футбольного поля
                </p>
                <div className="px-[8px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] focus-within:border-[2px] focus-within:border-[green]">
                  <input
                    className="w-full p-[8px]  outline-none  bg-transparent "
                    type="text"
                    placeholder="Название"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Добавьте типы футбольных полей
                </p>
                <div className="relative duration-300">
                  <div
                    onClick={() => setSelect(!select)}
                    className="px-[14px] py-[10px] flex items-center gap-x-[4px] bg-[#F3F3F3] rounded-[8px] w-full border-[1px] border-[#F3F3F3] cursor-pointer"
                  >
                    <p className="w-full text-[13px] leading-[15px] text-[#222222] font-normal opacity-70">
                      Добавьте типы футбольных полей
                    </p>
                    <HiOutlineChevronDown
                      className={`duration-300 w-6 h-6 ${select ? "rotate-180 " : "rotate-0"
                        } `}
                    />
                  </div>
                  {select && (
                    <div className="absolute top-[40px] right-0 w-full md:w-[50%] bg-white shadow-lg p-4 rounded-[16px]">
                      <div className="flex flex-col gap-2">
                        {[1, 2, 3, 4].map((item) => {
                          return (
                            <div
                              className={`flex items-center justify-between gap-2  py-[5px] px-[17px] rounded-[8px] ${item === 1 ? "bg-[#F3F3F3]" : ""
                                }`}
                            >
                              <span className="text-[15px] leading-[26px] text-[#222222] font-normal">
                                Мини поле
                              </span>
                              {item === 1 && <FaCheck className="w-5 h-5" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-[10px]">
                  {[1, 2, 3, 4].map((item) => {
                    return (
                      <div className="px-[10px] py-[9px] border-[1px] border-[#2222221A] rounded-[6px]">
                        <span className="text-[14px] leading-[16px] text-[#222222] font-normal">
                          Мини поле1
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[16px] text-[#222222] font-normal">
                  Цена на карточке
                </p>
                <div className="flex flex-col gap-[8px]">
                  {[1, 2, 3, 4].map((item) => {
                    return (
                      <div className="flex items-center gap-2">
                        <input type="radio" name="radio" />
                        <label
                          htmlFor=""
                          className="text-[15px] leading-[17px] text-[#222222] font-normal"
                        >
                          Дневная цена мини поля1
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
            <button className="w-full bg-[#7384E8] text-[#fff] font-[500] text-[16px] leading-[20px] p-[12px] rounded-[8px] duration-300 hover:bg-[#4d63e2]">
              Сохранить
            </button>
            <button className="w-full bg-[#FFDEDE] text-[#222222] font-[500] text-[16px] leading-[20px] p-[12px] rounded-[8px] duration-300 hover:bg-[#f4b9b9]">
              Отменить
            </button>
            <button
              onClick={() => setPage(2)}
              className="w-full bg-[#D9D9D9] text-[#222222] font-[500] text-[16px] leading-[20px] p-[12px] rounded-[8px] duration-300 hover:bg-[#8d8989]"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fieds1;
