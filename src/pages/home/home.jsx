import React, { useState } from "react";
import s from "./page.module.scss";
import Chart from "react-apexcharts";
import { Rating } from "@mui/material";

const Home = () => {
  const [data] = useState([
    { x: new Date().getTime(), y: 20 },
    { x: new Date().getTime() + 1000, y: 30 },
    { x: new Date().getTime() + 2000, y: 40 },
    { x: new Date().getTime() + 3000, y: 35 },
    { x: new Date().getTime() + 4000, y: 50 },
  ]);

  const [active, setActive] = useState(1);
  const chartOptions = {
    chart: {
      id: "ordersChart",
      type: "line",
      animations: {
        enabled: false,
      },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: { curve: "smooth" },
    xaxis: { type: "datetime" },
    yaxis: { max: 100 },
    legend: { show: false },
  };

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val} thousands`,
      },
    },
  };

  const series = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  return (
    <div className={s.Home}>
      <div className={s.Titel}>
        <p>Обзор</p>
        <select name="" id="">
          <option value="">За неделю</option>
          <option value="">За месяц</option>
          <option value="">За год</option>
          <option value="">За все время</option>
        </select>
      </div>
      <div className={s.Blocks1}>
        <div className={s.Block1}>
          <div className={s.Block1Text}>
            <p className={s.Block1TextP}>Количество заказов</p>
            <div>
              <h3>2.568</h3>
              <span>
                <p
                  style={{
                    color: "#4C8E4C",
                  }}
                >
                  +2.5%
                </p>
                по сравнению с прошлой неделей
              </span>
              <p>Расчёт с 1 по 6 Декабря 2024</p>
            </div>
          </div>
          <div className={s.Block1Chart}>
            <Chart
              options={chartOptions}
              series={[{ data }]}
              type="line"
              height={200}
            />
          </div>
        </div>
        <div className={s.Block1}>
          <div className={s.Block1Text}>
            <p className={s.Block1TextP}>Общая сумма дохода</p>
            <div>
              <h3>$54.2K</h3>
              <span>
                <p
                  style={{
                    color: "#4C8E4C",
                  }}
                >
                  +2.5%
                </p>
                по сравнению с прошлой неделей
              </span>
              <p>Расчёт с 1 по 6 Декабря 2024</p>
            </div>
          </div>
          <div className={s.Block1Chart}>
            <Chart
              options={chartOptions}
              series={[{ data }]}
              type="line"
              height={200}
            />
          </div>
        </div>
      </div>
      <div className={s.Blocks2}>
        <div className={s.Block2}>
          <p>Кол-во новых клиентов</p>
          <div className={s.ChartBasic}>
            <span>
              <p>18</p>
              <p>
                <span style={{ color: "#4C8E4C" }}>+2.5%</span> по сравнению с
                прошлой неделей
              </p>
            </span>
            <Chart options={options} series={series} type="bar" height={200} />{" "}
          </div>
          <span className={s.Block2_Tab}>
            <p onClick={() => setActive(1)}>
              <div
                style={{
                  backgroundColor: active === 1 ? "#5A6ACF" : "#D8D9DB",
                }}
              ></div>
              За последние 6 дней
            </p>

            <p onClick={() => setActive(2)}>
              <div
                style={{
                  backgroundColor: active === 2 ? "#5A6ACF" : "#D8D9DB",
                }}
              ></div>
              прошлую неделю
            </p>
          </span>
        </div>
        <div className={s.Block2_3}>
          <h2>Отзывы и рейтинг</h2>
          <div className={s.BLock2_3Blocks}>
            <div className={s.Block3_3Blok1}>
              <select name="" id="">
                <option value="">За неделю</option>
                <option value="">За месяц</option>
                <option value="">За год</option>
                <option value="">За все время</option>
              </select>
              <div className={s.Classico}>
                <div>
                  <h3>4.1</h3>
                  <Rating
                    name="half-rating"
                    readOnly
                    defaultValue={2.5}
                    precision={0.5}
                  />

                  <p>256 отзывов</p>
                </div>
                <ul>
                  <li>
                    5{" "}
                    <span>
                      <div></div>
                    </span>
                  </li>
                  <li>
                    4 <span></span> <div></div>
                  </li>
                  <li>
                    3{" "}
                    <span>
                      {" "}
                      <div></div>
                    </span>
                  </li>
                  <li>
                    2{" "}
                    <span>
                      {" "}
                      <div></div>
                    </span>
                  </li>
                  <li>
                    1{" "}
                    <span>
                      {" "}
                      <div></div>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <span>
                <p
                  style={{
                    color: "#4C8E4C",
                  }}
                >
                  +2.5%
                </p>
                по сравнению с прошлой неделей

                </span>
                 <p>Расчёт с 1 по 6 Декабря 2024</p>
         
              </div>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
