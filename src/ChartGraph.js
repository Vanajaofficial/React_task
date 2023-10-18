import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';

const ChartGraph = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if there's an existing chart instance and destroy it
    if (chartInstance) {
      chartInstance.destroy();
    }

    const today = new Date();
    const currentMonth = today.getMonth();

    // Data for the column chart
    const data = {
      labels: [
        'Jan', 'Feb', 'March', 'April', 'May', 'June',
        'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      datasets: [
        {
          label: 'Monthly Data',
          data: [20, 25, 35, 45, 20, 25, 30, 45, 40, 35, 40, 45], // Replace with your data
          backgroundColor: (context) => {
            const dataIndex = context.dataIndex;
            return dataIndex === currentMonth ? 'blue' : 'grey';
          },
          borderWidth: 0, // Remove the border
        },
      ],
    };

    const chartConfig = {
      type: 'bar', // Set the chart type to "bar" for a column chart
      data: data,
      options: {
        scales: {
          x: {
            display: true,
          },
          y: {
            display: false, // Remove the y-axis labels
          },
        },
      },
    };

    // Create a new chart instance and store it in the state
    const newChart = new Chart(ctx, chartConfig);
    setChartInstance(newChart);

    // Cleanup when the component unmounts
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [chartRef]);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={200}></canvas>
    </div>
  );
};

export default ChartGraph;
