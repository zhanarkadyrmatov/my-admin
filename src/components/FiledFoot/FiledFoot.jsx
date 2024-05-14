import React from "react";
export default function FiledFoot() {
  return (
    <div className="mt-[50px]">
      <div className="flex items-center w-[1178px] h-[58px] px-[30px] bg-[#acacac] border-t-0 border-l-0 border-r-0 rounded-t-2xl">
        <div className="px-[62px] w-[1178px] flex items-center justify-between">
          <h3>#</h3>
          <div className="flex items-center justify-between w-[1004px] h-[20px] py-[10px]">
            <li className="list-none text-[14px] font-normal leading-5 text-left">
              Название
            </li>
            <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
              Тип
            </li>
            <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
              Преимущества
            </li>
            <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
              Оценка
            </li>
            <li className="list-none text-[14px] font-normal leading-5 text-left text-[#1C1C1C]">
              Действие
            </li>
          </div>
        </div>
      </div>
      <div className="w-[1178px] h-[780px] px-[20px] pb-[20px] rounded-bl-lg rounded-br-lg bg-[#FFFFFF]">
        <nav className="flex items-center"></nav>
      </div>
    </div>
  );
}
