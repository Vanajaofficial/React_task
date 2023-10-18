// MainContent.js
import React from 'react';
import Cards from './Cards';
import ChartGraph from './ChartGraph';
import RoundedChart from './RoundedChart';
import Product from './Product';
import { FaHands} from 'react-icons/fa';




function MainContent() {
  return (
    <div className="main-content">
      <div className='top-header'>
        <h5> Name of the Holder <FaHands/> </h5>
        <input placeholder='Search Here' />

      </div>
      <Cards />
      <div className='chartsec'>
        <div className='graph'>
          <div className='chart-head'>
            <div>
              <h5>Overview</h5>
              <p>Monthly Earning</p>
            </div>
            <div>
              <select>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
              </select>
            </div>
          </div>
          <ChartGraph />

        </div>
        <div className='roundchart'>
        <div  className='rounded-head'>
              <h5>Customers</h5>
              <p>Cistomer to buy Poject </p>
            </div>
          <RoundedChart />
        </div>
      </div>

      <div className='product-sell'>
        <Product/>
      </div>
    </div>
  );
}

export default MainContent;
