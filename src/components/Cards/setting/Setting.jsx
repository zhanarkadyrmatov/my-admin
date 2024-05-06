import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import s from "./Setting.module.scss";
function valuetext(value) {
  return `${value}°C`;
}
export default function Setting() {
  return (
    <div>
      <div>
        <div className="fixed top-[85px] right-[100px]  h-[440px] w-[290px]  bg-[#ffff] p-2 rounded-lg z-50">
          <div className={s.flex_setting}>
            <div className="h-[400px]">
              <Slider
                getAriaLabel={() => "Temperature"}
                orientation="vertical"
                getAriaValueText={valuetext}
                defaultValue={[10, 27]}
                valueLabelDisplay="auto"
              />
            </div>
            <div className={s.grid_row}>
              <div className={s.heitgt_red}></div>
              <div className={s.heitgt_agua}></div>
              <div className={s.heitgt_red}></div>
            </div>
            <div className={s.grid_row}>
              <div className={s.flex_title}>
                <small>10 minutes ago</small>
                <h5>
                  Youtube, a video-sharing <br /> website, goes live $500.
                </h5>
              </div>
              <div className={s.flex_titles}>
                <small>10 minutes ago</small>
                <h5>
                  Youtube, a video-sharing <br /> website, goes live $500.
                </h5>
                <small>
                  Lorem ipsum dolor sit amet consectetur, adipisicing .
                </small>
              </div>
              <div className={s.flex_title}>
                <small>10 minutes ago</small>
                <h5>
                  Youtube, a video-sharing <br /> website, goes live $500.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
