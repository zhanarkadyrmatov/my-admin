import React, { useState } from "react";
import s from "./fieldsId.module.scss";
import { FaDeleteLeft, FaPlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Review from "../../../components/Review/Review";
import Gallery from "../../../components/Gallery/Gallery";
import CustomerReviews from "../../../components/CustomerReviews/CustomerReviews";
import Alert from '../../../components/AlertBook/Alert';
import Schedule from '../../../components/Schedule/Schedule';
import DraggableFields from "../../../components/DraggableFields/DraggableFields";
import CalendarFields from "../../../components/CalendarFields/CalendarFields";

export default function FieldsId() {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const [request, setRequest] = useState(0);
  const files = () => {
    window.location.href = "/calendary/fields/galerya";
  };

  const brends = () => {
    window.location.href = "/calendary/fields/usersBook";
  };
  const [alert, setAlert] = useState(false);

  return (
    <>
      <div>
        <div className={"flex flex-col gap-[20px] mt-[60px] lg:mt-[50px]"}>
          <div
            className={
              "flex flex-col lg:flex-row justify-between lg:items-center gap-3"
            }
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => setRequest(0)}
                className={`w-[50%] lg:w-[auto]  text-[16px] leading-[20px] border-[#2222221A] border-[1px] rounded-[8px] px-[16px] py-[8px]  hover:bg-[#656565] hover:text-white duration-300 ${request === 0
                  ? "bg-[#656565] text-white"
                  : "bg-[#fff] text-[#1C1C1C]"
                  } `}
              >
                Описание
              </button>
              <button
                onClick={() => setRequest(1)}
                className={`w-[50%] lg:w-[auto]  text-[16px] leading-[20px] border-[#2222221A] border-[1px] rounded-[8px] px-[16px] py-[8px]  hover:bg-[#656565] hover:text-white   duration-300 ${request === 1
                  ? "bg-[#656565] text-white"
                  : "bg-[#fff] text-[#1C1C1C]"
                  } `}
              >
                Запросы
              </button>
            </div>
            <div className={"flex flex-col lg:flex-row items-center gap-3"}>
              <button
                onClick={() => setAlert(true)}
                className="w-full lg:w-auto flex justify-center items-center gap-1 p-[8px] bg-[#7384E8] rounded-[8px] hover:bg-[#4a60e0] duration-300"
              >
                <FaPlus className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px]  fill-white" />
                <span className="font-normal text-[14px] lg:text-[12px] xl:text-[14px] leading-[20px] text-[#fff]">
                  Забронировать поле
                </span>
              </button>
              <button className="w-full lg:w-auto flex justify-center items-center gap-1 p-[8px] bg-[#E5E5E5] rounded-[8px] hover:bg-[#9d9a9a] duration-300">
                <CiEdit className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px] fill-[#1C1C1C]" />
                <span className="font-normal text-[14px] lg:text-[12px] xl:text-[14px] leading-[20px] text-[#1C1C1C]">
                  Редактировать поле
                </span>
              </button>
              <button className="w-full lg:w-auto flex justify-center items-center gap-1 p-[8px] bg-[#FFDEDE] rounded-[8px] hover:bg-[#cb8181] duration-300">
                <MdDelete className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px] fill-[#1C1C1C]" />
                <span className="font-normal text-[14px] lg:text-[12px] xl:text-[14px] leading-[20px] text-[#1C1C1C]">
                  Удалить поле
                </span>
              </button>
            </div>
          </div>
          {request === 0 ? (
            <>
              <div
                className={
                  "p-[15px] xl:p-[20px] rounded-[10px] bg-[#fff] flex justify-between items-center flex-col lg:flex-row  gap-[10px] "
                }
              >
                <div className="flex justify-center items-center gap-[20px] lg:gap-[15px] xl:gap-[20px]">
                  <button
                    onClick={() => setActive(0)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 0
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    Обзор
                  </button>
                  <button
                    onClick={() => setActive(1)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 1
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    Галерея
                  </button>
                  <button
                    onClick={() => setActive(2)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 2
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    График
                  </button>
                  <button
                    onClick={() => setActive(3)}
                    className={`font-[600] text-[14px] leading-[20px] text-[#1C1C1C]  hover:text-[red] hover:opacity-100  duration-300 pb-[2px] px-1 ${active === 3
                      ? "opacity-100 border-[#1C1C1C] border-b-[1px] "
                      : "opacity-50"
                      }`}
                  >
                    Отзывы
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full lg:w-auto">
                  <button
                    className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${active2 === 0 ? "opacity-100" : "opacity-70"
                      }`}
                  >
                    Мини поле
                  </button>
                  <button
                    className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${active2 === 1 ? "opacity-100" : "opacity-70"
                      }`}
                  >
                    Стандарт
                  </button>
                  <button
                    className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${active2 === 2 ? "opacity-100" : "opacity-70"
                      }`}
                  >
                    Фут-Зал
                  </button>
                  <button
                    className={`w-full lg:w-auto px-3 xl:px-4 py-[6px] xl:py-2 font-normal text-[12px] xl:text-[14px] leading-[20px] hover:opacity-100 duration-300 text-[#1C1C1C] #222222 border-[1px] border-[#222222] rounded-[8px] ${active2 === 3 ? "opacity-100" : "opacity-70"
                      }`}
                  >
                    Описание
                  </button>
                </div>
              </div>
              <div>
                {active === 0 && <Review />}
                {active === 1 && <Gallery />}
                {active === 2 && <Schedule />}
                {active === 3 && <CustomerReviews />}
              </div>
            </>
          ) : (
            <>
              <div className={'grid grid-cols-1 xl:grid-cols-3 gap-y-[20px] xl:gap-[20px]'}>
                <DraggableFields />
                <div className='col-span-2'>
                  <CalendarFields />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {alert && <Alert setAlert={setAlert} />}
    </>
  );
}
