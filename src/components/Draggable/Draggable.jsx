import React from "react";
import s from "./draggable.module.scss";
import { GoPlus } from "react-icons/go";

export default function Draggable() {
<<<<<<<<< Temporary merge branch 1
=========


>>>>>>>>> Temporary merge branch 2
  const redireact = () => {
    window.location.href = "/calendary/book";
  };
  return (
    <div >
      <div className={'bg-[#fff] p-[30px] rounded-[10px] flex flex-col gap-2'}>
        <div className={''}>
          <div className={"flex justify-between items-center gap-1"}>
            <h4 className={'font-normal text-[40px] text-[#000] leading-normal'}>
              Calendar
            </h4>
            <select name="" id="">
              <option value="">Today</option>
>>>>>>>>> Temporary merge branch 2
              <option value="">Tomorrow</option>
              <option value="">This Week</option>
            </select>
          </div>
        </div>
        <table className={''}>
          <tr className={'border-[1px] border-[#423e3e1a]'}>
            <td>Имя</td>
            <td>День</td>
            <td>Время</td>
          </tr>
<<<<<<<<< Temporary merge branch 1

          {[1, 2, 3, 4, 5, 6, 7, 8, , 3, 45, 5, 6, 7, 8, 9, 0, 0, 9].map(
            (res, i) => (
              <tr key={i}>
                <td style={{ color: "#000" }}>John Mathew Kayne</td>
                <td>06 Dec 2020</td>
                <td>17:30 - 19:00</td>
              </tr>
            )
          )}
        </table>

        <div className={s.draggable_button}>
          <button onClick={() => redireact()}>
            <GoPlus size={20} />
            Create New
=========
          {[1, 2, 3, 4, 5, 6, 7, 8, , 3, 45, 5, 6, 7, 8, 9, 0, 0, 9].map((res, i) => (
            <tr key={i}>
              <td style={{ color: '#000' }}>John Mathew Kayne</td>
              <td>06.08.2020</td>
              <td>17:30 - 19:00</td>
            </tr>
          ))}
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