import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Chart() {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [70, 10, 50, 40, 90, 60,75],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [30, 20, 70, 60, 30, 40, 60],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Dataset 3',
            data: [10, 90, 20, 80, 30, 70, 40],
            backgroundColor: "#F5DEB3",
          },
        ],
      };
  return <Bar options={options} data={data} />;
}

export default Chart;