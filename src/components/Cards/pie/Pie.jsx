import React from "react";
export default function Pie() {
  return (
    <div>
      <div className="flex items-center gap-2 my-[5px] w-[350px] h-[39px] ">
        <input
          className="min-w-[18px] min-h-[18px] cursor-pointer bg-[#ffffff] border-[2px]  border-black appearance-none rounded-lg flex justify-center items-center"
          type="checkbox"
          name="service"
          id="Страхование"
          value="Страхование"
        />
        <h4>Мяч</h4>
      </div>
    </div>
  );
}
