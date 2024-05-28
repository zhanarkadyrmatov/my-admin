import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

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
    <div
      style={{
        backgroundColor: "#fafafa",
        color: "#fff",
      }}
    >
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
