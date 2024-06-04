import * as React from "react";
import Available from "../../components/Home/Available/Available";
import Network from "../../components/Home/Network/Network";
import Recent from "../../components/Home/Recent/Recent";
import Overflow from "../../components/Home/Overflow/Overflow";
import Static from "../../components/Home/Static/Static";
import s from "./DashboardPage.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartTypeArea from "../../components/Charts/ChartTypeArea/ChartTypeArea";
import ChartTypeBar from "../../components/Charts/ChartTypeBar/ChartTypeBar";

export default function DashboardPage() {
  return (
    <div className="mx-[20px] mt-[90px]">
      <div className={s.container}>
        <div className={s.flexGrow}>
          <div className={s.div_react}>
            <Static />
            <ChartTypeArea />
            <ChartTypeBar />
            <Overflow />
          </div>
          <div className={s.display_grid}>
            <Recent />
            <Available />
            <Network />
          </div>
        </div>
      </div>
    </div>
  );
}
