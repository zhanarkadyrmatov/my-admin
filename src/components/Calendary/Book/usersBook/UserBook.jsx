import * as React from "react";
import image30 from "../../../../img/image30.svg";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import s from "./user.module.scss";

export default function UserBook() {
  return (
    <div className={s.small_calendary_all}>
      <div className={s.small_grid}>
        <div className={s.userbook_calendary_back}>
          <div className={s.input_search}>
            <h4>Добавить пользователя</h4>
            <div className={s.input}>
              <div className={s.icon_div}>
                <CiSearch className={s.icon_search} size={25} />
              </div>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className={s.arbitrator_all_back}>
          <div className={s.arbitrator_block}>
            <h4>Добавить арбитра</h4>
            <div className={s.block_arbitrator}>
              <div className={s.block_flex}>
                <img src={image30} alt="" />
                <h4>Добавить</h4>
              </div>
              <GoPlus size={40} opacity={0.5} />
            </div>
          </div>
        </div>
        <div className={s.repeat_all}>
          <div className={s.repeat_block}>
            <h4>Повторить</h4>
            <div className={s.repeat_end}>
              <h3>Каждую неделю</h3>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className={s.paylement_all}>
          <div className={s.paylement_block_group}>
            <h4>Способ оплаты</h4>
            <div className={s.paylement_grid}>
              <div className={s.payment_felx}>
                <input type="checkbox" />
                <h5>Наличными</h5>
              </div>
              <div className={s.payment_felx}>
                <input type="checkbox" />
                <h5>Онлайн</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={s.payment_btn}>
          <button>Забронировать поле</button>
        </div>
      </div>
    </div>
  );
}
