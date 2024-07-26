import * as React from "react";
import Static from "../../components/Home/Static/Static";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartTypeArea from "../../components/Charts/ChartTypeArea/ChartTypeArea";
import ChartTypeBar from "../../components/Charts/ChartTypeBar/ChartTypeBar";

export default function Home() {
  return (
    <div className="mx-[20px] mt-[90px]">
      <div className={""}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
          <div className={"flex flex-col gap-6"}>
            <Static />
            <ChartTypeArea />
          </div>
          <div className={""}>
            <ChartTypeBar />
          </div>
        </div>
      </div>
    </div>
  );
}
