import React from "react";
import ScheduleText from "../Cards/schedule/ScheduleText";
import img5 from "../../img/img5.svg";
export default function Schedule({ title, time }) {
  return (
    <div>
      <div className="w-[390px] h-[408px] bg-[#FFFFFF] rounded-[10px]">
        <div className="w-[390px] h-[58px] p-[20px] border-b border-solid border-gray-200">
          <h4>График работы</h4>
        </div>
        <div className="w-[390px] h-[350px] shadow-md p-[20px]">
          <div className="w-[390px] h-[304px] flex gap-[12px] items-center">
            <div className="grid justify-start items-center mt-[10px]">
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
              <div className="w-[2px] h-[37px] bg-black ml-[5.305px]"></div>
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
              <div className="w-[2px] h-[37px] bg-black ml-[5.305px]"></div>
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
              <div className="w-[2px] h-[37px] bg-black ml-[5.305px]"></div>
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
              <div className="w-[2px] h-[37px] bg-black ml-[5.305px]"></div>
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
              <div className="w-[2px] h-[37px] bg-black ml-[5.305px]"></div>
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
              <div className="w-[2px] h-[37px] bg-black ml-[5.305px]"></div>
              <div className="w-[12px] h-[12px] rounded-[10px] bg-black"></div>
            </div>
            <div className="w-[357px] h-[304px] grid  grid-cols-1 gap-[25px]">
              <ScheduleText title={"Понедельник"} time={"07:00 - 22:00"} />
              <ScheduleText title={"Вторник"} time={"07:00 - 22:00"} />
              <ScheduleText title={"Среда"} time={"07:00 - 22:00"} />
              <ScheduleText title={"Четверг"} time={"07:00 - 22:00"} />
              <ScheduleText title={"Пятница"} time={"07:00 - 22:00"} />
              <ScheduleText title={"Суббота"} time={"07:00 - 22:00"} />
              <ScheduleText title={"Воскресенье"} time={"07:00 - 22:00"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
