import React, { useState, useEffect } from "react";
import s from "./page.module.scss";

const DaySchedule = ({ day, dayState, setDayState }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDayState((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  return (
    <div className={s.dya}>
      <p>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
      <span>
        <div className={s.time}>
          <input
            type="time"
            name="startTime"
            value={dayState[day].startTime}
            onChange={handleChange}
          />
          <input
            type="time"
            name="endime"
            value={dayState[day].endime}
            onChange={handleChange}
          />
        </div>
        <input
          type="checkbox"
          name="checkbox"
          checked={dayState[day].checkbox}
          onChange={handleChange}
        />
      </span>
    </div>
  );
};

const ScheduleList = ({ setSchedule }) => {
  const [dayState, setDayState] = useState({
    monday: { day_of_week: 1, endime: "", startTime: "", checkbox: false },
    tuesday: { day_of_week: 2, endime: "", startTime: "", checkbox: false },
    wednesday: { day_of_week: 3, endime: "", startTime: "", checkbox: false },
    thursday: { day_of_week: 4, endime: "", startTime: "", checkbox: false },
    friday: { day_of_week: 5, endime: "", startTime: "", checkbox: false },
    saturday: { day_of_week: 6, endime: "", startTime: "", checkbox: false },
    sunday: { day_of_week: 7, endime: "", startTime: "", checkbox: false },
  });

  useEffect(() => {
    const newData = {};
    for (const day in dayState) {
      if (dayState[day].checkbox && dayState[day].endime !== "") {
        if (dayState[day].startTime !== "") {
          newData[day] = { ...dayState[day] };
          delete newData[day].checkbox;
        }
      }
    }
    const schedule = Object.values(newData)
      .map((entry) => {
        let [startHour, startMinute] = entry.startTime.split(":").map(Number);
        let [endHour, endMinute] = entry.endime.split(":").map(Number);

        if (
          startHour > endHour ||
          (startHour === endHour && startMinute > endMinute)
        ) {
          endHour += 24;
        }

        return {
          day_of_week: entry.day_of_week,
          start_time: entry.startTime,
          end_time: entry.endime,
        };
      })
      .sort((a, b) => a.day_of_week - b.day_of_week);
    console.log(schedule, "tests1");
    setSchedule(schedule);
  }, [dayState, setSchedule]);

  return (
    <div className={s.Froom}>
      {Object.keys(dayState).map((day) => (
        <DaySchedule
          key={day}
          day={day}
          dayState={dayState}
          setDayState={setDayState}
        />
      ))}
    </div>
  );
};

export default ScheduleList;
