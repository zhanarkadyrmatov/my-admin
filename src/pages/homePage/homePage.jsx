import React, { useState } from 'react';
import ChartTypeArea from '../../components/Charts/ChartTypeArea/ChartTypeArea';
import './page.css';
import ChartTypeBar from '../../components/Charts/ChartTypeBar/ChartTypeBar';
import ChartsTypeDonut from '../../components/Charts/ChartsTypeDonut/ChartsTypeDonut';
import ChartsTypeRadialBar from '../../components/Charts/ChartsTypeRadialBar/ChartsTypeRadialBar';
import ChartsTypeUsageGraph from '../../components/Charts/ChartsTypeUsageGraph/ChartsTypeUsageGraph';
function HomePage() {

  return (
    <div className='page'>
      <div className='homePage' style={{ marginTop: '20px', }}>
        <div className='HomePageBlock'>
          <ChartTypeArea />
          <ChartTypeBar />
          <ChartsTypeRadialBar />
        </div>
        <div>
          <ChartsTypeUsageGraph />
          <ChartsTypeDonut />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
