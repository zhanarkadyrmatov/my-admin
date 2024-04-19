import React from 'react'
import Chart from 'react-apexcharts';

const ChartsTypeDonut = () => {
  const options = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    legend: {
      show: true,
      position: 'left'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 250
        },
        legend: {
          show: false
        }
      }
    }]
  };

  const series = [44, 55, 41, 17, 15];
  return (
    <Chart options={options} series={series} type="donut" width={380} />

  )
}

export default ChartsTypeDonut
