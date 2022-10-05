import { React, useEffect, useState } from "react";
import DataMonitoring from "../../components/DataMonitoring/DataMonitoring";
import ErrorTable from "../../components/ErrorTable/ErrorTable";
import "./Monitoring.css";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const Monitoring = () => {
  const [todayData, setTodayData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("#week");

  let date = new Date();
  let currentDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const weekday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  let dayIndex = date.getDay();

  const fetchTodayData = async () => {
    setIsLoading(true);
    try {
      let todaystat = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/todaystat`
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

  const processedData = [
    {
      name: "Data (Total Records)",
      value: todayData.totalData,
    },
    {
      name: "Time (Second)",
      value: todayData.runtime,
    },
    {
      name: "Record/Seconds",
      value: todayData.dataRuntime,
    },
    {
      name: "Error (Records)",
      value: todayData.totalError,
    },
    {
      name: "Succes Rate",
      value: todayData.succesRate + "%",
    },
  ];

  return (
    <div>
      <br />
      <div className="main-text">
        <div className="title-monitoring">MONITORING</div>
        <div className="title-today">
          {weekday[dayIndex]}, {currentDate} (H-1)
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
          <button class="week button" onClick={() => setTab("#week")}>Week</button>
          <button class="month button" onClick={() => setTab("#month")}>Month</button>
          <button class="year button" onClick={() => setTab("#year")}>Year</button>
        </div>
        <br />
        {tab === "#week" && (
          <div>
            <DataMonitoring />
            <ErrorTable />
          </div>
        )}
        {tab === "#month" && (
          <div>
            <p>Month</p>
          </div>
        )}
        {tab === "#year" && (
          <div>
            <p>Year</p>
          </div>
        )}

        <br />
      </div>
    </div>
  );
};

export default Monitoring;
