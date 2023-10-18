import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './App.css'; // Import the CSS file for styling

const data = {
  labels: ['Customers'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const options = {
  cutoutPercentage: 70,
};

const text = "65 % Total New customers";

const RoundedChart = () => {
  return (
    <div className="chart-container">
      <div className="chart-text-circle">
        {text}
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RoundedChart;
