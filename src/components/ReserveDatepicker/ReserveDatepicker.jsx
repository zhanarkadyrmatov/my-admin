import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import './ReserveDatepicker.css';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';


export default function ReserveDatepicker({ setStartDate, startDate }) {
  return (
    <div>
      <DatePicker className=''
        selected={startDate}
        locale={ru}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  )
}
