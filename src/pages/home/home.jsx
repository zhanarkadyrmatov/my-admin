import React, { useState } from "react";
import s from "./page.module.scss";
import Chart from "react-apexcharts";

const Home = () => {
  const [data] = useState([
    { x: new Date().getTime(), y: 20 },
    { x: new Date().getTime() + 1000, y: 30 },
    { x: new Date().getTime() + 2000, y: 40 },
    { x: new Date().getTime() + 3000, y: 35 },
    { x: new Date().getTime() + 4000, y: 50 },
  ]);

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
              <div>суда нужно добавить</div>
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
                <span>+2.5%</span> по сравнению с прошлой неделей
              </p>
            </span>
            <Chart
              options={chartOptions}
              series={[{ data }]}
              type="line"
              height={200}
            />
          </div>
        </div>
        <div className={s.Block2_3}>3</div>
      </div>
    </div>
  );
};

export default Home;
