import React from 'react';
import './PlansScreen.css';

function PlansScreen() {
  return (
    <div className='plansScreen'>
      <div className='plansScreen_plan'>
        <div className='plansScreen_info'>
          <h5>Netflix Standard</h5>
          <h6>1080p</h6>
        </div>
        <button className='subscribe'>Subscribe</button>
      </div>

      <div className='plansScreen_plan'>
        <div className='plansScreen_info'>
          <h5>Netflix Basic</h5>
          <h6>480p</h6>
        </div>
        <button className='subscribe'>Subscribe</button>
      </div>

      <div className='plansScreen_plan'>
        <div className='plansScreen_info'>
          <h5>Netflix Premium</h5>
          <h6>480p</h6>
        </div>
        <button className='currentPackage'>Current Package</button>
      </div>
    </div>
  );
}

export default PlansScreen;
