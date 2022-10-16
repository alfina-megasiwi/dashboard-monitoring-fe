import { React, useEffect, useState } from "react";
import axios from "axios";
import DataMonitoring from "../../components/DataMonitoring/DataMonitoring";
// import ErrorTable from "../../components/ErrorTable/ErrorTable";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./Monitoring.css";
import LineChartExample from "../../components/LineChartExample/LineChartExample";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Monitoring = () => {
  const [todayData, setTodayData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("#week");
  const [startDate, setStartDate] = useState(new Date());

  let date = new Date();
  const weekday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

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

  let dateNow = date.getDate();
  let yearNow = date.getFullYear();
  let dayIndex = date.getDay();
  let monthIndex = date.getMonth();

  const fetchTodayData = async () => {
    setIsLoading(true);
    try {
      let todaystat = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/today-stat`
      );
      setTodayData(todaystat.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      alert("Terdapat kesalahan saat fetch data");
    }
  };

  useEffect(() => {
    fetchTodayData();
  }, []);

  window.onload = function () {
    document.querySelector(".week").focus();
  };

  const processedData = [
    {
      name: "Data (Total Records)",
      value: todayData.DATA,
    },
    {
      name: "Time (Second)",
      value: todayData.TIME,
    },
    {
      name: "Record/Seconds",
      value: todayData.RUNTIME,
    },
    {
      name: "Error (Records)",
      value: todayData.ERROR,
    },
    {
      name: "Succes Rate",
      value: todayData.SUCCESS_RATE + "%",
    },
  ];

  return (
    <div>
      <br />
      <div className="main-text">
        <div className="title-monitoring">MONITORING</div>
        <div className="title-today">
          {weekday[dayIndex]}, {dateNow} {month[monthIndex]} {yearNow} (H-1)
        </div>
        <div className="card-container">
          {processedData.map((item) => (
            <div className="card-today">
              <div className="today-title">{item.name}</div>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <div
                  className="today-value"
                  style={{
                    color: item.name === "Error (Records)" ? "red" : "white",
                  }}
                >
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>
        <br />
        <div className="tab">
          <button class="week button" onClick={() => setTab("#week")}>
            Week
          </button>
          <button class="month button" onClick={() => setTab("#month")}>
            Month
          </button>
          <button class="year button" onClick={() => setTab("#year")}>
            Year
          </button>
        </div>
        <br />
        {tab === "#week" && (
          <div>
            <br />
            <DataMonitoring type={"week"} />
            <LineChartExample type={"week"} />
            {/* <ErrorTable /> */}
          </div>
        )}
        {tab === "#month" && (
          <div>
            <DataMonitoring type={"month"} />
            <LineChartExample type={"month"} />
          </div>
        )}
        {tab === "#year" && (
          <div>
            <DataMonitoring type={"year"} />
            <LineChartExample type={"year"} />
          </div>
        )}
        <br />
      </div>
    </div>
  );
};

export default Monitoring;
