import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const [WeeklyData, setWeeklyData] = useState([]);

  const fetchWeeklyData = async () => {
    try {
      let WeeklyData = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/weeklydata`
      );
      setWeeklyData(WeeklyData.data);
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan dalam fetch data");
    }
  };
  useEffect(() => {
    fetchWeeklyData();
  }, []);
  console.log(WeeklyData);

  let arrdata = [];
  for (let index = 0; index < WeeklyData.length; index++) {
    arrdata.push(parseInt(WeeklyData[index].data))
  } 
  console.log(arrdata);
  
  let arrdate = [];
  for (let index = 0; index < WeeklyData.length; index++) {
    arrdate.push(WeeklyData[index].date)
  } 
  console.log(arrdate);

  let arrtime = [];
  for (let index = 0; index < WeeklyData.length; index++) {
    arrtime.push(parseInt(WeeklyData[index].time))
  } 
  console.log(arrtime);

  let arrerror = [];
  for (let index = 0; index < WeeklyData.length; index++) {
  arrerror.push(parseInt(WeeklyData[index].error))
  } 
  console.log(arrerror);

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: "white",
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: "white",
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#FFFFFF",
        },
      },
      title: {
        display: true,
      },
    },
  };


  const labels = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Data (Total Record)",
        data: arrdata,
        backgroundColor: "#2C9DFB",
      },
      {
        label: "Time (Second)",
        data: arrtime,
        backgroundColor: "#FFD700",
      },
      {
        label: "Error",
        data: arrerror,
        backgroundColor: "#FF0000",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default Chart;
