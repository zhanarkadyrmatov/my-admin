import React, { useState } from 'react'
import Chart from "react-apexcharts";
import './page.css'
const ChartTypeArea = () => {
    const [options, setOptions] = useState({ dataLabels: { enabled: false }, });

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "series-1",
            data: [10, 40, 45, 20, 4, 65, 3, 91]
        },
    ]);

    const updateSeries = (e) => {
        if (e === 'day') {
            setSeries([
                {
                    name: "day-441",
                    data: [30, 45, 0, 49, 60, 70, 91]
                },
                {
                    name: "day-1",
                    data: [10, 45, 20, 4, 65, 3, 91]
                },
            ]);
        }
        else if (e === 'month') {
            setSeries([
                {
                    name: "month-441",
                    data: [30, 45, 32, 49, 60, 70, 91]
                },
                {
                    name: "month-1",
                    data: [10, 45, 20, 4, 65, 3, 91]
                },
            ]);
        }
        else if (e === 'year') {
            setSeries([
                {
                    name: "year-441",
                    data: [30, 45, 50, 49, 0, 70, 91]
                },
                {
                    name: "year-1333",
                    data: [10, 45, 20, 4, 6, 3, 91]
                },
            ]);
        }

    };

    return (
        <div className='ChartTypeArea bg-white dark:bg-[#212130] text-red  rounded-2xl '>

            <div className='Nav'>
                <h2>
                    Vacancy Stats
                </h2>
                <span>
                <button onClick={() => updateSeries('day')} >Day</button>
                <button onClick={() => updateSeries('month')}>Month</button>
                <button onClick={() => updateSeries('year')}>Year</button>
            
                </span>
                </div>
            <Chart
                options={options}
                series={series}
                type="area"
                width="100%"
                height="80%"
            />
        </div>
    )
}

export default ChartTypeArea
