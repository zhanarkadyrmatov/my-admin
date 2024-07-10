import React from "react";
import img5 from "../../img/img5.svg";
import { useSelector } from "react-redux";
export default function Schedule() {
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
      <div className="">
        <div className="p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]">
          <h4 className="text-[16px] leading-[18px] font-bold">
            График работы
          </h4>
        </div>
        <div className=" bg-white rounded-b-[12px] shadow-md p-[20px]">
          <div className="flex flex-col gap-[30px]">
            {fieldsIdDetail?.schedule?.map((item, index) => {
              const isLastItem = index !== fieldsIdDetail?.schedule?.length - 1;
              const weekDay = week?.find((el) => el.id === item?.day_of_week);
              console.log(weekDay);
              return (
                <div className="flex items-center gap-3 last:text-[#DF2323]">
                  <div className="w-[12px] h-[12px] bg-[#222222] rounded-full flex justify-center items-start">
                    {isLastItem && (
                      <div className="w-[2px] h-[50px] bg-[#222222] rounded-full" />
                    )}
                  </div>
                  <p className="text-[14px] leading-[16px] text-[#222222]">
                    <span className="font-bold">{weekDay?.title} -</span>{" "}
                    <span>
                      {item?.start_time} - {item?.end_time}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
