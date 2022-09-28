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
  Legend,

);


function Chart() {
    const options = {
        responsive: true,
        scales: {
          y: {
            ticks: {
              color: 'white',
              beginAtZero: true,
            }
          },
          x: {
            ticks: {
              color: 'white',
              beginAtZero: true,
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#FFFFFF'
            }
          },
          title: {
            display: true,
          },

        },
      };
      
      
      const labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Data (Total Record)',
            data: [70, 10, 50, 40, 90, 60,75],
            backgroundColor: '#2C9DFB',
          },
          {
            label: 'Time (Second)',
            data: [30, 20, 70, 60, 30, 40, 60],
            backgroundColor: '#FFD700',
          },
          {
            label: 'Error',
            data: [10, 90, 20, 80, 30, 70, 40],
            backgroundColor: "#FF0000",
          },
        ],
      };
  return <Bar options={options} data={data} />;
}

export default Chart;