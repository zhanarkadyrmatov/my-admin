import React, { useState } from 'react'
import Chart from 'react-apexcharts';
import './page.css'
const ChartTypeBar = () => {
    const [updateIndedx, setUpdateIndex] = useState(0)

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
    ]);
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    };
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
            setUpdateIndex(1)
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
            setUpdateIndex(2)
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
            setUpdateIndex(3)
        }
    };
    return (
        <div className='ChartTypeArea bg-white dark:bg-[#212130] text-red  rounded-2xl '>
            <div className='Nav'>
                <h2 className='text-black text-3xl  font-bold dark:text-white'>
                    Vacancy Stats
                </h2>
                <span className="bg-[#F5F5F5] p-1  dark:bg-[#17171E] ">
                    <button className={` bg-[${updateIndedx === 1 ? '#f5f5f5' : '#0000'}] text-[#333] text-sm  font-bold py-1 px-2 dark:text-white `} onClick={() => updateSeries('day')} >Day</button>
                    <button onClick={() => updateSeries('month')}>Month</button>
                    <button onClick={() => updateSeries('year')}>Year</button>
                </span>
            </div>
            <Chart
                options={options}
                series={series}
                type="bar"
                width="100%"
                height="80%"
            />
        </div>
    )
}

export default ChartTypeBar
