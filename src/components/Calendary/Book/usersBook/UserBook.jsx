import * as React from "react";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { CiSearch } from "react-icons/ci";
import s from "./user.module.scss";

export default function UserBook() {
  return (
    <div className={s.small_calendary_all}>
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
    </div>
  );
}
