import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Input from "@mui/material/Input";

export default function Time() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [hour, setHour] = useState("09:00");
  const [userInputTime, setUserInputTime] = useState("");

  const handleChange = (event) => {

    if (event.target.checked) {
      setHour("09:00");
    } else {
      if (/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(userInputTime)) {
        setHour(userInputTime);
      } else {
        console.error("Invalid time format entered!");
      }
    }
  };

  const handleUserInput = (event) => {
    setUserInputTime(event.target.value); // Update user input state
  };

  return (
    <div className="p-4 bg-gray-200 rounded-lg flex justify-between items-center">
      <h4>Понедельник</h4>
      <div className="flex items-center">
        <FormControlLabel
          label={hour}
          control={<Switch checked={isSwitchOn} onChange={handleChange} />}
        />
        {isSwitchOn ? null : ( // Conditionally render input field
          <Input
            value={userInputTime}
            onChange={handleUserInput}
            placeholder="HH:MM"
            sx={{ width: 50, marginLeft: 10 }} // Optional styling
          />
        )}
      </div>
    </div>
  );
}
