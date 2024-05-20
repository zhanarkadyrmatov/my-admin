import React from "react";
import arbitr from "../../../img/arbitr.svg";

export default function Acards() {
  return (
    <>
      <div className="sm:flex items-center justify-between w-full h-[70px] grid">
        <div className="flex justify-between w-[275px]">
          <img src={arbitr} alt="" />
          <div className="grid items-center h-[2px] py-[7px]">
            <h5 className="text-[15px] font-medium leading-tight text-left">
              ataialanov
            </h5>
            <li className="flex gap-x-[2px] items-center list-none text-xs font-medium leading-tight text-left">
              El Clasico
              <span className="w-[3px] h-[3px] bg-[#222222] opacity-70 rounded-full"></span>
              <span className="text-xs font-medium leading-tight text-left opacity-70">
                Спортивный комплекс
              </span>
              <span className="w-[3px] h-[3px] bg-[#222222] opacity-70 rounded-full"></span>
              <span className="text-xs font-medium leading-tight text-left opacity-70">
                21:00
              </span>
            </li>
          </div>
        </div>
        <h4 className="text-[16px] font-[400] leading-[18px] text-left opacity-90 text-[#DF2323]">
          -2587 сом
        </h4>
      </div>
    </>
  );
}
