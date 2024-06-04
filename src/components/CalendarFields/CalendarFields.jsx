import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useSelector } from "react-redux";
import { useState } from "react";

const events = [
  { title: "Meeting", start: new Date() },
  {
    title: "Meetings",
    start: new Date("Tue Feb 13 2024 11:30:43 GMT+0600 (Киргизия)"),
  },
  {
    title: "Asan",
    start: new Date("Tue Feb 5 2024 11:30:43 GMT+0600 (Киргизия)"),
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

export default function CalendarFields() {

  const { bookings, status, error } = useSelector((state) => state.story);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (bookings) {
      setEvents(
        bookings.map((item) => {
          return {
            title: item?.organizer_name,
            start: item?.start_time,
            end: item?.end_time,
            date: item?.booking_date
          };
        })
      );
    }
  }, [bookings]);


  console.log(events, "events");

  return (
    <div
      className={
        "bg-[#fff] border-[1px] border-[#E9E9E9] p-[20px] rounded-[10px]"
      }
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        timeZone="UTC"
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "Сегодня",
          month: "Месяц",
          week: "Неделя",
          day: "День",
          allday: "весь день",
        }}
        locale={"ru"}
        weekText="нед:"
        allDayText="Весь день"
        weekNumbers={false}
        navLinks={true}
        editable={true}
        dayMaxEvents={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  console.log(eventInfo);
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
