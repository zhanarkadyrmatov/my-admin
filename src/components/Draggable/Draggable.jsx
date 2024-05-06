import React from "react";
import s from "./draggable.module.scss";
import { GoPlus } from "react-icons/go";

export default function Draggable() {
  const redireact = () => {
    window.location.href = "/calendary/book";
  };
  return (
    <div className={s.draggable}>
      <div className={`${s.d_background} dark:bg-[#212130]   dark:text-[#fff]`}>
        <div className={s.draggable_title}>
          <div className={s.filter}>
            <h4>Calendar</h4>
            <select name="" id="">
              <option value="">Today</option>

              <option value="">Tomorrow</option>
              <option value="">This Week</option>
            </select>
          </div>
        </div>
        <table className={s.draggable_block_title}>
          <tr className={s.tableHad}>
            <td>Имя</td>
            <td>День</td>
            <td>Время</td>
          </tr>

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
          </button>
        </div>
      </div>
    </div>
  );
}
