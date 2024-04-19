import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import s from './Calendary.module.scss'

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
    end: new Date("Tue Feb 15 2024 11:16:43 GMT+0600 (Киргизия)"),
  },
];

export default function Calendar() {
  return (
    <div className={`${s.calendar} dark:bg-[#212130] dark:text-[#8888]`}>
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
        components={{
          DateView: ({ date, events }) => (
            <div>
              <h2>{date.toLocaleDateString()}</h2>
              <ul>
                {events.map((event) => (
                  <li key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          ),
        }}
  
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
