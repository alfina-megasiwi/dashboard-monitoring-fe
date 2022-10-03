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

const Chart = () => {
  const [WeeklyData, setWeeklyData] = useState([]);
  let weekNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
  let arrdata = [];
  let arrdate = [];
  let arrtime = [];
  let arrerror = [];

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

  let indexWeekNames = 0;
  for (const element of WeeklyData) {
    arrdata.push(parseInt(element.data));
    arrdate.push(weekNames[indexWeekNames] + ", " + element.date);
    arrtime.push(parseInt(element.time));
    arrerror.push(parseInt(element.error));
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
};

export default Chart;
