import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./LineChartExampe.css";
import * as ChartAnnotation from "chartjs-plugin-annotation";

const LineChartExample = ({ type }) => {
  const [WeeklyData, setWeeklyData] = useState([]);
  const [indicator, setIndicator] = useState("");
  const [thresholdd, setThresholdd] = useState(0);

  const weekday = [
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
    "Senin",
  ];

  const accumulation_week = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const fecthThreshold = async () => {
    try {
      let threshold = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/threshold`
      );
      setThresholdd(threshold.data);
    } catch (error) {
      console.log(error);
      alert("Terdapat kesalahan dalam fetch data threshold");
    }
  };

  const fetchData = async () => {
    try {
      if (type === "week") {
        let WeeklyData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-week-runtime`
        );
        setWeeklyData(WeeklyData.data[0]);
        setIndicator(weekday.slice(0, WeeklyData.data[0].length));
      } else if (type === "month") {
        let WeeklyData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-month-runtime`
        );
        setWeeklyData(WeeklyData.data);
        setIndicator(accumulation_week.slice(0, WeeklyData.data.length));
      } else {
        let WeeklyData = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/this-year-runtime`
        );
        setWeeklyData(WeeklyData.data);
        setIndicator(month.slice(0, WeeklyData.data.length));
      }
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan dalam fetch data");
    }
  };
  useEffect(() => {
    fetchData();
    fecthThreshold();
    setInterval(fetchData, 1000 * 60 * 60);
  }, []);

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

  const threshold = Array(indicator.length).fill(thresholdd);
  console.log(thresholdd);
  const data = {
    labels: indicator,
    datasets: [
      {
        label: "Threshold:" + " " + thresholdd,
        pointRadius: 0,
        data: threshold,
        borderColor: "rgb(255, 0, 0)",
        borderDash: [15, 10],
      },
      {
        label: "Record/Seconds",
        data: WeeklyData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#2C9DFB",
      },
    ],
  };

  return (
    <div className="lchart">
      <div className="error-container">
        <div className="error-card">
          <div className="error-card-title">Record/Seconds Chart</div>
          <div className="error-card-body">
            <Line options={options} data={data} plugins={[ChartAnnotation]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChartExample;
