import * as React from "react";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
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
    setUserInputTime(event.target.value);
  };

  return (
    <div className="p-[4px] bg-gray-200 rounded-lg flex justify-between items-center">
      <h4 className="text-base font-normal leading-[18.38px] text-left pl-[10px]">
        Понедельник
      </h4>
      <div className="flex items-center  ml-[30px]">
        <FormControlLabel
          className="flex flex-row-reverse justify-between items-center"
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label="09:00 - 00:00"
        />
      </div>
    </div>
  );
}
