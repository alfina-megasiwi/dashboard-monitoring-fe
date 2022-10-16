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
  Legend,
  Title,
  Tooltip,
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

const Chart = ({type}) => {
  let weekNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
  const [WeeklyData, setWeeklyData] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState(weekNames);
  let arrdate = [];

  const fetchWeeklyData = async () => {
    try {
      let WeeklyData = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/this-week-data`
      );
      setWeeklyData(WeeklyData.data);
      setDayOfTheWeek(WeeklyData.data.date)
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan dalam fetch data");
    }
  };
  useEffect(() => {
    fetchWeeklyData();
  }, []);

  let indexWeekNames = 0;
  for (const element of dayOfTheWeek) {
    arrdate.push(weekNames[indexWeekNames] + ", " + element);
    indexWeekNames++;
  }

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

  const labels = arrdate;
  const data = {
    labels,
    datasets: [
      {
        label: "Data (Total Record)",
        data: WeeklyData.data,
        backgroundColor: "#2C9DFB",
      },
      {
        label: "Time (Second)",
        data: WeeklyData.time,
        backgroundColor: "#FFD700",
      },
      {
        label: "Error",
        data: WeeklyData.error,
        backgroundColor: "#FF0000",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default Chart;
