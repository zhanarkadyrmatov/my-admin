import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import s from "./Calendary.module.scss";
import { useSelector } from "react-redux";

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
        buttonText={{
          today: "Сегодня",
        }}
        locale={"ru"}
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
