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

const Chart = ({ type }) => {
  let weekNames = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let monthNames = ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"];
  let yearNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const [WeeklyData, setWeeklyData] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState(weekNames);
  let arrdate = [];

  const fetchWeeklyData = async () => {
    try {
      if (type === "week") {
        let WeeklyData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-week-data`
        );
        setWeeklyData(WeeklyData.data);
        setDayOfTheWeek(WeeklyData.data.date);
      } else if (type == "month") {
        let WeeklyData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-month-data`
        );
        setWeeklyData(WeeklyData.data);
        setDayOfTheWeek(WeeklyData.data[0]);
      } else {
        let WeeklyData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-year-data`
        );
        setWeeklyData(WeeklyData.data);
        setDayOfTheWeek(WeeklyData.data[0]);
      }
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan dalam fetch data");
    }
  };
  useEffect(() => {
    fetchWeeklyData();
    setInterval(fetchWeeklyData, 1000 * 60 * 60)
  }, []);

  if (type === "week") {
    let indexWeekNames = 0;
    for (const element of dayOfTheWeek) {
      arrdate.push(weekNames[indexWeekNames] + ", " + element);
      indexWeekNames++;
    }
  } else if (type == "month") {
    let indexMonthNames = 0;
    for (const element of dayOfTheWeek) {
      console.log(element);
      arrdate.push(monthNames[indexMonthNames]);
      indexMonthNames++;
    }
  } else {
    let indexYearNames = 0;
    for (const element of dayOfTheWeek) {
      arrdate.push(yearNames[indexYearNames]);
      indexYearNames++;
    }
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
  let data;
  const labels = arrdate;
  if (type === "week") {
    data = {
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
  } else {
    data = {
      labels,
      datasets: [
        {
          label: "Data (Total Record)",
          data: WeeklyData[0],
          backgroundColor: "#2C9DFB",
        },
        {
          label: "Time (Second)",
          data: WeeklyData[1],
          backgroundColor: "#FFD700",
        },
        {
          label: "Error",
          data: WeeklyData[2],
          backgroundColor: "#FF0000",
        },
      ],
    };
  };

  return <Bar options={options} data={data} />;
};

export default Chart;
