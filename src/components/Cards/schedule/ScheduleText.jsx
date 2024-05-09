import React from "react";

export default function ScheduleText({ title, time }) {
  return (
    <h5 className="opacity-80 text-[#000] text-base font-medium">
      {title}
      <span className="text-[#22222] text-base font-normal">- {time}</span>
    </h5>
  );
}
