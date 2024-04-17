import React from 'react';
import Chart from 'react-apexcharts'; 

const ChartsTypeRadialBar = () => {
  const options = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        },
        legend: {
            show: false 
          }
      }
    },
    labels: [' ']
  };

  const series = [70];

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type="radialBar" height={350} />
      </div>
    </div>
  );
};

export default ChartsTypeRadialBar;