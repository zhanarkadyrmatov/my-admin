import React, { useState } from 'react';
import ChartTypeArea from '../../components/Charts/ChartTypeArea/ChartTypeArea';
import './page.css';
function HomePage() {

  return (
    <div className='homePage' style={{ marginTop: '20px' }}>
      <div>
      <ChartTypeArea />
      </div>
      <div>
      </div>
    </div>
  );
}

export default HomePage;
