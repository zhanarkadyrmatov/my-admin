import React from "react";
import { GoPlus } from "react-icons/go";

export default function DraggableFields() {

  const redireact = () => {
    window.location.href = "/calendary/book";
  };
  return (
    <div >
      <div className={'bg-[#fff] h-[82vh] p-[30px] rounded-[10px] flex flex-col gap-[20px] border-[1px] border-[#E9E9E9]'}>
        <div className={''}>
          <div className={"flex justify-between items-center gap-1"}>
            <h4 className={'font-normal text-[24px] text-[#000] leading-normal'}>
              Calendar
            </h4>
            <select name="" id="">
              <option value="">Today</option>
              <option value="">Tomorrow</option>
              <option value="">This Week</option>
            </select>
          </div>
        </div>
        <table className={'flex flex-col gap-2 overflow-y-auto webkit-scrollbar webkit-scrollbar-track:[#423e3e1a] webkit-scrollbar-thumb'}>
          <tr className={'grid grid-cols-4 gap-1'}>
            <td className={'col-span-2 text-[#AEAEAE] text-[16px] leading-[19px] font-normal'}>Имя</td>
            <td className="text-[#AEAEAE] text-[16px] leading-[19px] font-normal">День</td>
            <td className="text-[#AEAEAE] text-[16px] leading-[19px] font-normal">Время</td>
          </tr>
          {[1, 2, 3, 4, 5, 6, 7, 8, , 3, 45, 5, 6, 7, 8, 9, 0, 0, 9].map(
            (res, i) => (
              <tr key={i} className={'border-b-[1px] border-[#423e3e1a] py-[13px] grid grid-cols-4 '}>
                <td className={'text-[#404040] text-[14px] leading-[19px] font-normal col-span-2'}>John Mathew Kayne</td>
                <td className={'text-[#AEAEAE] text-[14px] leading-[19px] font-normal'}>06.08.2020</td>
                <td className={'text-[#AEAEAE] text-[14px] leading-[19px] font-normal'}>17:30-19:00</td>
              </tr>
            )
          )}
        </table>
        <div className={''}>
          <button className="flex justify-center items-center gap-2 w-full py-[10px] px-4 rounded-xl  border bg-[#f93a0b] hover:bg-[#a43418] duration-300" onClick={() => redireact()} >
            <GoPlus className="w-[24px] h-[24px] fill-white" />
            <span className="font-medium border-[#f93a0b] text-base  text-white">Create New</span>
          </button>
        </div>
      </div>
    </div >
  );
}