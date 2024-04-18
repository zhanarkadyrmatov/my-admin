import React from "react";
import s from "./draggable.module.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Input } from "@mui/material";
import { GoPlus } from "react-icons/go";

export default function Draggable() {
  return (
    <div className={s.draggable}>
      <div className={`${s.d_background} dark:bg-[#212130]  dark:text-[#fff]`}>
        <div className={s.draggable_title}>
          <h4>Calendar</h4>
          <p>Drag and drop your event or click in the calendar</p>
        </div>
        <div className={s.draggable_block_title}>
          <div className={s.primary_block_1}>
            <div className={s.primary_btn}>
            </div>
            <li>New Theme Release</li>
          </div>
          <div className={s.primary_block_1}>
            <div className={s.primary_btn}>
            </div>
            <li>My Event</li>
          </div>
          <div className={s.primary_block_1}>
            <div className={s.primary_btn}>
            </div>
            <li>Meet manager</li>
          </div>
          <div className={s.primary_block_1}>
            <div className={s.primary_btn}>
            </div>
            <li>Create New theme</li>
          </div>
          <div className={s.primary_block_1}>
            <div className={s.primary_btn}>
            </div>
            <li>Project Launch</li>
          </div>
          <div className={s.primary_block_1}>
            <div className={s.primary_btn}>
            </div>
            <li>Meeting</li>
          </div>
        </div>
        <div className={s.draggable_checkbox}>
          <input type="checkbox" />
          <p>Remove After Drop</p>
        </div>
        <div className={s.draggable_button}>
          <button><GoPlus size={20} />Create New</button>
        </div>
      </div>
    </div>
  );
}
