import React from "react";
import img5 from "../../img/img5.svg";
import { useSelector } from "react-redux";
export default function Schedule() {

  const { fieldsIdList, fieldsIdDetail } = useSelector((state) => state.fields);
  const aaaa = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
      <div className="">
        <div className='p-[20px] bg-white rounded-t-[12px] border-[#2222220D] border-b-[2px]'>
          <h4 className='text-[16px] leading-[18px] font-bold'>
            График работы
          </h4>
        </div>
        <div className=" bg-white rounded-b-[12px] shadow-md p-[20px]">
          <div className="flex flex-col gap-[30px]">
            {aaaa.map((item, index) => {
              const isLastItem = index !== aaaa.length - 1;
              return (
                <div className="flex items-center gap-3 last:text-[#DF2323]">
                  <div className="w-[12px] h-[12px] bg-[#222222] rounded-full flex justify-center items-start">
                    {
                      isLastItem && <div className="w-[2px] h-[50px] bg-[#222222] rounded-full" />
                    }
                  </div>
                  <p className="text-[14px] leading-[16px] text-[#222222]">
                    <span className="font-bold">Понедельник -</span> <span>07:00 - 22:00</span>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
