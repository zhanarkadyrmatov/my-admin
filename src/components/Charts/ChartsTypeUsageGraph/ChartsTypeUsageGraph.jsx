import React from 'react';
import Chart from 'react-apexcharts';

const ChartsTypeUsageGraph = () => {
  const options = {
    chart: {
      type: 'pie', 
      width: 500, 
      height: 400, 
    },
    labels: ['Adobe XD', 'Figma', 'Photoshop'], 
    series: [68, 90, 85], 
    colors: ['#FF6384', '#36A2EB', '#FFCE56'], 
  };

  return (
    <div className="usage-graph">
      <Chart options={options} series={options.series} type="pie" />
    </div>
  );
};

export default ChartsTypeUsageGraph;