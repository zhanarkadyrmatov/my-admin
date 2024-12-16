import React from "react";

export default function Radio({ value, title, onchange, name, checked }) {
  return (
    <div className="bg-[#F0F0F0] py-[12px] px-[14px] rounded-[8px] flex justify-between items-center border-[2px] border-[#1C1C1C0D] cursor-pointer">
      <p className="text-base font-normal leading-6 tracking-tight text-left">
        {title}
      </p>
      <input
        onChange={(e) => onchange(value)}
        name={name}
        type="radio"
        checked={checked}
        className="w-[18px] h-[18px]"
      />
    </div>
  );
}
