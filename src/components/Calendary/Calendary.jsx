import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useSelector } from "react-redux";

export default function Calendar() {
  const { bookings, status, error } = useSelector((state) => state.story);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (bookings) {
      setData(
        bookings.map((item) => ({
          title: item?.name,
          start: item?.start_time,
          end: item?.end_time,
        }))
      );
    }
  }, [bookings]);

  return (
    <div className={`bg-[#fff] border-[1px] border-[#E9E9E9] lg:p-[20px] p-[5px] rounded-[10px]`}>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView='timeGridWeek'
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay"
        }}
        buttonText={{
          week: "Неделя",
          day: "День",
        }}
        locale={"ru"}
        weekText="нед:"
        allDayText="Весь день"
        weekNumbers={false}
        events={data}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <div className="w-full text-[#fff] text-[8px] lg:text-[10px] p-[1px]  rounded-md">
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
