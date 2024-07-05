import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import s from "./Calendary.module.scss";
import { useSelector } from "react-redux";
const events = [
  { title: "Meeting", start: new Date() },
  {
    organizer_name: "Админ",
    booking_date: new Date("2024-04-04T14:29:34.915000+06:00"),
    end_time: "11:00:00",
    start_time: "09:00:00",
    day_of_week: 1,
  },
  {
    title: "Acan",
    start: new Date("Tue Feb 5 2024 12:00:43 GMT+0600 (Киргизия)"),
  },
  {
    title: "Bekmyrza",
    start: new Date("Tue Feb 9 2024 11:16:43 GMT+0600 (Киргизия)"),
    end: new Date("Tue Feb 10 2024 11:16:43 GMT+0600 (Киргизия)"),
  },
];

export default function Calendar() {
  const { bookings, status, error } = useSelector((state) => state.story);
  const newData = bookings?.map((item) => {
    return {
      title: item?.organizer_name,
      start: item?.booking_date,
    };
  });

  console.log(newData, "newData");

  return (
    <div className={`${s.calendar} dark:bg-[#212130] dark:text-[#fff]`}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        timeZone="UTC"
        initialView="dayGridMonth"
        headerToolbar={
          {
            // left: "prev,next today",
            // center: "title",
            // right: "timeGridWeek",
          }
        }
        locale={"ru"}
        // weekText="нед:"
        // allDayText="Весь день"
        weekNumbers={false}
        navLinks={true}
        editable={true}
        events={newData}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  console.log(eventInfo);
  return (
    <div>
      <div className="bg-[red] text-[#fff] p-[10px] rounded-md">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    </div>
  );
}
