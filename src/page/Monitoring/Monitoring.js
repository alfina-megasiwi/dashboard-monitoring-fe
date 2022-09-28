import { React, useEffect, useState } from "react";
import DataMonitoring from "../../components/DataMonitoring/DataMonitoring";
import ErrorTable from "../../components/ErrorTable/ErrorTable";
import "./Monitoring.css";
import axios from "axios";

const Monitoring = () => {
  const [todayData, setTodayData] = useState([]);

  const fetchTodayData = async () => {
    try {
      let todaystat = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/todaystat`
      );
      setTodayData(todaystat.data)
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
      name: "Data/Time",
      value: todayData.dataRuntime,
    },
    {
      name: "Error",
      value: todayData.totalError,
    },
  ];

  return (
    <div>
      <br />
      <div className="main-text">
        <div className="title-monitoring">MONITORING</div>
        <div className="title-today">Today (H-1)</div>
        <div className="card-container">
          {processedData.map((item) => (
            <div className="card-today">
              <div className="today-title">{item.name}</div>
              <div
                className="today-value"
                style={{ color: item.name === "Error" ? "red" : "white" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <br />
        <DataMonitoring />
        <ErrorTable />
        <br />
      </div>
    </div>
  );
};

export default Monitoring;
